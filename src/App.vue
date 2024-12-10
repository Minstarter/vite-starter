<script setup lang="ts">
import { BaseLayout } from '@layouts';

import { useCounterStore } from './stores/counter';

const store = useCounterStore();

store.increment();

console.log(store.count);
</script>

<template>
  <base-layout />
</template>

<style scoped lang="scss">
/* Only comments */
</style>
