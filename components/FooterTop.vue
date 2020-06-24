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
          <a href="">全民体育足球圈</a>
        </div>

      </li>
      <li class="sina-wx">
        <div>
          <img src="@/assets/image/sina.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a href=""> 全民体育 <br>
            NationalSports</a>

        </div>

      </li>
      <li class="sina-wx">
        <div>
          <img src="@/assets/image/wx-icon.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a href="">全民体育足球 <br>
            NationalSports</a>

        </div>

      </li>
      <li class="sina-wx">
        <div>
          <img src="@/assets/image/wx-icon.png" alt="sina">
        </div>
        <div class="sina-wx-2">
          <a href="">全民体育 <br>
            NationalSports</a>
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
  }
  .sina-wx-2{
    margin-left: 8px;
  }

</style>
