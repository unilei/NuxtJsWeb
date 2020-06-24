<template>
  <el-main>
    <!-- 面包屑   -->
    <el-row>
      <el-col :span="24" class="news-bread">
        <el-col :span="2" class="news-bread-l">
          <el-col v-if="forumDetail.group==='NBA'" :span="12" class="news-bread-l-img"><img src="@/assets/image/nba.png" alt="nba"></el-col>
          <el-col v-if="forumDetail.group==='足球'" :span="12" class="news-bread-l-img"><img src="@/assets/image/football.png" alt="nba"></el-col>
          <el-col v-if="forumDetail.group==='篮球'" :span="12" class="news-bread-l-img"><img src="@/assets/image/basketball.png" alt="nba"></el-col>
          <el-col v-if="forumDetail.group==='全部'" :span="12" class="news-bread-l-img"><img src="@/assets/image/social.png" alt="nba"></el-col>
          <el-col :span="12" class="news-bread-l-text">{{forumDetail.group}}</el-col>
        </el-col>
        <el-col :span="22" class="news-bread-r">
          <nuxt-link style="color: #666666;" :to="{name:'nsnews-league',params:{league:'all'}}"> 首页 </nuxt-link>
          -
          <nuxt-link :to="{name:'nsforum-groupId',params:{groupId:groupId}}">{{forumDetail.group}}</nuxt-link>
        </el-col>
      </el-col>
    </el-row>

    <el-row class="news-container">
      <el-col :span="6" class="news-container-l">
        <el-col :span="24" class="news-container-l-item">
          <nuxt-link
            :to="{name: 'nsforum-groupId-articleId', params: { groupId: groupId,articleId:articleId } }" exact>
            {{forumDetail.title}}
          </nuxt-link>
        </el-col>

        <el-col :span="24" class="news-container-l-item" v-for="(hotForum,i) in hotForumList" :key="i">
          <nuxt-link
            :to="{name: 'nsforum-groupId-articleId', params: { groupId: groupId,articleId:hotForum.article_id } }" exact>
            {{hotForum.title}}
          </nuxt-link>
        </el-col>
      </el-col>

      <el-col :span="18" class="news-container-r">
        <el-col :span="24" class="news-container-r-title">
          {{forumDetail.title}}
        </el-col>
        <el-col :span="24" class="news-container-r-profile">
          <el-col :span="12" class="news-container-r-profile-1">
            <el-col :span="2" class="news-container-r-profile-1-1">
              <img :src="forumDetail.author.avatar_url" alt="avatar_url">
            </el-col>
            <el-col :span="7" class="news-container-r-profile-1-2">
              <el-col :span="24" class="news-container-r-profile-1-2-1"> {{forumDetail.author.nickName}} </el-col>
              <el-col :span="24"  class="news-container-r-profile-1-2-2"><span>足球热评人</span></el-col>
            </el-col>
            <el-col :span="15" class="news-container-r-profile-1-3">
              <button>关注</button>
            </el-col>
          </el-col>
          <el-col :span="12" class="news-container-r-profile-2">
<!--            <el-col :span="24" class="news-container-r-profile-2-1">-->
<!--              <el-col :span="16">分享到 : </el-col>-->
<!--              <el-col :span="2"><img src="@/assets/image/wechat.png" alt="1"></el-col>-->
<!--              <el-col :span="2"><img src="@/assets/image/wxzone.png" alt="1"></el-col>-->
<!--              <el-col :span="2"><img src="@/assets/image/qq.png" alt="1"></el-col>-->
<!--              <el-col :span="2"><img src="@/assets/image/qzone.png" alt="1"></el-col>-->
<!--            </el-col>-->
            <el-col :span="24" class="social-share" data-initialized="true">
              <span>分享到 :</span>
              <a href="#" class="social-share-icon icon-wechat"></a>
              <a href="#" class="social-share-icon icon-weibo"></a>
              <a href="#" class="social-share-icon icon-qq"></a>
              <a href="#" class="social-share-icon icon-qzone"></a>
            </el-col>
            <el-col :span="24" class="news-container-r-profile-2-2">
              {{forumDetail.create_time | dateFormat}}
            </el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="news-container-r-content" >
          <div v-for="(content,index) in forumDetail.content" :key="index">
            <p v-if="content.type == 1">{{content.content}}</p>
            <img v-if="content.type == 2" :src="content.content" alt="112">
          </div>
        </el-col>

        <el-col :span="24" class="news-container-r-tags">
          标签: {{forumDetail.group}}
        </el-col>

        <el-col :span="24" class="news-container-r-like">
          <img src="@/assets/image/like-icon-2.png" alt="icon"> <br>
          已有 {{forumDetail.likes_count}}   人点赞
        </el-col>


        <!--  评论列表      -->
        <el-col :span="24">
          <el-col :span="24" class="publish-comment-title">
            我有话说:
          </el-col>
          <el-col :span="3" class="publish-comment-header">
            <img v-if="avatar_url === '' || avatar_url === null "
                 src="https://aloss.hotforest.cn/web/default-header.png"
                 alt="avatar">
            <img v-if="avatar_url !== '' && avatar_url !== null " :src="avatar_url" alt="avatar">
          </el-col>
          <el-col :span="21" class="publish-comment-c">
            <textarea name="reply_content" cols="30" rows="10" placeholder="说两句呗..." v-model="replyContent"></textarea>
            <button @click="replyNews(1)">发表评论</button>
          </el-col>
        </el-col>

        <el-col :span="24">
          <el-col :span="24" class="comment-all-title">全部评论</el-col>
          <el-col :span="24" v-for="(newsReply,index) in newsReplyList" :key="index" class="list-item">
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

          </el-col>

          <el-col :span="24" class="comment-no-more">
            没有更多了
          </el-col>

        </el-col>


      </el-col>

      <!-- 登陆弹框-->
      <LoginComment v-bind:dialogFormVisible="dialogFormVisible"
             v-bind:dialogMobileLogin = "dialogMobileLogin"
             v-bind:wxIsLoginShow = "wxIsLoginShow"
             @closeDialog = "closeDialog"
             @wxDialog = "wxDialog"
             @mobileDialog = "mobileDialog"
      ></LoginComment>
    </el-row>
  </el-main>
</template>

<script>

  import { getFormatTime } from '../../../utils/time'
  import base from '../../../api/base'
  import qs from 'qs'
  import LoginComment from '../../../components/LoginComment'

  export default {
    name: 'articleId',
    layout:'nsforumLayout',
    components:{
      LoginComment
    },
    data () {
      return {
        articleId: '',
        groupId:'',
        forumDetail:'',
        hotForumList:[],

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
    head () {
      let description = ''
      let forumContent = this.forumDetail.content
      forumContent.every((v, i) => {
        if (v.type === 1) {
          description = v.content
          return false
        }
        return true
      })

      return {
        title: this.forumDetail.title,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.forumDetail.group
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
        this.groupId = to.params.groupId;
        this.articleId = to.params.articleId;
      }
    },
    watchQuery: ['groupId', 'articleId'],
    computed: {

    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll,true)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll,true)
    },
    mounted () {

      let $config = {
        url: window.location.href, // 网址，默认使用 window.location.href
        summary: document.title,
        source: window.location.href, // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: document.title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        origin: '', // 分享 @ 相关 twitter 账号
        description: document.title, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: '', // 图片, 默认取网页中第一个img标签
        wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
      socialShare('.social-share', $config)

      window.addEventListener('scroll', this.handleScroll, true)
      this.groupId = this.$route.params.groupId;
      this.articleId = this.$route.params.articleId;

      this.avatar_url = localStorage.getItem('avatar_url')
      this.getReplyList(this.articleId, 0)
    },
    async asyncData (context) {

      let ns_device_id = 'website';
      let limit = 4;
      let offset = 0;
      let groupId = context.params.groupId
      let articleId = context.params.articleId
      let forum_params = {
        sort_type:'toplike',
        group_id:groupId
      }
      let [forumDetailRes,hotForumListRes] = await Promise.all([
        context.$axios.$get(`${base.sq}/v3/forum/${articleId}`, {
          headers:{ns_device_id:'website'}
        }),
        context.$axios.$get(`${base.sq}/v3/forum/articles/${limit}/${offset}`, { params: forum_params ,
          headers:{ ns_device_id:ns_device_id }}),
      ]).catch(err => {
        error({
          statusCode: 400,
          message: err
        })
      })

      let forumDetail = [];
      if (forumDetailRes.Status === 1){
        forumDetail = forumDetailRes.Data;
      }
      let hotForumList = [];
      if (hotForumListRes.Status === 1){
        hotForumList = hotForumListRes.Data.list;
      }

      // console.log(forumDetail)
      return {
        forumDetail:forumDetail,
        groupId:groupId,
        hotForumList:hotForumList,
        articleId:context.params.articleId
      }

    },

    methods: {
      handleScroll (e) {
        // var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop      // 执行代码

        let scrollTop=document.documentElement.scrollTop || document.body.scrollTop || e.target.body.scrollTop;
        let offsetHeight = document.documentElement.offsetHeight;
        let innerHeight = window.innerHeight;

        let bottomOfWindow = offsetHeight - scrollTop - innerHeight <=100

        let loading = this.loading;

        if (bottomOfWindow && loading === false) {
          this.loading = true;
          this.showMoreComment(2);
        }

      },
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
      showMoreComment (i) {

        const article_id = this.articleId;
        const type = 'forum'
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
              const type = 'forum'
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
        let type = 'forum'
        let sort = 'newest'
        this.$axios.get(`${base.sq}/v2/` + type + `/` + article_id + `/` + sort + `/replys`, {
          params: {
            offset: offset,
            limit: 2
          }
        }).then(
          res => {
            // console.log(res)
            const newsReplyList = res.data.Data.list

            newsReplyList.forEach(item => {
              // console.log(item)
              const reply_id = item.reply_id
              let type = 'forum'
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
            // console.log(this.offsetComment)
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
            const type = 'forum'
            const parentId = this.articleId
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
                  this.getReplyList(this.articleId,0)
                  // this.$forceUpdate();
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

            const type = 'forum'
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
                  this.$forceUpdate(this.getReplyList(this.articleId,0));
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
  .news-bread-r a{
    color: #333333;
  }

  .news-container{
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    margin-top: 14px;

  }
  .news-container-l{
    height: 660px;

    background-color: #F8F8F8;

  }
  .news-container-l-item{
    /*height: 100px;*/

  }
  .news-container-l-item a{
    color: #666666;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    display: block;
    height: 100px;
    padding-top: 30px;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom:1px solid  #E6E6E6;
  }

  .news-container-r{
    /*height: 800px;*/
    padding-left: 100px;
    padding-right: 110px;
    background-color: #ffffff;
  }

  .news-container-r-title{
    font-size:28px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    padding-top: 10px;
    text-align: left;
    line-height: 40px;
  }

  .news-container-r-profile{
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #E4E4E4;
  }

  .news-container-r-profile-1{
    text-align: left;
  }
  .news-container-r-profile-1-1{
    line-height: 60px;
  }
  .news-container-r-profile-1-1 img{
    height: 30px;
    width: 30px;
    margin-top: 14px;
    border-radius: 30px;
  }

  .news-container-r-profile-1-2 {
    margin-top: 10px;
    text-indent: 8px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    /*line-height: 30px;*/
  }
  .news-container-r-profile-1-2-1{

  }
  .news-container-r-profile-1-2-2{
    margin-top: 4px;
  }
  .news-container-r-profile-1-2-2 span {
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
    /*line-height: 30px;*/
  }

  .news-container-r-profile-1-3{
    height: 60px;
  }
  .news-container-r-profile-1-3 button{
    cursor: pointer;
    outline: none;
    border: none;
    width:70px;
    height:30px;
    background:rgba(118,188,255,1);
    border-radius:2px;
    margin-top: 15px;

    font-size:12px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
  }

  .news-container-r-profile-2{
    text-align: right;
  }

  .news-container-r-profile-2-1{
    height: 30px;
    line-height: 30px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
  }

  .news-container-r-profile-2-1 img{
    width: 25px;
    height: 25px;
    margin-top: 2px;
  }

  .news-container-r-profile-2-2{
    font-size:10px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height: 30px;
  }


  .news-container-r-content{
    padding-bottom: 20px;
    padding-top: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .news-container-r-content p{
    margin-bottom: 0;
    /*text-indent: 20px;*/
    color: #333333;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .news-container-r-content img{
    width: 100%;
    margin-top: 10px;
  }

  .news-container-r-tags{
    text-align: left;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:25px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .news-container-r-like{
    padding-bottom: 20px;
    padding-top: 20px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .news-container-r-like img{
    width: 50px;
    height: 50px;
  }

  /deep/ .social-share .icon-wechat .wechat-qrcode {
    top: 40px !important;
  }


  .nuxt-link-active {
    color: #333333 !important;
    background: #FFFFFF !important;
  }

</style>
