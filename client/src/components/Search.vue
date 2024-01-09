<script setup lang="ts">
</script>

<template>
	<div class="search-bar">
		<span class="material-symbols-outlined left">fastfood</span>
		<input type="text" placeholder="Was möchtest du heute essen?">
		<button class="right">
			<span class="material-symbols-outlined">settings</span>
		</button>
	</div>
</template>

<style scoped>
.search-bar {
	position: relative;
	width: 100%;
}

input {
	width: 100%;
	border: 1px solid var(--secondary);
	outline: none;
	padding: 10px 40px 10px 40px;
	border-radius: 50px;
}

span.left {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	color: var(--secondary);
	left: 10px;
}

button.right {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	color: var(--primary);
	right: 10px;
}

button span {
	color: inherit;
}
</style>