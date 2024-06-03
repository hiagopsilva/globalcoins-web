import axios from 'axios'

const request = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      (localStorage && localStorage.getItem('TOKEN')) ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNzQyNjI3MCwiZXhwIjoxNzE3NDYyMjcwfQ.nu3cv_xEJMi0wXhuxPPeRlLCnWpSG7fsDrVv86SnPRo',
  },
})

export default request
