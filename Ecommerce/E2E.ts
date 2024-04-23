import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.bidcom.com.ar/irrigador-bucal');

    await page.waitForSelector('//*[@id="14999|30|1|con_interes"]/a');
    await page.click('//*[@id="14999|30|1|con_interes"]/a');

    await page.waitForTimeout(5000);

    await page.waitForSelector('//*[@id="buy_now"]/span');
    await page.click('//*[@id="buy_now"]/span');

    await page.waitForTimeout(5000);

    await page.waitForSelector('//*[@id="formulario_compra"]/div/input');
    await page.click('//*[@id="formulario_compra"]/div/input');

    await page.waitForTimeout(5000);

    await page.fill('#name', 'Jose');

    await page.fill('#lastname', 'Lopez');

    await page.fill('#email', 'robertoperez11@gmail.com');

    await page.fill('#input-tel', '1154547855');

    await page.click('#input-button');

    await page.waitForTimeout(5000);

    await page.click('#input-button');

    await page.waitForTimeout(5000);

    await page.click('#sucursaloca');

    await page.selectOption('#sucursaloca', { index: 1 });

    await page.waitForTimeout(5000);

    await page.click('#input-button');

    await browser.close();
}

run();

