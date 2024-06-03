import axios from 'axios'

const request = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      (localStorage && localStorage.getItem('TOKEN')) ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNzM4MjQ0MiwiZXhwIjoxNzE3NDE4NDQyfQ.Uzw1bk10f1BUELYKyQZdkKn5snbncHX8HJf_gpXe2FA',
  },
})

export default request
