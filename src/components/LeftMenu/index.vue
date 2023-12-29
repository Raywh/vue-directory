<template>
  <div class="left-menu">
    <Button label="打开" @click="open" />

    <!-- <div id="output"></div> -->
    <Tree
      :value="nodes"
      selectionMode="single"
      :metaKeySelection="false"
			class="tree"
      @nodeSelect="onNodeSelect"
    ></Tree>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "primevue/button";
import Tree from "primevue/tree";
import { useFileStore } from "@/store/readFile";
const fileStore = useFileStore();

const nodes = ref(null);

const open = async () => {
  // 打开文件或文件夹
  pickDirectory();
};

async function pickDirectory() {
  try {
    const directoryHandle = await window.showDirectoryPicker({
			id: 'test',
			mode: 'readwrite',
			startIn: 'documents',
		});
    console.log("🚀 ~ file: index.vue:83 ~ pickDirectory ~ directoryHandle:", directoryHandle)
    // Use directoryHandle to access the selected directory
    console.log("Selected directory:", directoryHandle.name);

    // Construct and display the directory tree
    const tree = await buildTree(directoryHandle);
    nodes.value = [tree];
  } catch (err) {
    console.error("Error picking directory:", err);
  }
}

async function buildTree(directoryHandle) {
  const tree = {
    key: guid(),
    label: directoryHandle.name,
    type: "directory",
    children: [],
  };

  const dirEntries = await directoryHandle.values();
  for await (const entry of dirEntries) {
    console.log("🚀 ~ file: index.vue:98 ~ forawait ~ entry:", entry)
    entry.isDirectory = entry.kind === "directory";
    if (entry.isDirectory) {
      const subtree = await buildTree(entry);
      tree.children.push(subtree);
    } else {
			tree.children.push({ key: guid(), label: entry.name, type: "file", data: entry });
    }
  }
  return tree;
}

// 生成id
function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const onNodeSelect = async (node) => {
	console.log("onNodeSelect", node);
	console.log("onNodeSelect", node.label);
	if (node.type === "file") {
		const file = await node.data.getFile();
		fileStore.setFile(file);
	}
};


</script>

<style lang="scss" scoped>
.left-menu {
  width: 300px;
	overflow: auto;
  border-right: 1px solid #ccc;
  padding: 10px;
}
.tree {
	overflow: auto;
	height: calc(100vh - 70px);
	margin-top: 10px;
}
</style>
