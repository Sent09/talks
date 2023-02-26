import 'reflect-metadata'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetTopics } from './useGetTopics'

describe('useGetTopics', () => {
    it('should return the initial status', async () => {
        const { result } = renderHook(() => useGetTopics())

        await waitFor(() => expect(result.current.selectOptions.length).toBe(0))

        const { selectOptions } = result.current
        expect(selectOptions.length).toBe(0)
    })

    it('should return an object with the topics', async () => {
        const { result } = renderHook(() => useGetTopics())

        await waitFor(() => expect(result.current.selectOptions.length).toBeGreaterThan(0))

        const { selectOptions } = result.current
        expect(selectOptions.length).toBeGreaterThan(0)
    })
})

export {}
