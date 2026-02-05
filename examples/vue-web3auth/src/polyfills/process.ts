/**
 * Process shim for browser. Web3Auth and stream deps expect process.nextTick.
 */
const processShim = {
  env: { NODE_ENV: typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.MODE ?? 'development' : 'development' },
  nextTick(fn: () => void) {
    setTimeout(fn, 0)
  },
  browser: true
}

export default processShim
export { processShim as process }
