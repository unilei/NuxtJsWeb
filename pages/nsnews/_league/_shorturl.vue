<template>
  <el-main>
    <!-- 面包屑   -->
    <el-row>
      <el-col :span="24" class="news-bread">
          <el-col :span="2" class="news-bread-l">
            <el-col v-if="league==='nba'" :span="12" class="news-bread-l-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>
            <el-col v-if="league==='la_liga'" :span="12" class="news-bread-l-img"><img src="@/assets/image/laliga.png" alt="nba"></el-col>
            <el-col v-if="league==='premier'" :span="12" class="news-bread-l-img"><img src="@/assets/image/premier.png" alt="nba"></el-col>
            <el-col v-if="league==='serie_a'" :span="12" class="news-bread-l-img"><img src="@/assets/image/serie_a.png" alt="nba"></el-col>
            <el-col :span="12" class="news-bread-l-text">{{league_value}}</el-col>
          </el-col>
        <el-col :span="22" class="news-bread-r">
          首页 -  <span>{{league_value}}</span>
        </el-col>
      </el-col>
    </el-row>

    <el-row class="news-container">
      <el-col :span="6" class="news-container-l">
        <el-col :span="24" class="news-container-l-item">
          <nuxt-link
            :to="{name: 'nsnews-league-shorturl', params: { shorturl: newsDetail.shorturl,league:league } }">
            {{newsDetail.title}}
          </nuxt-link>

        </el-col>

        <el-col :span="24" class="news-container-l-item" v-for="(hotNews,i) in hotNewsList" :key="i">
          <nuxt-link
            :to="{name: 'nsnews-league-shorturl', params: { shorturl: hotNews.shorturl,league:hotNews.league_value } }">
            {{hotNews.title}}
          </nuxt-link>

        </el-col>
      </el-col>
      <el-col :span="18" class="news-container-r">
        sdafafdsa
      </el-col>
    </el-row>
  </el-main>
</template>

<script>

  import { getFormatTime } from '../../../utils/time'
  import base from '../../../api/base'
  import qs from 'qs'
  import Login from '../../../components/Login'

  export default {
    name: 'shorturl',
    layout:'nsnewsLayout',
    components:{
      Login
    },
    data () {
      return {
        article_id: '',
        newsDetail: '',
        newsPublishFormatTime: '',
        hotNewsList: [],
        newsReplyList: [],
        showComment: -1,
        showCommentReply: -1,
        offsetComment: 0,
        replyContent: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '60px',
        ns_device_id: 'website',
        imageUrl: '',
        uploadBaseUrl: base.sq + '/UploadAvatar',
        fileObj: '',
        replyReplyContent: '',
        avatar_url: null,
        dialogTableVisibleLogin: false,
        dialogFormVisibleLogin: false,
        dialogMobileLogin: false,
        wxIsLoginShow: false,
        ip: '',
        area: '',
        brower: '',
        os: '',
        mobile: '',
        code: '',
        country_code: '+86',
        device_id: 'website',
        secret: '',
        nickname: null,
        phone: null,
        uid: null,
        redirect_uri: 'http://www.171tiyu.com/wechat',

        league: '',
        league_value: '',

        reply_total_count: 0,
        reply_count:0,
        loading: false,
        no_more:false,

      }
    },

    computed: {
      noMore () {
        return this.reply_count>=this.reply_total_count;
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    mounted () {
      // console.log(this.$route.params.shorturl)
      this.league = this.$route.params.league
      if (this.league === 'all') {
        this.league_value = '全部新闻'
      }
      if (this.league === 'nba') {
        this.league_value = 'NBA';
      }
      if (this.league === 'premier') {
        this.league_value = '英超'
      }
      if (this.league === 'serie_a') {
        this.league_value = '意甲';
      }
      if (this.league === 'la_liga') {
        this.league_value = '西甲';
      }
      this.shorturl = this.$route.params.shorturl
      this.avatar_url = localStorage.getItem('avatar_url')
      this.getReplyList(this.article_id, 0)


    },
    head () {
      let description = ''
      let newsContent = this.newsDetail.content
      newsContent.every((v, i) => {
        if (v.type === 1) {
          description = v.content
          return false
        }
        return true
      })

      return {
        title: this.newsDetail.title,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.newsDetail.league
          },
          {
            hid: 'description',
            name: 'description',
            content: description
          }
        ]
      }
    },
    watch: {
      $route (to, from) {
        // console.log(to)
        this.league = to.params.league
        this.shorturl = to.params.shorturl
      }
    },
    watchQuery: ['shorturl', 'league'],
    async asyncData (context) {

      let league = context.params.league
      let league_value = ''

      if (league === 'all') {
        league_value = '全部新闻'
      }
      if (league === 'nba') {
        league_value = 'NBA'
      }
      if (league === 'premier') {
        league_value = '英超'
      }
      if (league === 'serie_a') {
        league_value = '意甲'
      }
      if (league === 'la_liga') {
        league_value = '西甲'
      }

      let shorturl = context.params.shorturl
      let hot_params = {}
      if (league === 'all') {
        hot_params = {
          articleType: 3,
          limit: 4,
          offset: 0,
          author_filter:'["6","7","8","9"]'
        }
      } else {
        hot_params = {
          articleType: 3,
          league: league,
          limit: 4,
          offset: 0,
          author_filter:'["6","7","8","9"]'
        }
      }

      let [newsDetail, hotNewsList] = await Promise.all([
        context.$axios.get(`${base.sq}/v2/GetArticleDetail`, {
          params: {
            shorturl: shorturl
          }
        }),
        context.$axios.get(`${base.sq}/v2/GetArticles`, { params: hot_params })
      ]).catch(err => {
        error({
          statusCode: 400,
          message: err
        })
      })

      let news = [];
      let hotNews = [];
      if (newsDetail.data.Status === 1){
        news =  newsDetail.data.Data;
      }
      if (hotNewsList.data.Status === 1){
        hotNews = hotNewsList.data.Data.articles;
        hotNews.forEach(item => {
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
      
      return {
        league: league,
        league_value: league_value,
        newsDetail:news,
        hotNewsList:hotNews ,
        newsPublishFormatTime: getFormatTime(newsDetail.data.Data.timestamp),
        article_id: newsDetail.data.Data.article_id
      }
    },

    methods: {
      closeDialog () {
        this.dialogTableVisible = false
        this.dialogFormVisible = false
        this.dialogMobileLogin = false
        this.wxIsLoginShow = false
      },
      wxDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = true
        this.dialogMobileLogin = false
      },
      mobileDialog () {
        this.dialogFormVisible = true
        this.wxIsLoginShow = false
        this.dialogMobileLogin = true
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.showMoreComment(this.offsetComment)
          this.loading = false
        }, 2000)
      },
      showMoreComment (i) {

        const article_id = this.article_id
        const type = 'news'
        const sort = 'newest'

        this.$axios.get(`${base.sq}/v2/` + type + `/` + article_id + `/` + sort + `/replys`, {
          params: {
            offset: i,
            limit: 5
          }
        }).then(
          res => {
            const newsReplyList = res.data.Data.list
            newsReplyList.forEach(item => {
              // console.log(item)
              const reply_id = item.reply_id
              const type = 'news'
              const sort = 'toplike'
              this.$axios.get(`${base.sq}/v2/` + type + `/` + reply_id + `/` + sort + `/replys`, {
                params: {
                  offset: 0
                }
              }).then(res => {
                // console.log(res)
                const replyReplyArr = res.data.Data.list
                this.$forceUpdate(item.replyReply = replyReplyArr)
              })
            })

            this.reply_count += newsReplyList.length;
            this.newsReplyList = this.newsReplyList.concat(newsReplyList)
            this.offsetComment = i + 5

            console.log(this.offsetComment)
            console.log(this.newsReplyList)
          }
        )
      },
      getReplyList (article_id, offset) {
        let type = 'news'
        let sort = 'newest'
        this.$axios.get(`${base.sq}/v2/` + type + `/` + article_id + `/` + sort + `/replys`, {
          params: {
            offset: offset,
            limit: 2
          }
        }).then(
          res => {
            console.log(res)
            const newsReplyList = res.data.Data.list

            newsReplyList.forEach(item => {
              // console.log(item)
              const reply_id = item.reply_id
              let type = 'news'
              let sort = 'toplike'
              this.$axios.get(`${base.sq}/v2/` + type + `/` + reply_id + `/` + sort + `/replys`, {
                params: {
                  offset: 0
                }
              }).then(res => {
                // console.log(res)
                const replyReplyArr = res.data.Data.list
                this.$forceUpdate(item.replyReply = replyReplyArr)
              })
            })
            // console.log(newsReplyList)
            this.newsReplyList = newsReplyList
            this.reply_total_count = res.data.Data.totalCount;

            this.reply_count += newsReplyList.length;
            this.offsetComment = offset+2
            console.log(this.offsetComment)
          }
        )

      },
      turn_own () {
        window.location.href = 'https://www.171tiyu.com'
      },
      replyNews (level) {
        const ns_device_id = 'website'
        const uid = localStorage.getItem('uid')
        const token = localStorage.getItem('token')
        const nickname = localStorage.getItem('nickname')

        if (uid === null || token == null) {
          // this.$message({
          //   message: '请先登录，再留言',
          //   type: 'success'
          // })

          this.mobileDialog()

        } else {

          if (nickname === '' || nickname === null) {
            this.mobileDialog();
          } else {
            if (this.replyContent === '') {
              return this.$message({
                message: '留言内容不能为空',
                type: 'warning'
              })
            }
            const type = 'news'
            const parentId = this.article_id
            const params = {
              content: [
                {
                  content: this.replyContent,
                  type: 1
                }
              ],
              level: level,
            }
            const headers = {
              ns_device_id: ns_device_id,
              uid: uid,
              token: token
            }
            this.$axios.post(`${base.sq}/v2/` + type + `/` + parentId + `/reply`, params, { headers: headers }).then(
              res => {

                if (res.data.Status === 1) {
                  this.$message({
                    message: '恭喜你，留言成功',
                    type: 'success'
                  })
                  this.$router.go(0)
                } else {
                  this.$message.error(res.data.ErrMsg)
                }

              }
            )
          }
        }
      },
      replyReplyNews (level, reply_id) {
        const ns_device_id = 'website'
        const uid = localStorage.getItem('uid')
        const token = localStorage.getItem('token')
        const nickname = localStorage.getItem('nickname')

        if (uid === null || token == null) {
          // this.$message({
          //   message: '请先登录，再留言',
          //   type: 'success'
          // })
          this.mobileDialog()
        } else {

          if (nickname === '' || nickname === null) {
            this.mobileDialog();
          } else {
            if (this.replyReplyContent === '') {
              return this.$message({
                message: '留言内容不能为空',
                type: 'warning'
              })
            }

            const type = 'news'
            const parentId = reply_id
            const params = {
              content: [
                {
                  content: this.replyReplyContent,
                  type: 1
                }
              ],
              level: level,
            }
            const headers = {
              ns_device_id: ns_device_id,
              uid: uid,
              token: token
            }
            this.$axios.post(`${base.sq}/v2/` + type + `/` + parentId + `/reply`, params, { headers: headers }).then(
              res => {
                if (res.data.Status === 1) {
                  this.$message({
                    message: '恭喜你，留言成功',
                    type: 'success'
                  })
                  this.$router.go(0)
                } else {
                  this.$message.error(res.data.ErrMsg)
                }

              }
            )
          }
        }
      },
      isShowComment (index) {

        this.showComment = index
      },
      isHideComment (index) {

        this.showComment = -1
      },
      isShowCommentReply (i) {

        this.showCommentReply = i
      },
      isHideCommentReply (i) {

        this.showCommentReply = -1
      },


    }

  }
</script>

<style scoped>
  @import "../../../assets/css/reply.css";
  @import "../../../assets/css/userinfo.css";
  @import "../../../assets/css/login.css";

  .el-main {
    margin: 0 auto;
    padding: 0;
    width: 1440px;
  }

  .news-bread{
    height: 60px;
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
    background-color: #ffffff;
  }
  .news-bread-l {
    margin-top: 15px;
    border-right: 1px solid #C8C8C8;
    line-height: 30px;
    font-size:12px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .news-bread-l-img{
    height: 30px;
    text-align: right;
  }
  .news-bread-l-img img{
    height: 100%;
  }
  .news-bread-l-text{
    text-align: center;
  }

  .news-bread-r{
    text-align: left;
    text-indent: 20px;
    margin-top: 15px;
    line-height: 30px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .news-bread-r span{
    color: #333333;
  }

  .news-container{
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    margin-top: 14px;

  }
  .news-container-l{
    height: 540px;

    background-color: #F8F8F8;

  }
  .news-container-l-item{
    height: 100px;

  }
  .news-container-l-item a{
    color: #666666;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    display: block;
    height: 100%;
    padding-top: 30px;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom:1px solid  #E6E6E6;
  }

  .news-container-r{
    height: 800px;
    background-color: #ffffff;
  }

  .nuxt-link-active {
    color: #333333 !important;
    background: #FFFFFF !important;
  }

</style>
