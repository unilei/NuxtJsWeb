<template>
  <div>
    <van-row>
      <mNewsHeader></mNewsHeader>
      <nuxt />
    </van-row>
  </div>
</template>

<script>
  import mFooter from '../components/mFooter'
  import mNewsHeader from '../components/mNewsHeader'

  export default {
    name: 'mNewsLayout',
    components:{
      mNewsHeader,
      mFooter
    }
  }
</script>

<style scoped>

</style>
