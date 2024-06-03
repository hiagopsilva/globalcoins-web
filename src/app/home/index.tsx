'use client'

import React, { useEffect, useState } from 'react'
import Home from './home'
import request from '@/service/request'

const HomeContainer: React.FC = () => {
  const [listCoins, setListCoins] = useState<CoinType.List>([])

  const handleListCoins = async () => {
    const response = await request.get('/coins/list')

    console.log(response)

    setListCoins(response.data)
  }

  useEffect(() => {
    handleListCoins()
  }, [])

  return <Home listCoins={listCoins}></Home>
}

export default HomeContainer
