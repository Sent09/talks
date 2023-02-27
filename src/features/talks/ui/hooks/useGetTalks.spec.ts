import 'reflect-metadata'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetTalks } from './useGetTalks'

describe('useGetTalks', () => {
    it('should return the initial status', async () => {
        const topicSelected = -1
        const speakerSelected = -1
        const { result } = renderHook(() => useGetTalks({ topicSelected, speakerSelected }))

        await waitFor(() => expect(result.current.talks.length).toBe(0))

        const { halls, hours, talks } = result.current
        expect(halls.length).toBe(0)
        expect(hours.length).toBe(0)
        expect(talks.length).toBe(0)
    })

    it('should return unfiltered talks', async () => {
        const topicSelected = -1
        const speakerSelected = -1
        const { result } = renderHook(() => useGetTalks({ topicSelected, speakerSelected }))

        await waitFor(() => expect(result.current.talks.length).toBeGreaterThan(0))

        const { halls, hours, talks } = result.current
        expect(halls.length).toBeGreaterThan(0)
        expect(hours.length).toBeGreaterThan(0)
        expect(talks.length).toBeGreaterThan(0)
    })

    it('should return filtered talks', async () => {
        const topicSelected = 1
        const speakerSelected = 1
        const { result } = renderHook(() => useGetTalks({ topicSelected, speakerSelected }))

        await waitFor(() => expect(result.current.talks.length).toBeGreaterThan(0))

        const { halls, hours, talks } = result.current
        expect(halls.length).toBe(1)
        expect(hours.length).toBe(1)
        expect(talks.length).toBe(1)
    })
})
