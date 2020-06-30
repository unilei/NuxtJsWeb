<template>
  <el-header style="width:1440px;height: auto;margin: 0 auto;">
<!--    <client-only>-->
      <!--导航栏-->
      <el-row>
        <el-col :span="24" class="nav-menu" v-if="pathStatus">

          <div class="nav-menu-logo">
            全民体育 <br>
            全民体育 懂球迷的聚集地
          </div>
          <div class="nav-menu-box"></div>

          <div class="nav-menu-item nav-menu-item-first" style="border: none;">
            <nuxt-link :to="'/'" exact>首页</nuxt-link>
          </div>
          <div class="nav-menu-item">

<!--            <nuxt-link :to="{name:'sportNews-list-league',params:{league:'all'}}" exact>全部新闻</nuxt-link>-->
          </div>
          <div class="nav-menu-item">
            <ul>
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
          <div class="nav-menu-item">
            <nuxt-link :to="{name:'bbs-list-sportType',params:{'sportType':'all'}}" exact>社区论坛</nuxt-link>
          </div>
        </el-col>

        <el-col :span="24" class="nav-menu" v-if="pathStatus===false">
          <div class="nav-menu-logo">
            <div class="nav-menu-logo-1">
              <img @click="backIndex" src="@/assets/image/logo-1.png" alt="全民体育">
            </div>
            <div class="nav-menu-logo-2">
              全民体育 懂球迷的聚集地
            </div>
          </div>

          <div class="nav-menu-box"></div>

          <div class="nav-menu-item nav-menu-item-first" style="border: none;">
            <nuxt-link :to="{name:'nsnews-league',params:{league:'all'}}">首页</nuxt-link>
          </div>
          <div class="nav-menu-item">
            <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
          </div>
          <div class="nav-menu-item">
            <nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}">西甲</nuxt-link>
          </div>
          <div class="nav-menu-item">
            <nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}">英超</nuxt-link>
          </div>
          <div class="nav-menu-item">
            <nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}">意甲</nuxt-link>
          </div>

          <div class="nav-menu-item">
            <a href="javascript:;">足球社区</a>
            <div class="nav-sub-menu">
                <div class="nav-sub-menu-item" v-for="(fg,i) in footballGroupList" :key="i">
                  <nuxt-link active-class="nuxt-link-active-1" :to="{name:'nsforum-groupId',params:{groupId:fg.id}}">{{fg.name}}</nuxt-link>
                </div>
            </div>
          </div>
          <div class="nav-menu-item">
            <a href="javascript:;">篮球社区</a>
            <div class="nav-sub-menu">
              <div class="nav-sub-menu-item" v-for="(bg,i) in basketballGroupList" :key="i">
                <nuxt-link active-class="nuxt-link-active-1" :to="{name:'nsforum-groupId',params:{groupId:bg.id}}">{{bg.name}}</nuxt-link>
              </div>
            </div>

          </div>
          <div class="nav-menu-item">
            <nuxt-link  :to="{name:'nsforum-groupId',params:{groupId:socialGroupId}}">社区活动</nuxt-link>
          </div>

          <div class="header-top">
            <el-col :span="24" class="header-top-right" v-if="this.uid !==  null">
              <img v-if="this.avatar_url != null && this.avatar_url !== '' " :src="this.avatar_url" alt="">
              <img v-if="this.avatar_url == null || this.avatar_url === ''"
                   src="https://aloss.hotforest.cn/web/default-header.png" alt="">
              <a v-if="this.nickname != null && this.nickname !== ''" href="javascript:;">{{this.nickname}}</a>
              <a v-if="this.nickname == null || this.nickname === ''" href="javascript:;">{{this.phone}}</a>
              <button @click="loginOut">退出</button>
            </el-col>

            <el-col :span="24" class="header-top-right" v-if="this.uid == null">
              <button @click="dialogLogin">登录账号</button>
            </el-col>
          </div>

        </el-col>

      </el-row>

    <el-backtop  :bottom="100"></el-backtop>
      <!-- 登陆弹框-->
      <Login v-bind:dialogFormVisible="dialogFormVisible"
             v-bind:dialogMobileLogin="dialogMobileLogin"
             v-bind:dialogTableVisible="dialogTableVisible"
             v-bind:wxIsLoginShow="wxIsLoginShow"
             @closeDialog="closeDialog"
             @wxDialog="wxDialog"
             @mobileDialog="mobileDialog"
             @qqDialog="qqDialog"
      ></Login>

      <!--        悬浮二维码框-->
      <div class="wx-qrcode-box">
        <div class="wx-qrcode-box-img">
          <a
            href="https://171tiyu.com/download"
            v-if="this.os === 'Win'">
            <img src="https://aloss.hotforest.cn/web/android-QRcode.png" alt="">
          </a>
          <a v-if="this.os==='Mac'" href="https://apps.apple.com/app/id1482371213">
            <img src="https://aloss.hotforest.cn/web/android-QRcode.png" alt="">
          </a>
        </div>
<!--        <span>扫码下载安卓/IOS APP</span>-->
        <span>立即下载APP</span>
      </div>
      <!--        悬浮二维码框结束-->

<!--    </client-only>-->

  </el-header>
</template>

<script>
  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'
  import Login from './Login'
  import base from '../api/base'

  export default {
    name: 'Header',
    data () {
      return {
        pathStatus: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogMobileLogin: false,
        wxIsLoginShow: false,
        ip: '',
        area: '',
        brower: '',
        os: '',
        secret: '',
        nickname: null,
        avatar_url: null,
        phone: null,
        uid: null,
        footballGroupList:[],
        basketballGroupList:[],
        socialGroupId:'5dc930cb521f10002f1050b7',
      }
    },
    components: {
      Login
    },
    watch: {
      $route (to, from) {
        this.socialGroupId = to.params.groupId;
      }
    },
    methods: {
      backIndex:function(){
        this.$router.push('/')
      },
      closeDialog () {
        this.dialogTableVisible = false
        this.dialogFormVisible = false
        this.dialogMobileLogin = false
        this.wxIsLoginShow = false
      },
      wxDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = true
        this.dialogMobileLogin = false
      },
      qqDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = true
        this.dialogMobileLogin = false
      },
      mobileDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = false
        this.dialogMobileLogin = true
      },
      turn_own () {
        window.location.href = 'https://www.171tiyu.com'
      },
      dialogLogin () {
        // console.log(1)
        this.dialogFormVisible = true
        this.dialogMobileLogin = true
      },
      getNsDeviceId () {
        this.ip = localStorage.getItem('ip')
        this.area = localStorage.getItem('area')
        this.brower = GetCurrentBrowser()
        this.os = GetOs()
        // console.log('ip，地区，浏览器，操作系统，：', this.ip, this.area, this.brower, this.os)
      },
      loginOut () {
        localStorage.clear()
        this.$router.go(0)
      },
      getFootballGroupList:function () {
        this.$axios.$get(`${base.sq}/v3/forum/football/groups`).then(
          res=>{
            // console.log(res)
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
            // console.log(res)
            if (res.Status === 1){
              this.basketballGroupList = res.Data.list;
            }
          }
        )
      },
    },
    mounted () {

      this.getFootballGroupList();
      this.getBasketballGroupList();

      let sportNewsPath = this.$route.fullPath

      if (sportNewsPath === '/sportNews/list/all' || sportNewsPath === '/sportNews/list/nba'
        || sportNewsPath === '/sportNews/list/premier' || sportNewsPath === '/sportNews/list/serie_a'
        || sportNewsPath === '/sportNews/list/la_liga'
      ) {
        this.pathStatus = true
      }

      this.getNsDeviceId()
      this.nickname = localStorage.getItem('nickname')
      this.avatar_url = localStorage.getItem('avatar_url')
      this.phone = localStorage.getItem('phone')
      this.uid = localStorage.getItem('uid')
    }
  }
</script>
<style>
  .zZindex {
    z-index: 999999 !important;
  }

</style>

<style scoped>
  @import "../assets/css/wx-qrcode-box.css";

  .el-header{
    padding: 0;
  }
  .header-top {
    height: 50px;
    position: absolute;
    right: 50px;
    top: 10px;
  }

  .header-top-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    vertical-align: middle;
  }

  .header-top-right img {
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }

  .header-top-right a {
    font-size: 14px;
    color: #ffffff;
    margin-left: 15px;
  }

  .header-top-right button {
    outline: none;
    border: 1px solid transparent;
    line-height: 50px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 20px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:#ffffff;

  }

  .nav-menu-logo {
    position: absolute;
    width: 170px;
    height: 70px;
    left: 0;
    top: 0;
    background-color: #AB2E2E;
  }

  .nav-menu-logo-1{

    width: 100px;
    height: 18px;
    margin: 0 auto;
    margin-top: 15px;

  }
  .nav-menu-logo-1 img{
    max-width: 100%;
    max-height: 100%;
  }

  .nav-menu-logo-2 {
    font-size:8px;
    font-family:HanziPenSC-W3,HanziPenSC;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:22px;
    margin-top: 4px;
  }

  .nav-menu-box{
    /* 内部大小 */
    width: 0px;
    height: 0px;
    /* 边框大小 只设置两条边*/
    border-top:70px #AB2E2E solid;
    border-right:20px transparent solid;

    position: absolute;
    left: 170px;
    top: 0;
  }

  .nav-menu {
    position: relative;
    height: 70px;
    background: #003160;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    margin-top: 20px;
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);

  }

  .nav-menu-item {
    padding-left: 10px;
    padding-right: 10px;
    height: 70px;
    float: left;
    margin-left: 25px;
    line-height: 70px;
    position: relative;
  }
  .nav-menu-item-first{
    margin-left: 195px !important;
  }

  .nav-menu-item a {
    display: block;
    text-decoration: none;
    color: white;
    height: 70px;

  }

  .nav-menu-item a:hover {
    background: url("../assets/image/nav-box-icon.png") no-repeat bottom;

  }

  .nav-menu-item:hover  .nav-sub-menu{
    display: block;
  }

  .nav-sub-menu {
    position: absolute;
    z-index: 1000;
    width: 200px;
    /*background: rgba(248, 248, 248, 1);*/
    background-color: #ffffff;
    top: 70px;
    left: 0;
    display: none;
  }

  .nav-sub-menu-item {
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px dashed #E6E6E6;
  }
  .nav-sub-menu-item a{
    color: #000000;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
  }
  .nav-sub-menu-item a:hover{
    background:rgba(202,231,241,1) !important;
    border-radius:8px;
  }



  .nuxt-link-active{
    background: url("../assets/image/nav-box-icon.png") no-repeat bottom !important;
  }
  .nuxt-link-active-1 {
    /*width:145px;*/
    /*height:21px;*/
    background:rgba(202,231,241,1) !important;
    border-radius:8px;
  }




</style>
