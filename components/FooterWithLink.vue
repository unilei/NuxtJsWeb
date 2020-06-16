<template>
  <el-footer>
    <div class="footer-top-container">
      <FooterTop></FooterTop>
      <FooterLink></FooterLink>
    </div>
    <div style="clear: both;"></div>
    <FooterBottom></FooterBottom>
  </el-footer>
</template>

<script>

  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'
  import FooterLink from './FooterLink'
  import FooterTop from './FooterTop'
  import FooterBottom from './FooterBottom'

  export default {
    name: 'FooterWithLink',
    components:{
      FooterLink,
      FooterTop,
      FooterBottom
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
    height: auto !important;
    margin: 0 auto;
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
