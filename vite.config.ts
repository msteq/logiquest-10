// Vitest の test 設定を Vite の型定義に統合する
/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // React コンポーネントを jsdom 上でテストするための共通設定
    environment: 'jsdom',
    setupFiles: ['./tests/setupTests.ts'],
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],
  },
})
