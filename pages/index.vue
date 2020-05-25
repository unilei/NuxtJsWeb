<template>
  <el-main>
    <!--            热门新闻-->
    <el-row class="hot-news-container">
      <el-col :span="10"   class="hot-news">
        <el-col :span="24" class="hot-news-first">
          <nuxt-link v-if="hotNewsList.length > 0"
                     :to="{name:'nsnews-league-shorturl',params:{league:hotNewsList[0].league_value,shorturl:hotNewsList[0].shorturl}}"
                     target="_blank">{{hotNewsList[0].title}}
          </nuxt-link>
        </el-col>
        <el-col :span="24" v-for="(hotNews,k) in hotNewsList" :key="k" class="hot-news-item">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:hotNews.league_value,shorturl:hotNews.shorturl}}"
                     target="_blank">{{hotNews.title}}
          </nuxt-link>
        </el-col>

      </el-col>
      <el-col :span="13"  :offset="1"  class="news-slider" v-if="bannerArr">
        <div id="slideBox" class="slideBox">
          <div class="hd">
            <ul>
              <li v-for="(item,i) in bannerArr" :key="i+1"></li>
            </ul>
          </div>
          <div class="bd">
            <ul >
              <li v-for="(item,index) in bannerArr" :key="index" >
                <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:item.league_value,shorturl:item.content}}" target="_blank">
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

<!--    nba-->
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24" >
        <div class="news-news-icon">
          <img  src="https://aloss.hotforest.cn/web/nba-icon.png" alt="nba">
        </div>
        <div class="news-news-text">
          NBA
        </div>
      </el-col>

      <el-col :span="11">
        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'nba',shorturl:hotNbaNewsFirst.shorturl}}"
                     target="_blank">
            {{hotNbaNewsFirst.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotNbaNewsFirst.image" alt="nba">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotNbaNewsFirst.content" class="news-news-content">
            {{hotNbaNewsFirst.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{nbaTimestamp1}}
          </el-col>
        </el-col>

        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'nba',shorturl:hotNbaNewsSecond.shorturl}}"
                     target="_blank">
            {{hotNbaNewsSecond.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotNbaNewsSecond.image" alt="nba">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotNbaNewsSecond.content" class="news-news-content">
            {{hotNbaNewsSecond.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{nbaTimestamp2}}
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="12" :offset="1" class="news-news-item-container">
        <el-col :span="23" :offset="1" v-for="newNbaNews in newNbaNewsList" :key="newNbaNews.article_id" class="news-news-item">
            <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'nba',shorturl:newNbaNews.shorturl}}" target="_blank">
              {{newNbaNews.title}}
            </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
    <!--nba end-->

    <!--    forum-->
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24" >
        <div class="news-news-icon">
          <img  src="https://aloss.hotforest.cn/web/bbs.png" alt="forum">
        </div>
        <div class="news-news-text">
          社区
        </div>
      </el-col>

      <el-col :span="11">
        <el-col :span="24" class="news-news-hot-forum" v-for="(hotBbs,index) in hotBbsList" :key="index">
          <nuxt-link  target="_blank"
                     :to="{name:'nsforum-sportType-articleId',params:{sportType:hotBbs.category,articleId:hotBbs.article_id}}">
            {{hotBbs.title}}
          </nuxt-link>
        </el-col>
      </el-col>
      <el-col :span="12" :offset="1" class="news-news-item-container">
        <el-col :span="23" :offset="1" v-for="(bbs,i) in bbsList" :key="i" class="news-news-item">
          <nuxt-link :to="{name:'nsforum-sportType-articleId',params:{sportType:bbs.category,articleId:bbs.article_id}}" target="_blank">
            {{bbs.title}}
          </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
    <!--            forum end-->

    <!--            西甲 -->
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24" >
        <div class="news-news-icon">
          <img  src="https://aloss.hotforest.cn/web/laliga-icon.png" alt="la_liga">
        </div>
        <div class="news-news-text">
          西甲
        </div>
      </el-col>

      <el-col :span="11">
        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'la_liga',shorturl:hotLaLigaNewsFirst.shorturl}}"
                     target="_blank">
            {{hotLaLigaNewsFirst.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotLaLigaNewsFirst.image" alt="la_liga">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotLaLigaNewsFirst.content" class="news-news-content">
            {{hotLaLigaNewsFirst.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{laLigaTimestamp1}}
          </el-col>
        </el-col>

        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'la_liga',shorturl:hotLaLigaNewsSecond.shorturl}}"
                     target="_blank">
            {{hotLaLigaNewsSecond.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotLaLigaNewsSecond.image" alt="la_liga">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotLaLigaNewsSecond.content" class="news-news-content">
            {{hotLaLigaNewsSecond.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{laLigaTimestamp2}}
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="12" :offset="1" class="news-news-item-container">
        <el-col :span="23" :offset="1" v-for="newLaLigaNews in newLaLigaNewsList" :key="newLaLigaNews.article_id" class="news-news-item">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'la_liga',shorturl:newLaLigaNews.shorturl}}" target="_blank">
            {{newLaLigaNews.title}}
          </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
<!--    西甲结束-->

    <!--            英超 -->
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24" >
        <div class="news-news-icon">
          <img  src="https://aloss.hotforest.cn/web/premier-icon.png" alt="la_liga">
        </div>
        <div class="news-news-text">
          英超
        </div>
      </el-col>

      <el-col :span="11">
        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'premier',shorturl:hotPremierNewsFirst.shorturl}}"
                     target="_blank">
            {{hotPremierNewsFirst.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotPremierNewsFirst.image" alt="premier">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotPremierNewsFirst.content" class="news-news-content">
            {{hotPremierNewsFirst.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{premierTimestamp1}}
          </el-col>
        </el-col>

        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'premier',shorturl:hotPremierNewsSecond.shorturl}}"
                     target="_blank">
            {{hotPremierNewsSecond.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotPremierNewsSecond.image" alt="premier">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotPremierNewsSecond.content" class="news-news-content">
            {{hotPremierNewsSecond.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{premierTimestamp2}}
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="12" :offset="1" class="news-news-item-container">
        <el-col :span="23" :offset="1" v-for="newPremierNews in newPremierNewsList" :key="newPremierNews.article_id" class="news-news-item">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'premier',shorturl:newPremierNews.shorturl}}"
                     target="_blank">
            {{newPremierNews.title}}
          </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
    <!--    英超结束-->

    <!--            意甲 -->
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24" >
        <div class="news-news-icon">
          <img  src="https://aloss.hotforest.cn/web/serea-icon.png" alt="serie_a">
        </div>
        <div class="news-news-text">
          意甲
        </div>
      </el-col>

      <el-col :span="11">
        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'serie_a',shorturl:hotSerieANewsFirst.shorturl}}"
                     target="_blank">
            {{hotSerieANewsFirst.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotSerieANewsFirst.image" alt="serie_a">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotSerieANewsFirst.content" class="news-news-content">
            {{hotSerieANewsFirst.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{serieATimestamp1}}
          </el-col>
        </el-col>

        <el-col :span="24" class="news-news-title">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'serie_a',shorturl:hotSerieANewsSecond.shorturl}}"
                     target="_blank">
            {{hotSerieANewsSecond.title}}
          </nuxt-link>
        </el-col>
        <el-col :span="7" class="news-news-img">
          <img :src="hotSerieANewsSecond.image" alt="serie_a">
        </el-col>
        <el-col :span="16" :offset="1">
          <el-col :span="24" v-if="hotSerieANewsSecond.content" class="news-news-content">
            {{hotSerieANewsSecond.content[0].content}}
          </el-col>
          <el-col :span="24" class="news-news-time">
            {{serieATimestamp2}}
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="12" :offset="1" class="news-news-item-container">
        <el-col :span="23" :offset="1" v-for="newSerieANews in newSerieANewsList" :key="newSerieANews.article_id" class="news-news-item">
          <nuxt-link :to="{name:'nsnews-league-shorturl',params:{league:'serie_a',shorturl:newSerieANews.shorturl}}"
                     target="_blank">{{newSerieANews.title}}
          </nuxt-link>
        </el-col>
      </el-col>
    </el-row>
    <!-- 意甲结束-->
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

      let [matchList,
        bbsList,hotBbsList,
        newsBanner,hotNewsList,
        lastNbaNews,lastFibaNews,
        lastPremierNews,lastLaLigaNews,
        lastSerieANews,nbaHotNewsList,
        fibaHotNewsList,premierHotNewsList,
        laLigaHotNewsList,serieAHotNewsList] = await Promise.all([
        context.$axios.$get(`${base.sq}/v2/GetMatchList`),
        context.$axios.$get(`${base.sq}/v1/forum/` + sportType + `/0/` + type + `/articles`, {
          params: {
            limit: limit_type,
            offset: 0
          }
        }),
        context.$axios.$get(`${base.sq}/v1/forum/` + sportType + `/0/` + type2 + `/articles`, {
          params: {
            limit: limit_type2,
            offset: 0
          }
        }),
        context.$axios.$get(`${base.sq}/GetBanner`, {
          params: {
            platform: 'WEB'
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'nba',
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'fiba',
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'premier',
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'la_liga',
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'serie_a',
            articleType: 2,
            limit: 10,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'nba',
            articleType: 2,
            limit: 2,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'fiba',
            articleType: 2,
            limit: 2,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'premier',
            articleType: 2,
            limit: 2,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'la_liga',
            articleType: 2,
            limit: 2,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        }),
        context.$axios.$get(`${base.sq}/v2/GetArticles`, {
          params: {
            league: 'serie_a',
            articleType: 2,
            limit: 2,
            offset: 0,
            author_filter:['6','7', '8', '9']
          }
        })

      ]).catch(err => {
        error({ statusCode: 400, message: err })
      });

      // console.log(data)
      // console.log(hotNewsList);
      let hotArticles = hotNewsList.Data.articles;
      hotArticles.forEach(
        item=>{
          // console.log(item)
          let s = item.shorturl;
          let sArr = s.split('-');
          item.league_value = sArr[0];
        }
      )
      let newsBannerData = newsBanner.Data;
      newsBannerData.forEach(
        item=>{
          let s= item.content;
          let sArr = s.split('-');
          item.league_value = sArr[0]
        }
      )
     // console.log(newsBanner)
      //获取nba热们新闻
      //获取nba热们新闻
      const nba_article_id_f = nbaHotNewsList.Data.articles[0].article_id
      const nba_article_id_s = nbaHotNewsList.Data.articles[1].article_id
      const nba_params_f = {
        article_id: nba_article_id_f
      }
      const nba_params_s = {
        article_id: nba_article_id_s
      }
      let nbaFirst = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: nba_params_f })
      let nbaSecond = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: nba_params_s })

      //获取fiba热们新闻
      const fiba_article_id_f = fibaHotNewsList.Data.articles[0].article_id
      const fiba_article_id_s = fibaHotNewsList.Data.articles[1].article_id
      const fiba_params_f = {
        article_id: fiba_article_id_f
      }
      const fiba_params_s = {
        article_id: fiba_article_id_s
      }
      let fibaFirst = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: fiba_params_f })
      let fibaSecond = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: fiba_params_s })

      //获取premier热们新闻
      //获取premier热们新闻
      const premier_article_id_f = premierHotNewsList.Data.articles[0].article_id
      const premier_article_id_s = premierHotNewsList.Data.articles[1].article_id
      const premier_params_f = {
        article_id: premier_article_id_f
      }
      const premier_params_s = {
        article_id: premier_article_id_s
      }
      let premierFirst = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: premier_params_f })
      let premierSecond = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: premier_params_s })


      //获取la_liga热们新闻
      const laLiga_article_id_f = laLigaHotNewsList.Data.articles[0].article_id
      const laLiga_article_id_s = laLigaHotNewsList.Data.articles[1].article_id
      const laLiga_params_f = {
        article_id: laLiga_article_id_f
      }
      const laLiga_params_s = {
        article_id: laLiga_article_id_s
      }
      let laLigaFirst = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: laLiga_params_f })
      let laLigaSecond = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: laLiga_params_s })


      //获取serie_a热们新闻
      const serieA_article_id_f = serieAHotNewsList.Data.articles[0].article_id
      const serieA_article_id_s = serieAHotNewsList.Data.articles[1].article_id
      const serieA_params_f = {
        article_id: serieA_article_id_f
      }
      const serieA_params_s = {
        article_id: serieA_article_id_s
      }
      let serieAFirst = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: serieA_params_f })
      let serieASecond = await context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: serieA_params_s })


      return {
        matchArr: matchList.Data.list,
        bbsList: bbsList.Data.list,
        hotBbsList: hotBbsList.Data.list,
        bannerArr: newsBannerData,
        hotNewsList: hotArticles,
        hotNbaNewsFirst: nbaFirst.Data,
        nbaTimestamp1: getFormatTime(nbaFirst.Data.timestamp),
        hotNbaNewsSecond: nbaSecond.Data,
        nbaTimestamp2: getFormatTime(nbaSecond.Data.timestamp),
        newNbaNewsList: lastNbaNews.Data.articles,
        hotFibaNewsFirst: fibaFirst.Data,
        fibaTimestamp1: getFormatTime(fibaFirst.Data.timestamp),
        hotFibaNewsSecond: fibaSecond.Data,
        fibaTimestamp2: getFormatTime(fibaSecond.Data.timestamp),
        newFibaNewsList: lastFibaNews.Data.articles,

        hotPremierNewsFirst: premierFirst.Data,
        premierTimestamp1: getFormatTime(premierFirst.Data.timestamp),
        hotPremierNewsSecond: premierSecond.Data,
        premierTimestamp2: getFormatTime(premierSecond.Data.timestamp),
        newPremierNewsList: lastPremierNews.Data.articles,

        hotLaLigaNewsFirst: laLigaFirst.Data,
        laLigaTimestamp1: getFormatTime(laLigaFirst.Data.timestamp),
        hotLaLigaNewsSecond: laLigaSecond.Data,
        laLigaTimestamp2: getFormatTime(laLigaSecond.Data.timestamp),
        newLaLigaNewsList: lastLaLigaNews.Data.articles,

        hotSerieANewsFirst: serieAFirst.Data,
        serieATimestamp1: getFormatTime(serieAFirst.Data.timestamp),
        hotSerieANewsSecond: serieASecond.Data,
        serieATimestamp2: getFormatTime(serieASecond.Data.timestamp),
        newSerieANewsList: lastSerieANews.Data.articles,


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
    /*padding: 10px 27px 37px 27px;*/
    padding-left: 40px;
    padding-right: 40px;

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
  .news-slider img{
    width: 100%;
  }

  .news-news-icon{
    float: left;
    text-align: left;
  }
  .news-news-icon img{
    width: 40px;
    height: 40px;
  }
  .news-news-text{
    float: left;
    text-align: left;
    width:155px;
    height: 40px;
    background: url("https://aloss.hotforest.cn/web/hot-t-bg.png") no-repeat center;
    background-size: 100% 100%;
    line-height: 40px;
    text-indent: 10px;

    font-family: Arial-BoldMT;
    font-size: 19px;
    color: #FFFFFF;
    margin-left: 14px;
    display: block;
  }
  .news-news-title{
    margin-top: 16px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .news-news-title a{
    font-weight: bolder;
    font-size: 19px;
    color: #333333;
  }
  .news-news-img{
    text-align: left;
    margin-top: 14px;
  }
  .news-news-img img{
    width: 180px;
    height: 110px;
  }
  .news-news-content{
    margin-top: 14px;
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
  .news-news-time{
    font-size: 12px;
    color: #999999;
    line-height: 30px;
    height: 30px;
    text-align: left;
    display: block;
  }

  .news-news-item-container{
    border-left: 1px dashed #C2C2C2;
  }
  .news-news-item{
    margin-top: 2px;
    text-indent: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .news-news-item a{
    text-decoration: none;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    line-height: 32px;
  }
  .news-news-hot-forum {
    margin-top: 14px;

    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .news-news-hot-forum a{
    font-size: 16px;
    color: #333333;
    font-weight: bolder;
  }

  .el-divider{
    background-color: #8FB6DB;
  }
  .el-divider--horizontal{
    height: 3px;
  }

</style>
