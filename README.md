# Global wallet examples

This repository contains example projects demonstrating the integration of a global wallet SDK. Each project is based on a different TypeScript framework, but this list is not exhaustive—the SDK can be integrated into other frameworks as well

## 🏛️ Project structure

The `examples` folder contains a list of projects with an integrated `Rootstock global wallet SDK` under the hood. The Rootstock global wallet SDK serves as an example implementation that can be quickly integrated into different projects. You can replace it with your own white-labeled SDK that you will receive after partnering with Blockscout

Example of Rootstock global wallet SDK integration:

```javascript
import "@blockscout/rootstock-global-wallet/ethereum";
```

## 🤖 Integration

To use a global wallet in any project, you simply need to import it:

```javascript
import "<your-package-name>/ethereum";
import "<your-package-name>/solana";
```

The file where you should place the import depends on the framework you're using:

1. Vite → `main.ts` (or `main.tsx`)
2. Next.js → `layout.tsx`

## 🚀 Getting started within each project

Prerequisites:

- Node.js v18 or higher
- pnpm package manager

### Installation and testing

1. Install dependencies:

```bash
pnpm install
```

2. Run the project:

```bash
pnpm run dev
```
