# Mini CRUD Seguro – Backend (NestJS + TypeORM + JWT)

Bienvenido 👋. Sigue estos pasos **la primera vez** que clones el proyecto.

## 🚀 Requisitos
- Node.js 18+ (recomendado 20) y npm
- PostgreSQL 14+ en ejecución
- Git

## 📦 Clonar e instalar
```bash
git clone https://github.com/5Cristian/CRUD_BACKEND.git
cd CRUD_BACKEND
npm ci
```

> Si no tienes `package-lock.json`, usa `npm install`.

## 🔐 Variables de entorno
Crea un archivo **.env** en la raíz con tus credenciales:

```env
# App
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=super_secreto_cambia_esto
JWT_EXPIRES_IN=1d

# Base de datos (PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=mini_crud_seguro
```

> **No subas tu `.env` a Git.** Si necesitas compartir el formato, crea `.env.example` sin credenciales reales.

## 🗄️ Base de datos
1. Crea la base:
   ```sql
   CREATE DATABASE mini_crud_seguro;
   ```
2. (Si usas TypeORM migrations) Ejecuta migraciones:
   ```bash
   npm run typeorm:migration:run
   ```

## ▶️ Ejecutar en desarrollo
```bash
npm run start:dev
```
La API quedará en: `http://localhost:3000`

## 🔑 Endpoints principales
- `POST /auth/register` – Registro (público)
- `POST /auth/login` – Login (público; devuelve JWT)
- `GET /tasks` – Listar tareas (protegido)
- `POST /tasks` – Crear tarea (protegido)
- `GET /tasks/:id` – Ver tarea (protegido)
- `PATCH /tasks/:id` – Actualizar (protegido)
- `DELETE /tasks/:id` – Eliminar (protegido)

> Para rutas protegidas, envía el header: `Authorization: Bearer <tu_token>`.

## 🧪 Pruebas
```bash
npm test
```

## 🏗️ Compilar para producción
```bash
npm run build
npm run start:prod
```

## ✅ Checklist de primer uso
- [ ] Node y PostgreSQL instalados
- [ ] `.env` creado
- [ ] Base de datos creada
- [ ] Dependencias instaladas (`npm ci`)
- [ ] App corriendo (`npm run start:dev`)

---

> ¿Problemas comunes?
> - **ECONNREFUSED a PostgreSQL** → Revisa `DB_HOST`, `DB_PORT`, usuario y contraseña.
> - **JWT inválido** → Verifica `JWT_SECRET` y que envíes el header `Authorization` correctamente.
> - **Módulos no encontrados** → Ejecuta `npm ci` o `npm install`.
