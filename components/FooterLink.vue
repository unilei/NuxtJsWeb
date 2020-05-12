<template>

  <div class="footer-top-c-d">
    <ul>
      <!--          <li><a href="#">友情链接</a></li>-->
      <li><a href="javascript:;">友情链接</a></li>

      <li><a href="https://www.jia.com/jinjiang/" target="_blank">晋江装修</a></li>
      <li><a href="https://www.zuqiuvs.com/" target="_blank">足球比分网</a></li>
      <li><a href="https://www.evfootball.com" target="_blank">一维足球</a></li>
      <li><a href="https://www.soulele.com" target="_blank">搜乐足球</a></li>
      <li><a href="http://www.jinq.com" target="_blank">进球网</a></li>
      <li><a href="http://www.tc108.com" target="_blank">畅说</a></li>
      <li><a href="https://www.kanzutan.com" target="_blank">足球比分</a></li>
      <li><a href="http://www.cctv-3.net" target="_blank">3直播吧</a></li>
      <li><a href="http://www.qieerxi.net" target="_blank"> 切尔西吧</a></li>
      <li><a href="http://www.qiuyouba.com" target="_blank">足球预测网</a></li>

    </ul>
  </div>


</template>

<script>
  export default {
    name: 'FooterLink',
    data () {
      return {
        isShowLink: false,
      }
    },
    mounted () {

      let url = this.$route.path
      console.log(url)
      if (url === '/') {
        this.isShowLink = true
      } else {
        this.isShowLink = false
      }
    }
  }
</script>

<style scoped>

  .footer-top-c-d {
    width: 100%;
    height: 30px;


  }

  .footer-top-c-d ul {
    margin: 0;
    padding: 0;
    padding-left: 27px;

  }

  .footer-top-c-d ul li {
    float: left;
    margin-right: 5%;
    padding-top: 10px;
  }

  .footer-top-c-d ul li a {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(99, 99, 99, 0.93);
  }
</style>
