<template>
  <el-container class="is-vertical" style="width: 1440px;margin: 0 auto;background-color: #EFEFEF;">
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
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
