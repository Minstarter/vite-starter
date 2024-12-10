<script setup lang="ts" name="ReadmeView">
import { } from 'vue';

let _object1 = {
  'a-b': 0,
  '0x0': 0,
  '1e2': 0
};

let _object2 = {
  foo: 'bar',
  baz: 42,
  true: 0,
  0: 0,
  'qux-lorem': true
};

let _object3 = {
  foo() {
    return;
  }
};

const foo = () => { }

foo();
</script>

<template>
  <div class="readme-container" />
</template>

<style scoped lang="scss">
.readme-container {
  width: 100vw;
  height: calc(100vh - $base-height * 2);
  overflow: auto;

  @apply flex-center;
}

.readme-content {
  width: 640px;
  max-width: 640px;
  height: 100%;
}
</style>
