// Must run first so EIP-6963 announcement is before Web3Auth modal discovers wallets
import '@blockscout/rootstock-global-wallet/ethereum'

import './assets/main.css'


import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'

const queryClient = new QueryClient()

createApp(App)
  .use(VueQueryPlugin, { queryClient })
  .mount('#app')
