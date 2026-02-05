<script setup lang="ts">
import { Web3AuthProvider } from "@web3auth/modal/vue";
import { WagmiProvider } from "@web3auth/modal/vue/wagmi";
import AppContent from "./AppContent.vue";
import web3AuthContextConfig from "./web3authContext";
import "./App.css";
</script>

<template>
  <Web3AuthProvider :config="web3AuthContextConfig">
    <WagmiProvider>
      <AppContent />
    </WagmiProvider>
  </Web3AuthProvider>
</template>
