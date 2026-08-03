Cada categoría tiene su propia carpeta:
  /public/photos/salidas/
  /public/photos/primera-cita/
  /public/photos/collages/
  /public/photos/primer-viaje/
  /public/photos/primera-conversacion/
  /public/photos/videollamadas/

Pon tus fotos dentro de la carpeta correspondiente y luego, en
src/data/photos.js, cambia "src: null" por la ruta, ej:
  src: '/photos/salidas/foto1.jpg'

Puedes agregar más fotos a cualquier categoría copiando el mismo
formato { id, src, caption } dentro de su lista "photos".
