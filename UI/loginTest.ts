import { chromium, Browser, Page } from 'playwright';

async function loginTest() {
    const browser: Browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://www.musimundo.com/login');

    await page.fill('#j_username', 'raulperez@yopmail.com');
    await page.fill('#j_password', 'Test1234');
    await page.click('[data-test-login="login_button"]');
    await page.waitForSelector('h5:has-text("mi cuenta")');


}
// Ejecuta la función de prueba
loginTest();
