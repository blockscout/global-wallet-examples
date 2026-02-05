'use client'

import { useAccount, useDisconnect } from 'wagmi'

function App() {
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Reown Web3 Wallet Connection</h1>

      <div style={{ marginTop: '2rem' }}>
        <appkit-button />
      </div>

      {isConnected && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>Account Information</h2>
          <div>
            <strong>Status:</strong> Connected
          </div>
          <div>
            <strong>Address:</strong> {address}
          </div>
          <div>
            <strong>Chain:</strong> {chain?.name} (ID: {chain?.id})
          </div>
          <button
            type="button"
            onClick={() => disconnect()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}

export default App
