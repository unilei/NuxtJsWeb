<template>
  <el-container class="is-vertical" style="background-color: #ffffff;">
    <Header></Header>
    <nuxt/>
    <Footer  style="background-color: #EFEFEF !important;"></Footer>
  </el-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>


<style>
  html {
    text-align: center;
    font: 100% PingFangSC-Regular, PingFang SC;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

</style>
