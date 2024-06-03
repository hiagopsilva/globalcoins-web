'use client'

import React, { useEffect, useState } from 'react'
import Home from './home'
import request from '@/service/request'

const HomeContainer: React.FC = () => {
  const [listCoins, setListCoins] = useState<CoinType.List>([])
  const [listNamesForGraphic, setListNamesForGraphic] = useState<string[]>([])
  const [listValuesForGraphic, setListValuesForGraphic] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [coin, setCoin] = useState('USD-BRL')
  const [days, setDays] = useState(5)

  const handleListCoins = async () => {
    setLoading(true)
    const response = await request.get('/coins/list')

    setListCoins(response.data)
    setLoading(false)
  }

  const handleListHistoric = async () => {
    setLoading(true)
    const responseHistoric = await request.post(`/coins/historic`, {
      coin,
      days,
    })

    setListNamesForGraphic(responseHistoric.data.listNamesForGraphic)
    setListValuesForGraphic(responseHistoric.data.listValuesForGraphic)
    setLoading(false)
  }

  useEffect(() => {
    Promise.all([handleListCoins(), handleListHistoric()])
  }, [])

  useEffect(() => {
    handleListHistoric()
  }, [coin, days])

  return (
    <Home
      listCoins={listCoins}
      listNamesForGraphic={listNamesForGraphic}
      listValuesForGraphic={listValuesForGraphic}
      loading={loading}
      setCoin={setCoin}
      setDays={setDays}
      coin={coin}
      days={days}
    ></Home>
  )
}

export default HomeContainer
