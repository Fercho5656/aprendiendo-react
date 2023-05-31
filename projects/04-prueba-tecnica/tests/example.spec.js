// @ts-check
import { test, expect } from '@playwright/test'
import { RANDOM_IMG_API_PREFIX } from '../src/services/const.js'

const LOCALHOST = 'http://localhost:5173/'

test('Shows text and img', async ({ page }) => {
  await page.goto(LOCALHOST)
  await page.waitForLoadState('networkidle')

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(RANDOM_IMG_API_PREFIX)).toBeTruthy()
})
