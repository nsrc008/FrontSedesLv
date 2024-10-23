# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Copiar el archivo .env
COPY .env .env

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que la app se ejecutará
EXPOSE 3000

# Comando para servir la aplicación construida
CMD ["npm", "run", "start"]
