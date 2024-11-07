import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("14")).toBeVisible();
  await expect(page.getByText("-7% em relação a ontem")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("152")).toBeVisible();
  await expect(page.getByText("+21% em relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("10", { exact: true })).toBeVisible();
  await expect(page.getByText("-4% em relação ao mês passado")).toBeVisible();
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 200,00")).toBeVisible();
  await expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();
});
