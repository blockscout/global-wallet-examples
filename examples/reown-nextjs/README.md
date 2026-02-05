This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-wagmi`](https://github.com/wevm/wagmi/tree/main/packages/create-wagmi).

## Configuration

This project uses [Reown AppKit](https://docs.reown.com/appkit) (formerly WalletConnect) for Web3 wallet connections.

### Setup

1. Get your Reown Project ID:
   - Visit [cloud.reown.com](https://cloud.reown.com)
   - Create a new project or use an existing one
   - Copy your Project ID

2. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Replace `your_project_id_here` with your actual Reown Project ID

```bash
cp .env.example .env.local
# Edit .env.local and add your project ID
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.
