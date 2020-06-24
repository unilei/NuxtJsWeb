<template>
  <div class="footer-top-l">
    <ul>
      <li>
        <nuxt-link :to="'/company'">公司介绍</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'profile-activeName',params:{'activeName':'about'}}" >关于全民体育</nuxt-link>
      </li>
      <li>
        <nuxt-link  :to="{name:'profile-activeName',params:{'activeName':'agreement'}}" >服务协议</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'profile-activeName',params:{'activeName':'privacy'}}" >隐私政策</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'profile-activeName',params:{'activeName':'complaint'}}" >投诉侵权</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'download'}">立即下载全民体育</nuxt-link>
      </li>
      <li class="sina-wx">
        <div>
          <img src="@/assets/image/sina.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a target="_blank" href="https://weibo.com/5421557556/profile?topnav=1&wvr=6">全民体育足球圈</a>
        </div>

      </li>
      <li class="sina-wx">
        <div>
          <img src="@/assets/image/sina.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a target="_blank" href="https://weibo.com/u/7130101391?sudaref=www.baidu.com&sudaref=passport.weibo.com&display=0&retcode=6102&is_all=1">
            全民体育 <br>
            NationalSports
          </a>
        </div>

      </li>
      <li class="sina-wx-foot">
        <div>
          <img src="@/assets/image/wx-icon.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a href="javascript:;">全民体育足球 <br>
            NationalSports
          </a>
        </div>

        <div class="sina-wx-football">
          <img src="@/assets/image/wechat-football.jpg" alt="football">
        </div>

      </li>
      <li class="sina-wx-basket">
        <div>
          <img src="@/assets/image/wx-icon.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a href="javascript:;">全民体育 <br>
            NationalSports</a>
        </div>
        <div class="sina-wx-basketball">
          <img src="@/assets/image/wechat-basketball.jpg" alt="football">
        </div>
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


  .footer-top-l {
    width: 100%;
    height: 85px;
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
    margin-right: 3%;
    padding-top: 10px;
  }

  .footer-top-l ul li a {
    font-size: 12px;
    color: #333333;
  }
  .sina-wx{
    display: flex;
    align-items: center;
    position: relative;
  }
  .sina-wx-foot{
    display: flex;
    align-items: center;
    position: relative;
  }
  .sina-wx-foot:hover .sina-wx-football{
    display: block;
  }
  .sina-wx-basket{
    display: flex;
    align-items: center;
    position: relative;
  }
  .sina-wx-basket:hover .sina-wx-basketball{
    display: block;
  }
  .sina-wx-2{
    margin-left: 8px;
  }

  .sina-wx-football{
    position: absolute;
    top: -90px;
    left: 30px;
    display: none;
  }
  .sina-wx-football img{
    width: 100px;
    height: 100px;
  }

  .sina-wx-basketball{
    position: absolute;
    top: -90px;
    left: 30px;
    display: none;
  }
  .sina-wx-basketball img{
    width: 100px;
    height: 100px;
  }

</style>
