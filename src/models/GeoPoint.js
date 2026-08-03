const EARTH_RADIUS_KM = 6371

function toRad(deg) {
  return (deg * Math.PI) / 180
}

export class GeoPoint {
  constructor({ name, lat, lng }) {
    this.name = name
    this.lat = lat
    this.lng = lng
  }

  /** Distancia en km hacia otro GeoPoint, fórmula de Haversine */
  distanceTo(other) {
    const dLat = toRad(other.lat - this.lat)
    const dLng = toRad(other.lng - this.lng)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(this.lat)) *
        Math.cos(toRad(other.lat)) *
        Math.sin(dLng / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return Math.round(EARTH_RADIUS_KM * c)
  }
}
