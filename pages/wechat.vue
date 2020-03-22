<template>
  <div>
    <span>loading...</span>
  </div>

</template>

<script>
  import base from '../api/base'
  export default {
    name: 'wechat',
    data () {
      return {
        code: this.$route.query.code,
        appid: 'wx31ded528641f2b4c',
        device_id: 'website',
        platform: 'web',
        ns_device_id: 'web'
      }
    },
    watch: {
      $route (to, from) {

        this.code = to.code
        // console.log(to)

      }
    },
    mounted () {

      // const code = this.$route.query.code

      if (this.code !== '') {
        const params = {
          code: this.code,
          appid: this.appid,
          device_id: this.device_id,
          platform: this.platform
        }
        const headers = {
          ns_device_id: this.ns_device_id
        }
        // console.log(params)
        this.$axios.post(`${base.sq}/WechatLogin`, params, { headers: headers }).then(
          res => {
            // console.log(res)
            if (res.data.Status === 1) {
              const account = res.data.Data.account
              const password = res.data.Data.password
              const type = res.data.Data.type

              this.$axios.post(`${base.sq}/Login`, {
                type: type,
                account: account,
                password: password,
                secret: ''
              }, {
                headers: {
                  ns_device_id: this.ns_device_id
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
                    window.location.href = '/'

                    // this.$router.push({name:'home'})

                  } else {
                    // alert('登录失败')
                    this.$message.error(res.data.ErrMsg)
                  }
                }
              )
            }

          }
        )

      }
    }
  }
</script>

<style scoped>

</style>
