module.exports = {
  Query: {
    coin: async (_source, { id }, { dataSources }) => {
      return dataSources.coinGeckoAPI.getCoin(id)
    },
    nft: async (_source, { id }, { dataSources }) => {
      return dataSources.coinGeckoAPI.getNFT(id)
    },
    market: async(_source, { id }, { dataSources}) => {
      return dataSources.coinGeckoAPI.getMarket(id)
    },
  },
}
