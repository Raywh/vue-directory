<template>
	<div class="w-full h-full">
		<Highlight :code="text" />
		<PreviewImage v-if="imageUrl" :src="imageUrl" />
	</div>
</template>

<script setup lang="ts">
import Highlight from './Highlight.vue'
import PreviewImage from './PreviewImage.vue'
import { ref, watch, computed } from "vue";
import { useFileStore } from "@/store/readFile";
import Textarea from 'primevue/textarea';
const fileStore = useFileStore();
const fileReader = new FileReader();
const text = ref('var x = 6;');
const imageUrl = ref('');
// 监听当前选中文件
watch(
	() =>  fileStore.file,
	(target) => {
		console.log("🚀 ~ file: index.vue:19 ~ target:", target)

		// 如果是图片 获取图片的base64
		console.log(target.type.startsWith('image/'))
		if (target.type.startsWith('image/')) {
			imageUrl.value = URL.createObjectURL(target);
			return
		} else if (getFileType(target.name) === 'unknown') {
			return
		}
		// 读取文件
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
// 根据type判断文件类型
function judgeFileType(file) {
	if (file.type === "text/plain") {
		return true
	} else {
		return false
	}
}
// 根据文件后缀判断文件类型
function getFileType(fileName) {
  const extension = fileName.toLowerCase().split('.').pop();

  switch (extension) {
		case 'txt':
      return 'TXT';
    case 'xml':
      return 'XML';
    case 'html':
      return 'HTML';
    case 'vue':
      return 'HTML Vue JS Template';
    case 'pug':
      return 'Pug';
    case 'js':
      return 'JavaScript';
    case 'json':
      return 'JSON';
    case 'css':
      return 'CSS';
    case 'php':
      return 'PHP';
    case 'sql':
    case 'mysql':
      return 'MySQL';
    default:
			return 'unknown';
  }
}

</script>

<style scoped>
.w-full {
	width: 100%;
}
</style>