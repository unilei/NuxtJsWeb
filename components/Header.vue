<template>
    <el-header style="width:1440px;height: 120px;">
      <client-only>
        <el-row class="header-top">
          <el-col :span="8" class="header-top-left">
            <img @click="turn_own" src="https://aloss.hotforest.cn/web/header-logo.png" alt="全民体育">
          </el-col>

          <el-col :span="16" class="header-top-right" v-if="this.uid !==  null">
            <img v-if="this.avatar_url != null && this.avatar_url !== '' " :src="this.avatar_url" alt="">
            <img v-if="this.avatar_url == null || this.avatar_url === ''"
                 src="https://aloss.hotforest.cn/web/default-header.png" alt="">
            <a v-if="this.nickname != null && this.nickname !== ''" href="javascript:;">{{this.nickname}}</a>
            <a v-if="this.nickname == null || this.nickname === ''" href="javascript:;">{{this.phone}}</a>
            <button @click="loginOut">退出</button>
          </el-col>

          <el-col :span="16" class="header-top-right" v-if="this.uid == null">
            <button @click="dialogLogin">登录账号</button>
          </el-col>

        </el-row>
        <!--导航栏-->
        <el-row>
          <el-col :span="24" class="nav-menu" v-if="pathStatus">
            <div class="nav-menu-item " style="border: none;">
              <nuxt-link :to="'/'" exact>首页</nuxt-link>
            </div>
            <div class="nav-menu-item">
              <nuxt-link :to="{name:'sportNews-list-league',params:{league:'all'}}" exact>全部新闻</nuxt-link>
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
            <div class="nav-menu-item " style="border: none;">
              <nuxt-link :to="'/'" exact>首页</nuxt-link>
            </div>
            <div class="nav-menu-item">
              <nuxt-link :to="{name:'nsnews-league',params:{league:'all'}}" >全部新闻</nuxt-link>
            </div>
            <div class="nav-menu-item">
              <ul>
                <li>
                  <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}" >NBA</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}" >英超</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}" >意甲</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}" >西甲</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="nav-menu-item">
              <nuxt-link :to="{name:'nsforum-sportType',params:{'sportType':'all'}}" >社区论坛</nuxt-link>
            </div>
            <!--            <div class="nav-menu-item">-->
            <!--                <ul>-->
            <!--                    <li>-->
            <!--                        <nuxt-link :to="'#'" exact>全部赛程</nuxt-link>-->
            <!--                    </li>-->
            <!--                    <li>-->
            <!--                        <nuxt-link :to="'#1'" exact>足球赛程</nuxt-link>-->
            <!--                    </li>-->
            <!--                    <li>-->
            <!--                        <nuxt-link :to="'#2'" exact>篮球赛程</nuxt-link>-->
            <!--                    </li>-->
            <!--                </ul>-->
            <!--&lt;!&ndash;                <nuxt-link :to="'/match'" exact></nuxt-link>&ndash;&gt;-->
            <!--            </div>-->
          </el-col>

        </el-row>


        <!-- 登陆弹框-->
        <Login v-bind:dialogFormVisible="dialogFormVisible"
               v-bind:dialogMobileLogin = "dialogMobileLogin"
               v-bind:dialogTableVisible = "dialogTableVisible"
               v-bind:wxIsLoginShow = "wxIsLoginShow"
               @closeDialog = "closeDialog"
               @wxDialog = "wxDialog"
               @mobileDialog = "mobileDialog"
        ></Login>


        <!--        悬浮二维码框-->
        <div class="wx-qrcode-box">
          <div class="wx-qrcode-box-img">
            <a
              href="https://171tiyu.com/download/android?channelCode=Web_Landing_Page"
              v-if="this.os === 'Win'">
              <img src="https://aloss.hotforest.cn/web/android-QRcode.png" alt="">
            </a>
            <a v-if="this.os==='Mac'" href="https://apps.apple.com/app/id1482371213">
              <img src="https://aloss.hotforest.cn/web/android-QRcode.png" alt="">
            </a>
          </div>
          <span>扫码下载安卓/IOS APP</span>
        </div>
        <!--        悬浮二维码框结束-->

      </client-only>

    </el-header>
</template>

<script>
  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'
  import Login from './Login'

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
      }
    },
    components: {
      Login
    },
    watch: {
      $route (to, from) {
      }
    },
    methods: {
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
      }
    },
    mounted () {

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

  .header-top {
    height: 50px;
  }

  .header-top-left {
    text-align: left;

  }

  .header-top-left img {
    width: 328px;
    height: 20px;
    cursor: pointer;
    padding-top: 12px;
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
    font-size: 18px;
    color: #333333;
    margin-left: 15px;
  }

  .header-top-right button {
    outline: none;
    font-size: 18px;
    color: #2C2C2C;
    border: 1px solid transparent;
    line-height: 50px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 20px;

  }

  .nav-menu {
    height: 70px;
    background: #397AB8;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }

  .nav-menu-item {
    float: left;
    margin-left: 25px;
    margin-top: 20px;
    height: 30px;
    border-left: 1px solid white;
    padding-left: 25px;
  }

  .nav-menu-item a {
    display: block;
    text-decoration: none;
    color: white;
    height: 70px;
    margin-top: -20px;
    line-height: 70px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-menu-item ul {
    padding: 0;
    margin: 0;
  }

  .nav-menu-item ul li {
    list-style: none;
    float: left;
    margin-left: 25px;
  }

  .nav-menu-item a:hover {
    background-color: #EBB031;
    height: 62px;
    border-bottom: 8px solid white;
  }

  .nuxt-link-active {
    background-color: #EBB031;
    height: 62px !important;
    border-bottom: 8px solid white !important;
  }


</style>
