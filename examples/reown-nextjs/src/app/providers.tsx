'use client'

import '@blockscout/rootstock-global-wallet/ethereum';

import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { config, queryClient } from '@/config/reown'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config as any} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
