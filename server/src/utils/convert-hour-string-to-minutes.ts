export function convertHourStringToMinutes(hourSrting: string){
    const [hours, minutes] = hourSrting.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes

    return minutesAmount
}