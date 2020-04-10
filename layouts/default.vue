<template>
  <el-container class="is-vertical" style="width: 1440px;margin:0 auto;">
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
  }

  button, input, textarea {
    font: 100% PingFangSC-Regular, PingFang SC;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

</style>
