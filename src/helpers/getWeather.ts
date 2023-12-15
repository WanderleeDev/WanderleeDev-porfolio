import type { IWeatherData } from '../interfaces/IWeatherData.interface'
// import { getGeolocation } from './getGeolocation'
import { environment } from '../enviroment'

const endpoint = 'https://api.openweathermap.org/data/2.5/weather'

async function getWeather (city: string): Promise<IWeatherData | null> {
  // console.log(
  //   await getGeolocation()
  // )
  const url = new URL(endpoint)
  url.searchParams.set('q', city)
  url.searchParams.set('appid', environment.API_KEY)

  try {
    const response: Response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(` Something wrong: ${response.statusText}`)
    }
    return await response.json()
  } catch (err) {
    return null
  }
}

export default getWeather
