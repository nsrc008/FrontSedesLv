# React App - Proyecto Frontend

Este proyecto es una aplicación frontend desarrollada con React y Vite, que utiliza TypeScript. Se incluye un Dockerfile para facilitar el despliegue de la aplicación en contenedores Docker.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- Node.js (v14 o superior)
- npm o Yarn (según tu preferencia)
- Docker
- Docker Compose

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local usando git:

```
git clone https://github.com/nsrc008/FrontSedesRc.git
cd FrontSedesRc
```

### 2. Instalar dependencias

Una vez en la carpeta del proyecto, instala las dependencias del proyecto ejecutando:

`npm install`

O si prefieres Yarn:

`yarn install`

### 3. Configuración del entorno

Si es necesario, crea un archivo .env en la raíz del proyecto y configura las variables de entorno que necesite la aplicación (por ejemplo, URLs de APIs, claves secretas, etc.).

### 4. Ejecutar en modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

`npm run dev`

Esto levantará la aplicación en `http://localhost:3000/`.

### 5. Generar la versión de producción

Para generar los archivos estáticos de producción, ejecuta:

`npm run build`

Los archivos generados se almacenarán en la carpeta dist/, listos para ser desplegados en un servidor.

## Pruebas Unitarias

Para ejecutar las pruebas unitarias del proyecto, ejecuta: `npm test`


Los archivos generados se almacenarán en la carpeta dist/, listos para ser desplegados en un servidor.

## Docker Compose

## Estructura del Proyecto

A continuación, se muestra la estructura de directorios del proyecto:

```
/proyecto
│
├── FrontSedesLv/            # Repositorio del frontend
│   ├── Dockerfile
│   └── ... (otros archivos del frontend)
│
├── BackSedesDj/             # Repositorio del backend
│   ├── Dockerfile
│   └── ... (otros archivos del backend)
│
└── docker-compose.yml          # Archivo para orquestar los servicios
```

## Instrucciones de Uso

1. Clonar los Repositorios: Clona ambos repositorios (frontend y backend) en el mismo directorio donde se encuentra el archivo `docker-compose.yml`.
2. Construir y Ejecutar los Servicios:
   - Abre una terminal y navega hasta el directorio que contiene `docker-compose.yml`.
   - Ejecuta el siguiente comando para construir y levantar los contenedores:
     ```
      docker-compose up --build
     ```
3. Acceso a la Aplicación:
   - El frontend estará disponible en `http://localhost:3000 `
   - El backend estará disponible en `http://localhost:8000`

## Descripción del Archivo docker-compose.yml

```
version: '3.8'

services:
  frontend:
    build:
      context: ./FrontProjectRc
    ports:
      - "3000:3000"
    networks:
      - app-network
    depends_on:
      - backend

  backend:
    build:
      context: ./BackProjectLv
    ports:
      - "8000:80"
    networks:
      - app-network
    volumes:
      - backend_data:/var/www/html
    environment:
      - APP_ENV=local
      - APP_DEBUG=true
      - APP_KEY=base64:YpsxTw/mKmMOXTRpPpY3u/LceoxJWauq2gYGMkopUQo=
      - API_KEY=f3f24338ac0ede6a37e47d6012b4c389

networks:
  app-network:
    driver: bridge

volumes:
  backend_data:
```

Este archivo orquesta tanto el frontend como el backend, asegurando que ambos servicios estén disponibles y funcionando correctamente.

## Scripts de NPM

Puedes utilizar los siguientes comandos para desarrollar o construir la aplicación fuera de Docker:

- `npm run dev`: Ejecuta la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación optimizada para producción.
- `npm run start`: Sirve la aplicación construida.

## Dependencias

El proyecto utiliza las siguientes dependencias clave:

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.2.0
- Axios 1.7.7
- Bootstrap 5.3.3

Las dependencias de desarrollo incluyen ESLint y Vite para facilitar el desarrollo y la construcción.

## Estilo y Linting

El proyecto está configurado con ESLint para garantizar la calidad del código. Puedes ejecutar el siguiente comando para comprobar si hay errores de linting:
`npm run lint`

## Despliegue

Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

1. Genera la versión de producción ejecutando npm run build.
2. Sube el contenido de la carpeta dist/ a tu servidor web o plataforma de hosting de tu elección.
