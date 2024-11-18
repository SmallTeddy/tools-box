<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div h-screen w-full style="background: #0d0d0e; color: #f9f9f9">
    <el-container>
      <el-aside style="width: 240px; height: 100%">
        <el-menu
          default-active="/code/prismjs-code-highlight"
          router
          style="
            height: 100vh;
            background: #0d0d0e;
            color: #f9f9f9;
            border-right: 1px solid #232325;
          "
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="/code">
            <template #title>
              <div class="menu-item" style="color: #f9f9f9">
                <i class="iconfont icon-code"></i>
                <span ml-2>代码</span>
              </div>
            </template>
            <el-menu-item index="/code/prismjs-code-highlight">
              <span>Prismjs 代码高亮</span>
            </el-menu-item>
            <el-menu-item index="/code/shiki-code-highlight">
              <span>Shiki 代码高亮</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/editor">
            <template #title>
              <div class="menu-item" style="color: #f9f9f9">
                <i class="iconfont icon-code"></i>
                <span ml-2>编辑器</span>
              </div>
            </template>
            <el-menu-item index="/editor/wang-editor">
              <span>WangEditor 编辑器</span>
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
  box-sizing: border-box;
  color: #f9f9f9;
  background: #0d0d0e;
  border: 1px solid #232325;
}

.el-menu-item:hover {
  color: #f9f9f9;
  background: #232325;
}

.el-menu--inline .is-active {
  box-sizing: border-box;
  color: #f9f9f9 !important;
  background: #0d0d0e;
  border: 1px solid #f9f9f9;
}
</style>
