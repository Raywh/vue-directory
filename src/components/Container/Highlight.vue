<template>
  <ssh-pre
    :label="options.label"
    :language="options.language"
    :dark="options.dark"
		:editable="options.editable"
		:tab="options.tab"
    copyButton="options.copyButton"
    @copied="onCopiedDoSomething"
  >
    {{ code }}
  </ssh-pre>

  <Toast />
</template>

<script setup lang="ts">
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import { ref, reactive } from "vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const options = reactive({
  language: "js",
  label: "Javascript",
  dark: true,
  copyButton: true,
	editable:true,
	tab: ' '

});

const props = defineProps({
  code: {
    type: String,
    default: "var x = 6;",
  },
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

<style lang="css" scoped></style>
