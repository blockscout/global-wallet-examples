<script setup lang="ts">
import { useWeb3AuthConnect, useWeb3AuthDisconnect, useWeb3AuthUser } from '@web3auth/modal/vue'
import { useConnection } from '@wagmi/vue'

const { connect, isConnected, connectorName, loading: connectLoading, error: connectError } =
  useWeb3AuthConnect()
const { disconnect, loading: disconnectLoading, error: disconnectError } = useWeb3AuthDisconnect()
const { userInfo } = useWeb3AuthUser()
const { address } = useConnection()

function uiConsole(...args: unknown[]) {
  const el = document.querySelector('#console>p')
  if (el) {
    el.innerHTML = JSON.stringify(args?.length ? args : {}, null, 2)
    console.log(...args)
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">
      <a
        target="_blank"
        href="https://web3auth.io/docs/sdk/pnp/web/modal"
        rel="noreferrer"
      >
        Web3Auth
      </a>
      + Rootstock Global Wallet Integration
    </h1>

    <template v-if="isConnected">
      <div class="grid">
        <h2>Connected to {{ connectorName }}</h2>
        <div class="account-info">
          <p>
            <strong>Address:</strong> {{ address }}
          </p>
        </div>

        <div class="flex-container">
          <button type="button" class="card" @click="uiConsole(userInfo)">
            Get User Info
          </button>

          <button type="button" class="card" @click="disconnect()">
            Log Out
          </button>
        </div>

        <div v-if="disconnectLoading" class="loading">Disconnecting...</div>
        <div v-if="disconnectError" class="error">{{ disconnectError.message }}</div>
      </div>
    </template>

    <template v-else>
      <div class="grid">
        <button type="button" class="card" @click="connect()">
          Connect with Web3Auth
        </button>
        <div v-if="connectLoading" class="loading">Connecting...</div>
        <div v-if="connectError" class="error">{{ connectError.message }}</div>
      </div>
    </template>

    <div id="console" style="white-space: pre-line">
      <p style="white-space: pre-line"></p>
    </div>
  </div>
</template>
