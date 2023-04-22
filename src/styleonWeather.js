const sunnyWeather = ['Clear', 'Sunny'];
const cloudyWeather = ['Partly cloudy', 'Cloudy', 'Overcast', 'Mist', 'Fog', 'Freezing fog'];
const rainyWeather = ['Patchy rain possible', 'Patchy light drizzle', 'Light drizzle', 'Freezing drizzle', 'Heavy freezing drizzle', 'Patchy light rain', 'Light rain', 'Moderate rain at times', 'Moderate rain', 'Heavy rain at times', 'Heavy rain', 'Light freezing rain', 'Moderate or heavy freezing rain', 'Light rain shower', 'Moderate or heavy rain shower', 'Torrential rain shower', 'Patchy light rain with thunder', 'Moderate or heavy rain with thunder'];
const snowyWeather = ['Patchy snow possible', 'Patchy sleet possible', 'Patchy freezing drizzle possible', 'Blowing snow', 'Blizzard', 'Light sleet', 'Moderate or heavy sleet', 'Patchy light snow', 'Light snow', 'Patchy moderate snow', 'Moderate snow', 'Patchy heavy snow', 'Heavy snow']

export const changeStyleOnWeather = (location) => {

    const weather = location.current.condition.text

    const footer = document.querySelector('.footer')
    const container = document.querySelector('.container')


    if(sunnyWeather.includes(weather)){
        footer.className = 'footer sunny'
        container.className = 'container sunny'
    }
    else if(cloudyWeather.includes(weather)){
        footer.className = 'footer cloudy'
        container.className = 'container cloudy'
    }
    else if(rainyWeather.includes(weather)){
        footer.className = 'footer rainy'
        container.className = 'container rainy'
    }
    else if(snowyWeather.includes(weather)){
        footer.className = 'footer snowy'
        container.className = 'container snowy'
    }

}