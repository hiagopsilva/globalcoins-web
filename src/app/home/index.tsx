'use client'

import React, { useEffect, useState } from 'react'
import Home from './home'
import request from '@/service/request'

const HomeContainer: React.FC = () => {
  const [listCoins, setListCoins] = useState<CoinType.List>([])
  const [listNamesForGraphic, setListNamesForGraphic] = useState<string[]>([])
  const [listValuesForGraphic, setListValuesForGraphic] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  const handleListCoins = async () => {
    const response = await request.get('/coins/list')

    setListCoins(response.data.listCoins)
    setListNamesForGraphic(response.data.listNamesForGraphic)
    setListValuesForGraphic(response.data.listValuesForGraphic)
    setLoading(false)
  }

  useEffect(() => {
    handleListCoins()
  }, [])

  return (
    <Home
      listCoins={listCoins}
      listNamesForGraphic={listNamesForGraphic}
      listValuesForGraphic={listValuesForGraphic}
      loading={loading}
    ></Home>
  )
}

export default HomeContainer
