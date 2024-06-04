import axios from 'axios'

const request = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('TOKEN'),
    'access-control-allow-origin': '*',
  },
})

export default request
