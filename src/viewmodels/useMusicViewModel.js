import { useEffect, useRef, useState } from 'react'

export function useMusicViewModel({ src, title, artist, durationLabel = '4:23' }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0.28)

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.volume = 0.4
        await audio.play()
        setIsPlaying(true)
      }
    } catch {
      // No hay archivo de audio disponible todavía; no rompe la UI.
      setIsPlaying((p) => !p)
    }
  }

  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.004))
    }, 250)
    return () => clearInterval(id)
  }, [isPlaying])

  return { audioRef, isPlaying, toggle, progress, src, title, artist, durationLabel }
}
