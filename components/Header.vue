<template>
  <el-header style="width:1440px;height: 120px;">
    <div class="header-top">
      <div class="header-top-left">
        <div class="header-top-l-logo">
          <img @click="turn_own" src="../assets/image/header-logo.png" alt="全民体育">
        </div>
        <!--                <span>全民体育 懂球迷的聚集体</span>-->
      </div>
      <div class="header-top-right" v-if="this.uid == null">
        <button @click="dialogLogin">登录账号</button>
      </div>
      <div class="header-top-right" v-if="this.uid !==  null">
        <img v-if="this.avatar_url != null & this.avatar_url != '' " :src="this.avatar_url" alt="">
        <img v-if="this.avatar_url == null || this.avatar_url == ''" src="../assets/image/star.png" alt="">
        <a v-if="this.nickname != null & this.nickname != ''" href="#">{{this.nickname}}</a>
        <a v-if="this.nickname == null || this.nickname == ''" href="#">{{this.phone}}</a>
        <button @click="loginOut">退出</button>
      </div>
    </div>

    <!--  手机      登陆弹出框-->
    <div v-show="dialogFormVisible === true" class="login-modal-container">
      <div class="login-modal">
        <div class="login-modal-t-img" @click="closeDialog">
          <img src="../assets/image/login-icon.png" alt="">
        </div>
        <div v-show="dialogMobileLogin === true">
          <div class="login-modal-t">
            <span>手机登录</span>
          </div>

          <div class="login-modal-t-p">
            <!--                        <span>手机号码</span>-->
            <input type="text" placeholder="手机号码" v-model="mobile">
            <button v-if="this.mobile !== '' " @click="sendMobileLoginSms">验证</button>
            <button v-if="this.mobile===''"  class="login-modal-t-p-b-disable">验证</button>
          </div>
          <div class="login-modal-t-c">
            <!--                        <span>验证信息</span>-->
            <input type="text" placeholder="请输入验证码" v-model="code">
          </div>
          <div class="login-modal-t-b">
            <button @click="mobileLogin">登录</button>
          </div>
          <div class="login-modal-t-s">
            <span>用其他方式登录</span>
          </div>
          <div class="login-modal-t-wx">
            <div>
              <img @click="wxDialog" style="cursor:pointer;"  src="../assets/image/wx.png" alt="">
            </div>
            <a href="#" @click="wxDialog">使用微信登录</a>
            <!--                        <a href="#" >使用微信登录</a>-->
          </div>

          <div class="login-modal-t-xx">
            <span>使用即为同意</span>
            <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
            <!--                        <a href="">全民体育用户协议/隐私权政策</a>-->
          </div>
        </div>

        <div v-show="wxIsLoginShow === true">
          <div class="login-modal-t">
            <span>使用其他方式登录</span>
          </div>
          <div class="wx-login-modal-p">
            <a href="#" @click="mobileDialog">
              使用手机号登录
            </a>
          </div>
          <div class="wx-login-modal-img" id="login_container">
            <!--                        <img src="../../assets/image/wx_qrcode.png" alt="">-->
          </div>
          <!--                    <div class="wx-login-modal-sm" >-->
          <!--                        <img src="../../assets/image/wx.png" alt="">-->
          <!--                        <span>打开微信扫码登录</span>-->
          <!--                    </div>-->
          <div class="login-modal-t-xx" >
            <span>使用即为同意</span>
            <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
            <!--                        <router-link :to="'/agreement'"></router-link>-->
          </div>

        </div>


      </div>


    </div>
    <!--登陆弹出框结束-->

    <!--        悬浮二维码框-->
    <div class="wx-qrcode-box">
      <div class="wx-qrcode-box-img">
        <a
          href="https://171tiyu.com/download/android?channelCode=Web_Landing_Page"
          v-if="this.os === 'Win'">
          <img src="../assets/image/android-QRcode.png" alt="">
        </a>
        <a v-if="this.os==='Mac'" href="https://apps.apple.com/app/id1482371213">
          <img src="../assets/image/android-QRcode.png" alt="">
        </a>
      </div>
      <span>扫码下载安卓/IOS APP</span>
    </div>
    <!--        悬浮二维码框结束-->


    <div class="nav-menu">
      <div class="nav-menu-item " style="border: none;">
        <nuxt-link :to="'/'" exact>首页</nuxt-link>
      </div>
      <div class="nav-menu-item">
        <nuxt-link :to="{name:'news-list-league',params:{league:'all'}}"   exact>全部新闻</nuxt-link>
      </div>
      <div class="nav-menu-item">
        <ul>
          <li>
            <nuxt-link :to="{name:'news-list-league',params:{league:'nba'}}"    exact>NBA</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'news-list-league',params:{league:'premier'}}" exact>英超</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'news-list-league',params:{league:'serie_a'}}" exact>意甲</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name:'news-list-league',params:{league:'la_liga'}}" exact>西甲</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="nav-menu-item">
        <nuxt-link :to="{name:'bbs-list-sportType',params:{'sportType':'all'}}"  exact>社区论坛</nuxt-link>
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
    </div>
  </el-header>
</template>

<script>
  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'
  import base from '../api/base'
  import qs from 'qs'


  export default {
    name: 'Header',
    data () {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogMobileLogin: false,
        wxIsLoginShow: false,
        ip: '',
        area: '',
        brower: '',
        os: '',
        ns_device_id: 'website',
        mobile: '',
        code: '',
        country_code: '+86',
        device_id: 'website',
        secret: '',
        nickname: null,
        avatar_url: null,
        phone: null,
        uid: null,
        redirect_uri: 'http://www.171tiyu.com/wechat'

      }
    },
    watch: {
      $route (to, from) {
        // console.log(to)
        // console.log(from)
        // console.log(window.location.href)
      }

    },
    methods: {
      turn_agreement(){
        this.$router.push({path:'/agreement'})
      },
      turn_own () {
        window.location.href = 'https://www.171tiyu.com'
      },
      closeDialog () {
        this.dialogTableVisible = false
        this.dialogFormVisible = false
        this.dialogMobileLogin = false
        this.wxIsLoginShow = false
      },
      dialogLogin () {
        // console.log(1)
        this.dialogFormVisible = true
        this.dialogMobileLogin = true
      },
      wxDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = true
        this.dialogMobileLogin = false

        var obj = new WxLogin({
          self_redirect: false,
          id: 'login_container',
          appid: 'wx31ded528641f2b4c',
          scope: 'snsapi_login',
          redirect_uri: encodeURIComponent(this.redirect_uri),
          state: '1211111',
          style: 'black',
          href: '',
        })
      },
      mobileDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = false
        this.dialogMobileLogin = true
      },
      getNsDeviceId () {
        this.ip = sessionStorage.getItem('ip')
        this.area = sessionStorage.getItem('area')
        this.brower = GetCurrentBrowser()
        this.os = GetOs()
        // console.log('ip，地区，浏览器，操作系统，：', this.ip, this.area, this.brower, this.os)

      },
      sendMobileLoginSms () {
        const mobile = this.mobile
        const ns_device_id = this.ns_device_id
        const country_code = this.country_code
        this.$axios.get(`${base.sq}/SendLoginSms`, {
          params: {},
          headers: {
            phone: mobile,
            ns_device_id: ns_device_id,
            country_code: country_code
          }
        }).then(
          res => {
            // console.log(res)
            if (res.data.Status === 1) {
              this.$message(
                {
                  message: '验证码发送成功',
                  type: 'success',
                  customClass: 'zZindex'
                }
              )
            } else {
              this.$message.error(res.data.ErrMsg)
              // alert('验证码发送失败')
            }
          }
        )

      },
      mobileLogin () {
        const ns_device_id = this.ns_device_id
        const mobile = this.mobile
        const country_code = this.country_code
        const code = this.code
        const device_id = this.device_id

        this.$axios.post(`${base.sq}/OTPLogin`, qs.stringify({
          phone: mobile,
          country_code: country_code,
          code: code,
          device_id: device_id,
          platform: 'ios',
        }), {
          headers: {
            ns_device_id: ns_device_id

          }
        }).then(
          res => {

            if (res.data.Status === 1) {
              // console.log(res)
              const account = res.data.Data.account
              const password = res.data.Data.password
              const type = res.data.Data.type
              this.$axios.post(`${base.sq}/Login`, {
                type: type,
                account: account,
                password: password,
                secret: this.secret

              }, {
                headers: {
                  ns_device_id: ns_device_id
                }
              }).then(
                res => {
                  // console.log(res)
                  if (res.data.Status === 1) {
                    const uid = res.data.Data.uid
                    const guid = res.data.Data.guid
                    const token = res.data.Data.token
                    const is_activated = res.data.Data.is_activated
                    const is_add_favorite = res.data.Data.is_add_favorite
                    const iosDownloadUrl = res.data.Data.iosDownloadUrl
                    const is_locked = res.data.Data.is_locked
                    const nickname = res.data.Data.nickname
                    const avatar_url = res.data.Data.avatar_url
                    const phone = res.data.Data.phone

                    sessionStorage.setItem('nickname', nickname)
                    sessionStorage.setItem('token', token)
                    sessionStorage.setItem('avatar_url', avatar_url)
                    sessionStorage.setItem('phone', phone)
                    sessionStorage.setItem('uid', uid)

                    this.$router.go(0)

                  } else {
                    // alert('登录失败')
                    this.$message.error(res.data.ErrMsg)
                  }

                }
              )

            } else {
              // alert(res.data.ErrMsg)
              this.$message.error(res.data.ErrMsg)
            }
          }
        )

      },
      loginOut () {
        // sessionStorage.removeItem('nickname')
        // sessionStorage.removeItem('token')
        // sessionStorage.removeItem('avatar_url')
        // sessionStorage.removeItem('phone')
        // sessionStorage.removeItem('uid')
        sessionStorage.clear()
        this.$router.go(0)
      }
    },
    mounted () {

      this.getNsDeviceId()
      this.nickname = sessionStorage.getItem('nickname')
      this.avatar_url = sessionStorage.getItem('avatar_url')
      this.phone = sessionStorage.getItem('phone')
      this.uid = sessionStorage.getItem('uid')

      // this.$api.login.wxGetCode('wxc476300d9f186ff1','www.171tiyu.com')

    }
  }
</script>
<style>
  .zZindex {
    z-index: 999999 !important;
  }

</style>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/wx-qrcode-box.css";

  .el-header {
    width: 1440px;
    /*height: 140px !important;*/
    padding: 0;
  }

  .header-top {
    height: 50px;
    margin: auto 0;
    padding: 0 25px;
  }

  .header-top-left {
    float: left;
    width: 80%;
  }

  .header-top-l-logo {
    height: 20px;
    width: 328px;
    float: left;
    padding-top: 12px;

  }

  .header-top-l-logo img {
    cursor: pointer;
  }


  .header-top-left span {
    display: block;
    float: left;
    color: #000000;
    margin-left: 20px;;
    font-size: 18px;
    font-family: HanziPenSC-W3, HanziPenSC;
    font-weight: normal;
    line-height: 25px;
  }

  .header-top-right {
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  .header-top-right img {
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }

  .header-top-right a {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;
    margin-left: 15px;
  }

  .header-top-right button {
    outline: none;
    font-family: PingFangSC-Regular;
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
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }

  .nav-menu-item {
    float: left;
    margin-left: 25px;
    margin-top: 20px;
    height: 30px;
    /*margin-top: 14px;*/
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
