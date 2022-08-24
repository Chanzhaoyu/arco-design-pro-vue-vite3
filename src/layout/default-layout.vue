<template>
  <a-layout class="layout" :class="{ mobile: appStore.hideMenu }">
    <div v-if="navbar" class="layout-navbar"> layout-navbar </div>
    <a-layout>
      <a-layout>
        <a-layout-sider
          class="layout-sider"
          breakpoint="xl"
          :collapsible="true"
        >
          <div class="menu-wrapper"> menu</div>
        </a-layout-sider>
        <a-layout>
          <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import { ref, computed, watch, provide } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useAppStore, useUserStore } from '@/store';
  import usePermission from '@/hooks/permission';

  const appStore = useAppStore();
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const permission = usePermission();
  const navbarHeight = `60px`;
  const navbar = computed(() => appStore.navbar);
  const renderMenu = computed(() => appStore.menu);
  const hideMenu = computed(() => appStore.hideMenu);
  const footer = computed(() => appStore.footer);
</script>

<style></style>
