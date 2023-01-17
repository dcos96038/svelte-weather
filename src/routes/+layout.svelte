<script>
	import '../app.css';
</script>

<div class="flex w-full justify-center items-center">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		display: flex;
		justify-content: center;
		min-height: 100vh;
		background-color: rgb(30 41 59);
		color: white;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}
</style>
