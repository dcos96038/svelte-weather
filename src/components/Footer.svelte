<script lang="ts">
  export let humidity: number
  export let windSpeed: number
  export let feelsLike: number
</script>

<div class="flex justify-center w-full absolute right-0 left-0 bottom-14">
  <div
    class="flex bg-white text-black drop-shadow-sm gap-4 justify-around md:w-10/12 border rounded-md py-2 px-4"
  >
    <div class="flex flex-col items-center">
      <h6 class="text-lg font-bold">{humidity}%</h6>
      <span class="text-sm font-semibold">Humidity</span>
    </div>
    <div class="flex flex-col items-center">
      <h6 class="text-lg font-bold">{windSpeed} km/h</h6>
      <span class="text-sm font-semibold">Wind Speed</span>
    </div>
    <div class="flex flex-col items-center">
      <h6 class="text-lg font-bold">{feelsLike}°</h6>
      <span class="text-sm font-semibold">Feels Like</span>
    </div>
  </div>
</div>