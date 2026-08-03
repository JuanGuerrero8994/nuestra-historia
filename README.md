# Nuestra Historia 💗

Dashboard tipo "álbum interactivo" para celebrar sus 3 meses: sidebar de
navegación, portada con contador en vivo, y tarjetas numeradas con
conversación, primera cita, fotos, línea de tiempo, distancia entre
ciudades, música, cartas, mensaje en video y cierre.

## Cómo correrla

```bash
npm install
npm run dev
```

## Cómo personalizarla

Todo el contenido vive en `src/data/*.js`, editar ahí, nada de tocar los
componentes:

| Archivo | Qué controla |
|---|---|
| `coupleData.js` | Nombres y fecha de inicio |
| `chatMessages.js` | Los mensajes de la tarjeta "Conversación" |
| `firstDate.js` | Fecha, lugar, foto y texto de la primera cita |
| `photos.js` | Las categorías de la galería (Salidas, Primera cita, Collages, Primer viaje, Primera conversación, Videollamadas) y sus fotos |
| `milestones.js` | Los hitos de la línea de tiempo |
| `locations.js` | Ciudades para calcular la distancia (lat/lng) |
| `song.js` | Canción, artista y frase de la tarjeta de música |
| `letters.js` | Las cartas (título, resumen y texto completo) |
| `videoMessage.js` | El mensaje en video final |

**Fotos**: cada categoría tiene su propia carpeta dentro de `public/photos/`
(`salidas`, `primera-cita`, `collages`, `primer-viaje`,
`primera-conversacion`, `videollamadas`). Coloca tus fotos ahí y
actualiza la ruta `src` en `src/data/photos.js`. **Música y video**
van en `public/audio` y `public/video` (cada carpeta trae un
`README.txt` con el nombre esperado). Si no agregas nada, se muestran
marcadores elegantes en su lugar, sin romper el diseño.

## Arquitectura (MVVM)

```
src/
  models/       → Model: entidades del dominio, JS puro sin React
                  (Couple, Milestone, GeoPoint, ChatMessage, Letter)
  viewmodels/   → ViewModel: hooks que calculan el estado que las
                  Views necesitan (contador, distancia, música,
                  cartas abiertas, sección activa del sidebar)
  views/        → View: componentes de presentación. Reciben datos
                  ya calculados y solo los pintan.
  data/         → contenido editable (nombres, fechas, mensajes...)
  styles/       → CSS global y de componentes
```

Regla del patrón: las **Views** nunca calculan nada por su cuenta
(fechas, distancias, tiempo transcurrido); siempre lo piden a un
**ViewModel**, y los **ViewModels** nunca importan JSX, solo usan los
**Models**.

## Stack

- React 18 + Vite
- Framer Motion (animaciones de entrada)
- CSS puro con variables de diseño, sin librería de UI
