<template>
  <ssh-pre
    :label="options.label"
    :language="options.language"
    :dark="options.dark"
    :editable="options.editable"
    :tab="options.tab"
    :copy-button="options.copyButton"
    @copied="onCopiedDoSomething"
		class="h-full"
  >
    {{ code }}
  </ssh-pre>

  <Toast />
</template>

<script setup lang="ts">
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import { ref, reactive, watch } from "vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const options = reactive({
  language: "js",
  label: "Javascript",
  dark: true,
  copyButton: true,
  editable: false,
  tab: " ",
});

const props = defineProps({
  code:  ""
});

const onCopiedDoSomething = () => {
  console.log("copied");
  toast.add({
    severity: "success",
    summary: "",
    detail: "Copy success",
    life: 3000,
  });
};
</script>

<style lang="scss" scoped>
.h-full {
	overflow: auto;
	height: 100vh;
	margin-top: 0;
	/* 滚动条样式 */
	overflow-y: scroll;
}
</style>
