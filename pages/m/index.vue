<template>
<van-row>
  <van-col span="24">
    <van-nav-bar :left-arrow=false style="height: 1rem;">
      <template #left>
        <img src="@/assets/image/m/icon.png" alt="">
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

  <van-col span="12" class="m-header-logo">

    <img src="@/assets/image/m/logo.png" alt="">

  </van-col>
  <van-col span="12" class="m-header-user">
    <img src="@/assets/image/m/avatar.png" alt="">
    <span>徐刘磊</span>
  </van-col>


  <van-col span="24">
    <van-tabs v-model="activeName">
      <van-tab title="全部新闻" name="a"></van-tab>
      <van-tab title="NBA" name="b"></van-tab>
      <van-tab title="足球" name="c"></van-tab>
      <van-tab title="社区论坛" name="d"></van-tab>
    </van-tabs>
  </van-col>

  <van-col span="24" class="m-swiper">
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(image, index) in swiper_images" :key="index">
<!--        <img v-lazy="image" />-->
        <img :src="image" alt="">
      </van-swipe-item>
    </van-swipe>
  </van-col>




</van-row>


</template>

<script>
  import { Lazyload } from 'vant';
  export default {
    name: 'index',
    layout:'mLayout',
    data(){
      return {
        activeName: 'a',
        swiper_images:[
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
  .van-nav-bar{
    line-height: unset;
    background-color: #F0F0F0;
  }

  /deep/ .van-nav-bar__left{
    left: 0.67rem;
  }
  /deep/ .van-nav-bar__left img{
    width: 0.8rem;
    height: 0.8rem;
  }
  /deep/ .van-nav-bar__title{
    margin-left: 1.66rem;
  }

  .van-nav-bar__title p:first-child{
    padding: 0;
    margin: 0;
    font-size:0.24rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:0.36rem;
    margin-top: 0.14rem;
    text-align: left;

  }
  .van-nav-bar__title p:nth-child(2){
    padding: 0;
    margin: 0;
    font-size:0.2rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:0.36rem;
    margin-top: 0.1rem;
    text-align: left;

  }
  /deep/ .van-nav-bar__right {
    height: 1rem;
    right: 0.8rem;

  }
  .van-nav-bar__right button {
    outline: none;

    width:1.1rem;
    height:0.45rem;
    background:rgba(207,46,65,1);
    border-radius:0.08rem;
    border:0.01rem solid rgba(241,241,241,1);
    font-size:0.16rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);

    margin-top: 0.23rem;
  }

  .m-header-logo {
    text-align: left;
  }
  .m-header-logo img{
    width: 1.68rem;
    height: 0.36rem;
    margin-left: 0.18rem;
  }

  .m-header-user {
    text-align: right;
  }
  .m-header-user img{
    width: 0.4rem;
    height: 0.4rem;

  }
  .m-header-user span{
    font-size:0.16rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:1rem;
    margin-right: 0.32rem;

  }

  /deep/ .van-tabs__nav--line{
    background-color: #397AB8;
  }
  /deep/ .van-tab{
    color: #ffffff;
  }
  /deep/ .van-tabs__line{
    background-color: #EBB031;
  }

  .m-swiper{
    width: 100%;
    height: 3.7rem;
    padding: 0.3rem 0.35rem 0.3rem 0.35rem;
    border-bottom: 0.02rem solid #8FB6DB;
  }

  /deep/ .van-swipe-item{
    width: 6.78rem;
    height: 2.9rem;

  }
  /deep/ .van-swipe-item img{
    width: 100%;
    height: 100%;
  }
</style>
