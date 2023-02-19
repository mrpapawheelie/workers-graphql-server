const { gql } = require('apollo-server-cloudflare');

module.exports = gql`
  type Coin {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
    market_cap: Float!
    circulating_supply: Float!
    max_supply: Float!
    high_24h: Float!
    low_24h: Float!
    change_24h: Float!
  }

  type NFT {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
    market_cap: Float!
    circulating_supply: Float!
  }

  type Market {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
    market_cap: Float!
    volume_24h: Float!
    change_24h: Float!
  }

  type Query {
    coin(id: ID!): Coin
    nft(id: ID!): NFT
    market(id: ID!): Market
    coins: [Coin]
    nfts: [NFT]
    markets: [Market]
  }
`;
