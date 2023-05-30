function unix(dt, type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    let result = type == 'day' ? data.toLocaleString('ru-RU', {day: 'numeric'}) :
        type == 'month' ? data.toLocaleString('ru-RU', {month: 'short'}) :
            type == 'weekday' ? data.toLocaleString('ru-RU', {weekday: 'short'}) : ''
    return result
}
export default unix
