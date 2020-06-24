<template>
  <div>
    <span>qqLogin....</span>
  </div>
</template>

<script>
  import {encryptByDES,getKey} from '../utils/systemTool'
  import qs from 'qs'
  import base from '../api/base'
  export default {
    name: 'myqq',
    data () {
      return {
        access_token: '',
        app_id: '101878258',
        device_id: 'website',
        platform: 'web',
        ns_device_id: 'web'
      }
    },
    watch: {
      $route (to, from) {
        this.access_token = to.access_token
        console.log(to)
      }
    },
    mounted () {

      var that = this;
      let hashParams = this.$route.hash;
      let start = hashParams.indexOf('=');
      let end = hashParams.indexOf('&');

      let access_token = hashParams.substring(start+1,end)
      console.log(access_token)
      if (access_token !== '') {
        const params = {
          ns_device_id: that.ns_device_id,
          app_id: "101878258",
          device_id: that.device_id,
          platform: that.platform,
          qq_access_token:access_token
        }
        const headers = {
          "Content-Type":"text/plain",
          ns_device_id: that.ns_device_id
        }
        console.log(params)
        var key = getKey()
        console.log(key)
        var text = encryptByDES(JSON.stringify(params), key)
        console.log(text)
        // console.log(params)
        // let text = "2WzqqKyPlydeZYd5MhZVx6BHNVAQMMr+6XNnojyyZaymQjdGrPrSNJyUvhdol7ZdAhLlgXJq5UyT+oUG2TwYIZkaOKK2HXeYs/6dAs+oFQBYzJbrV804SeP71Z/P1ddP3iNWmxlypy+f2JhsuVsruIRgjGAL0FF5gLVKFWzikgih425y25qJwtcFli34771f";
        this.$axios.post(`${base.sq}/v3/qq/login`, text, { headers: headers }).then(
          res => {
            console.log(res)
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

                    localStorage.setItem('nickname', nickname)
                    localStorage.setItem('token', token)
                    localStorage.setItem('avatar_url', avatar_url)
                    localStorage.setItem('phone', phone)
                    localStorage.setItem('uid', uid)
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
