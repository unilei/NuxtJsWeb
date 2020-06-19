<template>
  <el-container class="is-vertical" style="background-color: #EFEFEF;">
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </el-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import FooterWithLink from '../components/FooterWithLink'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>


<style>
  @import "../assets/css/share.min.css";
  html {
    text-align: center;
  }
  body{
    margin: 0;
    padding: 0;
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
