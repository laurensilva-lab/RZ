# RZ Barbería — sitio web

Sitio de una sola página hecho con **React + Vite**, pensado para que lo abras
en VS Code y lo edites sin drama. Cada sección de la página es un componente
separado, con su propio archivo de estilos (CSS Modules), así que tocar una
sección no rompe las demás.

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173` con recarga automática: cada
vez que guardás un archivo, el navegador se actualiza solo.

Para generar la versión final lista para subir a un hosting:

```bash
npm run build
```

Esto crea la carpeta `dist/` con el sitio ya optimizado.

## Estructura del proyecto

```
src/
├─ App.jsx                 → arma la página uniendo todas las secciones
├─ index.css                → colores, fuentes y estilos globales (tokens)
├─ data/
│  └─ content.js            → ¡EDITÁ ESTE ARCHIVO! nombre, precios, horarios, WhatsApp, Instagram
├─ assets/
│  ├─ logo.png               → tu logo
│  └─ img/                   → poné acá las fotos que quieras usar (galería, foto de perfil, etc.)
└─ components/
   ├─ Navbar/                → barra de navegación de arriba
   ├─ Hero/                  → sección principal de bienvenida
   ├─ About/                 → "Sobre mí"
   ├─ Services/               → lista de precios
   ├─ Gallery/                → cuadrícula de fotos
   ├─ Hours/                  → horarios y ubicación
   ├─ Contact/                → llamado a reservar por WhatsApp
   ├─ Footer/                 → pie de página
   └─ RazorDivider/           → el divisor decorativo con la navaja (detalle visual)
```

Cada carpeta de `components/` tiene dos archivos:

- `NombreComponente.jsx` → el contenido/lógica del componente
- `NombreComponente.module.css` → sus estilos, aislados del resto (no pisan
  clases de otros componentes aunque se llamen igual)

## Lo primero que vas a querer editar

1. **`src/data/content.js`** — acá está TODO el texto editable: nombre de la
   barbería, número de WhatsApp, Instagram, dirección, horarios, servicios y
   precios. No hace falta tocar ningún componente para cambiar esto.
2. **`src/assets/logo.png`** — reemplazá este archivo si querés actualizar el
   logo (mismo nombre, misma carpeta).
3. **Fotos reales** — los bloques de "Tu foto acá" y la galería son
   placeholders. Instrucciones para reemplazarlos están comentadas arriba de
   cada componente (`About.jsx` y `Gallery.jsx`).
4. **Colores** — todos los colores del sitio salen de las variables definidas
   arriba de `src/index.css` (`--gold`, `--black`, `--cream`, etc.). Cambiando
   esos valores cambia el sitio entero.

## Notas

- El botón "Reservar turno" y "Escribir por WhatsApp" abren un chat directo
  usando el número que pusiste en `content.js` (formato: código de país +
  número, sin espacios ni símbolos, ej: `59899123456`).
- El mapa y la dirección en la sección de Horarios son placeholders: poné tu
  dirección real y el link de Google Maps de tu local en `content.js`.
