# 🎓 ICFES Pro — Validación 2027 & Saber 11 (PWA)

Una Progressive Web Application (PWA) de alto rendimiento, moderna, fluida y responsive, diseñada con estándares de Android Material You (Material 3) y Bootstrap 5.3 para preparar el examen oficial del ICFES Saber 11 en Colombia.

---

## 🚀 Características Principales

1. **Simulacro de entrenamiento con estructura 2026**:
   * Cinco pruebas académicas y dos sesiones de 4 horas y 30 minutos.
   * El modo completo selecciona 254 preguntas académicas: 50 Matemáticas, 41 Lectura Crítica, 50 Sociales y Ciudadanas, 58 Ciencias Naturales y 55 Inglés.
   * Sesión 1: 25 Matemáticas + 41 Lectura + 25 Sociales + 29 Naturales = 120 preguntas.
   * Sesión 2: 25 Matemáticas + 25 Sociales + 29 Naturales + 55 Inglés = 134 preguntas.
   * Hoja digital de respuestas, preguntas marcables y navegación por número.
   * Diagnóstico interno de desempeño. El puntaje oficial del ICFES no se reproduce.

2. **Taller Maestro de Interpretación de Gráficos ICFES**:
   * Módulo especializado para aprender a descifrar diagramas de barras, líneas de tendencia, diagramas de dispersión y correlación, sectores circulares, diagramas de fase y curvas de solubilidad.
   * El método de los 4 pasos para responder preguntas con gráficas en menos de 45 segundos.

3. **Tutor Virtual "Aprende desde Cero"**:
   * Clases maestras pedagógicas de **Física, Química, Biología, Matemáticas, Lectura Crítica, Filosofía, Historia de Colombia y Universal, Geografía y las 7 partes del examen de Inglés**.

4. **Analítica Visual de Rendimiento**:
   * Gráficos interactivos de radar y barras con Chart.js.
   * Diagnóstico por área, subtema y competencia.
   * Revisión detallada de preguntas con explicación y consejo rápido.

5. **Cuestionarios auxiliares**:
   * 24 preguntas de práctica socioeconómica.
   * 24 afirmaciones de práctica de clima escolar.
   * No se califican y se almacenan localmente como cuestionarios auxiliares.

6. **Banco amplio de entrenamiento**:
   * 290 registros cargados en total, incluyendo 286 preguntas académicas de las cinco pruebas y 4 ejercicios de gráficos.
   * El banco ampliado es material original de entrenamiento; no se presenta como material oficial ni como reproducción de cuadernillos.

7. **100% Instalable y Offline First**:
   * Equipada con `manifest.json` y `service-worker.js`.
   * Guarda automáticamente tu nombre, metas, historial de simulacros y notas en `localStorage` (sin requerir base de datos externa).

---

## 💻 Cómo Usarla en tu Computador

* **Opción 1 (Recomendada):** Haz doble clic en el archivo `iniciar_app.bat`. Se abrirá automáticamente en tu navegador con soporte completo de Service Worker y caché offline.
* **Opción 2:** Haz doble clic directo sobre `index.html`.

---

## 📱 Cómo Subirla a GitHub Pages (Para usarla en tu Celular)

Esta aplicación fue creada con arquitectura estática pura, perfecta para publicarse gratis en GitHub Pages:

1. Crea un nuevo repositorio público en tu cuenta de [GitHub](https://github.com/new) (ejemplo: `saber11-app`).
2. Sube todos los archivos y carpetas que están dentro de esta carpeta (`index.html`, `manifest.json`, `service-worker.js`, carpeta `assets`, etc.).
3. En tu repositorio de GitHub, ve a **Settings** (Configuración) ➔ pestaña **Pages** (en el menú lateral izquierdo).
4. En **Branch**, selecciona `main` (o `master`) y carpeta `/(root)`, y presiona **Save**.
5. ¡Listo! En 1 minuto GitHub te dará un enlace público (ej. `https://tu-usuario.github.io/saber11-app/`).
6. Abre ese enlace desde Google Chrome en tu celular Android o Safari en tu iPhone y selecciona **"Agregar a la pantalla principal"** para tenerla instalada como una app nativa.


## 🧭 Ruta 2027\nLa app ahora incluye modalidad **Validación del Bachillerato** (principal) y **Saber 11°**, un mapa seleccionable de temas para las cinco pruebas y un bloque de técnicas de resolución tipo selección múltiple. La ruta está diseñada para enseñar temas completos, no solo definiciones, y relacionarlos con práctica, descarte, velocidad y revisión de errores.

Los cuadernillos entregados por el usuario sirven como material de entrenamiento histórico. La estructura oficial vigente debe contrastarse con la guía ICFES de la convocatoria correspondiente.\n

## Estado del banco y estructura

El repositorio mantiene un banco amplio de preguntas originales de entrenamiento y un simulador que selecciona una versión completa según la estructura de referencia 2026. La guía oficial de 2026 indica cinco pruebas y dos cuestionarios auxiliares; la estructura puede variar según la versión del cuadernillo y las condiciones de aplicación. Para 2027, la app usa esta estructura como referencia de preparación hasta que ICFES publique la guía correspondiente.

El puntaje de 0–500 mostrado por la app es exclusivamente un **diagnóstico interno de entrenamiento** y no reproduce la metodología oficial de calificación del ICFES.
