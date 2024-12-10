<script setup lang="ts" name="HomeView">
import dayjs from 'dayjs';
import { ElButton, ElDatePicker, ElInput, ElSelect } from 'element-plus';
import { } from 'vue';

const time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));

setInterval(() => {
  time.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
}, 1000);

console.log(import.meta.env);

const dom = h('div', 'Hello Vite !');

console.log(dom);

const iLogosVue = h('div', {
  class: 'i-logos-vue' 
});

console.log(iLogosVue);

const input = ref('');
</script>

<template>
  <div class="w-50% text-center">
    <p
      class="font"
      flex-center
    >
      Hello Vite !
    </p>
    <p flex-center>
      Hello Vite !
    </p>
    <p>
      Current time: <time :datetime="time">{{ time }}</time>
    </p>
    <dom />
    <i-logos-vue />
    <div class="i-logos-vue" />
    <el-button>按钮</el-button>
    <el-date-picker
      type="date"
      placeholder="选择日期"
    />
    <el-select />
    <el-input v-model="input" />
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("@fonts/YouSheBiaoTiHei.ttf");
}

.font {
  font-family: YouSheBiaoTiHei;

  @apply text-text;
}
</style>
