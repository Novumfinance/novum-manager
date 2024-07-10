import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const { THEGRAPH_URL } = process.env

export const axiosInstance = axios.create({
    baseURL: THEGRAPH_URL,
  })

export const graphqlClient = async (query, variables = {}, options = {}) => {
    const res = await axiosInstance({
      url: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      data: { query, variables },
    })

    return res.data['data']
  }