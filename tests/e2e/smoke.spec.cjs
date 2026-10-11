const { test, expect } = require("@playwright/test");

test("la web pública carga y se identifica como demo", async ({ page }) => {
  const response = await page.goto("/", { waitUntil: "domcontentloaded" });
  expect(response, "la navegación debe devolver una respuesta HTTP").not.toBeNull();
  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle(/CotizaFlow/);
  await expect(page.locator(".notice")).toContainText("Prototipo demostrativo");
  await expect(page.locator(".notice")).toContainText("No envía mensajes");
  await expect(page.getByRole("button", { name: /Nueva cotización/ })).toBeVisible();
});

test("permite crear una cotización, registrar seguimiento y conservarlo en el navegador", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const company = `QA CotizaFlow ${Date.now()}`;
  await page.getByRole("button", { name: /Nueva cotización/ }).click();
  await page.locator("#company").fill(company);
  await page.locator("#contact").fill("Contacto ficticio QA");
  await page.locator("#amount").fill("125");
  await page.locator("#status").selectOption("Pendiente");

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  await page.locator("#date").fill(tomorrow.toISOString().slice(0, 10));
  await page.locator("#owner").fill("Prueba automatizada");
  await page.locator("#notes").fill("Registro sintético creado por Playwright; no es un cliente real.");
  await page.getByRole("button", { name: "Guardar cotización" }).click();

  const row = page.locator("tr.data").filter({ hasText: company });
  await expect(row).toBeVisible();

  await row.click();
  await page.getByRole("button", { name: "Registrar contacto" }).click();
  await expect(page.locator("#toast")).toContainText("Contacto registrado");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("tr.data").filter({ hasText: company })).toBeVisible();
});

test("exporta cotizaciones a un archivo CSV", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: /Exportar CSV/ }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("cotizaflow-demo.csv");
});
