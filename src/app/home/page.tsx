'use client'

import React, { useEffect, useState } from 'react'
import Home from './home'
import request from '@/service/request'
import { formatDate } from '@/utils/helpers'
import { useRouter } from 'next/navigation'
import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'

const HomeContainer: React.FC = () => {
  const [listCoins, setListCoins] = useState<CoinType.List>([])
  const [listNamesForGraphic, setListNamesForGraphic] = useState<string[]>([])
  const [listValuesForGraphic, setListValuesForGraphic] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [coin, setCoin] = useState('USD-BRL')
  const [days, setDays] = useState(5)
  const routes = useRouter()

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

    setListNamesForGraphic(
      responseHistoric.data.listNamesForGraphic.map((timestamp: number) =>
        formatDate(timestamp),
      ),
    )
    setListValuesForGraphic(responseHistoric.data.listValuesForGraphic)
    setLoading(false)
  }

  const logout = () => {
    localStorage.removeItem('TOKEN')
    routes.replace(APP_ROUTES_CONSTANTS.public.login)
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
      logout={logout}
    ></Home>
  )
}

export default HomeContainer
