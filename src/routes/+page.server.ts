import type {  PageServerData, PageServerLoadEvent } from "./$types"

/** @type {import('./$types').PageServerLoad} */
export async function load ({fetch, url}: PageServerLoadEvent) {

  const query: string = url.searchParams.get('q') ?? 'Tucuman'

  async function getWeather() {
		const resp = await fetch(`/api/get-weather?q=${query}`)
    const data = await resp.json()

    return data as PageServerData
	}

  return {
    weather: await getWeather()
  }
};