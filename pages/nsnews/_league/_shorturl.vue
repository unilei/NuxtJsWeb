<template>
  <div>
    <el-col :span="13" :offset="1">
      <el-col :span="24" class="news-detail-bread-crumbs">
        <nuxt-link :to="{path:'/'}">首页</nuxt-link>
        -
        <nuxt-link :to="{name:'nsnews-league',params:{'league':league}}">{{league_value}}</nuxt-link>
        -
        <span>{{newsDetail.title}}</span>
      </el-col>

      <el-col :span="24" class="news-detail-title">
        {{newsDetail.title}}
      </el-col>

      <el-col :span="24" class="news-detail-author">
        <el-col :span="2" class="news-detail-author-l">
          <img src="https://aloss.hotforest.cn/web/default-header.png" alt="">
        </el-col>
        <el-col :span="22" class="news-detail-author-r">
          <el-col :span="24">
            <el-col :span="3" class="news-detail-author-name">
              {{newsDetail.author.name}}
            </el-col>
            <el-col :span="3" class="news-detail-author-button">
              <button>关注</button>
            </el-col>
            <el-col :span="4" :offset="13">

            </el-col>
          </el-col>
          <el-col :span="24" class="news-detail-author-r">
            <el-col :span="4" class="news-detail-author-honor">
              全民体育主编
            </el-col>
            <el-col :span="8" :offset="12" class="news-detail-author-time">
              {{newsDetail.published_at}}
            </el-col>

          </el-col>
        </el-col>

      </el-col>

      <el-col :span="24" class="news-detail-content" v-for="(content,index) in newsDetail.content" :key="index">
        <p v-if="content.type == 1">{{content.content}}</p>
        <img v-if="content.type == 2" :src="content.content" alt="">
      </el-col>
      <!--标签-->
      <el-col :span="24" class="news-detail-tag">
        标签：{{newsDetail.league}}
      </el-col>


      <el-col :span="24">
        <el-col :span="24" class="publish-comment-title">
          我有话说
        </el-col>
        <el-col :span="3" class="publish-comment-header">
          <img v-if="avatar_url === '' || avatar_url === null "
               src="https://aloss.hotforest.cn/web/default-header.png"
               alt="avatar">
          <img v-if="avatar_url !== '' && avatar_url !== null " :src="avatar_url" alt="avatar">
        </el-col>
        <el-col :span="21" class="publish-comment-c">
          <textarea name="reply_content" cols="30" rows="10" placeholder="说两句呗" v-model="replyContent"></textarea>
          <button @click="replyNews(1)">发表<br>评论</button>
        </el-col>
      </el-col>

      <!--评论列表滚动加载-->
      <el-col :span="24">
        <el-col :span="24" class="comment-all-title">全部评论</el-col>
        <el-col :span="24" class="infinite-list-wrapper" style="overflow:auto">
          <ul
            class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <!--              <li v-for="i in count" class="list-item">{{ i }}</li>-->
            <li v-for="(newsReply,index) in newsReplyList" :key="index" class="list-item">
              <el-col :span="2" class="comment-avatar">
                <img
                  v-if="newsReply.author.avatar_url != null && newsReply.author.avatar_url !== '' && newsReply.author.avatar_url !== 'https://nsports-entity.171tiyu.com/'"
                  :src="newsReply.author.avatar_url" alt="avatar">
                <img v-if="newsReply.author.avatar_url == null || newsReply.author.avatar_url === ''
                      || newsReply.author.avatar_url==='https://nsports-entity.171tiyu.com/'"
                     src="https://aloss.hotforest.cn/web/default-header.png" alt="avatar">
              </el-col>
              <el-col :span="6" class="comment-nickname">
                {{newsReply.author.nickName}}
              </el-col>
              <el-col :span="6" :offset="10" class="comment-time">{{newsReply.create_time | dateForHour }}</el-col>

              <el-col :span="22" :offset="2" class="comment-content" v-for="(content,i) in newsReply.content" :key="i">
                <p v-if="content.type == 1">
                  {{content.content}}
                </p>
              </el-col>

              <el-col :span="22" :offset="2" class="comment-reply-container" v-show="newsReply.replyReply">
                <el-col :span="24" v-for="reply in newsReply.replyReply" :key="reply.reply_id">
                  <el-col :span="23" :offset="1" class="comment-reply-t">
                    {{reply.author.nickName}} : <span v-for="(c,ii) in reply.content" :key="ii"> {{c.content}} </span>
                  </el-col>
                  <el-col :span="23" :offset="1" class="comment-reply-d">
                    <el-col :span="2" class="comment-reply-like-img"><img src="https://aloss.hotforest.cn/web/news-like.png" alt="like"></el-col>
                    <el-col :span="2" class="comment-reply-like">{{reply.likes_count}}</el-col>
                    <el-col :span="20" class="comment-reply-time">{{reply.create_time | dateForHour}}</el-col>
                  </el-col>
                </el-col>
              </el-col>

              <el-col :span="24" class="comment-like-container">
                <el-col :span="2" :offset="18" class="comment-like-img"><img
                  src="https://aloss.hotforest.cn/web/news-like.png" alt=""></el-col>
                <el-col :span="2" class="comment-like">{{newsReply.likes_count}}</el-col>
                <el-col :span="2" class="comment-button">
                  <button v-if="index !== showComment" @click="isShowComment(index)">回复</button>
                  <button class="shouqi" v-if="index === showComment" @click="isHideComment(index)">收起</button>
                </el-col>

                <el-col :span="24" v-if="index === showComment" class="comment-input">
                  <input type="text" v-model="replyReplyContent">
                  <button @click="replyReplyNews(2,newsReply.reply_id)">发表</button>
                </el-col>
              </el-col>
            </li>
          </ul>
        </el-col>
        <el-col :span="24">
          <p class="loading" v-if="loading">加载中...</p>
          <p class="no-more" v-if="noMore">没有更多了</p>
        </el-col>
      </el-col>

    </el-col>

    <el-col :span="6" :offset="1">
      <el-col :span="24" class="news-you-like">
        <el-col :span="24" class="news-you-like-t">
          <el-col :span="1">
            <div class="news-you-like-icon"></div>
          </el-col>
          <el-col :span="9">你可能感兴趣的</el-col>
          <el-col :span="2" :offset="6" class="news-you-like-change-img">
            <img style="width: 20px;height: 20px;" src="https://aloss.hotforest.cn/web/xuanzhuan.png"
                 alt="img">
          </el-col>
          <el-col :span="6" class="news-you-like-change-text">换一换</el-col>
        </el-col>

        <el-col :span="24" class="news-you-like-item">
          <el-col :span="6" class="news-you-like-item-img"><img src="https://aloss.hotforest.cn/web/default-header.png"
                                                                alt=""></el-col>
          <el-col :span="18">
            <el-col :span="12" class="news-you-like-item-1">全民体育官方</el-col>
            <el-col :span="12" class="news-you-like-item-2">
              <button>关注</button>
            </el-col>
            <el-col :span="24" class="news-you-like-item-3">全民体育主编</el-col>
            <el-col :span="24" class="news-you-like-item-4">资深体育评论员，专业媒体供稿人</el-col>
          </el-col>
        </el-col>
        <el-col :span="24" class="news-you-like-item">
          <el-col :span="6" class="news-you-like-item-img"><img src="https://aloss.hotforest.cn/web/default-header.png"
                                                                alt=""></el-col>
          <el-col :span="18">
            <el-col :span="12" class="news-you-like-item-1">全民体育官方</el-col>
            <el-col :span="12" class="news-you-like-item-2">
              <button>关注</button>
            </el-col>
            <el-col :span="24" class="news-you-like-item-3">全民体育主编</el-col>
            <el-col :span="24" class="news-you-like-item-4">资深体育评论员，专业媒体供稿人</el-col>
          </el-col>
        </el-col>
        <el-col :span="24" class="news-you-like-item">
          <el-col :span="6" class="news-you-like-item-img"><img src="https://aloss.hotforest.cn/web/default-header.png"
                                                                alt=""></el-col>
          <el-col :span="18">
            <el-col :span="12" class="news-you-like-item-1">全民体育官方</el-col>
            <el-col :span="12" class="news-you-like-item-2">
              <button>关注</button>
            </el-col>
            <el-col :span="24" class="news-you-like-item-3">全民体育主编</el-col>
            <el-col :span="24" class="news-you-like-item-4">资深体育评论员，专业媒体供稿人</el-col>
          </el-col>
        </el-col>
      </el-col>

      <el-col :span="24" class="hot-news-list">
        <el-col :span="24" class="hot-news-list-t">
          <div class="hot-news-list-t-icon"></div>
          <span>热门新闻</span>
        </el-col>
        <el-col :span="24" v-for="(hotNews,index) in hotNewsList" :key="index" class="hot-news-list-item">
          <el-col :span="10" class="hot-news-list-img">
            <img :src="hotNews.image" alt="image">
          </el-col>
          <el-col :span="14" class="hot-news-list-title">
            <nuxt-link target="_blank"
                       :to="{name:'nsnews-league-shorturl',params:{shorturl:hotNews.shorturl,league:league}}">
              {{hotNews.title}}
            </nuxt-link>
          </el-col>
        </el-col>
      </el-col>
    </el-col>


    <!-- 登陆弹框-->
    <Login v-bind:dialogFormVisible="dialogFormVisible"
           v-bind:dialogMobileLogin = "dialogMobileLogin"
           v-bind:wxIsLoginShow = "wxIsLoginShow"
           @closeDialog = "closeDialog"
           @wxDialog = "wxDialog"
           @mobileDialog = "mobileDialog"
    ></Login>

  </div>
</template>

<script>

  import { getFormatTime } from '../../../utils/time'
  import base from '../../../api/base'
  import qs from 'qs'
  import Login from '../../../components/Login'

  export default {
    name: 'shorturl',
    layout: 'newsLayout',
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
        this.league_value = 'NBA'
      }
      if (this.league === 'premier') {
        this.league_value = '英超'
      }
      if (this.league === 'serie_a') {
        this.league_value = '意甲'
      }
      if (this.league === 'la_liga') {
        this.league_value = '西甲'
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

      const shorturl = context.params.shorturl
      // console.log(context.params)
      let newsDetail = await context.$axios.get(`${base.sq}/v2/GetArticleDetail`, {
        params: {
          shorturl: shorturl
        }
      })

      // console.log(newsDetail)
      let hot_params = {}
      if (league === 'all') {
        hot_params = {
          articleType: 3,
          limit: 4,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      } else {
        hot_params = {
          articleType: 3,
          league: league,
          limit: 4,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      }

      let hotNewsList = await context.$axios.get(`${base.sq}/v2/GetArticles`, { params: hot_params })

      return {
        league: league,
        league_value: league_value,
        newsDetail: newsDetail.data.Data,
        newsPublishFormatTime: getFormatTime(newsDetail.data.Data.timestamp),
        hotNewsList: hotNewsList.data.Data.articles,
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
            limit: 2
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

            this.newsReplyList = this.newsReplyList.concat(newsReplyList)
            this.offsetComment = i + 4

            this.reply_count += this.newsReplyList.length;

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
            this.reply_count += res.data.Data.list.length;
            this.offsetComment = offset+1
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
    padding: 0 27px 0 27px;

  }


  .news-detail-tag {
    margin-top: 25px;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
  }

  .news-detail-bread-crumbs {
    text-align: left;
    margin-top: 25px;
  }

  .news-detail-bread-crumbs a {
    font-size: 16px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 30px;
  }


  .news-detail-title {
    text-align: left;
    color: #333333;
    margin: 20px 0 0 0;
    padding: 0;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
  }

  .news-detail-author-l {
    text-align: left;
    padding-top: 8px;
  }
  .news-detail-author-l img{
    width: 40px;
    height: 40px;
  }

  .news-detail-author {
    margin-top: 14px;
    margin-bottom: 14px;
    text-align: left;
  }

  .news-detail-author-name {

  }

  .news-detail-author-l img {
    width: 40px;
    height: 40px;
  }

  .news-detail-author-r {

  }

  .news-detail-author-name {
    color: #333333;
    line-height: 30px;
    font-size: 16px;
    font-weight: 400;
  }

  .news-detail-author-button {
    text-align: left;
  }

  .news-detail-author-button button {
    background: #76BCFF;
    border-radius: 2px;
    border: 1px solid transparent;
    outline: none;
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;

  }

  .news-detail-author-honor {
    font-size: 12px;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
    line-height: 30px;
  }

  .news-detail-author-time {
    text-align: right;
    color: #666666;
    line-height: 30px;
    font-size: 12px;
    font-weight: 400;
  }

  .news-detail-content p {
    margin: 0;
    padding: 0;
    color: #333333;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .news-detail-content img {
    width: 100%;
  }

  .news-you-like {
    border: 1px solid #D0D0D0;;
    padding: 12px 14px 12px 14px;
    margin-top: 30px;
  }

  .news-you-like-t {
    height: 34px;
    line-height: 34px;
  }

  .news-you-like-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    float: left;
    margin-right: 14px;
  }

  .news-you-like-change-img {
    margin-top: 4px;
  }

  .news-you-like-change-text {
    text-align: left;
    color: #76BCFF;
  }

  .news-you-like-item {
    text-align: left;
    padding: 12px 0 12px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  .news-you-like-item:last-child {
    border-bottom: 1px solid transparent;
  }

  .news-you-like-item-1 {
    color: #333333;
    font-size: 16px;
    font-weight: 400;
  }

  .news-you-like-item-2 button {
    /*height: 17px;*/
    line-height: 17px;
    background: #76BCFF;
    border-radius: 2px;
    border: 1px solid transparent;
    outline: none;
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;

  }

  .news-you-like-item-3 {
    color: #838383;
    line-height: 30px;
    font-size: 12px;
    font-weight: 400;

  }

  .news-you-like-item-4 {
    color: #838383;
    line-height: 30px;
    font-size: 12px;
    font-weight: 400;
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
    font-weight: 400;
    line-height: 25px;
    position: absolute;
    left: 20px;
    top: 10px;
  }

  .hot-news-list-item {
    padding: 12px 0 12px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  .hot-news-list-item:last-child {
    border-bottom: transparent !important;
  }

  .hot-news-list-img img {
    width: 100%;
  }

  .hot-news-list-title {
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


</style>
