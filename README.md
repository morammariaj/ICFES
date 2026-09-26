# 🎓 ICFES Pro — Validación 2027 & Saber 11 (PWA)

Una Progressive Web Application (PWA) de alto rendimiento, moderna, fluida y responsive, diseñada con estándares de Android Material You (Material 3) y Bootstrap 5.3 para preparar el examen oficial del ICFES Saber 11 en Colombia.

---

## 🚀 Características Principales

1. **Simulacro Oficial Cronometrado**:
   * Temporizador regresivo oficial para el examen.
   * Sistema de preguntas de opción múltiple extraídas de los cuadernillos oficiales del ICFES.
   * Hoja digital de respuestas con selector interactivo y marcado de preguntas dudosas.
   * Diagnóstico interno de desempeño por área y tema. El puntaje oficial del ICFES no se reproduce: su metodología estadística no es pública.
   * Clasificación automática por **Niveles de Desempeño (Nivel 1 al 4)** y estimación de probabilidades de admisión universitaria (UNAL, UdeA, UIS, Becas Generación E / Andrés Bello).

2. **Taller Maestro de Interpretación de Gráficos ICFES**:
   * Módulo especializado para aprender a descifrar diagramas de barras, líneas de tendencia, diagramas de dispersión y correlación, sectores circulares, diagramas de fase y curvas de solubilidad.
   * El método de los 4 pasos para responder preguntas con gráficas en menos de 45 segundos.

3. **Tutor Virtual "Aprende desde Cero"**:
   * Clases maestras pedagógicas de **Física, Química, Biología, Matemáticas, Lectura Crítica, Filosofía, Historia de Colombia y Universal, Geografía y las 7 partes del examen de Inglés**.

4. **Analítica Visual de Rendimiento**:
   * Gráficos interactivos de radar y barras con Chart.js para diagnosticar fortalezas y debilidades.
   * Revisión detallada de preguntas con justificación pedagógica oficial y consejos rápidos.

5. **100% Instalable y Offline First**:
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
\n\n## 🧭 Ruta 2027\nLa app ahora incluye modalidad **Validación del Bachillerato** (principal) y **Saber 11°**, un mapa seleccionable de temas para las cinco pruebas y un bloque de técnicas de resolución tipo selección múltiple. La ruta está diseñada para enseñar temas completos, no solo definiciones, y relacionarlos con práctica, descarte, velocidad y revisión de errores.\n\nLos cuadernillos entregados por el usuario sirven como material de entrenamiento histórico. La estructura oficial vigente debe contrastarse con la guía ICFES de la convocatoria correspondiente.\n

## Banco de entrenamiento actual

La app cuenta actualmente con 47 preguntas cargadas en el banco de práctica: material de entrenamiento existente más preguntas originales creadas para esta app. Las preguntas originales están marcadas como `entrenamiento_nuevo` y no se presentan como preguntas oficiales del ICFES. El diagnóstico de 0–500 de la app es interno y no reproduce la fórmula oficial de calificación.
