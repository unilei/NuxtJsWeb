<template>
  <el-container class="is-vertical" style="width: 1440px;margin:0 auto;">
    <Header></Header>
    <nuxt/>
    <FooterWithLink></FooterWithLink>
  </el-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import FooterWithLink from '../components/FooterWithLink'

  export default {
    components: {
      Header,
      FooterWithLink
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
