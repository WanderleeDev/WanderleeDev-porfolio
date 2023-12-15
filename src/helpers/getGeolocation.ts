const getPosition = (position: GeolocationPosition): number[] => {
  return [
    position.coords.latitude,
    position.coords.longitude
  ]
}

const errorPosition = (error: GeolocationPositionError): void => {
  let message: string

  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = 'User denied the request for Geolocation.'
      break
    case error.POSITION_UNAVAILABLE:
      message = 'Location information is unavailable.'
      break
    case error.TIMEOUT:
      message = 'Se agotó el tiempo de espera de la solicitud para obtener la ubicación del usuario'
      break
    default:
      message = 'Error desconocido'
      break
  }
  throw new Error(message)
}

export async function getGeolocation (): Promise<number[] | null> {
  return await new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => { resolve(getPosition(position)) },
        (error) => {
          try {
            errorPosition(error)
          } catch (err) {
            reject(err)
          }
        }
      )
    } else {
      resolve(null)
    }
  })
}
