# Proyecto Automatizado

Este repositorio contiene una colección de scripts y pruebas automatizadas para su uso en un proceso de Integración Continua (CI).

## Estructura del Proyecto

El proyecto está organizado en varias carpetas, cada una con su propio propósito y conjunto de pruebas.

- `UI`: Contiene pruebas de interfaz de usuario utilizando Playwright.
- `API`: Contiene pruebas automatizadas para las API utilizando la biblioteca requests de Python.
- `Ecommerce`: Contiene pruebas de extremo a extremo (end-to-end) utilizando Playwright para simular el proceso de compra en un sitio web de comercio electrónico.
- `ValidaciondeProductos`: Contiene un script en Python que crea una lista de productos y los ordena por precio para su validación.


## Ejecución de Pruebas

Para ejecutar las pruebas, sigue estos pasos:

1. Clona el repositorio en tu máquina local.

2. Instala las dependencias necesarias ejecutando `npm install`.

3. Ejecuta las pruebas utilizando los comandos específicos para cada tipo de prueba:

### Pruebas de Interfaz de Usuario (UI)

Para ejecutar las pruebas de interfaz de usuario de Login Exitoso, utiliza el siguiente comando:

npx ts-node UI/LoginTest.ts

Para ejecutar las pruebas de errores de inicio de sesión, utiliza el siguiente comando:

npx ts-node UI/LoginErrorTest.ts



### Pruebas de API

Para ejecutar las pruebas de API, utiliza los siguientes comandos:

python3 API/negativo.py
python3 API/positivo.py



### Pruebas End-to-End (E2E) de Ecommerce

Para ejecutar las pruebas end-to-end del proceso de compra, utiliza el siguiente comando:

npx ts-node Ecommerce/E2E.ts


### Validación de Productos

Para ejecutar el script de validación de productos, utiliza el siguiente comando:

python3 ValidacionProductos/Validacion.py


Asegúrate de estar en el directorio raíz del repositorio antes de ejecutar estos comandos.
