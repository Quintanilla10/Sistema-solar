# QUINTANILLA - Explorador Solar Interactivo 🌌
[http//sistema-solar-production.up.railway.app]

¡Bienvenido a **QUINTANILLA**, un elegante e interactivo visualizador del sistema solar en 3D desarrollado en **React, Vite y Tailwind CSS**!

Este proyecto fue diseñado con un enfoque minimalista, fluido y altamente estético para explorar los cuerpos celestes de nuestro sistema solar con asombrosos detalles físicos realistas (cráteres en Mercurio, nubes ácidas en Venus, continentes y casquetes polares en la Tierra, tormentas ciclónicas como la Gran Mancha Roja de Júpiter, y los espectaculares anillos de Saturno y Urano).

---

## ✨ Características Principales

*   **🪐 Visualización Ultra Realista (90% más Realismo):** Cada cuerpo celeste está renderizado individualmente con gradientes esféricos 3D personalizados, atmósfera retroiluminada de gas ionizado, tormentas internas, nubes en movimiento y sistemas de anillos con perspectiva de profundidad.
*   **📊 Datos de Órbita y Telemetría Reales:** Consulta la distancia exacta al Sol expresada en Unidades Astronómicas (UA) para cada cuerpo.
*   **🧠 Datos Curiosos Integrados:** Tarjeta interactiva con datos científicos asombrosos y específicos para cada planeta.
*   **🛰️ Órbitas de Satélites Activos:** Lunas realistas orbitando de manera independiente a velocidades gravitatorias proporcionales.
*   **⚙️ Regulador de Velocidad de Órbita en Tiempo Real:** Controla la física espacial alternando la velocidad del cosmos entre **1x** (velocidad contemplativa lenta por defecto), **2x** y **4x**.
*   **🔍 Filtro de Clasificación Inteligente:** Clasifica rápidamente los cuerpos celestes en **Planetas Rocosos**, **Gigantes Gaseosos**, o **Cuerpos Especiales** (como el Sol, la sonda interestelar Voyager 1 o el planeta enano Plutón).
*   **🎨 Diseño Premium de Alta Gama:** Estética con un fondo de malla cuadriculado estelar, tipografía de Space Grotesk, micro-interacciones suaves potenciadas por **Motion (anteriormente Framer Motion)**, y modo nocturno de descanso visual.

---

## 🚀 Tecnologías Utilizadas

*   **React 19** (Componentes Funcionales y Hooks de Estado)
*   **Vite 6** (Entorno de desarrollo ultrarrápido sin HMR para estabilidad)
*   **Tailwind CSS v4** (Estilización utilitaria de alta fidelidad)
*   **Motion** (Animaciones fluidas y transiciones con presencia física)
*   **Lucide React** (Iconos modernos y minimalistas)
*   **TypeScript** (Seguridad de tipos estricta y modularizada)

---

## 🛠️ Instalación y Configuración Local

Sigue estos sencillos pasos para descargar, ejecutar y explorar el proyecto en tu máquina local:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y un gestor de paquetes como `npm`.

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/quintanilla-solar-explorer.git
cd quintanilla-solar-explorer
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo local
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) para iniciar tu viaje espacial interactivo.

### 4. Compilar para producción
Para generar los archivos optimizados y listos para ser desplegados en plataformas como Vercel, Netlify o GitHub Pages, ejecuta:
```bash
npm run build
```

---

## 📂 Estructura del Código

*   `/src/App.tsx` - Controlador de estados de la interfaz de usuario, filtros, regulador de velocidad, sugerencias y barra de navegación lateral.
*   `/src/components/PlanetVisual.tsx` - Renderizador con gradientes, sombras esféricas 3D realistas, lunas orbitales y sistemas de anillos.
*   `/src/data.ts` - Base de datos de telemetría, descripciones en español y datos curiosos para cada cuerpo celeste.
*   `/src/types.ts` - Modelado de tipos e interfaces TypeScript para garantizar la seguridad de datos del sistema solar.
*   `/src/index.css` - Estilos globales, tipografías premium importadas de Google Fonts, y animaciones personalizadas de rotación tridimensional.

---

## 🌌 Créditos y Personalización

Desarrollado con dedicación por **QUINTANILLA**. ¡Que tengas un excelente viaje a través de las estrellas! 🚀
