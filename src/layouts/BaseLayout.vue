<script setup lang="ts" name="BaseLayout">
import { BaseFooter, BaseHeader } from "@components";

import { RouterView } from "vue-router";
</script>

<template>
  <base-header />

  <main class="mian-container">
    <router-view />
  </main>

  <base-footer />
</template>

<style scoped lang="scss">
.mian-container {
  overflow: hidden;
  height: calc(100vh - $base-height * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
