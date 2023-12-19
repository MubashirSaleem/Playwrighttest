// @ts-check
const { test, expect } = require('@playwright/test');

test('Link open', async ({ page }) => {
  await page.goto('https://pre-ctms.daxclients.com/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/pre-ctms.daxclients.com/auth/login/);
});

test('Login superuser', async ({ page }) => {
  await page.goto('https://pre-ctms.daxclients.com/');
  // A(),
  await page.locator('//input[@id="email"]').fill('admin_test@yopmail.com')
  await page.locator('//input[@id="password"]').fill('Test123#')
  await page.locator('//button[@id=":r2:"]').click()
 // await page.waitForSelector('//p[contains(text(),"Principal Investigator")]', {timeout: 5000})
  await page.waitForTimeout(3000)
  await page.locator('//p[contains(text(),"Principal Investigator")]').click()
  await page.locator('//body/div[@id="__next"]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/button[3]').click()
 // await page.waitForTimeout(5000)
  await page.setInputFiles('//h5[contains(text(),"Add Picture")]', 'tests/uploadfiles/t1.jpg')
  await page.locator('//input[@id="first_name"]').fill("Mubeetest1")
  await page.locator('//input[@id="last_name"]').fill("User1")
  await page.locator('//input[@id="credentials"]').fill("Test123")
  await page.locator('//input[@id="phone_number"]').fill("2488296501")
  await page.locator('//input[@id="email_address"]').fill("mubeetestuser1@yopmail.com")
  await page.locator('//button[@type="submit"]').click()
  await page.locator('//a[contains(text(),"Principal Investigator")]').click()
 // await page.pause()
});


