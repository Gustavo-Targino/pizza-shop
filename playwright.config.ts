import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test",

  fullyParallel: true, // testes paralelos

  forbidOnly: !!process.env.CI, // bloquear realizar um único teste em Ci

  retries: process.env.CI ? 2 : 0, // retries para os testes

  workers: process.env.CI ? 1 : undefined, // número de testes em paralelo

  // reporter: "html", // formato para exportar os resultados do teste

  use: {
    baseURL: "http://localhost:50789", // porta que o projeto roda em modo de testes
  },

  webServer: {
    command: "npm run dev:test", // comando para rodar a aplicação
    url: "http://localhost:50789",
    reuseExistingServer: !process.env.CI, // em ambientes de ci -> subir um servidor pra cada teste, em dev -> reaproveitar servidor
  },
  // projects: [
  //   {
  //     name: "chromium",
  //     use: { ...devices["Desktop Chrome"] },
  //   },

  //   {
  //     name: "firefox",
  //     use: { ...devices["Desktop Firefox"] },
  //   },

  //   {
  //     name: "webkit",
  //     use: { ...devices["Desktop Safari"] },
  //   },

  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],
});
