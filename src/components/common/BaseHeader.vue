<script setup lang="ts" name="BaseHeader">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="base-header">
    <span>base header</span>
    <button
      class="cursor-pointer i-carbon-sun dark:i-carbon-moon w-24 h-24 dark:w-24 dark:h-24"
      @click="toggleDark()"
    />
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
