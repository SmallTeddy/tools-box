<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div h-screen w-full>
    <el-container>
      <el-aside style="width: 240px; height: 100%">
        <el-menu
          default-active="/json/json-format"
          router
          style="height: 100vh"
          @open="handleOpen"
          @close="handleClose"
        >
        <el-sub-menu index="/json">
          <template #title>
            <i class="iconfont icon-json"></i>
            <span ml-2>JSON</span>
          </template>
          <el-menu-item index="/json/json-format">
            <span>JSON 格式化</span>
          </el-menu-item>
          <el-menu-item index="/json/json-compress">
            <span>JSON 压缩</span>
          </el-menu-item>
        </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
