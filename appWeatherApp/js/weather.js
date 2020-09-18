const apiKey = 'I3oP4SGg2WsHsL83DLpIrWO72ViqEDLd'

const getCityUrl = cityName => 
`http://dataservice.accuweather.com/locations/v1/cities/search?apiKey=${apiKey}&q=${cityName}`

http://dataservice.accuweather.com/locations/v1/cities/search?apiKey=I3oP4SGg2WsHsL83DLpIrWO72ViqEDLd&q=salvador

const getCityData = async cityName => {
    try{
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok){
            throw new Error('Não foi possivel obter os dados')
        }

        const [cityData] = await response.json()
        console.log(cityData)
    } catch({ name, message }) {
        alert(`${name} : ${message}`)
    }
}

getCityData('São Paulo')