const key = "ba605efc18f1572f61892fe426f18a1a"
const apiCountryURL = "https://flagsapi.com//shiny/64.png"
const cityinput = document.querySelector('#city-input')
const button = document.querySelector('#search')


const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('.descripition')
const weathericonElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const humidityElement = document.querySelector('#humidity span')
const windElement = document.querySelector('#wind span')
const weatherContainer = document.querySelector('#weather-data')

const getWeatherData =  async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`
    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    console.log(data)
    return data
}

const showdata =  async (city) => {
    
    
    
    const data =  await getWeatherData(city)
    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weathericonElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`
    weatherContainer.classList.remove("hide")

}


button.addEventListener("click", (e) => {
e.preventDefault()
const city = cityinput.value;

showdata(city)
error(city)
})

cityinput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value

        showdata(city)
    }
})
