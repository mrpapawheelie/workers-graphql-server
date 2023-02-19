const { RESTDataSource } = require('apollo-datasource-rest');

class CoinAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.coingecko.com/api/v3';
  }

  async getCoinData(id) {
    return this.get(`/coins/${id}`);
  }

  async getCoinsData() {
    return this.get(`/coins/list`);
  }

  async getMarketData(id) {
    return this.get(`/exchanges/${id}`);
  }

  async getMarketsData() {
    return this.get(`/exchanges`);
  }
}

module.exports = CoinAPI;
