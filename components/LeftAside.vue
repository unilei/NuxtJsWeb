<template>

  <el-col :span="5" class="aside-nav">
    <el-col :span="24" class="aside-title"><img src="@/assets/image/qmty-icon.png" alt="qmty"></el-col>

    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>
      <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}">西甲</nuxt-link>
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/laliga.png" alt="la_liga"></el-col>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/premier.png" alt="premier"></el-col>
      <nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}">英超</nuxt-link>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/serie_a.png" alt="serie_a"></el-col>
      <nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}">意甲</nuxt-link>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/football.png" alt="football"></el-col>
      <el-col :span="4" class="aside-nav-item-icon"><img src="@/assets/image/sub-menu-icon.png" alt="icon"></el-col>
      <!--            <nuxt-link :to="{name:'nsforum-sportType',params:{sportType:'football'}}">足球社区</nuxt-link>-->
      <a href="javascript:;">足球社区</a>
      <div class="sub-forum-nav">
        <div class="sub-forum-nav-item" v-for="(fg,i) in footballGroupList" :key="i">
          <nuxt-link :to="{name:'nsforum-groupId',params:{groupId:fg.id}}">{{fg.name}}</nuxt-link>
        </div>
      </div>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/basketball.png" alt="basketball"></el-col>
      <el-col :span="4" class="aside-nav-item-icon"><img src="@/assets/image/sub-menu-icon.png" alt="icon"></el-col>
      <a href="javascript:;">篮球社区</a>
      <div class="sub-forum-nav">
        <div class="sub-forum-nav-item" v-for="(bg,i) in basketballGroupList" :key="i">
          <nuxt-link :to="{name:'nsforum-groupId',params:{groupId:bg.id}}">{{bg.name}}</nuxt-link>
        </div>
      </div>
    </el-col>
    <el-col :span="24" class="aside-nav-item ">
      <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/social.png" alt="basketball">
      </el-col>
      <nuxt-link :to="{name:'nsforum-sportType',params:{sportType:'basketball'}}">社区活动</nuxt-link>
    </el-col>
  </el-col>

</template>

<script>
  import base from '../api/base'

  export default {
    name: 'LeftAside',
    data(){
      return {
        footballGroupList:[],
        basketballGroupList:[]
      }
    },
    mounted () {
      this.getFootballGroupList();
      this.getBasketballGroupList();
    },
    methods:{
      getFootballGroupList:function () {
          this.$axios.$get(`${base.sq}/v3/forum/football/groups`).then(
            res=>{
              console.log(res)
              if (res.Status === 1){
                this.footballGroupList = res.Data.list;
              }
            }
          )
      },
      getBasketballGroupList:function () {
        this.$axios.$get(`${base.sq}/v3/forum/basketball/groups`).then(
          res=>{
            console.log(res)
            if (res.Status === 1){
              this.basketballGroupList = res.Data.list;
            }
          }
        )
      },
    }

  }
</script>

<style scoped>

  .aside-nav {
    padding: 10px;
    background: rgba(248, 248, 248, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .aside-title {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6E6E6;
  }

  .aside-title img {
    width: 100px;
    height: 20px;
  }

  .aside-nav-item {
    text-align: left;
    height: 40px;
    border-bottom: 1px dashed #E6E6E6;
    position: relative;

  }

  .aside-nav-item:hover {
    background: #FFFFFF;
  }

  .aside-nav-item:hover .sub-forum-nav {
    display: block;
  }

  .aside-nav-item-img {
    height: 25px;
    position: absolute;
    left: 0;
    top: 8px;
  }

  .aside-nav-item-img img {
    height: 100%;
  }

  .aside-nav-item-icon{
    height: 16px;
    position: absolute;
    right: 0;
    top: 12px;
  }

  .aside-nav-item-icon img {
    height: 100%;
  }

  .aside-nav-item a {
    display: block;
    height: 100%;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
    text-align: left;
    text-indent: 30px;
  }

  .sub-forum-nav {
    display: none;
    position: absolute;
    right: -180px;
    top: 0;

    /*background: rgba(255, 255, 255, 1);*/
    background: rgba(248, 248, 248, 1);
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 18px;
    /*border-radius: 8px;*/

  }

  .sub-forum-nav-item {
    width: 145px;
    height: 21px;
    /*background: rgba(202, 231, 241, 1) !important;*/
    /*border-radius: 8px;*/
    margin: 0 auto;
    margin-top: 10px;

    border-bottom: 1px dashed #E6E6E6;
  }

  .sub-forum-nav-item a {
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
    text-align: center;
    text-indent: 0;
  }

  .nuxt-link-active {
    background: #FFFFFF !important;
  }

</style>
