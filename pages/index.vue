<template>
 <el-main>
   <el-row>
     <el-col :span="5" class="aside-nav">
        <el-col :span="24" class="aside-title"><img src="@/assets/image/qmty-icon.png" alt="qmty"></el-col>

       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">西甲</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">英超</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">意甲</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
       </el-col>
       <el-col :span="24" class="aside-nav-item">
         <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
       </el-col>

     </el-col>
   </el-row>
 </el-main>
</template>

<script>

  import { getFormatTime } from '../utils/time'
  import base from '../api/base'

  export default {
    name: 'index',
    layout: 'indexLayout',
    data () {
      return {


      }
    },
    head () {
      return {
        title: '全民体育_懂球迷的聚集地',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '全民体育,体育,新闻,直播,足球,篮球,资讯,比分,社区,数据,比赛'
          },
          {
            hid: 'description',
            name: 'description',
            content: '全民体育为您带来足球，篮球比赛，即时比分，数据库等一系列数据，包括：英超，西甲，意甲，德甲，欧冠，中超，NBA，CBA，世界杯等各种比赛，让球迷及时准确的了解赛事进展和结果'
          },
        ]
      }
    },
    async asyncData (context) {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    watch: {},
    mounted () {

    }
  }


</script>

<style scoped>

  .el-main {

    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 1440px;

  }

  .aside-nav{
    padding: 10px;
    background:rgba(248,248,248,1);
  }

  .aside-title{
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6E6E6;
  }
  .aside-title img{
    width: 100px;
    height: 20px;
  }

  .aside-nav-item{
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #E6E6E6;
    background: url("../assets/image/nba.png") no-repeat left;
  }
  .aside-nav-item a{
    display: block;
    font-size:14px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:25px;
    text-align: center;
  }




</style>
