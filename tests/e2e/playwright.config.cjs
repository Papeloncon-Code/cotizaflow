const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: ".",
  testMatch: "smoke.spec.cjs",
  fullyParallel: false,
  timeout: 30000,
  expect: { timeout: 8000 },
  reporter: "list",
  use: {
    baseURL: process.env.COTIZAFLOW_URL || "https://cotizaflow.papelon.workers.dev",
    browserName: "chromium",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure"
  }
});
