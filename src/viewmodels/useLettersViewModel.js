import { useMemo, useState } from 'react'
import { Letter } from '../models/Letter'

export function useLettersViewModel(rawLetters) {
  const letters = useMemo(() => rawLetters.map((l) => new Letter(l)), [rawLetters])
  const [openId, setOpenId] = useState(null)

  const openLetter = (id) => setOpenId(id)
  const closeLetter = () => setOpenId(null)
  const openedLetter = letters.find((l) => l.id === openId) ?? null

  return { letters, openedLetter, openLetter, closeLetter }
}
