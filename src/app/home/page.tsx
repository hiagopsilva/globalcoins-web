'use client'

import React, { useEffect, useState } from 'react'
import Home from './home'
import request from '@/service/request'
import { formatDate, getUserDataStorage } from '@/utils/helpers'
import { useRouter } from 'next/navigation'
import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'

import io from 'socket.io-client'

const HomeContainer: React.FC = () => {
  const [listCoins, setListCoins] = useState<CoinType.List>([])
  const [listNamesForGraphic, setListNamesForGraphic] = useState<string[]>([])
  const [listValuesForGraphic, setListValuesForGraphic] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [coin, setCoin] = useState('USD-BRL')
  const [days, setDays] = useState(5)
  const [loadingBackground, setLoadingBackground] = useState(false)

  const routes = useRouter()

  const handleListCoins = async () => {
    const response = await request.get('/coins/list')

    setListCoins(response.data)
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

  const handleFavorite = async (coinFavorite: string) => {
    setLoading(true)
    await request.post(`/coins/favorite`, {
      coin: coinFavorite,
      userId: getUserDataStorage()!.id,
    })

    await handleListCoins()
    setLoading(false)
  }

  const handleUpdateListCoins = async () => {
    setLoadingBackground(true)

    await handleListCoins()

    setLoadingBackground(false)
  }
  useEffect(() => {
    const socket = io('http://localhost:3333', { transports: ['websocket'] })

    socket.on('UPDATE_LIST_COINS', () => {
      handleUpdateListCoins()
    })

    return () => socket.disconnect()
  }, [])

  useEffect(() => {
    Promise.all([handleListCoins(), handleListHistoric()])

    setLoading(false)
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
      handleFavorite={handleFavorite}
      loadingBackground={loadingBackground}
    ></Home>
  )
}

export default HomeContainer
