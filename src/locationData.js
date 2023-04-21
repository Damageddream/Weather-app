export const location = (data) => {

    const city = data.location.name
    const time = data.location.localtime.slice(-6)
    const date = data.location.localtime.slice(8,10)+data.location.localtime.slice(4,8)+data.location.localtime.slice(0,4)
    const wheather = data.current.condition.text
    const tempC = data.current.temp_c
    const tempF = data.current.temp_f
    const wind = data.current.wind_kph
    const pressure = data.current.pressure_mb
    const humidity = data.current.humidity
    const icon = `./icons/${data.current.condition.icon.slice(-7)}`

    return {city, time, date, wheather, tempC, tempF, wind, pressure, humidity, icon}
}


