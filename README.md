# Recuerdos con Estilo (Astro)

1. `npm install`
2. Copia `.env.example` a `.env` y pon tu ID de Asociados en `PUBLIC_AMAZON_TAG`.
3. Cambia `site` en `astro.config.mjs` por tu dominio.
4. `npm run dev` para verlo, `npm run build` para generar `dist/`.
5. Sube el repositorio a Cloudflare Pages o Netlify (build: `npm run build`, salida: `dist`).

Los productos están en `src/data/products.ts`. El primero de cada categoría es "Nuestra elección".
