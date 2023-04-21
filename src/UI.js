export const ui = (location) => {
    const icon = document.querySelector('img')
    icon.src = location.icon
    const wheather = document.querySelector('.wheather')
    wheather.textContent = location.wheather
    const temperaturCelc = document.querySelector('.celc')
    temperaturCelc.textContent = `${location.tempC} °C`
    const temperaturFaren = document.querySelector('.faren')
    temperaturFaren.textContent = `${location.tempF} °F`
    const city = document.querySelector('.city')
    city.textContent = location.city
    const time = document.querySelector('.time')
    time.textContent = `Time: ${location.time}`
    const date = document.querySelector('.date')
    date.textContent = `Date: ${location.date}`
    const wind = document.querySelector('.wind')
    wind.textContent = `Wind: ${location.wind} kph`
    const pressure = document.querySelector('.pressure')
    pressure.textContent = `Pressure: ${location.pressure} mb`
    const hummidity = document.querySelector('.hummidity')
    hummidity.textContent = `Hummidity: ${location.humidity} %`
}

