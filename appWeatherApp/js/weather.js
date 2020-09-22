const apiKey = 'I3oP4SGg2WsHsL83DLpIrWO72ViqEDLd'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
`${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => {
    `${baseUrl}currentconditions/v1/${Key}?apikey=${apiKey}`
}

const fetchData = async url => {
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Não foi possivel obter os dados')
        }
        return response.json()
    } catch({ name, message }) {
        alert(`${name} : ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
        const [cityData] = await getCityData(cityName)
        return fetchData(getWeatherUrl(cityData))
    }
getCityWeather('Recife')
.then(console.log)

