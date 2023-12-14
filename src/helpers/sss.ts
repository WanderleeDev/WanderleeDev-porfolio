import type { ISpaceX } from '../interface/launch.interface'

const URLBASE = 'https://api.spacexdata.com/v5/launches'

const queries = new URLSearchParams({
  limit: '10',
  offset: '0'
}).toString()

export const fetchData = async (): Promise<ISpaceX[] | null> => {
  try {
    const data = await fetch(`${URLBASE}?${queries}`, {
      method: 'GET'
    })

    if (!data.ok) {
      throw new Error('Error en la solicitud')
    }

    return await data.json()
  } catch (error) {
    console.error('Se ha producido un error al intentar traer la data')
    return null
  }
}
