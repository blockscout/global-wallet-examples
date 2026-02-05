import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia } from '@reown/appkit/networks'
import { QueryClient } from '@tanstack/react-query'
import { cookieStorage, createStorage } from 'wagmi'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID

if (!projectId) {
  throw new Error('NEXT_PUBLIC_REOWN_PROJECT_ID is not set')
}

// Create wagmiAdapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, sepolia],
  projectId,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})

// Set up queryClient
export const queryClient = new QueryClient()

// Create modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia],
  projectId,
  metadata: {
    name: 'Global Wallets',
    description: 'Next.js + Wagmi + Reown Web3 App',
    url: 'https://example.com',
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
  },
  features: {
    analytics: true,
  },
})

export const config = wagmiAdapter.wagmiConfig
