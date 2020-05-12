<template>
  <el-container class="is-vertical" style="width: 1440px;margin:0 auto;">
    <Header></Header>
    <el-main>
      <div class="news-container">
        <!--        left -aside -->
        <div class="left-aside">
          <ul>
            <li>
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'all'}}" exact>全部新闻</nuxt-link>
            <li>
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'nba'}}" exact>NBA</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'premier'}}" exact>英超</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'serie_a'}}" exact>意甲</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'la_liga'}}" exact>西甲</nuxt-link>
            </li>
          </ul>

        </div>
        <!--        left - aside end-->
        <nuxt/>
      </div>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    name: 'newsLayout',
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
  .el-main {
    padding: 0 27px 0 27px;

  }

  .news-container {
    width: 100%;
  }

  .left-aside {
    /*width: 164px;*/
    float: left;
    width: 13%;
  }

  .left-aside ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .left-aside ul li {
    height: 80px;
    padding-top: 20px;
    border-bottom: 1px solid #979797;;
  }

  .left-aside ul li a {
    display: block;
    height: 60px;
    line-height: 60px;
    font-family: PingFangSC-Regular;
    /*font-size: 26px;*/
    font-size: 18px;
    color: #333333;
    text-align: center;
  }

  .left-aside ul li a:hover {
    background: #58A4ED;
    border-radius: 8px;
    color: #FFFFFF;
  }

  .nuxt-link-active {
    background: #58A4ED;
    border-radius: 8px;
    color: #FFFFFF !important;
  }
</style>
