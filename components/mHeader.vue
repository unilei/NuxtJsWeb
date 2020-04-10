<template>
  <div>
    <!--顶部-->
    <van-col span="24">
      <van-nav-bar :left-arrow=false style="height: 1rem;">
        <template #left>
          <img src="http://aloss.hotforest.cn/web/m/icon.png" alt="">
        </template>
        <template #title>
          <p>全民体育</p>
          <p>懂球迷的聚集地</p>
        </template>

        <template #right>
          <button>打开</button>
        </template>
      </van-nav-bar>
    </van-col>

    <!--logo-->
    <van-col span="12" class="m-header-logo">
      <img src="http://aloss.hotforest.cn/web/m/logo.png" alt="">
    </van-col>
    <van-col span="12" class="m-header-user">
      <img src="http://aloss.hotforest.cn/web/m/avatar.png" alt="">
      <span>徐刘磊</span>
    </van-col>

    <!--  导航-->
    <van-col span="24">
      <van-tabs v-model="activeName" @click="onClick">
        <van-tab title="全部新闻" name="all"></van-tab>
        <van-tab title="篮球" name="basketball"></van-tab>
        <van-tab title="足球" name="football"></van-tab>
        <van-tab title="社区论坛" name="bbs"></van-tab>
      </van-tabs>
    </van-col>
    <!--  轮播图-->
    <van-col span="24" class="m-swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(value, index) in bannerArr" :key="index" :show-indicators=false
                        @click="bannerTurn(value)">
          <img :src="value.image" :alt="value.name" >
          <div class="m-swiper-item-pop">
          <span>
             {{value.name}}
          </span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </div>
</template>

<script>
  import base from '../api/base'

  export default {
    name: 'mHeader',
    data () {
      return {
        activeName: 'all',
        bannerArr: [], // 轮播图
      }
    },
    async asyncData(context){
      // 获取新闻轮播图
      let newsBanner = await context.$axios.$get(`${base.sq}/GetBanner`, {
        params: {
          platform: 'APP'
        }
      })
      return {
        bannerArr: newsBanner.Data
      }
    },
    mounted () {
      this.$axios.$get(`${base.sq}/GetBanner`, {
        params: {
          platform: 'APP'
        }
      }).then(
        res=>{
          console.log(res)
          this.bannerArr = res.Data
        }
      )
    },
    methods: {
      onClick (name, title) {
        this.activeName = name
        // this.$router.push({name: 'm', params: {cate: name}})
        if (name === 'bbs'){

          this.$router.push({
            path: '/m/bbs/' + name
          })
        }else{
          this.$router.push({
            path: '/m/nsport/' + name
          })
        }


      },
      bannerTurn (v) {
        if (v.type == 1) {
          this.$router.push({ name: 'm-nsport-detail-articleId',params:{'articleId':v.content} })
        }
        if (v.type == 7) {
          window.location.href = v.content
        }
      },

    }
  }
</script>

<style scoped>
  .van-nav-bar {
    line-height: unset;
    background-color: #F0F0F0;
  }

  /deep/ .van-nav-bar__left {
    left: 0.67rem;
  }

  /deep/ .van-nav-bar__left img {
    width: 0.8rem;
    height: 0.8rem;
  }

  /deep/ .van-nav-bar__title {
    margin-left: 1.66rem;
  }

  .van-nav-bar__title p:first-child {
    padding: 0;
    margin: 0;
    font-size: 0.24rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.36rem;
    margin-top: 0.14rem;
    text-align: left;

  }

  .van-nav-bar__title p:nth-child(2) {
    padding: 0;
    margin: 0;
    font-size: 0.2rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.36rem;
    margin-top: 0.1rem;
    text-align: left;

  }

  /deep/ .van-nav-bar__right {
    height: 1rem;
    right: 0.8rem;

  }

  .van-nav-bar__right button {
    outline: none;

    width: 1.1rem;
    height: 0.45rem;
    background: rgba(207, 46, 65, 1);
    border-radius: 0.08rem;
    border: 0.01rem solid rgba(241, 241, 241, 1);
    font-size: 0.16rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);

    margin-top: 0.23rem;
  }

  .m-header-logo {
    text-align: left;
  }

  .m-header-logo img {
    width: 1.68rem;
    height: 0.36rem;
    margin-left: 0.18rem;
  }

  .m-header-user {
    text-align: right;
  }

  .m-header-user img {
    width: 0.4rem;
    height: 0.4rem;

  }

  .m-header-user span {
    font-size: 0.16rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1rem;
    margin-right: 0.32rem;

  }

  /deep/ .van-tabs__nav--line {
    background-color: #397AB8;
  }

  /deep/ .van-tab {
    color: #ffffff;
  }

  /deep/ .van-tabs__line {
    background-color: #EBB031;
  }

  .m-swiper {
    width: 100%;
    /*height: 3.7rem;*/
    padding: 0.3rem 0.35rem 0 0.35rem;
    border-bottom: 0.02rem solid #8FB6DB;
  }

  /deep/ .van-swipe {
    height: 5.5rem;
  }

  /deep/ .van-swipe-item {
    width: 6.78rem;
    /*height: 2.9rem;*/

  }

  /deep/ .van-swipe-item img {
    max-width: 100%;
    max-height: 100%;
  }

  /deep/ .van-swipe__indicator {
    background-color: #E1E1E1;
  }

  /deep/ .van-swipe__indicator--active {
    background-color: red;
  }

  .m-swiper-item-pop {
    width: 100%;
    height: 0.8rem;
    position: absolute;
    bottom: 0.9rem;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .m-swiper-item-pop span {
    font-size: 0.28rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 0.4rem;
  }

</style>
