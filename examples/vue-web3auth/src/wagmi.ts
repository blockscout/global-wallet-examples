import { createConfig, http } from '@wagmi/vue'
// import { defineChain } from 'viem'
import { rootstock, rootstockTestnet } from 'viem/chains'

// const rootstock = defineChain({
//   id: 30,
//   name: 'Rootstock',
//   nativeCurrency: { name: 'Rootstock Bitcoin', symbol: 'RBTC', decimals: 18 },
//   rpcUrls: {
//     default: { http: ['https://mycrypto.rsk.co'] }
//   },
//   blockExplorers: {
//     default: { name: 'Blockscout', url: 'https://rootstock.blockscout.com' }
//   }
// })

// const rootstockTestnet = defineChain({
//   id: 31,
//   name: 'Rootstock Testnet',
//   nativeCurrency: { name: 'Rootstock Bitcoin', symbol: 'tRBTC', decimals: 18 },
//   rpcUrls: {
//     default: { http: ['https://mycrypto.testnet.rsk.co'] }
//   },
//   blockExplorers: {
//     default: { name: 'Blockscout', url: 'https://rootstock-testnet.blockscout.com' }
//   }
// })

export const wagmiConfig = createConfig({
  chains: [rootstock, rootstockTestnet],
  transports: {
    [rootstock.id]: http(),
    [rootstockTestnet.id]: http()
  }
})
