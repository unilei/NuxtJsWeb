<template>
  <el-main>
    <el-row>
      <LeftAside></LeftAside>

      <el-col :span="14"
              class="news-list"
      >
        <el-col :span="24" v-for="(news,i) in newsList" :key="i" class="news-list-item">

          <el-col v-if="news.league_value==='nba'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/nba.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='la_liga'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/laliga.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='premier'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/premier.png" alt="nba"></el-col>
          <el-col v-if="news.league_value==='serie_a'" :span="1" class="news-list-item-icon"><img
            src="@/assets/image/serie_a.png" alt="nba"></el-col>
          <el-col :span="23" class="news-list-item-league">{{news.league}}</el-col>

          <el-col :span="24" class="news-list-item-img">
            <el-image
              style="width: 100%; height: 300px"
              :src="news.image | waterMark"
              fit="cover"
              :preview-src-list="[news.image]" lazy>
            </el-image>
<!--            <img :src="news.image | waterMark" alt="news">-->
          </el-col>
          <el-col :span="24" class="news-list-item-title">
            <nuxt-link
              :to="{name: 'nsnews-league-shorturl', params: { shorturl: news.shorturl,league:news.league_value } }">
              {{news.title}}
            </nuxt-link>
          </el-col>
          <el-col :span="24" class="news-list-content">
            <p v-for="(c,i) in news.content" :key="i" v-if="c.type ===1" class="news-list-content-item">
              {{c.content}}
            </p>
          </el-col>
          <el-col :span="24" class="news-list-item-time">{{news.published_at}}</el-col>
        </el-col>

      </el-col>

      <el-col :span="5" >
        <!-- 热门专题       -->
        <el-col :span="24" class="hot-topics">
          <el-col :span="24" class="hot-topics-title">
            <el-col :span="21">热门专题</el-col>
            <el-col :span="3" class="hot-topics-xuanzhuan">
              <img @click="randomTopics()" src="@/assets/image/xuanzhuan-icon.png" alt="icon">
            </el-col>
          </el-col>

          <el-col :span="24" class="hot-topics-item" v-for="(topic,i) in topicsList" :key="i">
            <el-col :span="24" class="hot-topics-item-img">
              <el-image
                style="width: 100%; height: 124px"
                :src="topic.cover_pic"
                fit="cover"
                :preview-src-list="[topic.cover_pic]" lazy>
              </el-image>
<!--              <img :src="topic.cover_pic" alt="news">-->
            </el-col>
            <el-col :span="24" class="hot-topics-item-title">
              <nuxt-link :to="{name:'nscolumn-columnId',params:{columnId:topic.id}}"> {{topic.name}}</nuxt-link>
            </el-col>
            <el-col :span="24" class="hot-topics-item-topics">专题文章 {{topic.article_amount}}</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="join-qq-wechat">
          <el-col :span="24" class="join-qq">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq.png" alt="qq"></el-col>
<!--            <el-col :span="20" class="join-qq-text">加入篮球QQ群：568468754</el-col>-->
            <el-col :span="20" class="join-qq-text">
              <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=72f3014553b1953de71861de3876f9d2470314c80db8841846605de452008500">
                加入篮球QQ群：568468754
              </a>
            </el-col>
          </el-col>

          <el-col :span="24" class="join-qq">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq.png" alt="qq"></el-col>
<!--            <el-col :span="20" class="join-qq-text">加入足球QQ群：826695023</el-col>-->
            <el-col :span="20" class="join-qq-text">
              <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=4645b8b96c0f3a75b896250bd58c50b02eec5d4b20d9a81462165e68354ba9ba">
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
  import LeftAside from '../../../components/LeftAside'
  import base from '../../../api/base'

  export default {
    name: 'index',
    layout: 'indexLayout',
    components: {
      LeftAside
    },
    data () {
      return {
        newsList: [], //新闻列表
        allTopicsList:[], // 所有的专栏
        topicsList: [], //专栏列表
        topicsCount: 0, //专栏数量
        newsOffset: 10,
        loading: false,
        league: '',

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
      topicsList = topicsList.slice(0, 4)

      console.log(topicsList)
      // console.log(newsList)

      return {
        newsList: newsList,
        topicsList: topicsList,
        allTopicsList:allTopicsList,
        topicsCount: topicsLength,
      }

    },
    methods: {
      handleScroll (e) {
        // var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop      // 执行代码
        console.log('222222')
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

  .el-main {

    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 1440px;

  }


  .news-list {
    padding-left: 25px;
    overflow: auto;
    /*height: 900px;*/
  }

  .news-list::-webkit-scrollbar {
    /*display: none;*/
  }

  .news-list-item {
    /*height: 490px;*/
    margin-top: 30px;
    padding: 14px;
    background-color: #FFFFFF;
    border-radius: 21px 8px 8px 8px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }

  .news-list-item:first-child {
    margin-top: 0px !important;
  }

  .news-list-item-icon {
    text-align: left;
    height: 25px;
  }

  .news-list-item-icon img {
    height: 100%;

  }

  .news-list-item-league {
    text-align: left;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }

  .news-list-item-title {
    margin-top: 10px;
    text-align: left;

  }

  .news-list-item-title a {
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .news-list-content {
    text-align: left;
    height: 30px;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;

  }

  .news-list-content p {
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
  }

  .news-list-item-img {
    margin-top: 10px;
    height: 300px;
    overflow: hidden;
  }

  .news-list-item-img img {
    /*max-height: 100%;*/
    max-width: 100%;
    border-radius: 8px;
  }

  .news-list-item-time {
    text-align: left;
    text-indent: 10px;
    font-size: 10px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);

  }

  .el-image {
    position: static;
    border-radius: 12px;
  }


  .hot-topics {
    padding-left: 10px;
  }

  .hot-topics-title {
    height: 35px;
    background: rgba(255, 224, 113, 1);
    border-radius: 14px;

    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 35px;
  }

  .hot-topics-xuanzhuan {
    text-align: left;

  }

  .hot-topics-xuanzhuan img {
    width: 20px;
    height: 20px;
    margin-top: 7px;
    cursor: pointer;
  }

  .hot-topics-item {
    padding: 10px;
    margin-top: 15px;
    height: 195px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .hot-topics-item-img {
    height: 124px;
    overflow: hidden;

  }

  .hot-topics-item-img img {
    max-width: 100%;
    border-radius: 8px;
  }

  .hot-topics-item-title {
    margin-top: 10px;
  }
  .hot-topics-item-title a {
    display: block;
    text-align: left;
    text-indent: 10px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 17px;
  }

  .hot-topics-item-topics {
    margin-top: 6px;
    text-indent: 10px;
    text-align: left;
    font-size: 8px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 11px;
  }

  .join-qq-wechat{
    padding-left: 10px;

  }
  .join-qq{
    text-align: right;
    margin-top: 20px;
    height:26px;
    background:rgba(118,188,255,1);
    box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
    border-radius:10px;
  }
  .join-qq-img{
    padding-top: 5px;
  }
  .join-qq-img img{
    width: 15px;
    height: 16px;

  }

  .join-qq-text{
    text-align: left;
    text-indent: 14px;
  }
  .join-qq-text a{
    font-size:12px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 26px;
  }

  .nuxt-link-active {
    background: #FFFFFF !important;
  }


</style>
