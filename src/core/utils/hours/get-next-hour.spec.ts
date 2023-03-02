import { getNextHour } from './get-next-hour'

describe('getNextHour', () => {
    it('should return the next hour of given hour', () => {
        const currentHour = '10:00'
        const expectedHour = '11:00'
        const returnedHour = getNextHour(currentHour)

        expect(returnedHour).toBe(expectedHour)
    })
})
