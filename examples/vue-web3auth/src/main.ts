// Must run first so EIP-6963 announcement is before Web3Auth modal discovers wallets
import '@blockscout/rootstock-global-wallet/ethereum'

import './assets/main.css'


import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import App from './App.vue'
import { wagmiConfig } from './wagmi'

const queryClient = new QueryClient()

createApp(App)
  .use(WagmiPlugin, { config: wagmiConfig })
  .use(VueQueryPlugin, { queryClient })
  .mount('#app')
