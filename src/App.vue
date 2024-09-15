<script setup lang="ts">
import { RouterView } from "vue-router";

import { useCounterStore } from "./stores/counter";

const store = useCounterStore();

store.increment();

console.log(store.count);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
