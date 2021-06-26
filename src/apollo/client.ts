import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ChainId } from 'defimist-sdk'

export const defaultSubgraphClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/luzzif/defimist-mainnet-alpha',
  cache: new InMemoryCache()
})

export const subgraphClients: { [chainId in ChainId]?: ApolloClient<NormalizedCacheObject> | undefined } = {
  [ChainId.MAINNET]: defaultSubgraphClient,
  [ChainId.RINKEBY]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/luzzif/defimist_rinkeby',
    cache: new InMemoryCache()
  }),
  [ChainId.DM]: new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/luzzif/defimist-dm',
    cache: new InMemoryCache()
  })
}
