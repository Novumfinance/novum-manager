export const ERC20Abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isMinter",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const delegatorAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "expectedDepositRoot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "actualDepositRoot",
        "type": "bytes32"
      }
    ],
    "name": "InvalidDepositRoot",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidETHSender",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StrategyIsNotSetForAsset",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StrategyMustNotBeBeaconChain",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "strategy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      }
    ],
    "name": "AssetDepositIntoStrategy",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      }
    ],
    "name": "ETHDepositFromDepositPool",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "valPubKey",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ETHStaked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      }
    ],
    "name": "EigenLayerWithdrawalCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "eigenPod",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "podOwner",
        "type": "address"
      }
    ],
    "name": "EigenPodCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "elOperator",
        "type": "address"
      }
    ],
    "name": "ElSharesDelegated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EthTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "withdrawer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "withdrawalRoot",
        "type": "bytes32"
      }
    ],
    "name": "WithdrawalQueued",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "approveSSV",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegatedTo",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startBlock",
            "type": "uint32"
          },
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          }
        ],
        "internalType": "struct IEigenDelegationManager.Withdrawal",
        "name": "withdrawal",
        "type": "tuple"
      },
      {
        "internalType": "contract IERC20[]",
        "name": "assets",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "middlewareTimesIndex",
        "type": "uint256"
      }
    ],
    "name": "completeUnstaking",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createEigenPod",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "depositAssetIntoStrategy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64[]",
        "name": "operatorIds",
        "type": "uint64[]"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "validatorCount",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "networkFeeIndex",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "index",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cluster",
        "name": "cluster",
        "type": "tuple"
      }
    ],
    "name": "depositSSV",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eigenPod",
    "outputs": [
      {
        "internalType": "contract IEigenPod",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAssetBalances",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "assets",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "assetBalances",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getETHEigenPodBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ethStaked",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          }
        ],
        "internalType": "struct IEigenDelegationManager.QueuedWithdrawalParams",
        "name": "queuedWithdrawalParam",
        "type": "tuple"
      }
    ],
    "name": "initiateUnstaking",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "withdrawalRoot",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "maxApproveToEigenStrategyManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "publicKey",
        "type": "bytes"
      },
      {
        "internalType": "uint64[]",
        "name": "operatorIds",
        "type": "uint64[]"
      },
      {
        "internalType": "bytes",
        "name": "sharesData",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "validatorCount",
            "type": "uint32"
          },
          {
            "internalType": "uint64",
            "name": "networkFeeIndex",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "index",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cluster",
        "name": "cluster",
        "type": "tuple"
      }
    ],
    "name": "registerSsvValidator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sendETHFromDepositPoolToNDC",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "pubkey",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      },
      {
        "internalType": "bytes32",
        "name": "depositDataRoot",
        "type": "bytes32"
      }
    ],
    "name": "stake32Eth",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "pubkey",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      },
      {
        "internalType": "bytes32",
        "name": "depositDataRoot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "expectedDepositRoot",
        "type": "bytes32"
      }
    ],
    "name": "stake32EthValidated",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakedButUnverifiedNativeETH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferBackToLRTDepositPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const lrtWithdrawalManagerAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AmountMustBeGreaterThanZero",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assetPrice",
        "type": "uint256"
      }
    ],
    "name": "AssetPriceMustBeGreaterMinimum",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      }
    ],
    "name": "CallerNotLRTConfigAllowedRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigOperator",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EthTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExceedAmountToWithdraw",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidAmountToWithdraw",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoPendingWithdrawals",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "novEthPrice",
        "type": "uint256"
      }
    ],
    "name": "NovETHPriceMustBeGreaterMinimum",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueEmpty",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueFull",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueOutOfBounds",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StrategyNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalDelayNotPassed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalDelayTooSmall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalLocked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novEthAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novEThPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetPrice",
        "type": "uint256"
      }
    ],
    "name": "AssetUnlocked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountBurned",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountReceived",
        "type": "uint256"
      }
    ],
    "name": "AssetWithdrawalFinalized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      }
    ],
    "name": "AssetWithdrawalQueued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sharesAmount",
        "type": "uint256"
      }
    ],
    "name": "EtherReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minAmountToWithdraw",
        "type": "uint256"
      }
    ],
    "name": "MinAmountToWithdrawUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawalDelayBlocks",
        "type": "uint256"
      }
    ],
    "name": "WithdrawalDelayBlocksUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "assetsCommitted",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "completeWithdrawal",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAvailableAssetAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "availableAssetAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getExpectedAssetAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "underlyingToReceive",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "requestIndex",
        "type": "uint256"
      }
    ],
    "name": "getRequestId",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "userIndex",
        "type": "uint256"
      }
    ],
    "name": "getUserWithdrawalRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expectedAssetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawalStartBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userNonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      }
    ],
    "name": "initiateWithdrawal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "minAmountToWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "nextLockedNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "requestNonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "nextUnusedNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minAmountToWithdraw_",
        "type": "uint256"
      }
    ],
    "name": "setMinAmountToWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "withdrawalDelayBlocks_",
        "type": "uint256"
      }
    ],
    "name": "setWithdrawalDelayBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "firstExcludedIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAssetPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumNovEthPrice",
        "type": "uint256"
      }
    ],
    "name": "unlockQueue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHBurned",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetAmountUnlocked",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "userAssociatedNonces",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "_begin",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_end",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawalDelayBlocks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "requestId",
        "type": "bytes32"
      }
    ],
    "name": "withdrawalRequests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expectedAssetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawalStartBlock",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const lrtConfigAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetAlreadySupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      }
    ],
    "name": "CallerNotLRTConfigAllowedRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "ndc",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "CannotUpdateStrategyAsItHasFundsNDCFunds",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidMaxRewardAmount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositLimit",
        "type": "uint256"
      }
    ],
    "name": "AddedNewSupportedAsset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositLimit",
        "type": "uint256"
      }
    ],
    "name": "AssetDepositLimitUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "strategy",
        "type": "address"
      }
    ],
    "name": "AssetStrategyUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "RemovedSupportedAsset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "key",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "contractAddr",
        "type": "address"
      }
    ],
    "name": "SetContract",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "novETH",
        "type": "address"
      }
    ],
    "name": "SetNovETH",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "key",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "tokenAddr",
        "type": "address"
      }
    ],
    "name": "SetToken",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxRewardAmount",
        "type": "uint256"
      }
    ],
    "name": "UpdateMaxRewardAmount",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "depositLimit",
        "type": "uint256"
      }
    ],
    "name": "addNewSupportedAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "assetStrategy",
    "outputs": [
      {
        "internalType": "address",
        "name": "strategy",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "contractKey",
        "type": "bytes32"
      }
    ],
    "name": "contractMap",
    "outputs": [
      {
        "internalType": "address",
        "name": "contractAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "depositLimitByAsset",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "contractKey",
        "type": "bytes32"
      }
    ],
    "name": "getContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "tokenKey",
        "type": "bytes32"
      }
    ],
    "name": "getLSTToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSupportedAssetList",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "stETH",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "ethX",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "novETH_",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "isSupportedAsset",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isSupported",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "novETH",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "contractKey",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "contractAddress",
        "type": "address"
      }
    ],
    "name": "setContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "novETH_",
        "type": "address"
      }
    ],
    "name": "setNovETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "tokenKey",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      }
    ],
    "name": "setToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "supportedAssetList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "tokenKey",
        "type": "bytes32"
      }
    ],
    "name": "tokenMap",
    "outputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "depositLimit",
        "type": "uint256"
      }
    ],
    "name": "updateAssetDepositLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "strategy",
        "type": "address"
      }
    ],
    "name": "updateAssetStrategy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const lrtDepositPoolAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidAmountToDeposit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidMaximumNodeDelegatorLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaximumDepositLimitReached",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaximumNodeDelegatorLimitReached",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MinimumAmountToReceiveNotMet",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assetBalance",
        "type": "uint256"
      }
    ],
    "name": "NodeDelegatorHasAssetBalance",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NodeDelegatorHasETH",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NodeDelegatorNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotEnoughAssetToTransfer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novethMintAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "AssetDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novethMintAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "ETHDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
      }
    ],
    "name": "ETHSwappedForLST",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EthTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxNodeDelegatorLimit",
        "type": "uint256"
      }
    ],
    "name": "MaxNodeDelegatorLimitUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minAmountToDeposit",
        "type": "uint256"
      }
    ],
    "name": "MinAmountToDepositUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "NodeDelegatorAddedinQueue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "nodeDelegatorContracts",
        "type": "address"
      }
    ],
    "name": "NodeDelegatorRemovedFromQueue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "addNodeDelegatorContractToQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minNovETHAmountExpected",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "depositAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minNovETHAmountExpected",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "depositETH",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetCurrentLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetDistributionData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assetLyingInDepositPool",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingInNDCs",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetStakedInEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetUnstakingFromEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingInConverter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingUnstakingVault",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getETHDistributionData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ethLyingInDepositPool",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInNDCs",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethStakedInEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethUnstakingFromEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInConverter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInUnstakingVault",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNodeDelegatorQueue",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getNovETHAmountToMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novethAmountToMint",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "ethAmountToSend",
        "type": "uint256"
      }
    ],
    "name": "getSwapETHToAssetReturnAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getTotalAssetDeposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalAssetDeposit",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isNodeDelegator",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "maxApproveToLRTConverter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxNodeDelegatorLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minAmountToDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "nodeDelegatorQueue",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "removeManyNodeDelegatorContractsFromQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "nodeDelegatorAddress",
        "type": "address"
      }
    ],
    "name": "removeNodeDelegatorContractFromQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minAmountToDeposit_",
        "type": "uint256"
      }
    ],
    "name": "setMinAmountToDeposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minToAssetAmount",
        "type": "uint256"
      }
    ],
    "name": "swapETHForAssetWithinDepositPool",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ndcIndex",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferAssetToNodeDelegator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ndcIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferETHToNodeDelegator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxNodeDelegatorLimit_",
        "type": "uint256"
      }
    ],
    "name": "updateMaxNodeDelegatorLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const unstakingVaultAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTNodeDelegator",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTWithdrawalManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EthTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EthReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "addSharesUnstaking",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetsUnstaking",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "reduceSharesUnstaking",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "sharesUnstaking",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const delegationManagerAbi = [
  {
    "inputs": [
      {
        "internalType": "contract IStrategyManager",
        "name": "_strategyManager",
        "type": "address"
      },
      {
        "internalType": "contract ISlasher",
        "name": "_slasher",
        "type": "address"
      },
      {
        "internalType": "contract IEigenPodManager",
        "name": "_eigenPodManager",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "MinWithdrawalDelayBlocksSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "earningsReceiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegationApprover",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "stakerOptOutWindowBlocks",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct IDelegationManager.OperatorDetails",
        "name": "newOperatorDetails",
        "type": "tuple"
      }
    ],
    "name": "OperatorDetailsModified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "metadataURI",
        "type": "string"
      }
    ],
    "name": "OperatorMetadataURIUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "earningsReceiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegationApprover",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "stakerOptOutWindowBlocks",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct IDelegationManager.OperatorDetails",
        "name": "operatorDetails",
        "type": "tuple"
      }
    ],
    "name": "OperatorRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IStrategy",
        "name": "strategy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "OperatorSharesDecreased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IStrategy",
        "name": "strategy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "OperatorSharesIncreased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IPauserRegistry",
        "name": "pauserRegistry",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IPauserRegistry",
        "name": "newPauserRegistry",
        "type": "address"
      }
    ],
    "name": "PauserRegistrySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "StakerDelegated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "StakerForceUndelegated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "StakerUndelegated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IStrategy",
        "name": "strategy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "StrategyWithdrawalDelayBlocksSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "withdrawalRoot",
        "type": "bytes32"
      }
    ],
    "name": "WithdrawalCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "oldWithdrawalRoot",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "newWithdrawalRoot",
        "type": "bytes32"
      }
    ],
    "name": "WithdrawalMigrated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "withdrawalRoot",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegatedTo",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startBlock",
            "type": "uint32"
          },
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          }
        ],
        "indexed": false,
        "internalType": "struct IDelegationManager.Withdrawal",
        "name": "withdrawal",
        "type": "tuple"
      }
    ],
    "name": "WithdrawalQueued",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DELEGATION_APPROVAL_TYPEHASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DOMAIN_TYPEHASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_WITHDRAWAL_DELAY_BLOCKS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "STAKER_DELEGATION_TYPEHASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "beaconChainETHStrategy",
    "outputs": [
      {
        "internalType": "contract IStrategy",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "name": "calculateCurrentStakerDelegationDigestHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_delegationApprover",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "approverSalt",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "name": "calculateDelegationApprovalDigestHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_stakerNonce",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "name": "calculateStakerDelegationDigestHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegatedTo",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startBlock",
            "type": "uint32"
          },
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          }
        ],
        "internalType": "struct IDelegationManager.Withdrawal",
        "name": "withdrawal",
        "type": "tuple"
      }
    ],
    "name": "calculateWithdrawalRoot",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegatedTo",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startBlock",
            "type": "uint32"
          },
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          }
        ],
        "internalType": "struct IDelegationManager.Withdrawal",
        "name": "withdrawal",
        "type": "tuple"
      },
      {
        "internalType": "contract IERC20[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "middlewareTimesIndex",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "receiveAsTokens",
        "type": "bool"
      }
    ],
    "name": "completeQueuedWithdrawal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegatedTo",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "startBlock",
            "type": "uint32"
          },
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          }
        ],
        "internalType": "struct IDelegationManager.Withdrawal[]",
        "name": "withdrawals",
        "type": "tuple[]"
      },
      {
        "internalType": "contract IERC20[][]",
        "name": "tokens",
        "type": "address[][]"
      },
      {
        "internalType": "uint256[]",
        "name": "middlewareTimesIndexes",
        "type": "uint256[]"
      },
      {
        "internalType": "bool[]",
        "name": "receiveAsTokens",
        "type": "bool[]"
      }
    ],
    "name": "completeQueuedWithdrawals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "cumulativeWithdrawalsQueued",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "contract IStrategy",
        "name": "strategy",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "decreaseDelegatedShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          }
        ],
        "internalType": "struct ISignatureUtils.SignatureWithExpiry",
        "name": "approverSignatureAndExpiry",
        "type": "tuple"
      },
      {
        "internalType": "bytes32",
        "name": "approverSalt",
        "type": "bytes32"
      }
    ],
    "name": "delegateTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          }
        ],
        "internalType": "struct ISignatureUtils.SignatureWithExpiry",
        "name": "stakerSignatureAndExpiry",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          }
        ],
        "internalType": "struct ISignatureUtils.SignatureWithExpiry",
        "name": "approverSignatureAndExpiry",
        "type": "tuple"
      },
      {
        "internalType": "bytes32",
        "name": "approverSalt",
        "type": "bytes32"
      }
    ],
    "name": "delegateToBySignature",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "delegatedTo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "delegationApprover",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "delegationApproverSaltIsSpent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "domainSeparator",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "earningsReceiver",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eigenPodManager",
    "outputs": [
      {
        "internalType": "contract IEigenPodManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "getDelegatableShares",
    "outputs": [
      {
        "internalType": "contract IStrategy[]",
        "name": "",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "contract IStrategy[]",
        "name": "strategies",
        "type": "address[]"
      }
    ],
    "name": "getOperatorShares",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IStrategy[]",
        "name": "strategies",
        "type": "address[]"
      }
    ],
    "name": "getWithdrawalDelay",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "contract IStrategy",
        "name": "strategy",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      }
    ],
    "name": "increaseDelegatedShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      },
      {
        "internalType": "contract IPauserRegistry",
        "name": "_pauserRegistry",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "initialPausedStatus",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minWithdrawalDelayBlocks",
        "type": "uint256"
      },
      {
        "internalType": "contract IStrategy[]",
        "name": "_strategies",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_withdrawalDelayBlocks",
        "type": "uint256[]"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "isDelegated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isOperator",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "staker",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "withdrawer",
                "type": "address"
              },
              {
                "internalType": "uint96",
                "name": "nonce",
                "type": "uint96"
              }
            ],
            "internalType": "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
            "name": "withdrawerAndNonce",
            "type": "tuple"
          },
          {
            "internalType": "uint32",
            "name": "withdrawalStartBlock",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "delegatedAddress",
            "type": "address"
          }
        ],
        "internalType": "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal[]",
        "name": "withdrawalsToMigrate",
        "type": "tuple[]"
      }
    ],
    "name": "migrateQueuedWithdrawals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minWithdrawalDelayBlocks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "earningsReceiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegationApprover",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "stakerOptOutWindowBlocks",
            "type": "uint32"
          }
        ],
        "internalType": "struct IDelegationManager.OperatorDetails",
        "name": "newOperatorDetails",
        "type": "tuple"
      }
    ],
    "name": "modifyOperatorDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "operatorDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "earningsReceiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegationApprover",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "stakerOptOutWindowBlocks",
            "type": "uint32"
          }
        ],
        "internalType": "struct IDelegationManager.OperatorDetails",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "contract IStrategy",
        "name": "",
        "type": "address"
      }
    ],
    "name": "operatorShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "index",
        "type": "uint8"
      }
    ],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauserRegistry",
    "outputs": [
      {
        "internalType": "contract IPauserRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "pendingWithdrawals",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "contract IStrategy[]",
            "name": "strategies",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "shares",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          }
        ],
        "internalType": "struct IDelegationManager.QueuedWithdrawalParams[]",
        "name": "queuedWithdrawalParams",
        "type": "tuple[]"
      }
    ],
    "name": "queueWithdrawals",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "earningsReceiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "delegationApprover",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "stakerOptOutWindowBlocks",
            "type": "uint32"
          }
        ],
        "internalType": "struct IDelegationManager.OperatorDetails",
        "name": "registeringOperatorDetails",
        "type": "tuple"
      },
      {
        "internalType": "string",
        "name": "metadataURI",
        "type": "string"
      }
    ],
    "name": "registerAsOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMinWithdrawalDelayBlocks",
        "type": "uint256"
      }
    ],
    "name": "setMinWithdrawalDelayBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IPauserRegistry",
        "name": "newPauserRegistry",
        "type": "address"
      }
    ],
    "name": "setPauserRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IStrategy[]",
        "name": "strategies",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "withdrawalDelayBlocks",
        "type": "uint256[]"
      }
    ],
    "name": "setStrategyWithdrawalDelayBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "slasher",
    "outputs": [
      {
        "internalType": "contract ISlasher",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "stakerNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "stakerOptOutWindowBlocks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "strategyManager",
    "outputs": [
      {
        "internalType": "contract IStrategyManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IStrategy",
        "name": "",
        "type": "address"
      }
    ],
    "name": "strategyWithdrawalDelayBlocks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "undelegate",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "withdrawalRoots",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "metadataURI",
        "type": "string"
      }
    ],
    "name": "updateOperatorMetadataURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const eigenStrategyAbi = [
  {
    "inputs": [
      {
        "internalType": "contract IStrategyManager",
        "name": "_strategyManager",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "MaxPerDepositUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "MaxTotalDepositsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IPauserRegistry",
        "name": "pauserRegistry",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IPauserRegistry",
        "name": "newPauserRegistry",
        "type": "address"
      }
    ],
    "name": "PauserRegistrySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "newShares",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "explanation",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTVLLimits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxPerDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxTotalDeposits",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20",
        "name": "_underlyingToken",
        "type": "address"
      },
      {
        "internalType": "contract IPauserRegistry",
        "name": "_pauserRegistry",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_underlyingToken",
        "type": "address"
      },
      {
        "internalType": "contract IPauserRegistry",
        "name": "_pauserRegistry",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxPerDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxTotalDeposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "index",
        "type": "uint8"
      }
    ],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauserRegistry",
    "outputs": [
      {
        "internalType": "contract IPauserRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IPauserRegistry",
        "name": "newPauserRegistry",
        "type": "address"
      }
    ],
    "name": "setPauserRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMaxPerDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMaxTotalDeposits",
        "type": "uint256"
      }
    ],
    "name": "setTVLLimits",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "shares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountShares",
        "type": "uint256"
      }
    ],
    "name": "sharesToUnderlying",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountShares",
        "type": "uint256"
      }
    ],
    "name": "sharesToUnderlyingView",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "strategyManager",
    "outputs": [
      {
        "internalType": "contract IStrategyManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountUnderlying",
        "type": "uint256"
      }
    ],
    "name": "underlyingToShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountUnderlying",
        "type": "uint256"
      }
    ],
    "name": "underlyingToSharesView",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "underlyingToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newPausedStatus",
        "type": "uint256"
      }
    ],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "userUnderlying",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "userUnderlyingView",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "contract IERC20",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountShares",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const lrtOracleAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "priceOracle",
        "type": "address"
      }
    ],
    "name": "AssetPriceOracleUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "assetPriceOracle",
    "outputs": [
      {
        "internalType": "address",
        "name": "priceOracle",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "novETHPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "updateNovETHPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "priceOracle",
        "type": "address"
      }
    ],
    "name": "updatePriceOracleFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]