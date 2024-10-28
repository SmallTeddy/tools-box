<script setup lang="ts">
import CodePreview from '../Components/CodePreview.vue';

const code = `let a = 1`;
</script>

<template>
  <div>
    <CodePreview :code="code" type="js" isShowlineNumbers />
  </div>
</template>
