import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();

  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Rocket Pizza");

  await page.getByLabel("Descrição").fill("Another Description");

  await page.getByRole("button", { name: "Salvar" }).click();

  const toast = page.getByText("Perfil atualizado com sucesso!");

  expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  await page.waitForTimeout(250);

  const profileName = page.getByRole("button", { name: "Rocket Pizza" });

  expect(profileName).toBeVisible();
  await page.waitForTimeout(2000);
});

test("update profile error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();

  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Error Restaurant");

  await page.getByLabel("Descrição").fill("Another Description");

  await page.getByRole("button", { name: "Salvar" }).click();

  const toast = page.getByText(
    "Houve um erro ao atualizar o perfil, tente novamente.",
  );

  expect(toast).toBeVisible();
});
