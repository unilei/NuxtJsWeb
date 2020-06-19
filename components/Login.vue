<template>
  <div>
  <!--  手机      登陆弹出框-->
  <div v-show="dialogFormVisible" class="login-modal-container">
    <div class="login-modal" v-show="dialogLoginModal">
      <div class="login-modal-t-img" @click="closeDialog">
        <img src="https://aloss.hotforest.cn/web/login-icon.png" alt="">
      </div>
      <div v-show="dialogMobileLogin">
        <div class="login-modal-t">
          <span>手机登录</span>
        </div>
        <div class="login-modal-t-p">
          <input type="text" placeholder="手机号码" v-model="mobile">
          <button v-if="mobile !== '' " @click="sendMobileLoginSms">验证</button>
          <button v-if="mobile===''" class="login-modal-t-p-b-disable">验证</button>
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
            <img @click="wxDialog" style="cursor:pointer;" src="@/assets/image/wechat.png" alt="wechat">
            <img @click="wxDialog" style="cursor:pointer;width: 24px;height: 25px;" src="@/assets/image/qq.png" alt="qq">
          </div>

          <span>使用微信登录/QQ登陆</span>
        </div>

        <div class="login-modal-t-xx">
          <span>使用即为同意</span>
          <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
        </div>
      </div>

      <div v-show="wxIsLoginShow">
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
        <div class="login-modal-t-xx-2">
          <span>使用即为同意</span>
          <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
        </div>
      </div>
    </div>

    <!--        昵称弹出框-->
    <el-dialog title="修改用户信息" :visible.sync="dialogFormUserInfoVisible"
               :modal="false"
               :show-close="false"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
    >
      <el-form>
        <el-form-item label="头像" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action=uploadBaseUrl
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>

          </el-upload>
          <div class="pic-span">
            <span>图片尺寸50x50px 不能超过500kb</span>
          </div>

        </el-form-item>
        <el-form-item>
          <el-input v-model="nickname" autocomplete="off" placeholder="昵称不能超过16个字符"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateUserInfo()">确 定</el-button>
      </div>
    </el-dialog>
    <!--        昵称弹出框结束-->
  </div>

  </div>

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
        redirect_uri: 'http://www.171tiyu.com/wechat',
        uploadBaseUrl: base.sq + '/UploadAvatar',
        formLabelWidth: '60px',
        imageUrl: '',
        dialogLoginModal:true,
        dialogFormUserInfoVisible:false,
      }
    },
    props: [
      'dialogFormVisible', 'dialogMobileLogin', 'wxIsLoginShow'
    ],
    methods: {
      turn_agreement () {
        this.$router.push({ path: '/profile/privacy' })
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

                    const nickname = res.data.Data.nickname
                    const avatar_url = res.data.Data.avatar_url
                    const phone = res.data.Data.phone
                    // console.log(nickname)
                    localStorage.setItem('token', token)
                    localStorage.setItem('avatar_url', avatar_url)
                    localStorage.setItem('uid', uid)
                    localStorage.setItem('phone', phone)

                    if (nickname === '' || nickname === 'jackson' || nickname == null){
                      this.dialogLoginModal = false;
                      this.dialogFormUserInfoVisible = true;
                    }else{
                      localStorage.setItem('nickname', nickname)
                      this.$router.go(0)
                    }

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
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.fileObj = file.raw
      },
      beforeAvatarUpload (file) {
        // console.log(file)
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 500 < 1

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 500kb!')
        }
        return isLt2M
      },
      updateUserInfo () {
        // console.log(this.fileObj)
        if (this.fileObj !== '') {
          var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'ns_device_id': 'website',
            'uid': localStorage.getItem('uid'),
            'token': localStorage.getItem('token')
          }
          var form = new FormData()    // FormData 对象
          form.append('image', this.fileObj)
          this.$axios.$post(`${base.sq}/UploadAvatar`, form, { headers: headers }).then(
            res => {
              // console.log(res)
              if (res.Status === 1) {
                localStorage.removeItem('avatar_url')
                this.$forceUpdate(localStorage.setItem('avatar_url', res.Data.url))
              } else {
                this.$message({
                    message: '头像更新失败',
                    type: 'warning'
                  }
                )
                this.$router.go(0)
              }

            }
          )
        }

        if (this.nickname !== '') {
          this.$axios.put(`${base.sq}/UpdateNickName`, {
            name: this.nickname
          }, {
            headers: {
              ns_device_id: this.ns_device_id,
              uid: localStorage.getItem('uid'),
              token: localStorage.getItem('token')
            }
          }).then(
            res => {
              this.dialogFormVisible = false
              if (res.data.Status === 1) {
                localStorage.removeItem('nickname')
                localStorage.setItem('nickname', this.nickname)

                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.$router.go(0)
              } else {
                this.$message.error(res.data.ErrMsg)
                this.$router.go(0)
              }
            }
          )
        } else {
          this.$message({
            message: '昵称不能为空',
            type: 'warning'
          })
        }

      },

    }
  }
</script>

<style scoped>
  @import "../assets/css/login.css";
  @import "../assets/css/userinfo.css";
</style>
