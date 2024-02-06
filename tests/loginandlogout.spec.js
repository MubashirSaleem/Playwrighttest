// @ts-check
const { test, expect } = require('@playwright/test');
const casual = require('casual');
const uniqueEmail = `user_${casual.first_name.toLowerCase()}@yopmail.com`;
const uniquelastname = `${casual.first_name.toLowerCase()}`;

//test('Link open', async ({ page }) => {
 // await page.goto('https://pre-ctms.daxclients.com/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/pre-ctms.daxclients.com/auth/login/);
//});

test('Login superuser', async ({ page }) => {
  await page.goto('https://pre-ctms.daxclients.com/');
  // A(),
  await page.locator('//input[@id="email"]').fill('admin@yopmail.com')
  await page.locator('//input[@id="password"]').fill('_@Dmin123_')
  await page.locator('//button[@id=":r2:"]').click()
  await page.waitForTimeout(3000)
  await page.locator('//div[@class="MuiBox-root css-9xkke2"]//img[@alt="logo"]').click()
  await page.waitForTimeout(3000)
  await page.locator('//p[@class="MuiTypography-root MuiTypography-body1 css-1h5rs46"][normalize-space()="Signout"]').click()
  await page.waitForTimeout(3000)
 
  await page.goto('https://revival.syncora.com/');
  // A(),
  await page.locator('//input[@id="email"]').fill('admin@yopmail.com')
  await page.locator('//input[@id="password"]').fill('_@Dmin123_')
  await page.locator('//button[@id=":r2:"]').click()
  await page.waitForTimeout(3000)
  await page.locator('//div[@class="MuiBox-root css-9xkke2"]//img[@alt="logo"]').click()
  await page.waitForTimeout(3000)
  await page.locator('//p[@class="MuiTypography-root MuiTypography-body1 css-1h5rs46"][normalize-space()="Signout"]').click()
  await page.waitForTimeout(3000)

 // await page.pause()
});


