<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import type { IWeather } from 'src/types/weather';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const weatherData: IWeather = data.weather;
</script>

<div
	class="relative h-5/6 md:w-3/6 md:bg-slate-600 md:border rounded-md w-full md:border-black md:drop-shadow-md py-8 px-10"
>
	<section class="flex md:justify-between flex-col md:flex-row">
		<div class="flex flex-col">
			<h2 class="uppercase md:text-xl text-lg mb-2">{weatherData.locationName}</h2>
			<h1 class="md:text-8xl text-6xl font-bold">{weatherData.temperature}°</h1>
		</div>
		<div class="flex justify-start items-center md:flex-row-reverse">
			<h3 class="font-semibold md:transform md:-rotate-90 text-2xl md:cursor-vertical-text">
				{weatherData.conditionText}
			</h3>
			<img src={weatherData.conditionIcon} class="md:w-28" alt={weatherData.conditionText} />
		</div>
	</section>
	<Footer humidity={weatherData.humidity} feelsLike={weatherData.feelsLike} windSpeed={weatherData.windSpeed} />
</div>
