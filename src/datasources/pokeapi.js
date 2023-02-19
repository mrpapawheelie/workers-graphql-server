const { RESTDataSource } = require('apollo-datasource-rest')

class CoinGeckoAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.coingecko.com/api/v3/'
  }

  async getCoin(id) {
    return this.get(`coin/${id}`)
  }
}

module.exports = CoinGeckoAPI
