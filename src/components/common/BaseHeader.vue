<script setup lang="ts" name="BaseHeader">
import {} from "vue";
</script>

<template>
  <header class="base-header">
    <span>base header</span>
  </header>
</template>

<style scoped lang="scss">
.base-header {
  width: 100%;
  height: $base-height;
  background-color: $base-bg;
  @apply flex-center gap-10;
}
</style>
