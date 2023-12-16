import { error } from 'node_modules/astro/dist/core/logger/core'
import { match } from 'ts-pattern'

//  successful location
const getPosition = (position: GeolocationPosition): number[] => {
  return [
    position.coords.latitude,
    position.coords.longitude
  ]
}

//  error location
const errorPosition = (error: GeolocationPositionError): void => {
  let message = 'unknown error'

  match(error.code)
    .with(1, () => { message = error.message })
    .with(2, () => { message = error.message })
    .with(3, () => { message = error.message })
    .otherwise(() => {
      message = 'unknown error'
    })

  throw new Error(message)
}

export async function getGeolocation (): Promise<number[] | null> {
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
