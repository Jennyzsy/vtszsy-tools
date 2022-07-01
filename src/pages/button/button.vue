<template>
  <div class="flex">
    <el-button color="#626aef">Default</el-button>
    <el-button color="#626aef" plain>Plain</el-button>
    <el-button color="#626aef" disabled>Disabled</el-button>
    <el-button color="#626aef" disabled plain>Disabled Plain</el-button>
    <Slider></Slider>
  </div>
</template>

<script lang="ts" setup>
  import Slider from '../../../packages/slider'
  import {
    getUser
  } from '@/api/api'
  const s = await getUser({
    text: "羽筱蝶妃",
  });
  console.log(s);
</script>