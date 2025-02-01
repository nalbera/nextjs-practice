# Proyecto Ecommerce 

### Descripción del proyecto
Este es un proyecto personal de práctica construido con Next.js. Se trata de una aplicación de ecommerce con las siguientes funcionalidades:

- Listado de productos
- Carrito de compras
- Dashboard de usuario para ver y editar datos del mismo además de ver su historial de compras
- Login y registro

Los datos son obtenidos desde una API propia que se encuentra dentro del mismo proyecto desarrollada en Express.

## Requisitos previos
Asegúrate de tener instalados los siguientes componentes:

- Node.js
- npm o yarn
- Next.js

## Instalación
Para instalar todas las dependencias necesarias:

#### API (backend)
```bash
cd back
npm install
# o
yarn install
```
#### Front
```bash
cd front
npm install
# o
yarn install
```
## Ejecución en desarrollo

#### API
```bash
npm start
# o
yarn start
```
El servicio se ejecutará en `http://localhost:3001` 

#### Front
```bash
npm run dev
# o
yarn run dev
```
La aplicación se ejecutará en `http://localhost:3000`

## Funcionalidades

#### Listado de productos
Muestra todos los productos disponibles y sus categorías

#### Carrito de compras
Permite a los usuarios logueados agregar, eliminar y ver los productos de su carrito antes de proceder a la compra

#### Dashboard de usuario
Permite a los usuarios registrados ver y editar su información personal, así como ver un historia de sus compras realizadas

#### Login y registro
Los usuarios pueden crear una cuenta (`sign-up`) o iniciar sesión (`log-in`) en el sitio para acceder
a las funcionalidades exclusivas de usuarios registrados.

## Dependencias

Lista de principales dependencias de este proyecto:
- `react`: Librería para construir interfaces de usuario.
- `next`: Framework de React para aplicaciones web
- `context`: Para la gestión de contexto de usuario
- `nextjs-toast-notify`: Para manejo de notificaciones
- `zustand`: Gestiona el estado del carrito de compras

## Nota:
El presente proyecto actualmente está en estado de modificaciones sustanciales y sujeto a agregar funcionalidades nuevas.