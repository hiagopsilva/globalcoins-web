declare namespace CoinType {
  type Item = {
    code: string
    codein: string
    name: string
    high: string
    low: string
    varBid: string
    pctChange: string
    bid: string
    ask: string
    timestamp: string
    create_date: string
    isFavorite: boolean
  }

  type List = Item[]

  type Response = {
    listCoins: List
    listNamesForGraphic: string[]
    listValuesForGraphic: string[]
  }
}
