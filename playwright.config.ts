import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright',
  testMatch: '**/*.e2e.ts',
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
  },
});
