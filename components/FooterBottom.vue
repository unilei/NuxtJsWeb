<template>
  <div class="footer-d-container">
    <div class="footer-d-d">
      <span> {{icp1}} </span>
      <a rel="nofollow" href="http://beian.miit.gov.cn/" target="_blank">{{icp2}}</a>
      <a rel="nofollow" :href="icp4"
         target="_blank">{{icp3}}</a>
      <span> 举报电话：+8613482207807   举报邮箱：customer@nsnni.com   Copyright © 全民体育</span>
    </div>
  </div>
</template>

<script>

  import { GetCurrentBrowser, GetOs } from '~/utils/systemTool.js'
  import FooterLink from './FooterLink'

  export default {
    name: 'FooterBottom',
    components: {
      FooterLink
    },
    data () {
      return {
        os: '',
        icp1: '枢秘（杭州）信息科技有限公司',
        icp2: '浙ICP备18019159号-2',
        icp3: '浙公网安备浙公网安备 33010402004047号',
        icp4: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010402004047'
      }
    },
    mounted () {
      this.os = GetOs()
      let hostname = document.location.hostname

      if (hostname === 'www.51体育.net' || hostname === '51体育.net'
        || hostname === 's.51体育.net' || hostname === 'sl.51体育.net') {
       this.icp1 = '上海辣森网络科技有限公司'
       this.icp2 = '沪ICP备18038979号-4'
       this.icp3 = '沪公安备案号：31010702006081'
       this.icp4 = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702006081'
      }
      if (hostname === 'www.oxtiyu.com' || hostname === 'oxtiyu.com' ||
        hostname === 's.oxtiyu.com' || hostname === 'sl.oxtiyu.com') {
        this.icp1 = '上海辣森网络科技有限公司'
        this.icp2 = '沪ICP备18038979号-2'
        this.icp3 = '沪公安备案号：31010702006081'
        this.icp4 = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702006081'
      }
      if (hostname === 'localhost'){
        this.icp1 = '上海辣森网络科技有限公司'
        this.icp2 = '沪ICP备18038979号-2'
        this.icp3 = '沪公安备案号：31010702006081'
        this.icp4 = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702006081'
      }

    }
  }
</script>

<style scoped>


  .footer-d-container {
    height: 50px;
    background: rgba(207, 214, 222, 1);
  }


  .footer-d-d span {
    height: 49px;
    line-height: 49px;
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
