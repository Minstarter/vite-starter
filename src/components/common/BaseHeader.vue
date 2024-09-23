<script setup lang="ts" name="BaseHeader">
import { useDark, useToggle } from "@vueuse/core";
import dayjs from "dayjs";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const time = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));

console.log(dayjs().toDate());

console.log(import.meta.env);

setInterval(() => {
  time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
}, 1000);
</script>

<template>
  <header class="base-header">
    <span>base header</span>
    <button
      class="cursor-pointer i-carbon-sun dark:i-carbon-moon w-24 h-24 dark:w-24 dark:h-24"
      @click="toggleDark()"
    />

    <p class="current-time">
      Current time: <time :datetime="time">{{ time }}</time>
    </p>
  </header>
</template>

<style scoped lang="scss">
.base-header {
  width: 100%;
  height: $base-height;
  background-color: $base-bg;
  @apply flex-center gap-10;
}

.current-time {
  font-size: 1rem;
  transition: all 0.5s;
  @apply text-text fixed right-16 select-none;
}

@media screen and (max-width: 1280px) {
  .current-time {
    opacity: 0;
  }
}
</style>
