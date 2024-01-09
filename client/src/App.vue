<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<main>
		<RouterView />
	</main>
	<nav>
		<RouterLink to="/">
			<span class="material-symbols-outlined">fastfood</span>
		</RouterLink>
		<RouterLink to="/add">
			<span class="material-symbols-outlined">add_circle</span>
		</RouterLink>
		<RouterLink to="/group">
			<span class="material-symbols-outlined">group</span>
		</RouterLink>
		<RouterLink to="/shoppinglist">
			<span class="material-symbols-outlined">format_list_bulleted</span>
		</RouterLink>
		<RouterLink to="/profile">
			<span class="material-symbols-outlined">face</span>
		</RouterLink>
	</nav>
</template>

<style scoped>
main {
	height: 100%;
	padding: 10px 10px 0 10px;
	overflow: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
}

nav {
	background: var(--dark);
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px 0;
}

nav a {
	display: block;
	font-size: 2rem;
	color: var(--secondary);
}

nav a.router-link-active {
	color: var(--primary);
}

nav a:hover {
	opacity: 0.8;
	transform: translateY(5%);
}

nav a span {
	color: inherit;
}
</style>

