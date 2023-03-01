import { getHoursDuration } from './get-hours-duration';

describe('getHoursDuration', () => {
    it('should show the difference between 2 hours', () => {
        const startHour = "10:00"
        const endHour = "11:00"
        const duration = getHoursDuration(startHour, endHour)
        expect(duration).toBe(1)
    });
});
