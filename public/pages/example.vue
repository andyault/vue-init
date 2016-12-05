<style scoped>
	#example {
		justify-content: center;
		align-items: center;

		font-family: arial, sans-serif;
	}
</style>

<template>
	<div id="example">
		<h1>Your Vue app is set up!</h1>
		<p>{{message}}</p>
	</div>
</template>

<script>
	export default {
		props: ['header'],

		data() {
			return {
				message: 'Now go change stuff :)'
			}
		}
	}
</script>