import dotenv from 'dotenv'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { schedule } from 'node-cron'
import { ERC20Abi, lrtDepositPoolAbi, delegatorAbi, lrtWithdrawalManagerAbi, unstakingVaultAbi, delegationManagerAbi, eigenStrategyAbi, lrtOracleAbi } from './abis.js'
import { contracts, LSTs, EIGEN_STRATEGIES } from './constants.js'
import { graphqlClient } from './util.js'

dotenv.config()
const { HOLESKY_RPC_URL, DEPOSIT_LIMIT, LRT_MANAGER_KEY, WITHDRAW_LIMIT, UNLOCK_LIMIT } = process.env
const web3 = new Web3(HOLESKY_RPC_URL)
const lrtManager = web3.eth.accounts.privateKeyToAccount(LRT_MANAGER_KEY)
web3.eth.accounts.wallet.add(lrtManager)
web3.eth.defaultAccount = lrtManager.address
const lrtDepositPoolInstance = new web3.eth.Contract(lrtDepositPoolAbi, contracts.lrtDepositPool)
const nodeDelegatorInstance = new web3.eth.Contract(delegatorAbi, contracts.nodeDelegator)
const lrtWManagerInstance = new web3.eth.Contract(lrtWithdrawalManagerAbi, contracts.lrtWithdrawalManger)
const unstakingVaultInstance = new web3.eth.Contract(unstakingVaultAbi, contracts.lrtUnstakingVault)
const eigenDMangerInstance = new web3.eth.Contract(delegationManagerAbi, contracts.eigenDelegationManager)
const eigenStrategyInstance = new web3.eth.Contract(eigenStrategyAbi, EIGEN_STRATEGIES[0])
const lrtOracleInstance = new web3.eth.Contract(lrtOracleAbi, contracts.lrtOracle)

console.log('LRTManager address:', lrtManager.address)

// schedule('* * * * *', async () => {
// Schedule a task to run every 3 mins
schedule('*/5 * * * *', async () => {
// Schedule a task to run every hour
// schedule('0 * * * *', async () => {
  console.log('Task is running every hour')
  LSTs.forEach(async (lst, index) => {
    try {
        const tokenInstance = new web3.eth.Contract(ERC20Abi, lst)
        const depositPoolbalBigNum = await tokenInstance.methods.balanceOf(contracts.lrtDepositPool).call()
        const poolBal = new BigNumber(depositPoolbalBigNum).dividedBy(new BigNumber(10).pow(18)).toString()
        console.log('poolBalance:', poolBal)
        
        /* Deposit */

        //Transfer asset to Node Delegator
        if(Number(poolBal) > DEPOSIT_LIMIT) {
            console.log('deposit pool big!')
            const poolData = lrtDepositPoolInstance.methods.transferAssetToNodeDelegator(0, lst, depositPoolbalBigNum).encodeABI()
            await sendTransaction(lrtDepositPoolInstance, poolData)
        }
        
        const delegatorBalBigNum = await tokenInstance.methods.balanceOf(contracts.nodeDelegator).call()
        const delegatorBal = new BigNumber(delegatorBalBigNum).dividedBy(new BigNumber(10).pow(18)).toString()
        console.log('delegatorBalance:', delegatorBal)
    
        //Transfer asset to EL Strategy
        if(Number(delegatorBal) > DEPOSIT_LIMIT) {
            console.log('delegator big!')
            const delegatorData = nodeDelegatorInstance.methods.depositAssetIntoStrategy(lst).encodeABI()
            await sendTransaction(nodeDelegatorInstance, delegatorData)
        }

        /* Withdraw */

        const requestedAmount = await lrtWManagerInstance.methods.assetsCommitted(lst).call()
        const requestedAmountBal = new BigNumber(requestedAmount).dividedBy(new BigNumber(10).pow(18)).toString()
        console.log('Request Withdrawal Amount:', requestedAmountBal)
        
        const shares = await eigenStrategyInstance.methods.shares(contracts.nodeDelegator).call()
        const sharesBal = new BigNumber(shares).dividedBy(new BigNumber(10).pow(18)).toString()
        console.log('sharesBal: ', sharesBal)
        //initiate from strategy
        // if(Number(requestedAmountBal) > WITHDRAW_LIMIT && sharesBal >= requestedAmountBal) {
        if(Number(requestedAmountBal) > WITHDRAW_LIMIT && sharesBal > 0) {
          let initiateData
          if (sharesBal >= requestedAmountBal) {
            console.log('[EIGEN_STRATEGIES[index]],[requestedAmount],contracts.nodeDelegator, shares: ', [EIGEN_STRATEGIES[index]],[new BigNumber(requestedAmount)],contracts.nodeDelegator)
            initiateData = nodeDelegatorInstance.methods.initiateUnstaking([[EIGEN_STRATEGIES[index]],[new BigNumber(requestedAmount).toString()],contracts.nodeDelegator]).encodeABI()
          } else {
            initiateData = nodeDelegatorInstance.methods.initiateUnstaking([[EIGEN_STRATEGIES[index]],[new BigNumber(shares).toString()],contracts.nodeDelegator]).encodeABI()
          }
          await sendTransaction(nodeDelegatorInstance, initiateData)
          // const requestedAmount = await lrtWManagerInstance.methods.assetsCommitted(lst).call()
        }
          
        //complete unstaking
        const operator = await eigenDMangerInstance.methods.delegatedTo(contracts.nodeDelegator).call()
        console.log('operator:', operator)
        // const nonce = await eigenDMangerInstance.methods.stakerNonce(contracts.nodeDelegator).call()
        // console.log('nonce:', nonce)
        const minWithdrawalDelayBlocks = await eigenDMangerInstance.methods.minWithdrawalDelayBlocks().call()
        console.log('minWithdrawalDelayBlocks:', minWithdrawalDelayBlocks)
        const curBlockNum = await web3.eth.getBlockNumber()
        console.log('curBlockNum:', curBlockNum)
        const maxStartBlock = Number(curBlockNum) - Number(minWithdrawalDelayBlocks)
        console.log('maxStartBlock:', maxStartBlock)

        const withdrawalQuery = `
          query Withdrawals($staker: String!, $maxStartBlock: Int!, $completed: Boolean!) {
              withdrawals(where: {staker: $staker,startBlock_lt: $maxStartBlock, completed: $completed}) {
                  id
                  staker
                  nonce
                  startBlock
                  shares
              }
          }`
        
        const staker = contracts.nodeDelegator
        const variables = { staker, maxStartBlock, completed: false }

        let withdrawalList = []
        try {
          const withdrawalData = await graphqlClient(withdrawalQuery, variables)
          withdrawalList = withdrawalData?.withdrawals
          console.log('withdrawalList:', withdrawalList);
        } catch (error) {
            console.error('Error fetching withdrawals:', error);
        }
        if(withdrawalList?.length > 0) {
          withdrawalList.forEach(async withdrawal => {
            const pending = await eigenDMangerInstance.methods.pendingWithdrawals(withdrawal.id).call()
            if(pending) {
              const delegatorData = nodeDelegatorInstance.methods.completeUnstaking(
                [
                  staker,
                  operator,
                  staker,
                  withdrawal.nonce,
                  withdrawal.startBlock,
                  [EIGEN_STRATEGIES[index]],
                  withdrawal.shares
                ],
                [lst],
                0
            ).encodeABI()
            console.log('Complete unstaking!')

            await sendTransaction(nodeDelegatorInstance, delegatorData)
            }
          })
        }

        const withdrawableBigNum = await unstakingVaultInstance.methods.balanceOf(lst).call()
        const withdrawableBal = new BigNumber(withdrawableBigNum).dividedBy(new BigNumber(10).pow(18)).toString()
        console.log('withdrawableBal in unstaking vault:', withdrawableBal)
        
        if(Number(withdrawableBal) > UNLOCK_LIMIT) {
          console.log('~~unlock from unstaking vault~~')

          const firstExcludedIndex = await lrtWManagerInstance.methods.nextUnusedNonce(lst).call()
          const assetPrice = await lrtOracleInstance.methods.getAssetPrice(lst).call()
          const novETHPrice = await lrtOracleInstance.methods.novETHPrice().call()
          console.log('unlock: ',lst, firstExcludedIndex, assetPrice, novETHPrice)
          const unlockData = lrtWManagerInstance.methods.unlockQueue(lst,firstExcludedIndex,assetPrice,novETHPrice).encodeABI()
          
          await sendTransaction(lrtWManagerInstance, unlockData)
        }

    
      } catch (e) {
        console.error('Error fetching transfers:', e)
      }
  })
});

const sendTransaction = async (instance, data) => {
    const tx = {
        from: web3.eth.defaultAccount,
        to: instance.options.address,
        data,
    }

    const estimateGas = await web3.eth.estimateGas(tx)
    tx.gas = estimateGas // Set the gas limit
    tx.gasPrice = web3.utils.toWei('20', 'gwei')

    try {
        const signedTx = await web3.eth.accounts.signTransaction(tx, LRT_MANAGER_KEY);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction succeed:', receipt.transactionHash);
    } catch (error) {
        console.error('Error sending token transaction:', error);
    }
}

// Keep the Node.js process alive
console.log('Scheduler is set up and running...')