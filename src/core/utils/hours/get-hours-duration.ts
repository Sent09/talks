export const getHoursDuration = (starHour: string, endHour: string) => {
    const startHourSplited = starHour.split(':')
    const endHourSplited = endHour.split(':')
    return parseInt(endHourSplited[0]) - parseInt(startHourSplited[0])
}
