# Sistema de Seguimiento de Aplicaciones (ATS)

Este proyecto implementa un ATS (Applicant Tracking System) utilizando React para el frontend, Node.js y Express para el backend, y PostgreSQL como sistema de gestión de bases de datos. El proyecto sigue los principios de DDD (Domain-Driven Design) y TDD (Test-Driven Development) para asegurar un diseño robusto y una alta calidad del código.

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Node.js, Express
- **Base de Datos**: PostgreSQL
- **Pruebas**: Jest (para pruebas en el backend)

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: `frontend` y `backend`.

### Frontend

El frontend está creado con Create React App y se encuentra en la carpeta `frontend`. Para más detalles sobre cómo ejecutar y construir el frontend, consulta el [README del frontend](frontend/README.md).

### Backend

El backend utiliza Node.js y Express, y se encuentra en la carpeta `backend`. La conexión a la base de datos PostgreSQL se maneja a través de un pool de conexiones definido en `backend/build/db.js`.

#### Pruebas

Las pruebas del backend están escritas usando Jest y se pueden encontrar en `backend/build/index.test.js`.

## Cómo Empezar

Para ejecutar el proyecto, necesitarás tener Node.js y npm instalados. También necesitarás tener PostgreSQL corriendo localmente o en un contenedor Docker.

### Configuración del Backend

1. Navega a la carpeta `backend`.
2. Instala las dependencias con `npm install`.
3. Asegúrate de tener un archivo `.env` con las variables de entorno necesarias para la conexión a la base de datos.
4. Ejecuta el backend con `npm start`.

### Configuración del Frontend

1. Navega a la carpeta `frontend`.
2. Instala las dependencias con `npm install`.
3. Ejecuta el frontend con `npm start`.

## Pruebas

Para ejecutar las pruebas del backend, utiliza el comando `npm test` en la carpeta `backend`.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE.md](LICENSE.md).
