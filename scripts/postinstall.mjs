import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// tauri 要求有 dist 文件夹
try {
  await mkdir(resolve(__dirname, '../dist'))
} catch {
  // don't care
}
