import { useMemo, useState } from 'react'

export function useGalleryViewModel(categories) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? null)

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) ?? categories[0],
    [categories, activeCategoryId]
  )

  const totalPhotos = useMemo(
    () => categories.reduce((sum, c) => sum + c.photos.length, 0),
    [categories]
  )

  return {
    categories,
    activeCategory,
    activeCategoryId,
    setActiveCategoryId,
    totalPhotos,
  }
}
