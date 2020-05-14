<template>
  <div>
    <!--        news-list -->
    <div class="news-list">
      <ul>
        <li v-for="(news,index) in newsList" :key="index">
          <div class="news-l-l">
            <img :src="news.image" alt="新闻配图">
          </div>
          <div class="news-l-r">
            <h3 @click="turnNewsDetail(news,index,newsList)">
              {{news.title}}
              <!--              <nuxt-link-->
              <!--                target="_blank"-->
              <!--                :to="{name:'sportNews-detail-shorturl',params:{shorturl:news.shorturl,key:news.shorturl}}">-->
              <!--                {{news.title}}-->
              <!--              </nuxt-link>-->
            </h3>

            <div class="news-l-r-content">
              <div v-for="(c,i) in news.content" :key="i">
                <p style="padding: 0;" v-if="c.type === 1">
                  {{c.content}}
                </p>
              </div>
            </div>

            <div class="news-list-d">
              <span>{{news.published_at}}</span>
              <div class="news-list-d-r">

                <a href="#">
                  {{news.commentTotalCount}}
                </a>
                <a href="#">
                  <img style="margin-left: 20px;" src="https://aloss.hotforest.cn/web/news-comment.png" alt="">
                </a>
                <a href="#">
                  {{news.likes}}
                </a>
                <a href="#">
                  <img src="https://aloss.hotforest.cn/web/news-like.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="news-more">
        <span @click="showMoreNews(offset)">查看更多</span>
      </div>

    </div>
    <!--        news-list end -->
    <!--        hot-news -->
    <div class="hot-news-list">
      <div class="hot-news-list-t">
        <div class="hot-news-list-t-icon"></div>
        <span>热门新闻</span>
      </div>
      <div class="hot-news-list-d">
        <ul>
          <li v-for="(hotNews,index) in hotNewsList" :key="index">
            <div class="hot-news-list-d-l">
              <img :src="hotNews.image" alt="">
            </div>
            <div class="hot-news-list-d-r">
              <nuxt-link target="_blank" :to="{name:'nsnews-league-shorturl',params:{shorturl:hotNews.shorturl,league:hotNews.league_value}}">
                {{hotNews.title}}
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--        hot-news end -->
  </div>
</template>

<script>
  import base from '../../../api/base'

  export default {
    name: 'index',
    layout: 'newsLayout',
    data () {
      return {
        offset: 0,
        newsList: [],
        league_value: '',
        hotNewsList: [],
        title: '',
        keywords: '',
        description: ''
      }
    },
    head () {
      if (this.league_value === '' || this.league_value === undefined || this.league_value === 'all') {
        this.title = '体育新闻_体育快讯_体育最新资讯-全民体育'
        this.keywords = '体育,新闻,体育新闻,体育快讯,体育资讯,体坛最新快讯,足球新闻,篮球新闻'
        this.description = '全民体育提供全面专业的体育新闻和赛事报道，主要栏目有：英超，西甲，意甲，德甲，欧冠，中超，NBA，CBA，世界杯等，让球迷及时准确的了解赛事进展和结果。'
      } else if (this.league_value === 'nba') {
        this.title = 'NBA_NBA新闻_NBA快讯-全民体育'
        this.keywords = 'NBA,NBA新闻,NBA快讯,NBA资讯,NBA最新快讯, NBA常规赛,NBA总决赛,NBA季后赛'
        this.description = '全民体育拥有NBA常规赛、NBA总决赛、NBA季后赛等最新NBA快讯、NBA赛程、NBA球员球队的NBA数据以及丰富的NBA知识。想看NBA资讯，就上全民体育吧。'
      } else if (this.league_value === 'premier') {
        this.title = '英超_英超新闻_英超快讯-全民体育'
        this.keywords = '英超,英超新闻,英超联赛,英超快讯,曼联,切尔西,阿森纳,利物浦,曼城,鲁尼,阿圭罗,阿扎尔,席尔瓦,穆里尼奥,范加尔,温格'
        this.description = '全民体育提供最全面的英超新闻资讯，全面及时报道英超联赛,曼联,曼城,阿森纳,利物浦,切尔西等球队最新动态。'
      } else if (this.league_value === 'serie_a') {
        this.title = '意甲_意甲新闻_意甲快讯-全民体育'
        this.keywords = '意甲新闻,意甲最新新闻,意甲快讯,意甲资讯'
        this.description = '全民体育提供意甲联赛精彩的新闻报道，全面的意甲新闻，权威的足球评论，搭配人性化又时尚的操作介面，让球迷及时准确的了解赛事进展和结果。'
      } else if (this.league_value === 'la_liga') {
        this.title = '西甲_西甲新闻_西甲快讯-全民体育'
        this.keywords = '西甲,西甲新闻,西甲最新新闻,西甲快讯,西甲资讯,皇马,皇家马德里,巴萨,巴塞罗那,马竞,马德里竞技,梅西'
        this.description = '全民体育提供西甲联赛精彩的新闻报道，全面及时报道西甲联赛，皇马，皇家马德里，巴萨，巴塞罗那，马竞，马德里竞技，梅西，苏亚雷斯，贝尔，库蒂尼奥，登贝莱，拉莫斯，皮克，伊斯科，阿森西奥等球员球队的比赛数据。'
      }

      return {
        title: this.title,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.keywords
          },
          {
            hid: 'description',
            name: 'description',
            content: this.description
          }
        ]
      }
    },
    watchQuery: ['league'],
    async asyncData (context) {

      let offset = 0
      let league_value = context.params.league

      let news_params = {}
      // 根据新闻类型 获取新闻列表
      if (league_value === 'all' || league_value === undefined || league_value === '') {
        news_params = {
          articleType: 2,
          offset: offset,
          limit: 6,
          author_filter: ['6', '7', '8', '9']
        }
      } else {
        news_params = {
          articleType: 2,
          offset: offset,
          league: league_value,
          limit: 6,
          author_filter: ['6', '7', '8', '9']
        }
      }

      let allNewsList = await context.$axios.$get(`${base.sq}/v2/GetArticles`, { params: news_params })

      const newsList = allNewsList.Data.articles
      // console.log(newsList)

      if (newsList !== undefined && newsList !== []) {
        newsList.forEach(item => {
          const article_id = item.article_id
          context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, {
            params: {
              article_id: article_id
            }
          }).then(
            res => {
              // console.log(res)
              item.content = res.Data.content
            }
          )
        })
      }

      let hot_params = {}
      if (league_value === 'all') {
        hot_params = {
          articleType: 3,
          limit: 4,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      } else {
        hot_params = {
          articleType: 3,
          league: league_value,
          limit: 4,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      }
      //根据新闻类型 获取热门列表
      let hotNewsList = await context.$axios.$get(`${base.sq}/v2/GetArticles`, { params: hot_params })
      return {
        newsList: newsList,
        hotNewsList: hotNewsList.Data.articles,
        league_value: league_value
      }

    },
    methods: {

      turnNewsDetail (news, index, newsList) {
        if (index === 0) {
          sessionStorage.setItem('prevShorturl', 'javascript:;')
          sessionStorage.setItem('prevTitle', '没有了')
        }
        if (index === newsList.length - 1) {
          sessionStorage.setItem('nextShorturl', 'javascript:;')
          sessionStorage.setItem('nextTitle', '没有了')
        }

        if (index !== 0 && index !== newsList.length - 1) {

          let prevShorturl = newsList[index - 1].shorturl
          let prevTitle = newsList[index - 1].title
          let nextShorturl = newsList[index + 1].shorturl
          let nextTitle = newsList[index + 1].title
          sessionStorage.setItem('prevShorturl', prevShorturl)
          sessionStorage.setItem('prevTitle', prevTitle)
          sessionStorage.setItem('nextShorturl', nextShorturl)
          sessionStorage.setItem('nextTitle', nextTitle)
        }

        this.$router.push({
          name: 'nsnews-league-shorturl',
          params: { shorturl: news.shorturl,league:this.league_value }
        })

      },
      showMoreNews (i) {
        //下面这个很重要 记住哟
        this.offset = i + 6
        const league_value = this.$route.params.league
        // console.log(league_value)

        if (league_value !== 'all') {
          this.$axios.$get(`${base.sq}/v2/GetArticles`, {
            params: {
              articleType: 2,
              league: league_value,
              limit: 6,
              offset: this.offset,
              author_filter: ['6', '7', '8', '9']
            }
          }).then(
            res => {
              if (res.Status === 1) {

                const newsList = res.Data.articles

                newsList.forEach(item => {
                  const article_id = item.article_id
                  const params = {
                    article_id: article_id
                  }
                  this.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: params }).then(
                    res => {
                      // console.log(res)
                      const content = res.Data.content
                      this.$forceUpdate(item.content = content)

                    }
                  )
                })
                this.newsList = this.newsList.concat(newsList)
              } else {
                this.$message.error(res.ErrMsg)
              }
            }
          )
        } else {
          const params = {
            articleType: 2,
            offset: this.offset,
            limit: 6,
            author_filter: ['6', '7', '8', '9']
          }
          this.$axios.$get(`${base.sq}/v2/GetArticles`, { params: params }).then(
            res => {

              if (res.Status === 1) {
                const newsList = res.Data.articles
                newsList.forEach(item => {
                  const article_id = item.article_id
                  const params = {
                    article_id: article_id
                  }
                  this.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: params }).then(
                    res => {
                      const content = res.Data.content
                      this.$forceUpdate(item.content = content)

                    }
                  )
                })
                this.newsList = this.newsList.concat(newsList)

              } else {
                this.$message.error(res.ErrMsg)
              }

            }
          )
        }

      }

    },
    watch: {
      $route (to, from) {

        this.league_value = to.params.league

      }

    },
    mounted () {

      this.league_value = this.$route.params.league

    }
  }
</script>

<style scoped>
  .news-l-r-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 60px;
  }

  .news-list {
    /*width: 740px;*/
    float: left;
    margin-left: 1%;
    width: 58%;
  }

  .news-list ul {
    margin: 0;
    padding: 0;
  }

  .news-list ul li {
    height: 180px;
    padding-top: 30px;
    border-bottom: 1px solid #D5D5D5;
  }

  .news-l-l {
    float: left;
    width: 260px;
    height: 170px;
    /*border: 1px solid red;*/
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;

  }

  .news-l-l img {
    width: auto;
    height: auto;
    /*max-width: 100%;*/
    max-height: 100%;


  }

  .news-l-r {
    width: 457px;
    float: left;
    margin-left: 20px;

  }

  .news-l-r h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
    padding: 0;
    text-align: left;

    height: 50px;
    color: #333333;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 25px;
    cursor: pointer;
  }

  .news-l-r h3 a {
    color: #333333;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 25px;
  }

  .news-l-r p {

    color: #666666;
    text-align: left;
    margin: 0;
    padding: 20px 0 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*height: 90px;*/
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 30px;
  }

  .news-list-d {
    margin-top: 30px;
  }

  .news-list-d span {
    display: block;
    float: left;

    color: #BBBBBB;
    line-height: 30px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(187, 187, 187, 1);
  }

  .news-list-d-r {
    float: right;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 17px;
  }

  .news-list-d-r span {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #000000;
    text-align: right;
  }

  .news-list-d-r a {
    display: block;
    float: right;
    width: 50px;
    height: 20px;
    /*border: 1px solid red;*/
    color: rgba(0, 0, 0, 1);

  }

  .news-list-d-r img {
    width: 20px;
    height: 20px;
    /*margin-right: 17px;*/
    /*border: 1px solid red;*/
  }

  .news-more {
    margin-top: 30px;
  }

  .news-more span {
    cursor: pointer;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #666666;
    text-align: right;
  }

  .hot-news-list {
    /*width: 420px;*/
    width: 24%;
    /*height: 550px;*/
    float: left;
    border: 1px solid #D0D0D0;;
    margin-top: 30px;
    margin-left: 1%;
    padding: 12px 14px 12px 14px;
  }

  .hot-news-list-t {
    text-align: left;
    position: relative;
    height: 44px;

  }

  .hot-news-list-t-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    /*float: left;margin-right: 14px;*/
    position: absolute;
    left: 0px;
    top: 5px;

  }

  .hot-news-list-t span {

    color: #000000;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 25px;
    position: absolute;
    left: 20px;
    top: 10px;
  }

  .hot-news-list-d {
    /*margin-top: 17px;*/

  }

  .hot-news-list-d ul {
    margin: 0;
    padding: 0;
  }

  .hot-news-list-d ul li {
    height: 86px;
    /*padding: 22px 0 22px 0;*/
    padding: 12px 0 12px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  .hot-news-list-d ul li:last-child {
    border-bottom: transparent !important;
  }

  .hot-news-list-d-l {
    width: 40%;
    height: 84px;
    float: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }

  .hot-news-list-d-l img {
    /*width: 134px;*/
    width: auto;
    height: auto;
    /*max-width:100%;*/
    max-height: 100%;
  }

  .hot-news-list-d-r {
    width: 50%;
    height: 99px;
    float: right;
    text-align: left;
  }

  .hot-news-list-d-r a {

    /*font-size:18px;*/
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

  }

  .nuxt-link-active {
    background: #58A4ED;
    border-radius: 8px;
    color: #FFFFFF;
  }

</style>
