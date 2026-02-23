import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia, rootstock, rootstockTestnet } from 'wagmi/chains'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, rootstock, rootstockTestnet],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [rootstock.id]: http(),
      [rootstockTestnet.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
