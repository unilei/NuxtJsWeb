<template>
  <!--  手机      登陆弹出框-->
  <div v-show="dialogFormVisible === true" class="login-modal-container">
    <div class="login-modal">
      <div class="login-modal-t-img" @click="closeDialog">
        <img src="https://aloss.hotforest.cn/web/login-icon.png" alt="">
      </div>
      <div v-show="dialogMobileLogin === true">
        <div class="login-modal-t">
          <span>手机登录</span>
        </div>

        <div class="login-modal-t-p">
          <input type="text" placeholder="手机号码" v-model="mobile">
          <button v-if="this.mobile !== '' " @click="sendMobileLoginSms">验证</button>
          <button v-if="this.mobile===''" class="login-modal-t-p-b-disable">验证</button>
        </div>
        <div class="login-modal-t-c">
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
            <img @click="wxDialog" style="cursor:pointer;" src="https://aloss.hotforest.cn/web/wx.png" alt="">
          </div>
          <a href="#" @click="wxDialog">使用微信登录</a>
        </div>

        <div class="login-modal-t-xx">
          <span>使用即为同意</span>
          <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
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
        </div>
        <div class="login-modal-t-xx">
          <span>使用即为同意</span>
          <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
        </div>
      </div>
    </div>


  </div>
  <!--登陆弹出框结束-->
</template>

<script>
  import base from '../api/base'
  import qs from 'qs'

  export default {
    name: 'Login',
    data () {
      return {
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
    props: [
      'dialogTableVisible', 'dialogFormVisible', 'dialogMobileLogin', 'wxIsLoginShow'
    ],
    methods: {
      turn_agreement () {
        this.$router.push({ path: '/agreement' })
      },
      turn_own () {
        window.location.href = 'https://www.171tiyu.com'
      },
      closeDialog () {
        this.$emit('closeDialog')
      },
      dialogLogin () {
        // console.log(1)
        this.dialogFormVisible = true
        this.dialogMobileLogin = true
      },
      wxDialog () {
        this.$emit('wxDialog')

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
        this.$emit('mobileDialog')
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

                    localStorage.setItem('nickname', nickname)
                    localStorage.setItem('token', token)
                    localStorage.setItem('avatar_url', avatar_url)
                    localStorage.setItem('phone', phone)
                    localStorage.setItem('uid', uid)

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

      }

    }
  }
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
