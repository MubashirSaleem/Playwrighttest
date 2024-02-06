import { _android as android, } from 'playwright';
import { test } from "@playwright/test";
//const { test, expect } = require('@playwright/test');
const casual = require('casual');
const uniqueEmail = `user_${casual.first_name.toLowerCase()}@yopmail.com`;
const uniquelastname = `${casual.first_name.toLowerCase()}`;

test("Run in Android - Chrome", async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the device.
    await device.screenshot({ path: 'device.png' });

    // Launch Chrome browser.
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
  //  const page = await context.newPage();
 //   await page.goto('https://letcode.in');
 //   console.log(await page.evaluate(() => window.location.href));
 //   await page.screenshot({ path: 'page.png' });

 //   await page.click("a[role='button']");
 //    await page.click("text=Log in")
    // Click input[name="email"]
 //   await page.click('input[name="email"]');
    // Fill input[name="email"]
 //   await page.fill('input[name="email"]', 'koushik350@gmail.com');
    // Press Tab
 //   await page.press('input[name="email"]', 'Tab');
    // Fill input[name="password"]
 //   await page.fill('input[name="password"]', 'Pass123$');
    // Click //button[normalize-space(.)='LOGIN']
 //   await Promise.all([
 //       page.waitForNavigation({ url: 'https://letcode.in/' }),
 //       page.click('//button[normalize-space(.)=\'LOGIN\']')
 //   ]);
 //   await page.click("a[role='button']");
 //   await page.click("text=Sign out");

 const page = await context.newPage();
 await page.goto('https://pre-ctms.daxclients.com/');
 // A(),
 await page.locator('//input[@id="email"]').fill('admin@yopmail.com')
 await page.locator('//input[@id="password"]').fill('_@Dmin123_')
 await page.locator('//button[@id=":r2:"]').click()
 // await page.waitForSelector('//p[contains(text(),"Principal Investigator")]', {timeout: 5000})
 await page.waitForTimeout(3000)
 await page.locator('//p[contains(text(),"Investigator")]').click()
 await page.locator('//body/div[@id="__next"]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/button[3]').click()
// await page.waitForTimeout(5000)
 await page.setInputFiles('//h5[contains(text(),"Add Picture")]', 'tests/uploadfiles/t1.jpg')
 await page.locator('//input[@id="first_name"]').fill("Mubee")
 await page.locator('//input[@id="last_name"]').fill(uniquelastname)
 await page.locator('//input[@id="credentials"]').fill("Test123")
 await page.locator('//input[@id="phone_number"]').fill("2488296501")
 await page.locator('//input[@id="email_address"]').fill(uniqueEmail)
 await page.locator('//button[@type="submit"]').click()
 await page.locator('//a[contains(text(),"Principal Investigator")]').click()
 // close context and device
 //   await context.close();
 //   await device.close();
 
})