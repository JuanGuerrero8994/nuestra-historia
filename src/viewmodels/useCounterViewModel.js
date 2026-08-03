import { useEffect, useState } from 'react'
import { Couple } from '../models/Couple'

export function useCounterViewModel(coupleData) {
  const couple = new Couple(coupleData)
  const [elapsed, setElapsed] = useState(() => couple.elapsedSince())

  useEffect(() => {
    const interval = setInterval(() => setElapsed(couple.elapsedSince()), 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coupleData.startDate])

  return { nameA: couple.nameA, nameB: couple.nameB, ...elapsed }
}
