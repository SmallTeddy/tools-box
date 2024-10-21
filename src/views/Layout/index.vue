<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div h-screen w-full style="background: #212121" c-white>
    <el-container>
      <el-aside style="width: 240px; height: 100%">
        <el-menu
          default-active="/json/json-format"
          router
          style="height: 100vh; background: #212121; color: #fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="/json">
            <template #title>
              <div class="menu-item" c-white>
                <i class="iconfont icon-json"></i>
                <span ml-2>JSON</span>
              </div>
            </template>
            <el-menu-item index="/json/json-format">
              <span>JSON 美化</span>
            </el-menu-item>
            <el-menu-item index="/json/json-compress">
              <span>JSON 压缩</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/url">
            <template #title>
              <div class="menu-item" c-white>
                <i class="iconfont icon-url"></i>
                <span ml-2>URL</span>
              </div>
            </template>
            <el-menu-item index="/url/url-encode">
              <span>URL 编码</span>
            </el-menu-item>
            <el-menu-item index="/url/url-decode">
              <span>URL 解码</span>
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

<style>
.el-sub-menu__title:hover {
  color: unset;
  background: unset;
}

.el-menu-item {
  color: #fff;
  background: rgba(33, 33, 33, 0.7);
}

.el-menu-item:hover {
  color: #fff;
  background: rgba(33, 33, 33, 0.5);
}

.is-active {
  background: rgba(33, 33, 33, 0.3);
}
</style>
