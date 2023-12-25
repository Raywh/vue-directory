<template>
	<HighlightComponent :code="code" language="javascript" />
</template>

<script setup lang="ts">
import 'highlight.js/lib/core';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';

// import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

// hljs.registerLanguage('javascript', javascript);

import { defineComponent, ref, watch } from 'vue';

const code = ref("console.log('Hello World');");

const HighlightComponent = defineComponent({
	...hljsVuePlugin.component
});

// const props = defineProps({
// 	code: {
// 		type: String,
// 		default: 'var x = 6;'
// 	}
// })

</script>

<style lang="css" scoped>
	/* import 'highlight.js/styles/github.css'; */
</style>
