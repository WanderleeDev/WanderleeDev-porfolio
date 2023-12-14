import type { IWeatherData } from '../interfaces/IWeatherData.interface'
import { environment } from '../enviroment'

const endpoint = 'https://api.openweathermap.org/data/2.5/weather'

async function getWeather (city: string): Promise<IWeatherData | null> {
  const queries = new URL(endpoint)
  queries.searchParams.set('q', city)
  queries.searchParams.set('appid', environment.API_KEY)

  try {
    const response: Response = await fetch(`${endpoint}${queries.toString()}`)

    if (!response.ok) {
      throw new Error(` Something wrong: ${response.statusText}`)
    }
    console.log(await response.json())
    return await response.json()
  } catch (err) {
    return null
  }
}

export default getWeather
