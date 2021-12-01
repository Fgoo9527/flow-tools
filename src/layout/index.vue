<template>
  <div class="page">
    <div class="title">123</div>
    <div class="content">456</div>
    <n-button type="primary">测试自动引入组件</n-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import hello, { post } from '@/apis/lambda'

interface baseData {
  name: string
  age: number
}

onMounted(() => {
  // wel()
})
const state = reactive<baseData>({
  name: '',
  age: 15
})

const wel = () => {
  hello().then(res => {
    console.log(res)
  })
  const arr: Array<baseData> = [
    {
      name: 'zs',
      age: 12
    },
    {
      name: 'zs',
      age: 12
    },
    {
      name: 'zs',
      age: 12
    }
  ]
  const res = arr.filter(ls => {
    return ls.age === 12
  })
}
</script>

<style scoped lang="scss">
.page {
  @apply h-full;
  .title {
    @apply h-[40px] p-[10px];
  }
}
</style>
