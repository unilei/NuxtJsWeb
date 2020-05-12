<template>
  <div class="footer-top-l">
    <ul>
      <li>
        <nuxt-link :to="'/companyProfile'">公司介绍</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/about'">关于全民体育</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/agreement'">服务协议</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/personalInformationService'">隐私政策</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/complaint'">投诉侵权</nuxt-link>
      </li>
      <li>
        <a href="https://171tiyu.com/download/android?channelCode=Web_Landing_Page"
           v-if="this.os === 'Win'">
          立即下载全民体育
        </a>
        <a v-if="this.os==='Mac'" href="https://apps.apple.com/app/id1482371213">
          立即下载全民体育
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'

  export default {
    name: 'FooterTop',
    components:{

    },
    data () {
      return {
        os: '',
        isShowLink:false,
      }
    },
    mounted () {
      this.os = GetOs()
    }
  }
</script>

<style scoped>

  .el-footer {
    width: 1440px;
    margin-top: 20px;
  }

  .footer-top-container {
    height: 80px;
    margin: 0;
    padding: 0;
    background: #E3E8EE;
  }

  .footer-top-l {
    width: 100%;
    height: 35px;
    /*float: left;*/
  }

  .footer-top-r {
    /*width: 49%;*/
    /*float: left;*/
  }

  .footer-top-l ul {

  }

  .footer-top-l ul li:first-child {
    margin-left: 27px;
    padding-top: 10px;
  }

  .footer-top-l ul li {
    float: left;
    margin-right: 5%;
    padding-top: 10px;
  }

  .footer-top-l ul li a {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
  }

  .footer-top-r ul {
  }

  .footer-top-r ul li {
    float: left;
    margin-left: 5%;
  }

  .footer-top-r ul li a {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
  }

  .footer-top-r ul li img {
    width: 130px;
    height: 125px;
  }

  .footer-top-r-img {
    float: left;
  }

  .footer-top-r-a {
    float: left;
  }

  .footer-d-container {
    /*background: #CFD6DE;*/
    height: 50px;
    background: rgba(207, 214, 222, 1);
  }

  .footer-d-t {
    width: 100%;
    /*height: 50px;*/
  }

  .footer-d-t ul {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    padding: 0;
  }

  .footer-d-t ul li {
    float: left;
    margin-left: 27px;
    padding-top: 20px;
  }

  .footer-d-t ul li a {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;
  }

  .footer-d-d span {
    height: 49px;
    line-height: 49px;
    display: block;
    /*margin-top: 15px;*/
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }

  .footer-d-d a {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }


</style>
