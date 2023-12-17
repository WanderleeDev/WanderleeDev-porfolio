import { match } from 'ts-pattern'
import { type IPositionLocation } from 'src/interfaces/IPositionLocation.interface'

//  successful location
const getPosition = (position: GeolocationPosition): IPositionLocation => {
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
}

//  error location
const errorPosition = (error: GeolocationPositionError): void => {
  let message = 'unknown error'

  match(error.code)
    .with(1, () => { message = error.message })
    .with(2, () => { message = error.message })
    .with(3, () => { message = error.message })

  throw new Error(message)
}

export async function getGeolocation (): Promise<IPositionLocation | null> {
  return await new Promise((resolve, reject) => {
    match('geolocation' in navigator)
      .with(true, () => {
        navigator.geolocation.getCurrentPosition(
          position => { resolve(getPosition(position)) },
          error => {
            try {
              errorPosition(error)
            } catch (err) {
              reject(err)
            }
          }
        )
      })
      .with(false, () => { resolve(null) })
      .exhaustive()
  })
}
