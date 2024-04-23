import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navegar a la URL inicial
    await page.goto('https://www.bidcom.com.ar/irrigador-bucal');

    // Esperar a que el selector del primer elemento esté presente y hacer clic en él
    await page.waitForSelector('//*[@id="14999|30|1|con_interes"]/a');
    await page.click('//*[@id="14999|30|1|con_interes"]/a');

    // Esperar un momento para que la página se cargue completamente
    await page.waitForTimeout(5000);

    // Hacer clic en el segundo elemento
    await page.waitForSelector('//*[@id="buy_now"]/span');
    await page.click('//*[@id="buy_now"]/span');

    // Esperar un momento para que la página se cargue completamente después del segundo clic
    await page.waitForTimeout(5000);

    // Hacer clic en el tercer elemento
    await page.waitForSelector('//*[@id="formulario_compra"]/div/input');
    await page.click('//*[@id="formulario_compra"]/div/input');

    // Esperar un momento para que la página se cargue completamente después del tercer clic
    await page.waitForTimeout(5000);

    // Escribir "Jose" en el campo con el ID "name"
    await page.fill('#name', 'Jose');

    // Escribir "Lopez" en el campo con el ID "lastname"
    await page.fill('#lastname', 'Lopez');

    // Escribir "robertoperez@gmail.com" en el campo con el ID "email"
    await page.fill('#email', 'robertoperez11@gmail.com');

    // Escribir "1154547855" en el campo con el ID "input-tel"
    await page.fill('#input-tel', '1154547855');

    // Hacer clic en el botón con el ID "input-button"
    await page.click('#input-button');

    // Esperar un momento para que la página se cargue completamente después del último clic
    await page.waitForTimeout(5000);

    // Hacer clic nuevamente en el botón con el ID "input-button"
    await page.click('#input-button');

    // Esperar un momento para que la página se cargue completamente después del último clic
    await page.waitForTimeout(5000);

    // Hacer clic en el elemento con el ID "sucursaloca"
    await page.click('#sucursaloca');

    // Seleccionar la segunda opción del select con el ID "sucursaloca"
    await page.selectOption('#sucursaloca', { index: 1 }); // La segunda opción tiene índice 1

    // Esperar un momento para que la página se cargue completamente después de seleccionar la opción
    await page.waitForTimeout(5000);


    // Hacer clic en el botón con el ID "input-button"
    await page.click('#input-button');

    // Cerrar el navegador
    await browser.close();
}

run();
