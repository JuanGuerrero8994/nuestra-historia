import { useMemo } from 'react'
import { GeoPoint } from '../models/GeoPoint'

export function useDistanceViewModel(locationsData) {
  return useMemo(() => {
    const me = new GeoPoint({ name: locationsData.me.name, ...locationsData.me })
    const her = new GeoPoint({ name: locationsData.her.name, ...locationsData.her })
    return { me, her, km: me.distanceTo(her) }
  }, [locationsData])
}
