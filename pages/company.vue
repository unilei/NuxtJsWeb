<template>
  <el-main>
    <el-row class="company">
      <el-col :span="24" class="company-banner">
        <img src="https://aloss.hotforest.cn/web/p-banner.png" alt="">
      </el-col>

      <el-col :span="24" class="company-pf-bg">
        <el-col :span="8" :offset="8" class="company-pf-title">
          关于全民体育
        </el-col>

        <el-col :span="24" class="company-pf-circle">
          <el-col :span="4" :offset="2">
            <div class="company-circle">海量资讯</div>
          </el-col>
          <el-col :span="4" :offset="2">
            <div class="company-circle">权威数据</div>
          </el-col>
          <el-col :span="4" :offset="2">
            <div class="company-circle">
              精品社区
            </div>
          </el-col>
          <el-col :span="4" :offset="2">
            <div class="company-circle">
              大咖汇聚
            </div>
          </el-col>
        </el-col>

        <el-col :span="18" :offset="3" class="company-pf-profile">
          全民体育,一款为体育粉丝量身定做的APP。这里有最全面最专业的体育资讯,让体育迷们在家的氛围中获得完美的赛事体验
          我们通过分析用户(个人信息、喜好和操作资料),提供全方位、多样化的体育资讯。其中包括客制化深度挖掘赛事数据与球队球员比较
          建立用户个人体育爱好知识库等,让用户能更加方便快捷的在社区中参与赛事互动,井帮助用户获得同阵营球迷的反馈
        </el-col>

      </el-col>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>

      <!--        5app背景-->
      <el-col :span="24" class="company-app-bg">
        <el-col :span="24" class="company-app-title">APP功能介绍</el-col>
        <el-col :span="16" :offset="4" class="company-app-profile">
          每天更新最新最火热的篮球/足球赛事,这里有海量资讯,丰富赛事等,对于自己感兴趣的内容可以一键订阅。
          同时,这款应用还是一个体育社区,随时随地分析最新鲜热门话题
        </el-col>
        <el-col :span="24" style="margin-top: 60px;">

          <el-col :span="6" :offset="2" class="company-app-img">
            <img v-if="option === 1" src="@/assets/image/app-1.png" alt="app">
            <img v-if="option === 2" src="@/assets/image/app-2.png" alt="app">
            <img v-if="option === 3" src="@/assets/image/app-3.png" alt="app">
            <img v-if="option === 4" src="@/assets/image/app-4.png" alt="app">
            <img v-if="option === 5" src="@/assets/image/app-5.png" alt="app">
          </el-col>
          <el-col :span="12" :offset="2">
            <el-col :span="24" class="company-app-item"
                    :class="option === 1 ? 'company-app-item-active'  : ''"
            >
              <div @click="sApp(1)">
                <span>完整资讯</span> <br>
                体坛最新消息报导，伤病、交易、访谈、球员表现、花边，所有资讯一手掌握。
              </div>

            </el-col>
            <el-col :span="24" class="company-app-item"
                    @click="sApp(2)"
                    :class="option === 2 ? 'company-app-item-active'  : ''"
            >
              <div @click="sApp(2)">
                <span>深度专栏</span> <br>
                议球网不接受粗劣滥造的内容，以最高规格要求带给球迷最专业的赛事解析。
              </div>
            </el-col>
            <el-col :span="24" class="company-app-item"
                    :class="option === 3 ? 'company-app-item-active'  : ''"
            >
              <div @click="sApp(3)">
                <span>最新赛程</span> <br>
                不错过任何一场比赛！文字直播搭配比赛聊天时，所有球迷一起热血享受比赛。
              </div>

            </el-col>
            <el-col :span="24" class="company-app-item"
                    :class="option === 4 ? 'company-app-item-active'  : ''"
            >
              <div @click="sApp(4)">
                <span>准确数据</span> <br>
                力求所有数据的准确性与及时性，并提供数据比较功能，让球迷能更深入的解析。
              </div>
            </el-col>
            <el-col :span="24" class="company-app-item"
                    :class="option === 5 ? 'company-app-item-active'  : ''"
            >
              <div @click="sApp(5)">
                <span>独一无二</span> <br>
                提供最个人化的使用体验，让每个人球迷都能感受自己时独一无二的！
              </div>
            </el-col>
          </el-col>
        </el-col>
      </el-col>

      <!--      直播列表-->
      <el-col :span="24" class="company-zb">
        <el-col :span="1" :offset="2">
          <div class="p-sports-online-icon"></div>
        </el-col>
        <el-col :span="21" class="company-zb-title">
          直播解说—大咖嘉宾影爆直播间
        </el-col>

        <el-col :span="24" style="margin-top: 42px;">
          <el-col :span="24">
            <el-col :span="18" :offset="3" class="zb-basket-title">
              篮球大咖
            </el-col>
          </el-col>
          <el-col :span="24"  class="zb-basket-items">
            <el-col :span="3" :offset="3" >
              <img  @click="turnKol()" src="https://aloss.hotforest.cn/web/b-1.png" alt="basketball"> <br>
              陈正昊
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/b-2.png" alt="basketball"> <br>
              张天昊
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/b-3.png" alt="basketball"> <br>
              凌光
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/b-4.png" alt="basketball"> <br>
              汪轩
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/b-5.png" alt="basketball"> <br>
              张大维
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/b-6.png" alt="basketball"> <br>
              张小天
            </el-col>
          </el-col>


        </el-col>
        <el-col :span="24" style="margin-top: 20px;">
          <el-col :span="24">
            <el-col :span="18" :offset="3" class="zb-basket-title">
              足球大咖
            </el-col>
          </el-col>

          <el-col :span="24" class="zb-basket-items">
            <el-col :span="3" :offset="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-1.png" alt="basketball"> <br>
              范志毅
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-2.png" alt="basketball"> <br>
              刘越
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-3.png" alt="basketball"> <br>
              白国华
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-4.png" alt="basketball"> <br>
              姬宇阳
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-5.png" alt="basketball"> <br>
              熊冰杰
            </el-col>
            <el-col :span="3">
              <img @click="turnKol()" src="https://aloss.hotforest.cn/web/f-6.png" alt="basketball"> <br>
              唐晖
            </el-col>
          </el-col>
          </el-col>
      </el-col>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>

      <el-col :span="24" class="company-business">
        <el-col :span="24" class="company-business-title">媒体合作伙伴</el-col>
        <el-col :span="20" :offset="2" class="company-business-img">
          <el-col :span="24">
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/1.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/2.png" alt="img">
            </el-col>
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/3.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/4.png" alt="img">
            </el-col>
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/5.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/6.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/7.png" alt="img">
            </el-col>
          </el-col>

          <el-col :span="24" style="margin-top: 20px;">
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/8.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/9.png" alt="img">
            </el-col>
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/10.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/11.png" alt="img">
            </el-col>
            <el-col :span="3" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/12.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/13.png" alt="img">
            </el-col>
            <el-col :span="2" :offset="1" class="company-business-img-item">
              <img src="https://aloss.hotforest.cn/web/business/14.png" alt="img">
            </el-col>
          </el-col>


        </el-col>
      </el-col>

    </el-row>

  </el-main>
</template>

<script>
  export default {
    name: 'company',
    head () {
      return {
        title: '公司介绍_全民体育',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '全民体育,全民体育资讯,全民体育新闻,全民体育视频,全民体育篮球,全民体育足球,全民体育赛事,全民体育NationalSports,全民体育直播,全民体育app'
          },
          {
            hid: 'description',
            name: 'description',
            content: '全民体育提供完整的体坛内容，包括即时新闻、最新赛程、深度专栏、准确数据，搭配人性化又时尚的操作接口，让球迷在接收资讯之馀还享有尊绝不凡的使用体验。'
          }
        ]
      }
    },
    data () {
      return {
        tabPosition: 'right',
        option: 1
      }
    },
    methods: {

      sApp (value) {
        console.log(value)
        this.option = value
        // console.log(tab, event)
      },
      turnKol:function () {
        console.log('turnllll')
        this.$router.push('/kol')
      }
    }

  }
</script>

<style scoped>
  .el-main {
    padding: 0;
    margin: 0 auto;
    width: 1440px;
  }

  .p-sports-online-icon {
    width: 12px;
    height: 40px;
    background: #AB2E2E;
    margin-right: 33px;
  }

  .company {
    width: 100%;
  }

  .company-banner img {
    width: 100%;
  }

  .company-pf-bg {
    /*height: 500px;*/
    background: url("https://aloss.hotforest.cn/web/p-bg-2.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
  }

  .company-pf-title {
    height: 126px;
    position: absolute;
    top: -63px;
    left: 0px;
    background: #003160;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.41);

    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    line-height: 126px;
  }

  .company-pf-circle {
    margin-top: 120px;
  }

  .company-circle {
    height: 152px;
    width: 152px;
    border-radius: 152px;
    background: #003160;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;

    line-height: 152px;
  }

  .company-pf-profile {
    margin-top: 60px;
    font-size: 18px;
    color: #333333;
    text-align: center;
    line-height: 36px;
  }

  .company-app-bg {
    background: url("https://aloss.hotforest.cn/web/p-bg-3.png") no-repeat center;
    background-size: 100% 100%;
    padding-bottom: 40px;
  }

  .company-app-title {
    font-size: 24px;
    font-weight: 500;
    color: rgba(51, 51, 48, 1);
    line-height: 33px;
  }

  .company-app-profile {
    font-size: 18px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 36px;
    margin-top: 20px;
  }

  .company-app-img {
    margin-top: 20px;
  }

  .company-app-img img {
    width: 100%;
  }

  .company-app-item {
    padding: 14px 70px 23px 53px;
    margin-top: 20px;
    text-align: left;
    border: 1px solid rgba(151, 151, 151, 1);
    font-size: 18px;
    color: #333330;
    cursor: pointer;
  }

  /*.company-app-item:hover{*/
  /*  background: #76BCFF;*/
  /*  color:rgba(255,255,255,1);*/
  /*}*/
  .company-app-item-active {
    /*background: #76BCFF;*/
    background: #AB2E2E;
    color: rgba(255, 255, 255, 1);
  }

  .company-app-item span {
    font-weight: bolder;
    font-size: 21px;
  }

  .company-zb {
    padding-top: 55px;
  }

  .company-zb-title {
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    color: rgba(51, 51, 48, 1);
    line-height: 33px;
  }

  .zb-basket-title {
    background: #003160;
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 33px;
  }
  /*.zb-basket-item {*/
  /*  text-align: left;*/

  /*}*/
  .zb-basket-items{
    cursor: pointer;
    margin-top: 27px;
  }

  .zb-basket-item img {
    width: 130px;
  }

  .company-business {
    margin-top: 40px;
  }

  .company-business-title {
    font-size: 24px;
    font-weight: 500;
    color: rgba(51, 51, 48, 1);
    line-height: 33px;
  }

  .company-business-img {
    margin-top: 30px;
  }

</style>
