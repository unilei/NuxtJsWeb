<template>
 <el-main>
   <el-row>
     <el-col :span="5" class="aside-nav">
        <el-col :span="24" class="aside-title"><img src="@/assets/image/qmty-icon.png" alt="qmty"></el-col>

       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>
         <el-col :span="20" class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link></el-col>
       </el-col>
       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/laliga.png" alt="la_liga"></el-col>
         <el-col :span="20" class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}">西甲</nuxt-link></el-col>
       </el-col>
       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/premier.png" alt="premier"></el-col>
         <el-col :span="20" class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}">英超</nuxt-link></el-col>
       </el-col>
       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/serie_a.png" alt="serie_a"></el-col>
          <el-col :span="20"  class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}">意甲</nuxt-link></el-col>
       </el-col>
       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/football.png" alt="football"></el-col>
         <el-col :span="20" class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球社区</nuxt-link></el-col>
         <div class="sub-forum-nav">
           <div class="sub-forum-nav-item">
             <nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球</nuxt-link>
           </div>
           <div class="sub-forum-nav-item">
             <nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球活动</nuxt-link>
           </div>
         </div>
       </el-col>
       <el-col :span="24" class="aside-nav-item ">
         <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/basketball.png" alt="basketball"></el-col>
         <el-col :span="20" class="aside-nav-item-text"><nuxt-link :to="{name:'nsnews-league',params:{league:'basketball'}}">篮球社区</nuxt-link></el-col>
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
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
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
    position: relative;

  }
  .aside-nav-item:hover{
    background: #FFFFFF;
  }

  .aside-nav-item:hover .sub-forum-nav{
    display: block;
  }

  .aside-nav-item-img{
    height: 25px;
  }
  .aside-nav-item-img img{
    height: 100%;
  }
  .aside-nav-item-text a{
    display: block;
    font-size:14px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:25px;
    text-align: left;
  }

  .sub-forum-nav {
    display: none;
    position: absolute;
    right: -180px;
    top: 0;

    background:rgba(255,255,255,1);
    box-shadow:2px 2px 4px 0px rgba(0,0,0,0.1);
    padding: 12px 18px;

  }

  .sub-forum-nav-item{
    width:145px;
    height:21px;
    background:rgba(202,231,241,1);
    border-radius:8px;
    margin: 0 auto;
    margin-top: 10px;
    text-align: center;

  }
  .sub-forum-nav-item a{
    font-size:10px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:21px;
  }

  .nuxt-link-active{
    background: #FFFFFF !important;
  }


</style>
