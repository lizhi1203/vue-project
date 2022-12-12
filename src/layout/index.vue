<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="1"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-sub-menu index="2">
            <template v-slot:title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项4</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-sub-menu index="2-4">
              <template v-slot:title>选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">
              <a href="https://element3-ui.com" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <router-link to="/">图表</router-link>
          </div>
          <div>
            <router-link to="/about">关于</router-link>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.common-layout {
  .el-header {
    padding: 0;
  }
  .el-footer,
  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-header,
  .el-footer {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-main {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-text-color-primary);
    text-align: center;
    height: calc(100vh - 60px);
  }
}
</style>