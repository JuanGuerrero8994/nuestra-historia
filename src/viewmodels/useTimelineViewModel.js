import { useMemo } from 'react'
import { Milestone } from '../models/Milestone'

export function useTimelineViewModel(rawMilestones) {
  const items = useMemo(
    () =>
      rawMilestones
        .map((data) => new Milestone(data))
        .sort((a, b) => a.date - b.date),
    [rawMilestones]
  )
  return { items }
}
