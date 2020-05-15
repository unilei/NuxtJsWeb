<template>
  <el-main>
    <!--            热门新闻-->
    <el-row class="hot-news-container">
      <el-col :span="10"   class="hot-news">
        <el-col :span="24" class="hot-news-first">
          <nuxt-link v-if="hotNewsList.length > 0"
                     :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotNewsList[0].shorturl}}"
                     target="_blank">{{hotNewsList[0].title}}
          </nuxt-link>
        </el-col>
        <el-col :span="24" v-for="(hotNews,k) in hotNewsList" :key="k" class="hot-news-item">
          <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotNews.shorturl}}"
                     target="_blank">{{hotNews.title}}
          </nuxt-link>
        </el-col>

      </el-col>
      <el-col :span="13"  offset="1"  class="news-slider">
        <div id="slideBox" class="slideBox">
          <div class="hd">
            <ul>
              <li v-for="(item,i) in bannerArr" :key="i+1"></li>
            </ul>
          </div>
          <div class="bd">
            <ul>
              <li v-for="(item,index) in bannerArr" :key="index">
                <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:item.content}}" target="_blank">
                  <img :src="item.image"/>
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- 下面是前/后按钮代码，如果不需要删除即可 -->
          <a class="news-prev" href="javascript:void(0)"></a>
          <a class="news-next" href="javascript:void(0)"></a>
          <span class="pageState"></span>

        </div>
      </el-col>
    </el-row>
    <!--          热门新闻结束  -->

    <!--            nba-->
    <div class="news-container">
      <div class="news-header">
        <div style="width:40px;height:40px;float:left;">
          <img style="width: 100%;" src="https://aloss.hotforest.cn/web/nba-icon.png" alt="">
        </div>
        <div style="float:left;margin-left: 9px;width:155px;height: 40px;margin-top: 18px;"
             :style="backgroundImg"
        >
          <h2>NBA</h2>
          <!--          <a href="#"></a>-->
        </div>
      </div>
      <div class="news-left">
        <ul>
          <li>
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotNbaNewsFirst.shorturl}}"
                         target="_blank">
                {{hotNbaNewsFirst.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotNbaNewsFirst.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotNbaNewsFirst.content">
              <p>
                {{hotNbaNewsFirst.content[0].content}}
              </p>
              <span>{{nbaTimestamp1}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li style="padding-top: 10px;">
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotNbaNewsSecond.shorturl}}"
                         target="_blank">
                {{hotNbaNewsSecond.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotNbaNewsSecond.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotNbaNewsSecond.content">
              <p>
                {{hotNbaNewsSecond.content[0].content}}
              </p>
              <span>{{nbaTimestamp2}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
        </ul>
      </div>
      <div class="news-right">
        <ul>
          <li v-for="newNbaNews in newNbaNewsList" :key="newNbaNews.article_id">
            <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:newNbaNews.shorturl}}" target="_blank">
              {{newNbaNews.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--            nba end-->

    <!--            社区-->

    <div class="news-container">
      <div class="news-header">
        <div style="width:40px;height:40px;float:left;">
          <img style="width: 100%;" src="https://aloss.hotforest.cn/web/bbs.png" alt="">
        </div>
        <div style="float:left;margin-left: 9px;width:155px;height: 40px;margin-top: 18px;"
             :style="backgroundImg"
        >
          <h2>社区</h2>
        </div>
      </div>
      <div class="news-left">
        <ul>
          <li style="height: auto !important;line-height: 35px;" v-for="(hotBbs,index) in hotBbsList" :key="index">
            <h4>
              <nuxt-link style="font-size: 16px !important;" target="_blank"
                         :to="{name:'bbs-detail-articleId',params:{'articleId':hotBbs.article_id}}">
                {{hotBbs.title}}
              </nuxt-link>
            </h4>
          </li>

        </ul>
      </div>
      <div class="news-right">
        <ul>
          <li v-for="(bbs,i) in bbsList" :key="i">
            <nuxt-link :to="{name:'bbs-detail-articleId',params:{'articleId':bbs.article_id}}" target="_blank">
              {{bbs.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--            社区结束-->

    <!--            西甲 -->

    <div class="news-container">
      <div class="news-header">
        <div style="width:40px;height:40px;float:left;">
          <img style="width: 100%;" src="https://aloss.hotforest.cn/web/laliga-icon.png" alt="">
        </div>
        <div style="float:left;margin-left: 9px;width:155px;height: 40px;margin-top: 18px;"
             :style="backgroundImg"
        >
          <h2>西甲</h2>
        </div>
      </div>

      <div class="news-left">
        <ul>
          <li>
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotLaLigaNewsFirst.shorturl}}"
                         target="_blank">
                {{hotLaLigaNewsFirst.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotLaLigaNewsFirst.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotLaLigaNewsFirst.content">
              <p>
                {{hotLaLigaNewsFirst.content[0].content}}
              </p>
              <span>{{laLigaTimestamp1}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li style="padding-top: 27px;">
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotLaLigaNewsSecond.shorturl}}"
                         target="_blank">
                {{hotLaLigaNewsSecond.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotLaLigaNewsSecond.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotLaLigaNewsSecond.content">
              <p>
                {{hotLaLigaNewsSecond.content[0].content}}
              </p>
              <span>{{laLigaTimestamp2}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
        </ul>
      </div>
      <div class="news-right">
        <ul>
          <li v-for="newLaLigaNews in newLaLigaNewsList" :key="newLaLigaNews.article_id">
            <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:newLaLigaNews.shorturl}}"
                       target="_blank">{{newLaLigaNews.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--            nba end-->
    <!--            英超-->

    <div class="news-container">
      <div class="news-header">
        <div style="width:40px;height:40px;float:left;">
          <img style="width: 100%;" src="https://aloss.hotforest.cn/web/premier-icon.png" alt="">
        </div>
        <div style="float:left;margin-left: 9px;width:155px;height: 40px;margin-top: 18px;"
             :style="backgroundImg"
        >
          <h2>英超</h2>
        </div>
      </div>
      <div class="news-left">
        <ul>
          <li>
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotPremierNewsFirst.shorturl}}"
                         target="_blank">
                {{hotPremierNewsFirst.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotPremierNewsFirst.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotPremierNewsFirst.content">
              <p>
                {{hotPremierNewsFirst.content[0].content}}
              </p>
              <span>{{premierTimestamp1}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li style="padding-top: 27px;">
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotPremierNewsSecond.shorturl}}"
                         target="_blank">
                {{hotPremierNewsSecond.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotPremierNewsSecond.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotPremierNewsSecond.content">
              <p>
                {{hotPremierNewsSecond.content[0].content}}
              </p>
              <span>{{premierTimestamp2}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
        </ul>
      </div>
      <div class="news-right">
        <ul>
          <li v-for="newPremierNews in newPremierNewsList" :key="newPremierNews.article_id">
            <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:newPremierNews.shorturl}}"
                       target="_blank">
              {{newPremierNews.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--            nba end-->


    <!--            意甲-->

    <div class="news-container">
      <div class="news-header">
        <div style="width:40px;height:40px;float:left;">
          <img style="width: 100%;" src="https://aloss.hotforest.cn/web/serea-icon.png" alt="">
        </div>
        <div style="float:left;margin-left: 9px;width:155px;height: 40px;margin-top: 18px;"
             :style="backgroundImg"
        >
          <h2>意甲</h2>
        </div>
      </div>
      <div class="news-left">
        <ul>
          <li>
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotSerieANewsFirst.shorturl}}"
                         target="_blank">
                {{hotSerieANewsFirst.title}}
              </nuxt-link>
            </h3>
            <div class="news-left-l">
              <img :src="hotSerieANewsFirst.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotSerieANewsFirst.content">
              <p>
                {{hotSerieANewsFirst.content[0].content}}
              </p>
              <span>{{serieATimestamp1}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
          <li style="padding-top: 27px;">
            <h3 style="">
              <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotSerieANewsSecond.shorturl}}"
                         target="_blank">
                {{hotSerieANewsSecond.title}}
              </nuxt-link>

            </h3>
            <div class="news-left-l">
              <img :src="hotSerieANewsSecond.image" alt="">
            </div>
            <div class="news-left-r" v-if="hotSerieANewsSecond.content">
              <p>
                {{hotSerieANewsSecond.content[0].content}}
              </p>
              <span>{{serieATimestamp2}}</span>
            </div>
            <div style="clear:both;"></div>
          </li>
        </ul>
      </div>
      <div class="news-right">
        <ul>
          <li v-for="newSerieANews in newSerieANewsList" :key="newSerieANews.article_id">
            <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:newSerieANews.shorturl}}"
                       target="_blank">{{newSerieANews.title}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--            nba end-->


  </el-main>
</template>

<script>

  import { getFormatTime } from '../utils/time'
  import base from '../api/base'

  export default {
    name: 'index',
    layout: 'linkLayout',
    data () {
      return {
        backgroundImg: {
          backgroundImage: 'url(https://aloss.hotforest.cn/web/hot-t-bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          marginTop: '5px',
        },
        bannerArr: [],
        matchArr: [],
        hotNewsList: [],
        hotNbaNewsFirst: {},
        hotNbaNewsSecond: {},
        newNbaNewsList: [],
        nbaTimestamp1: '',
        nbaTimestamp2: '',
        hotFibaNewsFirst: {},
        hotFibaNewsSecond: {},
        newFibaNewsList: [],
        fibaTimestamp1: '',
        fibaTimestamp2: '',
        hotPremierNewsFirst: {},
        hotPremierNewsSecond: {},
        newPremierNewsList: [],
        premierTimestamp1: '',
        premierTimestamp2: '',
        hotLaLigaNewsFirst: {},
        hotLaLigaNewsSecond: {},
        newLaLigaNewsList: [],
        laLigaTimestamp1: '',
        laLigaTimestamp2: '',
        hotSerieANewsFirst: {},
        hotSerieANewsSecond: {},
        newSerieANewsList: [],
        serieATimestamp1: '',
        serieATimestamp2: '',
        bbsList: [],
        hotBbsList: []

      }
    },
    head () {
      return {
        title: '全民体育_懂球迷的聚集地',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '全民体育,体育,新闻,直播,足球,篮球,资讯,比分,社区,数据,比赛'
          },
          {
            hid: 'description',
            name: 'description',
            content: '全民体育为您带来足球，篮球比赛，即时比分，数据库等一系列数据，包括：英超，西甲，意甲，德甲，欧冠，中超，NBA，CBA，世界杯等各种比赛，让球迷及时准确的了解赛事进展和结果'
          },
        ]
      }
    },
    async asyncData (context) {
      const sportType = 'all'
      const type = 'toplike'
      const limit_type = 10
      const type2 = 'newest'
      const limit_type2 = 9
      // 获取比赛赛程列表
      let matchList = await context.$axios.$get(`${base.sq}/v2/GetMatchList`, {})
      // 获取帖子列表
      let bbsList = await context.$axios.$get(`${base.sq}/v1/forum/` + sportType + `/0/` + type + `/articles`, {
        params: {
          limit: limit_type,
          offset: 0
        }
      })
      // 获取热门帖子列表
      let hotBbsList = await context.$axios.$get(`${base.sq}/v1/forum/` + sportType + `/0/` + type2 + `/articles`, {
        params: {
          limit: limit_type2,
          offset: 0
        }
      })
      // 获取新闻轮播图
      let newsBanner = await context.$axios.$get(`${base.sq}/GetBanner`, {
        params: {
          platform: 'WEB'
        }
      })

      // 获取热门新闻列表
      let hotNewsList = await context.$axios.$get(`${base.sq}/v2/GetArticles`, {
        params: {
          articleType: 2,
          limit: 10,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      })

      let indexList = await context.$axios.$get(`${base.bd}/web/api.news/indexList`)

      // console.log(indexList)

      return {
        matchArr: matchList.Data.list,
        bbsList: bbsList.Data.list,
        hotBbsList: hotBbsList.Data.list,
        bannerArr: newsBanner.Data,
        hotNewsList: hotNewsList.Data.articles,

        hotNbaNewsFirst: indexList.data.nbaFirst.Data,
        nbaTimestamp1: indexList.data.nbaFirst.Data.published_at,
        hotNbaNewsSecond: indexList.data.nbaSecond.Data,
        nbaTimestamp2: indexList.data.nbaSecond.Data.published_at,
        newNbaNewsList: indexList.data.lastNbaNews.Data.articles,

        hotFibaNewsFirst: indexList.data.fibaFirst.Data,
        fibaTimestamp1: indexList.data.fibaFirst.Data.published_at,
        hotFibaNewsSecond: indexList.data.fibaSecond.Data,
        fibaTimestamp2: indexList.data.fibaSecond.Data.published_at,
        newFibaNewsList: indexList.data.lastFibaNews.Data.articles,

        hotPremierNewsFirst: indexList.data.premierFirst.Data,
        premierTimestamp1: indexList.data.premierFirst.Data.published_at,
        hotPremierNewsSecond: indexList.data.premierSecond.Data,
        premierTimestamp2: indexList.data.premierSecond.Data.published_at,
        newPremierNewsList: indexList.data.lastPremierNews.Data.articles,

        hotLaLigaNewsFirst: indexList.data.laLigaFirst.Data,
        laLigaTimestamp1: indexList.data.laLigaFirst.Data.published_at,
        hotLaLigaNewsSecond: indexList.data.laLigaSecond.Data,
        laLigaTimestamp2: indexList.data.laLigaSecond.Data.published_at,
        newLaLigaNewsList: indexList.data.lastLaLigaNews.Data.articles,

        hotSerieANewsFirst: indexList.data.serieAFirst.Data,
        serieATimestamp1: indexList.data.serieAFirst.Data.published_at,
        hotSerieANewsSecond: indexList.data.serieASecond.Data,
        serieATimestamp2: indexList.data.serieASecond.Data.published_at,
        newSerieANewsList: indexList.data.lastSerieANews.Data.articles,

      }
    },
    methods: {
      matchBanner () {
        $('.ato-content').slide({
          titCell: '.ato-list-fl ul',
          mainCell: '.ato-list ul',
          autoPage: true,
          effect: 'leftLoop',
          autoPlay: true,
          vis: 4
        })
      },
      slideNewsShow () {
        $('.slideBox').slide({
          mainCell: '.bd ul',
          autoPlay: true,
          prevCell: '.news-prev',
          nextCell: '.news-next'
        })
      },

    },
    watch: {},
    mounted () {
      this.slideNewsShow()
    }
  }


</script>

<style scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/newsSlide.css";

  .el-main {
    padding: 10px 27px 37px 27px;

  }
  .hot-news-container{

  }

  .hot-news {
    text-align: left;
    margin-top: 20px;
  }

  .hot-news-first a{
    font-size: 19px;
    color: #CB2C40;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: bolder;
  }

  .hot-news-first a:hover{
    border-bottom: 1px solid #CB2C41;
  }

  .hot-news-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hot-news-item a {
    text-decoration: none;
    font-size: 15px;
    color: #151515;
    line-height: 32px;
  }

  .hot-news-item a:hover {
    font-size: 15px;
    color: #333333;
    line-height: 32px;
    border-bottom: 1px solid #CB2C41;
  }

  .news-slider{
    margin-top: 22px;
  }


  .news-container {
    border-top: 3px solid #8FB6DB;
    margin-top: 25px;
  }

  .news-header {
    height: 60px;
    padding-top: 20px;
    clear: both;
    text-align: left;
  }

  .news-header h2 {
    margin: 0;
    padding: 0;
    font-family: Arial-BoldMT;
    font-size: 19px;
    color: #FFFFFF;
    margin-left: 16px;
    display: block;
    line-height: 42px;
    height: 42px;
  }

  .news-left {
    float: left;
    width: 49%;
    border-right: 1px dashed #C2C2C2;
    clear: both;
  }

  .news-left ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .news-left ul li {

  }

  .news-left ul li h3 {
    margin: 0;
    padding: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-left ul li h3 a {

    font-family: PingFangSC-Medium;
    /*font-size: 22px;*/
    font-size: 19px;
    color: #333333;

  }

  .news-left ul li h4 {
    margin: 0;
    padding: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-left ul li h4 a {

    font-family: PingFangSC-Medium;
    /*font-size: 22px;*/
    font-size: 19px;
    color: #333333;

  }

  .news-left-l {
    float: left;
    width: 180px;
    height: 110px;
    padding-top: 10px;
  }

  .news-left-l img {
    width: 180px;
    height: 110px;
  }

  .news-left-r {
    float: left;
    width: 382px;
    height: 90px;
    padding: 10px 0 0 15px;

  }

  .news-left-r p {
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Regular;
    color: #666666;
    line-height: 28px;
    font-size: 13px;

    text-align: justify;
    width: 382px;
    height: 90px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .news-left-r span {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    line-height: 30px;
    height: 30px;
    text-align: left;
    display: block;
  }

  .news-right {
    float: left;
    width: 48%;
    padding-left: 25px;
  }

  .news-right ul {
    list-style: none;
    padding: 0;
    margin: 0;

  }

  .news-right ul li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .news-right ul li a {
    text-decoration: none;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    line-height: 32px;

  }

</style>
