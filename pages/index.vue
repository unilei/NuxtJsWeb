<template>
  <el-main>
    <el-row>
      <LeftAside></LeftAside>

      <el-col :span="14" class="news-list NS_Click_Article">
        <el-col :span="24" v-for="(news,i) in newsList" :key="i" class="news-list-item NS_Click_Article">
          <el-col v-if="news.league_value==='nba'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/nba.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='cba'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/cba.png" alt="cba"></el-col>
          <el-col v-if="news.league_value==='la_liga'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/laliga.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='premier'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/premier.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='serie_a'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/serie_a.png" alt="nba"></el-col>
          <el-col :span="23" class="news-list-item-league">{{news.league}}</el-col>

          <el-col :span="24" class="news-list-item-img NS_Click_Article">
            <!--            <el-image-->
            <!--              style="width: 100%; height: 300px"-->
            <!--              :src="news.image | waterMark"-->
            <!--              fit="cover"-->
            <!--              :preview-src-list="[news.image]" lazy>-->
            <!--            </el-image>-->
            <el-image
              @click="turnNewsDetail(news.shorturl,news.league_value)"
              style="width: 100%; height: 300px"
              :src="news.image | waterMark"
              fit="cover"
              lazy>
            </el-image>
          </el-col>
          <el-col :span="24" class="news-list-item-title NS_Click_Article">
            <nuxt-link
              :to="{name: 'nsnews-league-shorturl', params: { shorturl: news.shorturl,league:news.league_value } }">
              {{news.title}}
            </nuxt-link>
          </el-col>
          <el-col :span="24" class="news-list-content NS_Click_Article" >
            <p v-for="(c,i) in news.content" :key="i" v-if="c.type ===1" class="news-list-content-item">
              {{c.content}}
            </p>
          </el-col>
          <el-col :span="12" class="news-list-item-time">
            {{news.published_at}}
          </el-col>
          <el-col :span="12" >
            <el-col :span="2" :offset="14" class="news-list-item-like-img NS_Click_ArticleHeart"><img src="@/assets/image/like-2.png" alt="like"></el-col>
            <el-col :span="3" class="news-list-item-like NS_Click_ArticleHeart">{{news.likes}}</el-col>
            <el-col :span="2" class="news-list-item-com-img NS_Click_ArticleComment"><img src="@/assets/image/comment-icon.png" alt="comment"></el-col>
            <el-col :span="3" class="news-list-item-com NS_Click_ArticleComment">{{news.commentTotalCount}}</el-col>
          </el-col>
        </el-col>

      </el-col>

      <el-col :span="5" >
        <!-- 热门专题       -->
        <el-col :span="24" class="hot-topics">
          <el-col :span="24" class="hot-topics-title">
            <el-col :span="24">热门专题</el-col>
            <el-col :span="3" class="hot-topics-xuanzhuan NS_Click_HotTopic_Refresh">
              <img @click="randomTopics()" src="@/assets/image/change-icon.png" alt="icon">
            </el-col>
          </el-col>

          <el-col :span="24" class="hot-topics-item NS_Click_HotTopic_Article" v-for="(topic,i) in topicsList" :key="i">
            <el-col :span="24" class="hot-topics-item-img">
              <!--              <el-image-->
              <!--                style="width: 100%; height: 124px"-->
              <!--                :src="topic.cover_pic"-->
              <!--                fit="cover"-->
              <!--                :preview-src-list="[topic.cover_pic]" lazy>-->
              <!--              </el-image>-->
              <el-image
                @click="turnColumn(topic.id)"
                style="width: 100%; height: 124px"
                :src="topic.cover_pic"
                fit="cover"
                lazy>
              </el-image>

            </el-col>
            <el-col :span="24" class="hot-topics-item-title">
              <nuxt-link :to="{name:'nscolumn-columnId',params:{columnId:topic.id}}"> {{topic.name}}</nuxt-link>
            </el-col>
            <el-col :span="24" class="hot-topics-item-topics">专题文章 {{topic.article_amount}}</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="join-qq-wechat">
          <el-col :span="24" class="join-qq NS_Click_BasketballQQ">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq-icon.png" alt="qq"></el-col>
            <el-col :span="20" class="join-qq-text">
              <a target="_blank"
                 href="//shang.qq.com/wpa/qunwpa?idkey=72f3014553b1953de71861de3876f9d2470314c80db8841846605de452008500">
                加入篮球QQ群：568468754
              </a>
            </el-col>
          </el-col>

          <el-col :span="24" class="join-qq NS_Click_SoccerQQ">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq-icon.png" alt="qq"></el-col>
            <el-col :span="20" class="join-qq-text">
              <a target="_blank"
                 href="//shang.qq.com/wpa/qunwpa?idkey=4645b8b96c0f3a75b896250bd58c50b02eec5d4b20d9a81462165e68354ba9ba">
                加入足球QQ群：826695023
              </a>
            </el-col>
          </el-col>

        </el-col>

      </el-col>

    </el-row>
  </el-main>
</template>

<script>
  import LeftAside from '../components/LeftAside'
  import base from '../api/base'

  export default {
    name: 'index',
    layout: 'indexLayout',
    components: {
      LeftAside
    },
    data () {
      return {
        title:'',
        keywords:'',
        description:'',
        newsList: [], //新闻列表
        allTopicsList:[], // 所有的专栏
        topicsList: [], //专栏列表
        topicsCount: 0, //专栏数量
        newsOffset: 10,
        loading: false,
        league: '',
        randomStart:0,
        randomEnd:0,

      }
    },
    head () {

      if (this.league === '' || this.league === undefined || this.league === 'all') {
        this.title = '体育新闻_体育快讯_体育最新资讯-全民体育'
        this.keywords = '体育,新闻,体育新闻,体育快讯,体育资讯,体坛最新快讯,足球新闻,篮球新闻'
        this.description = '全民体育提供全面专业的体育新闻和赛事报道，主要栏目有：英超，西甲，意甲，德甲，欧冠，中超，NBA，CBA，世界杯等，让球迷及时准确的了解赛事进展和结果。'
      } else if (this.league === 'nba') {
        this.title = 'NBA_NBA新闻_NBA快讯-全民体育'
        this.keywords = 'NBA,NBA新闻,NBA快讯,NBA资讯,NBA最新快讯, NBA常规赛,NBA总决赛,NBA季后赛'
        this.description = '全民体育拥有NBA常规赛、NBA总决赛、NBA季后赛等最新NBA快讯、NBA赛程、NBA球员球队的NBA数据以及丰富的NBA知识。想看NBA资讯，就上全民体育吧。'
      } else if (this.league === 'premier') {
        this.title = '英超_英超新闻_英超快讯-全民体育'
        this.keywords = '英超,英超新闻,英超联赛,英超快讯,曼联,切尔西,阿森纳,利物浦,曼城,鲁尼,阿圭罗,阿扎尔,席尔瓦,穆里尼奥,范加尔,温格'
        this.description = '全民体育提供最全面的英超新闻资讯，全面及时报道英超联赛,曼联,曼城,阿森纳,利物浦,切尔西等球队最新动态。'
      } else if (this.league === 'serie_a') {
        this.title = '意甲_意甲新闻_意甲快讯-全民体育'
        this.keywords = '意甲新闻,意甲最新新闻,意甲快讯,意甲资讯'
        this.description = '全民体育提供意甲联赛精彩的新闻报道，全面的意甲新闻，权威的足球评论，搭配人性化又时尚的操作介面，让球迷及时准确的了解赛事进展和结果。'
      } else if (this.league === 'la_liga') {
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
          },
        ]
      }
    },
    async asyncData (context) {

      let league = context.params.league
      let article_params = {}
      if (league === 'all') {
        article_params = {
          articleType: 2,
          limit: 10,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      } else {
        article_params = {
          articleType: 2,
          limit: 10,
          offset: 0,
          league: league,
          author_filter: ['6', '7', '8', '9']
        }
      }
      let [newsListRes, topicsRes] = await Promise.all([
        context.$axios.$get(`${base.sq}/v2/GetArticles`, { params: article_params }),
        context.$axios.$get(`${base.sq}/v2/all/columns`, {
          params: {}
        })
      ]).catch(err => {
        error({
          statusCode: 400,
          message: err
        })
      })

      let newsList = []

      if (newsListRes.Status === 1) {
        newsList = newsListRes.Data.articles
        newsList.forEach(item => {
          // console.log(item)
          let s = item.shorturl
          let sArr = s.split('-')
          item.league_value = sArr[0]

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

      let topicsList = []
      let topicsLength = 0
      if (topicsRes.Status === 1) {
        topicsList = topicsRes.Data.list
        topicsLength = topicsRes.Data.list.length
      }

      let allTopicsList = topicsList;
      let count = topicsLength - 4

      let start = parseInt(Math.random() * count, 10)
      let end = start + 4
      topicsList = topicsList.slice(start, end)

      // console.log(topicsList)
      // console.log(newsList)

      return {
        newsList: newsList,
        topicsList: topicsList,
        allTopicsList:allTopicsList,
        topicsCount: topicsLength,
        league:league,
      }

    },
    methods: {
      handleScroll (e) {

        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.body.scrollTop
        let offsetHeight = document.documentElement.offsetHeight
        let innerHeight = window.innerHeight

        let bottomOfWindow = offsetHeight - scrollTop - innerHeight <= 100

        let loading = this.loading

        if (bottomOfWindow && loading === false) {
          this.loading = true
          this.getMoreNews(this.newsOffset)
        }

      },
      turnNewsDetail(shorturl,league_value){
        this.$router.push({name: 'nsnews-league-shorturl', params: { shorturl: shorturl,league:league_value } })
      },
      turnColumn(id){
        this.$router.push({name:'nscolumn-columnId',params:{columnId:id}});
      },
      randomTopics () {
        let that = this
        let count = that.topicsCount - 4

        let start = parseInt(Math.random() * count, 10)
        let end = start + 4

        this.$forceUpdate(this.topicsList =  that.allTopicsList.slice(start, end));
        // console.log(this.topicsList)
      },
      getMoreNews (i) {
        //下面这个很重要 记住哟

        let params = {}
        let league = this.league

        if (league === 'all') {
          params = {
            articleType: 2,
            offset: i,
            limit: 10,
            author_filter: '["6","7","8","9"]'
          }
        } else {
          params = {
            articleType: 2,
            offset: i,
            limit: 10,
            league: league,
            author_filter: '["6","7","8","9"]'
          }
        }

        this.$axios.$get(`${base.sq}/v2/GetArticles`, { params: params }).then(
          res => {

            if (res.Status === 1) {
              const newsList = res.Data.articles
              newsList.forEach(item => {

                let s = item.shorturl
                let sArr = s.split('-')
                item.league_value = sArr[0]

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
              this.newsOffset = i + 10
              this.loading = false

            } else {
              this.$message.error(res.ErrMsg)
            }

          }
        )

      }

    },
    watch: {
      $route (to, from) {
        this.league = to.params.league
      }
    },
    computed: {},
    mounted () {
      this.league = this.$route.params.league
      this.getMoreNews(0);
      window.addEventListener('scroll', this.handleScroll, true)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll, true)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll, true)
    }

  }


</script>

<style scoped>

  @import "../assets/css/topics.css";
  @import "../assets/css/news-list.css";

  .el-main {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 1440px;

  }

  .el-image {
    position: static;
    border-radius: 12px;
  }

  .nuxt-link-active {
    background: #FFFFFF !important;
  }


</style>
