
import type { IRequestOptions } from "src/types/requestOptions";
import type { WeatherResponse } from "src/types/weather";
import type { RequestEvent } from "../$types";
import { API_KEY, API_HOST } from '$env/static/private'

const FETCH_OPTIONS: IRequestOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST
	}
};

/** @type {import('./$types').RequestHandler} */
export async function GET({url}: RequestEvent) {
	const query = url.searchParams.get('q') ?? 'Tucuman'

  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)

	const data: WeatherResponse = await response.json()

	return new Response(JSON.stringify({
		conditionIcon: data.current.condition.icon,
		conditionText: data.current.condition.text,
		country: data.location.country,
		localtime: data.location.localtime,
		locationName: data.location.name,
		humidity: data.current.humidity,
		isDay: data.current.is_day,
		feelsLike: data.current.feelslike_c,
		temperature: data.current.temp_c,
		windSpeed: data.current.wind_kph,
		windDir: data.current.wind_dir
  }, null, 2),{status: 200})

}