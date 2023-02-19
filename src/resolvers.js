const coins = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 54767.67,
    market_cap: 10234234234.67,
    circulating_supply: 1873423,
    max_supply: 21000000,
    high_24h: 55767.67,
    low_24h: 53767.67,
    change_24h: 10.0,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 4343.33,
    market_cap: 4323423423.33,
    circulating_supply: 10234230,
    max_supply: null,
    high_24h: 4443.33,
    low_24h: 4243.33,
    change_24h: 10.0,
  },
];

const nfts = [
  {
    id: 'crypto-kitties',
    name: 'Crypto Kitties',
    symbol: 'CK',
    price: 0.33,
    market_cap: 1000.33,
    circulating_supply: 3000,
  },
  {
    id: 'decentraland',
    name: 'Decentraland',
    symbol: 'MANA',
    price: 1.33,
    market_cap: 2000.33,
    circulating_supply: 5000,
  },
];

const markets = [
  {
    id: 'binance',
    name: 'Binance',
    symbol: 'BNB',
    price: 223.33,
    market_cap: 1000.33,
    volume_24h: 20000.0,
    change_24h: 10.0,
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    symbol: 'COIN',
    price: 423.33,
    market_cap: 2000.33,
    volume_24h: 30000.0,
    change_24h: 20.0,
  },
];

const resolvers = {
  Query: {
    coin: (root, { id }) => {
      return coins.find(coin => coin.id === id);
    },
    nft: (root, { id }) => {
      return nfts.find(nft => nft.id === id);
    },
    market: (root, { id }) => {
      return markets.find(market => market.id === id);
    },
    coins: () => {
      return coins;
    },
    nfts: () => {
      return nfts;
    },
    markets: () => {
      return markets;
    },
  },
};

module.exports = resolvers;
