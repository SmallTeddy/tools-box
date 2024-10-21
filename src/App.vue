<script setup lang="ts">
// import { invoke } from "@tauri-apps/api/core";
const logoLinks = reactive([
  { name: "tauri", href: "https://tauri.app", src: "/tauri.svg" },
  { name: "vite", href: "https://vitejs.dev", src: "/vite.svg" },
  { name: "vue", href: "https://vuejs.org/", src: "/vue.svg" },
  { name: "element-plus", href: "https://pnpm.io/", src: "/element-plus.svg" },
  { name: "unocss", href: "https://s-test.belle.cn/zh-CN/", src: "/unocss.svg" },
  { name: "typescript", href: "https://www.typescriptlang.org/", src: "/typescript.svg" },
]);
</script>

<template>
  <main h-screen flex-center flex-col gap-8>
    <h1 font-size="5xl">Welcome to Tauri + Vue</h1>

    <div flex-center gap-4>
      <el-link
        v-for="link in logoLinks"
        :href="link.href"
        :underline="false"
        target="_blank"
      >
        <img :src="link.src" :class="['logo', link.name]" :alt="link.name" />
      </el-link>
    </div>
    <p  font-size="2xl">
      Click on the Tauri, Vite Vue Element Plus UnoCss, and TypeScript logos to learn
      more.
    </p>
  </main>
</template>

<style scoped>
.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

.logo.element-plus:hover {
  filter: drop-shadow(0 0 2em #409eff);
}

.logo.unocss:hover {
  filter: drop-shadow(0 0 2em #7d8f9b);
}

.logo.typescript:hover {
  filter: drop-shadow(0 0 2em #007acc);
}
</style>
<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.container {
  margin: 0;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}
button:active {
  border-color: #396cd8;
  background-color: #e8e8e8;
}

input,
button {
  outline: none;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
  button:active {
    background-color: #0f0f0f69;
  }
}
</style>
