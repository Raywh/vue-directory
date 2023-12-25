<template>
	<div class="w-full h-full">
		<Highlight :code="text" />
	</div>
</template>

<script setup lang="ts">
import Highlight from './Highlight.vue'
import { ref, watch, computed } from "vue";
import { useFileStore } from "@/store/readFile";
import Textarea from 'primevue/textarea';
const fileStore = useFileStore();
const fileReader = new FileReader();
const text = ref('var x = 6;');
// 监听当前选中文件
watch(
	() =>  fileStore.file,
	(target) => {
		fileReader.readAsText(target);
		fileReader.onload = function (e) {
			const content = e.target.result;
			text.value = content as string
		}
		// error
		fileReader.onerror = function (e) {
			console.log(e);
		}
	}
)


</script>

<style scoped>
.w-full {
	width: 100%;
}
</style>