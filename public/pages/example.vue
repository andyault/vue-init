<style>
	body, html, main {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;

		background: #eee;
	}

	#example {
		padding: 24px;

		background: #fff;
		border: 1px solid #ccc;
		font-family: arial, sans-serif;
		text-align: center;
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