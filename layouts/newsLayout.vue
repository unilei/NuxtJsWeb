<template>
  <el-container class="is-vertical" style="width: 1440px;margin:0 auto;">
    <Header></Header>
    <el-main>
      <el-row>
        <el-col :span="3" v-if="pathStatus" class="left-aside">
          <el-col class="left-aside-item" :span="24"> <nuxt-link :to="{name:'sportNews-list-league',params:{league:'all'}}" exact>全部新闻</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"> <nuxt-link :to="{name:'sportNews-list-league',params:{league:'nba'}}" exact>NBA</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'sportNews-list-league',params:{league:'premier'}}" exact>英超</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'sportNews-list-league',params:{league:'serie_a'}}" exact>意甲</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'sportNews-list-league',params:{league:'la_liga'}}" exact>西甲</nuxt-link></el-col>
        </el-col>
        <el-col :span="3" v-if="pathStatus===false" class="left-aside">
          <el-col class="left-aside-item" :span="24"> <nuxt-link :to="{name:'nsnews-league',params:{league:'all'}}" >全部新闻</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"> <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}" >NBA</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}" >英超</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}" >意甲</nuxt-link></el-col>
          <el-col class="left-aside-item" :span="24"><nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}" >西甲</nuxt-link></el-col>
        </el-col>

        <nuxt></nuxt>
      </el-row>

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
    },
    data(){
      return {
       pathStatus:false
      }
    },
    watch: {
      $route (to, from) {
        // console.log(to)

      }
    },
    mounted () {
      console.log(this.$route.fullPath)
      let sportNewsPath = this.$route.fullPath;

      if (sportNewsPath === '/sportNews/list/all' || sportNewsPath === '/sportNews/list/nba'
        || sportNewsPath === '/sportNews/list/premier' || sportNewsPath === '/sportNews/list/serie_a'
        || sportNewsPath === '/sportNews/list/la_liga'
      ) {
        this.pathStatus = true;
      }


    }
  }
</script>

<style scoped>
  @import "../assets/css/share.min.css";
  .el-main {
    /*padding: 0 27px 0 27px;*/
    padding-left: 40px;
    padding-right: 40px;

  }

  .left-aside-item {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #979797;;
  }

  .left-aside-item  a {
    display: block;
    height: 60px;
    line-height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;
    text-align: center;
  }

  .left-aside-item  a:hover {
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
