<template>
  <div
    id="sideBarTop"
    class="top-menu-sidebar-container flex"
  >
    <el-scrollbar wrap-class="scrollbar-wrapper reset-menu-style">
      <el-menu
        :default-active="activeMenu"
        :collapse="!isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        mode="horizontal"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from './sidebar-item.vue';

import { computed, defineProps } from 'vue';

defineProps({
  routes: {
    require: false,
    type: Array,
    default: () => [],
  },
  isCollapse: {
    require: false,
    type: Boolean,
    default: false,
  },
  activeMenu: {
    require: false,
    type: String,
    default: '',
  },
});

// 静态变量
const variables = computed(() => {
  return {
    menuText: '#bfcbd9',
    menuActiveText: '#409EFF',
    subMenuActiveText: '#f4f4f5',
    menuBg: '#304156',
    menuHover: '#263445',
    subMenuBg: '#1f2d3d',
    subMenuHover: '#001528',
    sideBarWidth: '210px',
  };
});
</script>
