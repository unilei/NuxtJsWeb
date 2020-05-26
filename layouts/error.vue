<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      页面不存在 <br>
      {{error}}
    </h1>
    <h1 v-else>
      页面发生了一个错误 <br>
      {{error}}
    </h1>

    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['error'],

  }
</script>

<style scoped>

</style>
