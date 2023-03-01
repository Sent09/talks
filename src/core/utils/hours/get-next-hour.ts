export const getNextHour = (hour: string) => {
    if (hour) {
        const hourSplited = hour.split(':')
        return `${parseInt(hourSplited[0]) + 1}:00`
    }
    return ''
}
