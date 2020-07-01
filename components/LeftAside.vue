<template>

  <el-col :span="5" >
    <el-col :span="24" class="aside-nav">
      <el-col :span="24" class="aside-title">
        <img @click="backIndex" src="@/assets/image/qmty-icon.png" alt="全民体育">
      </el-col>

      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>
        <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/cba.png" alt="cba"></el-col>
        <nuxt-link :to="{name:'nsnews-league',params:{league:'cba'}}">CBA</nuxt-link>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}">西甲</nuxt-link>
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/laliga.png" alt="la_liga"></el-col>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/premier.png" alt="premier"></el-col>
        <nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}">英超</nuxt-link>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/serie_a.png" alt="serie_a"></el-col>
        <nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}">意甲</nuxt-link>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/football.png" alt="football"></el-col>
        <el-col :span="4" class="aside-nav-item-icon"><img src="@/assets/image/sub-menu-icon.png" alt="icon"></el-col>
        <a href="javascript:;">足球社区</a>
        <div class="sub-forum-nav">
          <div class="sub-forum-nav-item" v-for="(fg,i) in footballGroupList" :key="i">
            <nuxt-link active-class="nuxt-link-active-1"  :to="{name:'nsforum-groupId',params:{groupId:fg.id}}">{{fg.name}}</nuxt-link>
          </div>
        </div>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/basketball.png" alt="basketball"></el-col>
        <el-col :span="4" class="aside-nav-item-icon"><img src="@/assets/image/sub-menu-icon.png" alt="icon"></el-col>
        <a href="javascript:;">篮球社区</a>
        <div class="sub-forum-nav">
          <div class="sub-forum-nav-item" v-for="(bg,i) in basketballGroupList" :key="i">
            <nuxt-link active-class="nuxt-link-active-1" :to="{name:'nsforum-groupId',params:{groupId:bg.id}}">{{bg.name}}</nuxt-link>
          </div>
        </div>
      </el-col>
      <el-col :span="22" :offset="1" class="aside-border"></el-col>
      <el-col :span="24" class="aside-nav-item ">
        <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/social.png" alt="basketball">
        </el-col>
        <nuxt-link v-if="socialGroupId" :to="{name:'nsforum-groupId',params:{groupId:socialGroupId}}">社区活动</nuxt-link>
      </el-col>
    </el-col>

    <el-col :span="24" class="left-qrcode">
      <el-col :span="6" class="download-qrcode">
        <img id="downloadButton" src="https://aloss.hotforest.cn/web/m/download-qrcode.png" alt="qrcode">
      </el-col>
      <el-col :span="18" class="download-c">
        <el-col :span="24" class="download-c-text">
          点击二维码即可下载
        </el-col>
        <el-col :span="24" class="download-click-icon">
          <img src="https://aloss.hotforest.cn/web/click-icon.png" alt="icon">
        </el-col>
      </el-col>

    </el-col>

  </el-col>

</template>

<script>
  import base from '../api/base'

  export default {
    name: 'LeftAside',
    data(){
      return {
        footballGroupList:[],
        basketballGroupList:[],
        socialGroupId:'',
      }
    },
    mounted () {
      this.getFootballGroupList();
      this.getBasketballGroupList();

      //openinstall app唤醒
      var data = OpenInstall.parseUrlParams()
      // console.log(data)

      new OpenInstall({
        /*appKey必选参数，openinstall平台为每个应用分配的ID*/
        appKey: 'y346df',
        /*可选参数，自定义android平台的apk下载文件名；个别andriod浏览器下载时，中文文件名显示乱码，请慎用中文文件名！*/
        //apkFileName : 'com.fm.openinstalldemo-v2.2.0.apk',
        /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
        //preferWakeup:true,
        /*自定义遮罩的html*/
        //mask:function(){
        //  return "<div id='openinstall_shadow' style='position:fixed;left:0;top:0;background:rgba(0,255,0,0.5);filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;'></div>"
        //},
        /*openinstall初始化完成的回调函数，可选*/
        onready: function () {
          var m = this
          var button = document.getElementById('downloadButton')
          button.style.visibility = 'visible'

          /*在app已安装的情况尝试拉起app*/
          // m.wakeupOrInstall()
          /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
          button.onclick = function () {
            m.wakeupOrInstall()
            return false
          }
        }
      }, data)


    },
    methods:{
      backIndex:function(){
        this.$router.push('/')
      },
      getFootballGroupList:function () {
          this.$axios.$get(`${base.sq}/v3/forum/football/groups`).then(
            res=>{
              if (res.Status === 1){
                this.footballGroupList = res.Data.list;
                this.footballGroupList.forEach(item=>{
                  if (item.name === '全部'){
                    this.socialGroupId = item.id;
                  }
                })
              }
            }
          )
      },
      getBasketballGroupList:function () {
        this.$axios.$get(`${base.sq}/v3/forum/basketball/groups`).then(
          res=>{
            if (res.Status === 1){
              this.basketballGroupList = res.Data.list;
            }
          }
        )
      },
    }

  }
</script>

<style scoped>

  .aside-nav {
    padding-top: 10px;
    padding-bottom: 10px;
    background: rgba(248, 248, 248, 1);
  }

  .aside-title {
    padding-left: 10px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6E6E6;
  }

  .aside-title img {
    width: 100px;
    height: 20px;
  }

  .aside-nav-item {
    text-align: left;
    height: 44px;
    position: relative;
    margin-top: 4px;

  }

  .aside-nav-item:hover {
    background: #FFFFFF;
  }

  .aside-nav-item:hover .sub-forum-nav {
    display: block;
  }

  .aside-nav-item-img {

    height: 20px;
    position: absolute;
    left:10px;
    top: 12px;
    display: flex;
    align-items: center;
  }

  .aside-nav-item-img img {
    max-height: 100%;
    /*max-width: 100%;*/

  }

  .aside-nav-item-icon{
    height: 15px;
    position: absolute;
    right: -20px;
    top: 14px;
  }

  .aside-nav-item-icon img {
    max-height: 100%;
  }

  .aside-nav-item a {
    display: block;
    height: 100%;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 44px;
    text-align: left;
    text-indent: 40px;

  }
  .aside-border{
    height: 4px;
    border-bottom: 1px dashed #E6E6E6;
  }

  .sub-forum-nav {
    display: none;
    position: absolute;
    right: -180px;
    top: 0;
    /*background: rgba(248, 248, 248, 1);*/
    padding: 12px 18px;
    background-color: #ffffff;
  }

  .sub-forum-nav-item {
    width: 145px;
    height: 21px;
    margin: 0 auto;
    margin-top: 10px;
    /*border-bottom: 1px dashed #E6E6E6;*/
  }

  .sub-forum-nav-item a {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
    text-align: center;
    text-indent: 0;
  }

  .sub-forum-nav-item a:hover {
    background:rgba(202,231,241,1) !important;
    border-radius:8px;
  }

  .left-qrcode{
    margin-top: 15px;
    height: 170px;
    background: url("../assets/image/index-l-qrcode-bg.png") no-repeat center;
    background-size: 100% 100%;
  }

  .download-qrcode{
    margin-top: 105px;
    text-align: right;
  }
  .download-qrcode img{
    width: 39px;
    height: 38px;
    cursor: pointer;

  }


  .download-c{
    margin-top: 105px;
    padding-left: 10px;
  }

  .download-click-icon{
    text-align: left;
    margin-top: 4px;
  }
  .download-click-icon img{
    width: 20px;
    height:20px;
  }

  .download-c-text{
    text-align: left;
    font-size:10px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
  }

  .nuxt-link-active {
    background: #FFFFFF !important;
  }

  .nuxt-link-active-1 {
    /*width:145px;*/
    /*height:21px;*/
    background:rgba(202,231,241,1) !important;
    border-radius:8px;
  }

</style>
