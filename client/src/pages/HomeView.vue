
<script setup lang="ts">
import Search from "../components/Search.vue";
import Recipe from "../components/Recipe.vue";

import { ref } from "vue";
let avatar = ref("https://api.multiavatar.com/Jussy.png");
let title = ref("Müsli");
let rating = ref("4.3");
let text1 = ref("1 Schüssel (200 g)");
let text2 = ref("320 Kcal | 25% AKG");
</script>

<template>
	<Search></Search>
	<div class="recipes">
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>

		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>

		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>
		<Recipe :avatar="avatar" :title="title" :rating="rating" :text1="text1" :text2="text2"></Recipe>


	</div>
</template>

<style scoped>
.recipes {
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: start;
}
</style>