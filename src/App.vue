<script setup lang="ts">
import LeftMenu from './components/LeftMenu/index.vue';
import Container from './components/Container/index.vue';
</script>

<template>
	<div class="app-box">
    <LeftMenu />
		<Container />
  </div>
</template>

<style scoped>
.app-box {
	/* width: 100%; */

	display: flex;

}
</style>
