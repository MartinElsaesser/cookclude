<script setup lang="ts">
const props = defineProps({
	avatar: String,
	title: String,
	rating: String,
	text1: String,
	text2: String
});
</script>

<template>
	<div class="recipe-card">
		<img :src="avatar" alt="avatar image" class="avatar">

		<div class="overlay">
			<header>
				<h4>{{ title }}</h4>
				<div>
					<span class="material-symbols-outlined icon">star</span>
					<span>{{ rating }}</span>
				</div>
			</header>
			<div class="spacer"></div>
			<p>{{ text1 }}</p>
			<p>{{ text2 }}</p>

		</div>

	</div>
</template>


<style scoped>
.recipe-card {
	width: 33%;
	height: 300px;
	background-image: url(https://images.unsplash.com/photo-1551892374-ecf8754cf8b0);
	background-position: center;
	background-size: cover;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
}


.avatar {
	width: 20px;
	position: absolute;
	top: 8px;
	right: 8px;
	user-select: none;
}

.overlay {
	position: absolute;
	height: 100px;
	width: 100%;
	background: rgba(92, 92, 92, 0.8);
	bottom: 0;
	border-radius: 5px;
	padding: 10px;
	color: var(--white);
	display: flex;
	flex-direction: column;
}

.spacer {
	height: 100%;
}

header {
	display: flex;
	justify-content: space-between;
}

.icon {
	font-size: 14px;
	color: #f7ff5c;
	margin-right: 5px;
}

h4 {
	font-size: 16px;
}

span {
	font-size: 14px;
}

p {
	font-size: 10px;
	color: var(--input_dark);
	padding: 2px 0;
}
</style>