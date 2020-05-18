<template>
  <el-container class="is-vertical" style="width: 1440px;margin:0 auto;">
    <Header></Header>
    <el-main>
      <el-row>
        <el-col :span="3" v-if="pathStatus" class="left-aside">
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'bbs-list-sportType',params:{'sportType':'all'}}" exact>全部话题</nuxt-link>
          </el-col>
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'bbs-list-sportType',params:{'sportType':'football'}}" exact>足球</nuxt-link>
          </el-col>
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'bbs-list-sportType',params:{'sportType':'basketball'}}" exact>篮球</nuxt-link>
          </el-col>
        </el-col>
        <el-col :span="3" v-if="pathStatus===false" class="left-aside">
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'nsforum-sportType',params:{'sportType':'all'}}" >全部话题</nuxt-link>
          </el-col>
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'nsforum-sportType',params:{'sportType':'football'}}" >足球</nuxt-link>
          </el-col>
          <el-col class="left-aside-item" :span="24">
            <nuxt-link :to="{name:'nsforum-sportType',params:{'sportType':'basketball'}}" >篮球</nuxt-link>
          </el-col>
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
    name: 'bbsLayout',
    components:{
      Header,
      Footer
    },
    data(){
      return {
        pathStatus:false,
      }
    },
    mounted () {
      console.log(this.$route.fullPath)
      let sportNewsPath = this.$route.fullPath;

      if (sportNewsPath === '/bbs/list/all' || sportNewsPath === '/bbs/list/football'
        || sportNewsPath === '/bbs/list/basketball'
      ) {
        this.pathStatus = true;
      }
    }
  }
</script>

<style scoped>

  .el-main {
    padding: 0 27px 0 27px;

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
