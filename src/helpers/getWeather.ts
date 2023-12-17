import { P, match } from 'ts-pattern'
import { environment } from '../enviroment'
import type { IWeatherData } from '../interfaces/IWeatherData.interface'
import type { IPositionLocation } from 'src/interfaces/IPositionLocation.interface'

const endpoint = 'https://api.openweathermap.org/data/2.5/weather'

//  configuración de los parámetros de la petición url por localización, país o ciudad
const defineUrlParams = (params: IPositionLocation | string): URL => {
  const url = new URL(endpoint)
  const messageError = 'El valor no puede ser nulo o una cadena vacía'
  console.log(params)

  if (params === null || params === '') throw new Error(messageError)

  match(params)
    .with({ latitude: P.number, longitude: P.number }, (params: IPositionLocation) => {
      url.searchParams.set('lat', params.latitude.toString())
      url.searchParams.set('lon', params.longitude.toString())
    })
    .with(P.string, (params: string) => { url.searchParams.set('q', params) })
    .exhaustive()

  url.searchParams.set('appid', environment.API_KEY)
  return url
}

async function getWeather (params: IPositionLocation | string): Promise<IWeatherData | null> {
  const url = defineUrlParams(params)
  console.log('sa')

  try {
    const response: Response = await fetch(url.toString())
    if (!response.ok) { throw new Error(` Something wrong: ${response.statusText}`) }

    return await response.json()
  } catch (err) {
    return null
  }
}

export default getWeather
