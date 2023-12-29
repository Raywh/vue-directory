<template>
  <Dialog
    v-model:visible="visible"
    modal
  >
    <div class="image-box">
      <Image :src="src" alt="Image" width="250" preview />
    </div>
  </Dialog>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Dialog from "primevue/dialog";
import Image from "primevue/image";
defineOptions({
  name: "PreviewImage",
});

// 获取父组件的图片src
const props = defineProps({
  src: {
    type: String,
    default:
      "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
  },
});

// const visible = computed(() => !!props.src);
const visible = ref(false);

watch(
	() => props.src,
	(target) => {
		visible.value = !!target;
	}
);

</script>

<style lang="scss" scoped>
	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
