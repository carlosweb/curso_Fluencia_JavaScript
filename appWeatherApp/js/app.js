const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')


const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')


cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    const [{ key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature }] = await getCityWeather(key)
    

    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }

    if(isDayTime){
        timeImg.src = './src/day.svg'
    }else{
        timeImg.src = './src/night.svg'
    }

    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.value

    console.log(WeatherText, Temperature.Metric.value)

    cityForm.reset()
})
