const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

const showCityWeatherInfo = async cityName => {

    const [{ key, LocalizedName }] = await getCityData(cityName)
    const [{ WeatherText, Temperature, isDayTime, WeatherIcon }] = await getCityWeather(key)
    const timeIcon = `<img src="./src/icons/${WeatherIcon}" />`

    timeImg.src = isDayTime ? './src/day.svg' : './src/night.svg'
    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.value
}


cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    showCityCard()
    showCityWeatherInfo(inputValue)

    cityForm.reset()
})
