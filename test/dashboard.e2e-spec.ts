import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("14")).toBeVisible();
  expect(page.getByText("-7% em relação a ontem")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("152")).toBeVisible();
  expect(page.getByText("+21% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("10", { exact: true })).toBeVisible();
  expect(page.getByText("-4% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(2000);
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("R$ 200,00")).toBeVisible();
  expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();

  await page.waitForTimeout(2000);
});
