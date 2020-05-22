<template>
<div>
    <el-col :span="13" :offset="1" class="news-list-container">
      <el-col :span="24" v-for="(news,k) in newsList" :key="k" class="news-list-item">
        <el-col :span="8" class="news-list-img">
          <img :src="news.image" alt="新闻配图">
        </el-col>
        <el-col :span="16" class="news-list-news">
          <el-col :span="24" class="news-list-title">
            <nuxt-link :to="{
          name: 'nsnews-league-shorturl',
          params: { shorturl: news.shorturl,league:news.league_value }
        }">{{news.title}}</nuxt-link>

          </el-col>
          <el-col :span="24" class="news-list-content" >
              <p v-for="(c,i) in news.content" :key="i"  v-if="c.type ===1"  class="news-list-content-item" >
                {{c.content}}
              </p>
          </el-col>
          <el-col :span="8" class="news-list-time">{{news.published_at}}</el-col>

          <el-col :span="1" :offset="4" class="news-list-like-img"><img src="https://aloss.hotforest.cn/web/news-like.png" alt="like"></el-col>
          <el-col :span="2" :offset="1" class="news-list-like">{{news.likes}}</el-col>
          <el-col :span="1" :offset="4" class="news-list-comment-img"><img src="https://aloss.hotforest.cn/web/news-comment.png" alt="comment"></el-col>
          <el-col :span="2" :offset="1" class="news-list-comment">{{news.commentTotalCount}}</el-col>


        </el-col>
      </el-col>
      <el-col :span="24" class="news-list-showmore">
        <span @click="showMoreNews(offset)">查看更多</span>
      </el-col>
    </el-col>
    <!--        news-list -->

    <!--  热门新闻列表 -->
    <el-col :span="6" :offset="1" >
      <el-row class="hot-news-list">
        <el-col :span="24" class="hot-news-list-t">
          <div class="hot-news-list-t-icon"></div>
          <span>热门新闻</span>
        </el-col>
        <el-col :span="24" v-for="(hotNews,index) in hotNewsList" :key="index" class="hot-news-list-item">
          <el-col :span="10" class="hot-news-list-img">
            <img :src="hotNews.image" alt="image">
          </el-col>
          <el-col :span="14" class="hot-news-list-title">
            <nuxt-link target="_blank" :to="{name:'nsnews-league-shorturl',params:{shorturl:hotNews.shorturl,league:hotNews.league_value}}">
              {{hotNews.title}}
            </nuxt-link>
          </el-col>

        </el-col>
      </el-row>
    </el-col>


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
          author_filter:'["6","7","8","9"]'
        }
      } else {
        news_params = {
          articleType: 2,
          offset: offset,
          league: league_value,
          limit: 6,
          author_filter:'["6","7","8","9"]'
        }
      }

      let allNewsList = await context.$axios.$get(`${base.sq}/v2/GetArticles`, { params: news_params })

      const newsList = allNewsList.Data.articles
      // console.log(newsList)

      if (newsList !== undefined && newsList !== []) {
        newsList.forEach(item => {
          // console.log(item)
          let s = item.shorturl;
          let sArr = s.split('-')
          item.league_value = sArr[0];

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
      if (league_value == 'all') {
        hot_params = {
          articleType: 3,
          limit: 4,
          offset: 0,
          author_filter:'["6","7","8","9"]'
        }
      } else {
        hot_params = {
          articleType: 3,
          league: league_value,
          limit: 4,
          offset: 0,
          author_filter:'["6","7","8","9"]'
        }
      }
      console.log(hot_params)
      //根据新闻类型 获取热门列表
      let hotNewsList = await context.$axios.$get(`${base.sq}/v2/GetArticles`, { params: hot_params })
      let hotNewsArticles = hotNewsList.Data.articles;
      hotNewsArticles.forEach(
        item=>{
          let s = item.shorturl;
          let sArr = s.split('-')
          item.league_value = sArr[0];

        }
      )


      return {
        newsList: newsList,
        hotNewsList: hotNewsArticles,
        league_value: league_value
      }

    },
    methods: {
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
              author_filter:'["6","7","8","9"]'
            }
          }).then(
            res => {
              if (res.Status === 1) {

                const newsList = res.Data.articles

                newsList.forEach(item => {

                  let s = item.shorturl;
                  let sArr = s.split('-')
                  item.league_value = sArr[0];


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
            author_filter:'["6","7","8","9"]'
          }
          this.$axios.$get(`${base.sq}/v2/GetArticles`, { params: params }).then(
            res => {

              if (res.Status === 1) {
                const newsList = res.Data.articles
                newsList.forEach(item => {

                  let s = item.shorturl;
                  let sArr = s.split('-')
                  item.league_value = sArr[0];


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
                console.log(this.newsList)
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
  .news-list-container{
    margin-top: 30px;
  }
  .news-list-item{
    padding: 12px 0 12px 0;
    border-bottom: 1px solid #DDDDDD;
  }
  .news-list-img{
    height: 170px;
    overflow: hidden;
  }
  .news-list-img img{
    max-height: 100%;
  }
  .news-list-title a{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;

    height: 50px;
    color: #333333;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    cursor: pointer;
  }
  .news-list-content{
    text-align: left;
    height: 90px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;

  }
  .news-list-content p{
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
  }

  .news-list-news{
    padding-left: 14px;
  }

  .news-list-time{
    margin-top: 10px;
    text-align: left;
    color: #BBBBBB;
    line-height: 30px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(187, 187, 187, 1);
  }
  .news-list-like {
    margin-top: 10px;
    text-align: right;
  }
  .news-list-like-img{
    margin-top: 10px;
  }
  .news-list-comment{
    margin-top: 10px;
    text-align: right;
  }
  .news-list-comment-img{
    margin-top: 10px;
  }
  .news-list-showmore{
    cursor: pointer;
    font-size: 16px;
    color: #666666;
    margin-top: 30px;
  }
  .hot-news-list {
    border: 1px solid #D0D0D0;;
    margin-top: 30px;
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
  .hot-news-list-item{
    padding: 12px 0 12px 0;
    border-bottom: 1px solid #DDDDDD;
  }
  .hot-news-list-item:last-child {
    border-bottom: transparent !important;
  }

  .hot-news-list-img img{
    width: 100%;
  }
  .hot-news-list-title{
    text-align: left;
    padding-left: 10px;
  }
  .hot-news-list-title a {
    font-size: 14px;
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
