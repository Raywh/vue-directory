import { defineStore } from "pinia";
import { ref } from "vue";

export const useFileStore = defineStore("read-file", () => {
	const file = ref(null);

	const setFile = (value) => {
		file.value = value
	}

	return {
		file,
		setFile
	}
})