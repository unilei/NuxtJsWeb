<!--<template>-->
<!--  <el-main>-->
<!--    <el-row>-->
<!--      <el-col :span="5" class="aside-nav">-->
<!--        <el-col :span="24" class="aside-title"><img src="@/assets/image/qmty-icon.png" alt="qmty"></el-col>-->

<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'nba'}}">NBA</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/laliga.png" alt="la_liga"></el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'la_liga'}}">西甲</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/premier.png" alt="premier"></el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'premier'}}">英超</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/serie_a.png" alt="serie_a"></el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'serie_a'}}">意甲</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/football.png" alt="football"></el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球社区</nuxt-link>-->
<!--          </el-col>-->
<!--          <div class="sub-forum-nav">-->
<!--            <div class="sub-forum-nav-item">-->
<!--              <nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球</nuxt-link>-->
<!--            </div>-->
<!--            <div class="sub-forum-nav-item">-->
<!--              <nuxt-link :to="{name:'nsnews-league',params:{league:'football'}}">足球活动</nuxt-link>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/basketball.png" alt="basketball">-->
<!--          </el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'basketball'}}">篮球社区</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--        <el-col :span="24" class="aside-nav-item ">-->
<!--          <el-col :span="4" class="aside-nav-item-img"><img src="@/assets/image/social.png" alt="basketball">-->
<!--          </el-col>-->
<!--          <el-col :span="20" class="aside-nav-item-text">-->
<!--            <nuxt-link :to="{name:'nsnews-league',params:{league:'basketball'}}">社区活动</nuxt-link>-->
<!--          </el-col>-->
<!--        </el-col>-->
<!--      </el-col>-->

<!--      <el-col :span="14"-->
<!--              class="news-list"-->
<!--      >-->
<!--        <el-col :span="24"  v-for="(news,i) in newsList" :key="i" class="news-list-item">-->
<!--          <el-col :span="1" class="news-list-item-icon"><img src="@/assets/image/nba.png" alt="nba"></el-col>-->
<!--          <el-col :span="23" class="news-list-item-league">{{news.league}}</el-col>-->

<!--          <el-col :span="24" class="news-list-item-img">-->
<!--                            <img :src="news.image | waterMark" alt="news">-->
<!--          </el-col>-->
<!--          <el-col :span="24" class="news-list-item-title">-->
<!--            <nuxt-link-->
<!--              :to="{name: 'nsnews-league-shorturl', params: { shorturl: news.shorturl,league:news.league_value } }">-->
<!--              {{news.title}}-->
<!--            </nuxt-link>-->
<!--          </el-col>-->
<!--          <el-col :span="24" class="news-list-content">-->
<!--            <p v-for="(c,i) in news.content" :key="i" v-if="c.type ===1" class="news-list-content-item">-->
<!--              {{c.content}}-->
<!--            </p>-->
<!--          </el-col>-->
<!--          <el-col :span="24" class="news-list-item-time">{{news.published_at}}</el-col>-->
<!--        </el-col>-->


<!--      </el-col>-->

<!--      <el-col :span="5"  class="hot-topics">-->
<!--        <el-col :span="24" class="hot-topics-title">-->
<!--          热门专题-->
<!--        </el-col>-->

<!--        <el-col :span="24" class="hot-topics-item" v-for="(topic,i) in topicsList" :key="i">-->
<!--          <el-col :span="24" class="hot-topics-item-img">-->
<!--            <img :src="topic.cover_pic" alt="news">-->
<!--          </el-col>-->
<!--          <el-col :span="24" class="hot-topics-item-title">{{topic.name}}</el-col>-->
<!--          <el-col :span="24" class="hot-topics-item-topics">专题文章  {{topic.article_amount}}</el-col>-->

<!--        </el-col>-->


<!--      </el-col>-->

<!--    </el-row>-->
<!--  </el-main>-->
<!--</template>-->

<!--<script>-->

<!--  import { getFormatTime } from '../utils/time'-->
<!--  import base from '../api/base'-->

<!--  export default {-->
<!--    name: 'index',-->
<!--    layout: 'indexLayout',-->
<!--    data () {-->
<!--      return {-->
<!--        newsList: [], //新闻列表-->
<!--        topicsList:[], //专栏列表-->
<!--        newsOffset:10,-->
<!--        loading:false,-->

<!--      }-->
<!--    },-->
<!--    head () {-->
<!--      return {-->
<!--        title: '全民体育_懂球迷的聚集地',-->
<!--        meta: [-->
<!--          {-->
<!--            hid: 'keywords',-->
<!--            name: 'keywords',-->
<!--            content: '全民体育,体育,新闻,直播,足球,篮球,资讯,比分,社区,数据,比赛'-->
<!--          },-->
<!--          {-->
<!--            hid: 'description',-->
<!--            name: 'description',-->
<!--            content: '全民体育为您带来足球，篮球比赛，即时比分，数据库等一系列数据，包括：英超，西甲，意甲，德甲，欧冠，中超，NBA，CBA，世界杯等各种比赛，让球迷及时准确的了解赛事进展和结果'-->
<!--          },-->
<!--        ]-->
<!--      }-->
<!--    },-->
<!--    async asyncData (context) {-->

<!--      let [newsListRes,topicsRes] = await Promise.all([-->
<!--        context.$axios.$get(`${base.sq}/v2/GetArticles`, {-->
<!--          params: {-->
<!--            articleType: 2,-->
<!--            limit: 10,-->
<!--            offset: 0,-->
<!--            author_filter: ['6', '7', '8', '9']-->
<!--          }-->
<!--        }),-->
<!--        context.$axios.$get(`${base.sq}/v2/all/columns`, {-->
<!--          params: {}-->
<!--        })-->
<!--      ]).catch(err => {-->
<!--        error({-->
<!--          statusCode: 400,-->
<!--          message: err-->
<!--        })-->
<!--      })-->

<!--      let newsList = []-->

<!--      if (newsListRes.Status === 1) {-->
<!--        newsList = newsListRes.Data.articles-->
<!--        newsList.forEach(item => {-->
<!--          // console.log(item)-->
<!--          let s = item.shorturl-->
<!--          let sArr = s.split('-')-->
<!--          item.league_value = sArr[0]-->

<!--          const article_id = item.article_id-->

<!--          context.$axios.$get(`${base.sq}/v2/GetArticleDetail`, {-->
<!--            params: {-->
<!--              article_id: article_id-->
<!--            }-->
<!--          }).then(-->
<!--            res => {-->
<!--              // console.log(res)-->
<!--              item.content = res.Data.content-->
<!--            }-->
<!--          )-->
<!--        })-->
<!--      }-->

<!--      let topicsList = [];-->
<!--      if (topicsRes.Status === 1){-->
<!--        topicsList = topicsRes.Data.list;-->
<!--      }-->
<!--      topicsList = topicsList.slice(0,4)-->
<!--      console.log(topicsList)-->

<!--      // console.log(newsList)-->

<!--      return {-->
<!--        newsList: newsList,-->
<!--        topicsList:topicsList-->
<!--      }-->

<!--    },-->
<!--    methods: {-->
<!--      handleScroll(e){-->
<!--        var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;      // 执行代码-->
<!--        this.loading  = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 0-->

<!--        console.log(this.loading)-->
<!--        if (this.loading){-->
<!--          this.getMoreNews(this.newsOffset)-->
<!--        }-->

<!--      },-->
<!--      getMoreNews (i) {-->
<!--        //下面这个很重要 记住哟-->

<!--        const params = {-->
<!--          articleType: 2,-->
<!--          offset: i,-->
<!--          limit: 10,-->
<!--          author_filter: '["6","7","8","9"]'-->
<!--        }-->
<!--        this.$axios.$get(`${base.sq}/v2/GetArticles`, { params: params }).then(-->
<!--          res => {-->

<!--            if (res.Status === 1) {-->
<!--              const newsList = res.Data.articles-->
<!--              newsList.forEach(item => {-->

<!--                let s = item.shorturl-->
<!--                let sArr = s.split('-')-->
<!--                item.league_value = sArr[0]-->

<!--                const article_id = item.article_id-->
<!--                const params = {-->
<!--                  article_id: article_id-->
<!--                }-->
<!--                this.$axios.$get(`${base.sq}/v2/GetArticleDetail`, { params: params }).then(-->
<!--                  res => {-->
<!--                    const content = res.Data.content-->
<!--                    this.$forceUpdate(item.content = content)-->

<!--                  }-->
<!--                )-->
<!--              })-->
<!--              console.log(this.newsList)-->
<!--              this.newsList = this.newsList.concat(newsList)-->
<!--              this.newsOffset = i+10;-->
<!--              this.loading = false;-->

<!--            } else {-->
<!--              this.$message.error(res.ErrMsg)-->
<!--            }-->

<!--          }-->
<!--        )-->

<!--      }-->

<!--    },-->
<!--    watch: {},-->
<!--    computed: {-->

<!--    },-->
<!--    mounted () {-->
<!--      window.addEventListener('scroll',this.handleScroll,true)-->
<!--    }-->
<!--  }-->


<!--</script>-->

<!--<style scoped>-->

<!--  .el-main {-->

<!--    padding-left: 20px;-->
<!--    padding-right: 20px;-->
<!--    margin: 0 auto;-->
<!--    width: 1440px;-->

<!--  }-->

<!--  .aside-nav {-->
<!--    padding: 10px;-->
<!--    background: rgba(248, 248, 248, 1);-->
<!--    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);-->
<!--  }-->

<!--  .aside-title {-->
<!--    text-align: left;-->
<!--    padding-bottom: 10px;-->
<!--    border-bottom: 1px solid #E6E6E6;-->
<!--  }-->

<!--  .aside-title img {-->
<!--    width: 100px;-->
<!--    height: 20px;-->
<!--  }-->

<!--  .aside-nav-item {-->
<!--    text-align: left;-->
<!--    padding-top: 10px;-->
<!--    padding-bottom: 10px;-->
<!--    border-bottom: 1px dashed #E6E6E6;-->
<!--    position: relative;-->

<!--  }-->

<!--  .aside-nav-item:hover {-->
<!--    background: #FFFFFF;-->
<!--  }-->

<!--  .aside-nav-item:hover .sub-forum-nav {-->
<!--    display: block;-->
<!--  }-->

<!--  .aside-nav-item-img {-->
<!--    height: 25px;-->
<!--  }-->

<!--  .aside-nav-item-img img {-->
<!--    height: 100%;-->
<!--  }-->

<!--  .aside-nav-item-text a {-->
<!--    display: block;-->
<!--    font-size: 14px;-->
<!--    font-family: PingFangSC-Medium, PingFang SC;-->
<!--    font-weight: 600;-->
<!--    color: rgba(51, 51, 51, 1);-->
<!--    line-height: 25px;-->
<!--    text-align: left;-->
<!--  }-->

<!--  .sub-forum-nav {-->
<!--    display: none;-->
<!--    position: absolute;-->
<!--    right: -180px;-->
<!--    top: 0;-->

<!--    background: rgba(255, 255, 255, 1);-->
<!--    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);-->
<!--    padding: 12px 18px;-->

<!--  }-->

<!--  .sub-forum-nav-item {-->
<!--    width: 145px;-->
<!--    height: 21px;-->
<!--    background: rgba(202, 231, 241, 1);-->
<!--    border-radius: 8px;-->
<!--    margin: 0 auto;-->
<!--    margin-top: 10px;-->
<!--    text-align: center;-->

<!--  }-->

<!--  .sub-forum-nav-item a {-->
<!--    font-size: 10px;-->
<!--    font-family: PingFangSC-Regular, PingFang SC;-->
<!--    font-weight: 400;-->
<!--    color: rgba(51, 51, 51, 1);-->
<!--    line-height: 21px;-->
<!--  }-->

<!--  .news-list {-->
<!--    padding-left: 25px;-->
<!--    overflow: auto;-->
<!--    /*height: 900px;*/-->
<!--  }-->
<!--  .news-list::-webkit-scrollbar {-->
<!--    /*display: none;*/-->
<!--  }-->
<!--  .news-list-item {-->
<!--    /*height: 490px;*/-->
<!--    margin-top: 30px;-->
<!--    padding: 14px;-->
<!--    background-color: #FFFFFF;-->
<!--    border-radius: 21px 8px 8px 8px;-->
<!--    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);-->
<!--  }-->

<!--  .news-list-item:first-child {-->
<!--    margin-top: 0px !important;-->
<!--  }-->

<!--  .news-list-item-icon {-->
<!--    text-align: left;-->
<!--    height: 25px;-->
<!--  }-->

<!--  .news-list-item-icon img {-->
<!--    height: 100%;-->

<!--  }-->

<!--  .news-list-item-league {-->
<!--    text-align: left;-->
<!--    font-size: 12px;-->
<!--    font-family: PingFangSC-Medium, PingFang SC;-->
<!--    font-weight: 500;-->
<!--    color: rgba(51, 51, 51, 1);-->
<!--    line-height: 25px;-->
<!--  }-->

<!--  .news-list-item-title {-->
<!--    margin-top: 10px;-->
<!--    text-align: left;-->

<!--  }-->

<!--  .news-list-item-title a {-->
<!--    font-size: 20px;-->
<!--    font-family: PingFangSC-Medium, PingFang SC;-->
<!--    font-weight: 500;-->
<!--    color: rgba(51, 51, 51, 1);-->
<!--    line-height: 28px;-->

<!--    overflow: hidden;-->
<!--    text-overflow: ellipsis;-->
<!--    display: -webkit-box;-->
<!--    -webkit-line-clamp: 1;-->
<!--    -webkit-box-orient: vertical;-->
<!--  }-->

<!--  .news-list-content {-->
<!--    text-align: left;-->
<!--    height: 30px;-->
<!--    overflow: hidden;-->
<!--    -webkit-line-clamp: 1;-->
<!--    text-overflow: ellipsis;-->

<!--  }-->

<!--  .news-list-content p {-->
<!--    margin: 0;-->
<!--    padding: 0;-->
<!--    color: #666666;-->
<!--    font-size: 12px;-->
<!--    font-weight: 400;-->
<!--    line-height: 30px;-->
<!--  }-->

<!--  .news-list-item-img {-->
<!--    margin-top: 10px;-->
<!--    height: 300px;-->
<!--    overflow: hidden;-->
<!--  }-->

<!--  .news-list-item-img img {-->
<!--    /*max-height: 100%;*/-->
<!--    max-width: 100%;-->
<!--    border-radius: 8px;-->
<!--  }-->

<!--  .news-list-item-time {-->
<!--    text-align: left;-->
<!--    text-indent: 10px;-->
<!--    font-size: 10px;-->
<!--    font-family: PingFangSC-Medium, PingFang SC;-->
<!--    font-weight: 500;-->
<!--    color: rgba(102, 102, 102, 1);-->

<!--  }-->

<!--  .el-image{-->
<!--    position:static ;-->
<!--    border-radius: 12px;-->
<!--  }-->


<!--  .hot-topics {-->
<!--    padding-left: 10px;-->
<!--  }-->
<!--  .hot-topics-title{-->
<!--    height: 35px;-->
<!--    background:rgba(255,224,113,1);-->
<!--    border-radius:14px;-->

<!--    font-size:14px;-->
<!--    font-family:PingFangSC-Medium,PingFang SC;-->
<!--    font-weight:600;-->
<!--    color:rgba(51,51,51,1);-->
<!--    line-height:35px;-->
<!--  }-->

<!--  .hot-topics-item{-->
<!--    padding: 10px;-->
<!--    margin-top: 15px;-->
<!--    height:195px;-->
<!--    background:rgba(255,255,255,1);-->
<!--    box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);-->
<!--    border-radius:10px;-->
<!--  }-->
<!--  .hot-topics-item-img{-->
<!--    /*height: 124px;*/-->
<!--    overflow: hidden;-->

<!--  }-->
<!--  .hot-topics-item-img img{-->
<!--    max-width: 100%;-->
<!--    border-radius: 8px;-->
<!--  }-->

<!--  .hot-topics-item-title{-->
<!--    text-align: left;-->
<!--    text-indent: 10px;-->
<!--    margin-top: 10px;-->
<!--    font-size:12px;-->
<!--    font-family:PingFangSC-Medium,PingFang SC;-->
<!--    font-weight:500;-->
<!--    color:rgba(51,51,51,1);-->
<!--    line-height:17px;-->
<!--  }-->

<!--  .hot-topics-item-topics{-->
<!--    margin-top: 4px;-->
<!--    text-indent: 10px;-->
<!--    text-align: left;-->
<!--    font-size:8px;-->
<!--    font-family:PingFangSC-Medium,PingFang SC;-->
<!--    font-weight:500;-->
<!--    color:rgba(102,102,102,1);-->
<!--    line-height:11px;-->
<!--  }-->

<!--  .nuxt-link-active {-->
<!--    background: #FFFFFF !important;-->
<!--  }-->


<!--</style>-->
<template>
  <div></div>
</template>

<script>
  export default {
    name: 'index',
    asyncData({ redirect }) {
      redirect(301,{name:'nsnews-league',params:{league:'all'}})
    }
  }
</script>

<style scoped>


</style>
