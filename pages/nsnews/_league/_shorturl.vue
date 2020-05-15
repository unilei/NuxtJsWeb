<template>
  <div>
    <!--            news-detail -->
    <div class="news-detail">
      <div class="news-detail-bread-crumbs">
        <nuxt-link :to="{path:'/'}">首页</nuxt-link>
        -
        <nuxt-link :to="{name:'nsnews-league',params:{'league':league}}">{{league_value}}</nuxt-link>
        -
        <span>{{newsDetail.title}}</span>
      </div>

      <h3>{{newsDetail.title}}</h3>
      <div class="news-detail-t">
        <div class="news-detail-t-l">
          <img src="https://aloss.hotforest.cn/web/default-header.png" alt="">
        </div>
        <div class="news-detail-t-r">
          <div class="news-detail-t-r-t">
            <span v-if="newsDetail.author">{{newsDetail.author.name}}</span>
            <button>关注</button>
          </div>
          <div class="news-detail-t-r-d">
            <div class="news-detail-t-r-d-l">
              全民体育主编
            </div>
            <span>{{newsPublishFormatTime}}</span>
          </div>
        </div>
      </div>
      <div class="news-detail-c">
        <div v-for="(content,index) in newsDetail.content" :key="index">
          <div v-if="content.type == 1">
            <p>{{content.content}}</p>
          </div>
          <div v-if="content.type == 2">
            <img :src="content.content" alt="">
          </div>
        </div>
      </div>
      <!--标签-->
      <el-row>
        <el-col :span="24" class="news-detail-tag">
          标签：{{newsDetail.league}}
        </el-col>
      </el-row>

      <!--上下篇-->
      <!--      <el-row>-->
      <!--        <el-col :span="24">-->
      <!--            <h4>上一篇:{{prevTitle}}</h4>-->
      <!--        </el-col>-->
      <!--        <el-col :span="24">-->
      <!--          <h4>下一篇:{{nextTitle}}</h4>-->
      <!--        </el-col>-->
      <!--      </el-row>-->

      <!--留言评论-->
      <div class="publish-comment">
        <p>我有话说</p>
        <div class="publish-comment-d">
          <div class="publish-comment-d-i">
            <img v-if="this.avatar_url === '' || this.avatar_url === null "
                 src="https://aloss.hotforest.cn/web/default-header.png"
                 alt="">
            <img v-if="this.avatar_url !== '' & this.avatar_url !== null " :src="this.avatar_url" alt="">
          </div>
          <div class="publish-comment-d-tx">
            <textarea name="" id="" cols="30" rows="10" placeholder="说两句呗" v-model="replyContent"></textarea>
            <button @click="replyNews(1)">发表<br>评论</button>
          </div>

        </div>
      </div>

      <div class="comment-list">
        <div class="comment-list-t">全部评论</div>
        <div class="comment-list-d" v-for="(newsReply,index) in newsReplyList" :key="index">
          <div class="comment-list-d-t">
            <img v-if="newsReply.author.avatar_url != null & newsReply.author.avatar_url != ''"
                 :src="newsReply.author.avatar_url" alt="">
            <img v-if="newsReply.author.avatar_url == null || newsReply.author.avatar_url == ''"
                 src="https://aloss.hotforest.cn/web/star.png" alt="">
            <a>{{newsReply.author.nickName}}</a>
            <span class="comment-list-d-t-t">{{newsReply.create_time | dateForHour }}</span>
          </div>

          <div class="comment-list-content" v-for="(content,i) in newsReply.content" :key="i">
            <p v-if="content.type == 1">
              {{content.content}}
            </p>
          </div>

          <ul>
            <li v-for="reply in newsReply.replyReply" :key="reply.reply_id">
              <div class="comment-item">
                <div class="comment-item-reply">
                  <span>{{reply.author.nickName}} :</span>
                  <p v-for="(c,ii) in reply.content" :key="ii"> {{c.content}} </p>
                </div>
                <div style="clear: both;"></div>

                <div class="comment-item-c">
                  <div class="comment-item-c-l">
                    <a href="#">
                      <img src="https://aloss.hotforest.cn/web/news-like.png" alt="">
                    </a>
                    <span>{{reply.likes_count}}</span>
                  </div>

                  <div class="comment-item-c-r">
                    <!--                                    <button v-if="reply.reply_id !== showCommentReply" @click="isShowCommentReply(reply.reply_id)">回复</button>-->
                    <!--                                    <button class="shouqi" v-if="reply.reply_id === showCommentReply" @click="isHideCommentReply(reply.reply_id)">收起</button>-->
                    <span>{{reply.create_time | dateForHour}}</span>
                  </div>

                </div>
                <div class="comment-item-i-b" v-if="reply.reply_id === showCommentReply">
                  <input type="text" v-model="replyReplyContent">
                  <button @click="replyReplyNews(2,newsReply.reply_id)">发表</button>
                </div>
              </div>
            </li>
          </ul>


          <div class="comment-list-dd">
            <div class="comment-list-dd-l">
              <a href="#">
                <img src="https://aloss.hotforest.cn/web/news-like.png" alt="">
              </a>
              <span>{{newsReply.likes_count}}</span>
              <button v-if="index !== showComment" @click="isShowComment(index)">回复</button>
              <button class="shouqi" v-if="index === showComment" @click="isHideComment(index)">收起</button>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div class="comment-item-i-b" v-if="index === showComment">
            <input type="text" v-model="replyReplyContent">
            <button @click="replyReplyNews(2,newsReply.reply_id)">发表</button>
          </div>

        </div>

      </div>

      <div class="comment-more">
        <span @click="showMoreComment(offsetComment)">查看更多</span>
      </div>

    </div>

    <!--            news-detail end-->
    <div class="news-detail-r">
      <div class="news-detail-rec">
        <div class="hot-news-list-t">
          <div class="hot-news-list-t-icon"></div>
          <span>你可能感兴趣的</span>
          <img style="width: 20px;height: 20px;margin-right: 5px;" src="https://aloss.hotforest.cn/web/xuanzhuan.png"
               alt="">
          <span style="font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(118,188,255,1);
line-height:30px;">换一换</span>

        </div>
        <div class="hot-news-list-d">
          <ul>
            <li>
              <div class="news-detail-rec-l">
                <img src="https://aloss.hotforest.cn/web/default-header.png" alt="">
              </div>
              <div class="news-detail-rec-r">
                <span>全民体育官方</span>
                <button>关注</button>
                <div class="news-detail-rec-j">
                  全民体育主编
                </div>
                <p>
                  资深体育评论员，专业媒体供稿人
                </p>
              </div>

            </li>
            <li>
              <div class="news-detail-rec-l">
                <img src="https://aloss.hotforest.cn/web/default-header.png" alt="">
              </div>
              <div class="news-detail-rec-r">
                <span>全民体育官方</span>
                <button>关注</button>
                <div class="news-detail-rec-j">
                  全民体育主编
                </div>
                <p>
                  资深体育评论员，专业媒体供稿人
                </p>
              </div>

            </li>
            <li>
              <div class="news-detail-rec-l">
                <img src="https://aloss.hotforest.cn/web/default-header.png" alt="">
              </div>
              <div class="news-detail-rec-r">
                <span>全民体育官方</span>
                <button>关注</button>
                <div class="news-detail-rec-j">
                  全民体育主编
                </div>
                <p>
                  资深体育评论员，专业媒体供稿人
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
                <nuxt-link :to="{name:'sportNews-detail-shorturl',params:{shorturl:hotNews.shorturl}}">
                  {{hotNews.title}}
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--        hot-news end -->

    </div>
    <!--        昵称弹出框-->
    <div>
      <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">

        <el-form>
          <el-form-item label="头像" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              :action=uploadBaseUrl
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>

            </el-upload>
            <div class="pic-span">
              <span>图片尺寸50x50px 不能超过500kb</span>
            </div>

          </el-form-item>
          <el-form-item>
            <el-input v-model="nickname" autocomplete="off" placeholder="昵称不能超过16个字符"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <!--          <el-button @click="dialogFormVisible = false">取 消</el-button>-->
          <el-button type="primary" @click="updateUserInfo">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!--        昵称弹出框结束-->

    <!--  手机      登陆弹出框-->
    <div v-show="dialogFormVisibleLogin === true" class="login-modal-container">
      <div class="login-modal">
        <div class="login-modal-t-img" @click="closeDialog">
          <img src="https://aloss.hotforest.cn/web/login-icon.png" alt="">
        </div>
        <div v-show="dialogMobileLogin === true">
          <div class="login-modal-t">
            <span>手机登录</span>
          </div>
          <div class="login-modal-t-p">
            <input type="text" placeholder="手机号码" v-model="mobile">
            <button v-if="this.mobile !== '' " @click="sendMobileLoginSms">验证</button>
            <button v-if="this.mobile===''" class="login-modal-t-p-b-disable">验证</button>
          </div>
          <div class="login-modal-t-c">
            <input type="text" placeholder="请输入验证码" v-model="code">
          </div>
          <div class="login-modal-t-b">
            <button @click="mobileLogin">登录</button>
          </div>
          <div class="login-modal-t-s">
            <span>用其他方式登录</span>
          </div>
          <div class="login-modal-t-wx">
            <div>
              <img @click="wxDialog" style="cursor:pointer;" src="https://aloss.hotforest.cn/web/wx.png" alt="">
            </div>
            <a href="#" @click="wxDialog">使用微信登录</a>
          </div>

          <div class="login-modal-t-xx">
            <span>使用即为同意</span>
            <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
          </div>
        </div>

        <div v-show="wxIsLoginShow === true">
          <div class="login-modal-t">
            <span>使用其他方式登录</span>
          </div>
          <div class="wx-login-modal-p">
            <a href="#" @click="mobileDialog">
              使用手机号登录
            </a>
          </div>
          <div class="wx-login-modal-img" id="login_container_news">
          </div>
          <div class="login-modal-t-xx">
            <span>使用即为同意</span>
            <span @click="turn_agreement">全民体育用户协议/隐私权政策</span>
          </div>

        </div>


      </div>


    </div>
    <!--登陆弹出框结束-->


  </div>
</template>

<script>

  import { getFormatTime } from '../../../utils/time'
  import base from '../../../api/base'
  import qs from 'qs'

  export default {
    name: 'shorturl',
    layout: 'newsLayout',
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
        prevShorturl: '',
        prevTitle: '',
        nextShorturl: '',
        nextTitle: '',

        league: '',
        league_value: '',
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

      // console.log(this.$route.params)
      this.prevShorturl = sessionStorage.getItem('prevShorturl')
      this.prevTitle = sessionStorage.getItem('prevTitle')
      this.nextShorturl = sessionStorage.getItem('nextShorturl')
      this.nextTitle = sessionStorage.getItem('nextTitle')
      console.log(this.prevShorturl)

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

      let hotNewsList = await context.$axios.get(`${base.sq}/v2/GetArticles`, {
        params: {
          articleType: 3,
          // league:league_value,
          limit: 4,
          offset: 0,
          author_filter: ['6', '7', '8', '9']
        }
      })

      const type = 'news'
      const paraentId = newsDetail.data.Data.article_id
      const sort = 'newest'
      let replyList = await context.$axios.get(`${base.sq}/v2/` + type + `/` + paraentId + `/` + sort + `/replys`, {
        params: {
          offset: 0,
          limit: 14
        }
      })
      const newsReplyList = replyList.data.Data.list

      newsReplyList.forEach(item => {
        // console.log(item)
        const type = 'news'
        const paraentId = item.reply_id
        const sort = 'toplike'

        context.$axios.get(`${base.sq}/v2/` + type + `/` + paraentId + `/` + sort + `/replys`, {
          params: {
            offset: 0
          }
        }).then(
          res => {
            item.replyReply = res.data.Data.list
          }
        )

      })

      return {
        league: league,
        league_value: league_value,
        newsDetail: newsDetail.data.Data,
        newsPublishFormatTime: getFormatTime(newsDetail.data.Data.timestamp),
        hotNewsList: hotNewsList.data.Data.articles,
        newsReplyList: newsReplyList,
        article_id: newsDetail.data.Data.article_id
      }
    },

    methods: {
      getReplyList (article_id, offset) {
        let type = 'news'
        let sort = 'newest'
        this.$axios.get(`${base.sq}/v2/` + type + `/` + article_id + `/` + sort + `/replys`, {
          params: {
            offset: offset,
            limit: 14
          }
        }).then(
          res => {
            // console.log(res)
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

          }
        )

      },
      turn_agreement () {
        this.$router.push({ path: '/agreement' })
      },
      turn_own () {
        window.location.href = 'https://www.171tiyu.com'
      },
      closeDialog () {
        this.dialogTableVisibleLogin = false
        this.dialogFormVisibleLogin = false
        this.dialogMobileLogin = false
        this.wxIsLoginShow = false
      },
      dialogLogin () {
        // console.log(1)
        this.dialogFormVisibleLogin = true
        this.dialogMobileLogin = true
      },
      wxDialog () {
        this.dialogFormVisibleLogin = true
        this.wxIsLoginShow = true
        this.dialogMobileLogin = false

        var obj = new WxLogin({
          self_redirect: false,
          id: 'login_container_news',
          appid: 'wx31ded528641f2b4c',
          scope: 'snsapi_login',
          redirect_uri: encodeURIComponent(this.redirect_uri),
          state: 'news',
          style: 'black',
          href: '',
        })
      },
      mobileDialog () {
        this.dialogFormVisibleLogin = true
        this.wxIsLoginShow = false
        this.dialogMobileLogin = true
      },
      sendMobileLoginSms () {
        const mobile = this.mobile
        const ns_device_id = this.ns_device_id
        const country_code = this.country_code
        this.$axios.get(`${base.sq}/SendLoginSms`, {
          params: {},
          headers: {
            phone: mobile,
            ns_device_id: ns_device_id,
            country_code: country_code
          }
        }).then(
          res => {
            // console.log(res)
            if (res.data.Status === 1) {
              this.$message(
                {
                  message: '验证码发送成功',
                  type: 'success',
                  customClass: 'zZindex'
                }
              )
            } else {
              this.$message.error(res.data.ErrMsg)
              // alert('验证码发送失败')
            }
          }
        )

      },
      mobileLogin () {
        const ns_device_id = this.ns_device_id
        const mobile = this.mobile
        const country_code = this.country_code
        const code = this.code
        const device_id = this.device_id

        this.$axios.post(`${base.sq}/OTPLogin`, qs.stringify({
          phone: mobile,
          country_code: country_code,
          code: code,
          device_id: device_id,
          platform: 'ios',
        }), {
          headers: {
            ns_device_id: ns_device_id

          }
        }).then(
          res => {

            if (res.data.Status === 1) {
              // console.log(res)
              const account = res.data.Data.account
              const password = res.data.Data.password
              const type = res.data.Data.type
              this.$axios.post(`${base.sq}/Login`, {
                type: type,
                account: account,
                password: password,
                secret: this.secret

              }, {
                headers: {
                  ns_device_id: ns_device_id
                }
              }).then(
                res => {
                  // console.log(res)
                  if (res.data.Status === 1) {
                    const uid = res.data.Data.uid
                    const guid = res.data.Data.guid
                    const token = res.data.Data.token
                    const is_activated = res.data.Data.is_activated
                    const is_add_favorite = res.data.Data.is_add_favorite
                    const iosDownloadUrl = res.data.Data.iosDownloadUrl
                    const is_locked = res.data.Data.is_locked
                    const nickname = res.data.Data.nickname
                    const avatar_url = res.data.Data.avatar_url
                    const phone = res.data.Data.phone

                    localStorage.setItem('nickname', nickname)
                    localStorage.setItem('token', token)
                    localStorage.setItem('avatar_url', avatar_url)
                    localStorage.setItem('phone', phone)
                    localStorage.setItem('uid', uid)

                    this.$router.go(0)

                  } else {
                    // alert('登录失败')
                    this.$message.error(res.data.ErrMsg)
                  }

                }
              )

            } else {
              // alert(res.data.ErrMsg)
              this.$message.error(res.data.ErrMsg)
            }
          }
        )

      },
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.fileObj = file.raw
      },
      beforeAvatarUpload (file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 500 < 1

        // if (!isJPG) {
        //     this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 500kb!')
        }
        return isLt2M
      },
      updateUserInfo () {
        // console.log(this.fileObj)
        if (this.fileObj !== '') {
          var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'ns_device_id': 'website',
            'uid': localStorage.getItem('uid'),
            'token': localStorage.getItem('token')
          }
          var form = new FormData()    // FormData 对象
          form.append('image', this.fileObj)
          this.$axios.$post(`${base.sq}/UploadAvatar`, form, { headers: headers }).then(
            res => {
              // console.log(res)
              if (res.Status === 1) {
                localStorage.removeItem('avatar_url')
                this.$forceUpdate(localStorage.setItem('avatar_url', res.Data.url))
              } else {
                this.$message({
                    message: '头像更新失败',
                    type: 'warning'
                  }
                )
                this.$router.go(0)
              }

            }
          )
        }

        if (this.nickname !== '') {
          this.$axios.put(`${base.sq}/UpdateNickName`, {
            name: this.nickname
          }, {
            headers: {
              ns_device_id: this.ns_device_id,
              uid: localStorage.getItem('uid'),
              token: localStorage.getItem('token')
            }
          }).then(
            res => {
              this.dialogFormVisible = false
              if (res.data.Status === 1) {
                localStorage.removeItem('nickname')
                localStorage.setItem('nickname', this.nickname)

                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.$router.go(0)
              } else {
                this.$message.error(res.data.ErrMsg)
                this.$router.go(0)
              }
            }
          )
        } else {
          this.$message({
            message: '昵称不能为空',
            type: 'warning'
          })
        }
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
            this.dialogFormVisible = true
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
            this.dialogFormVisible = true
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

      showMoreComment (i) {
        // const a = i+1
        const article_id = this.article_id
        this.offsetComment = i + 4
        // console.log(i+1)
        const type = 'news'
        const sort = 'newest'

        this.$axios.get(`${base.sq}/v2/` + type + `/` + article_id + `/` + sort + `/replys`, {
          params: {
            offset: this.offsetComment,
            limit: 4
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

          }
        )
      }
    }

  }
</script>

<style scoped>
  @import "../../../assets/css/comment.css";
  @import "../../../assets/css/userinfo.css";
  @import "../../../assets/css/login.css";

  .el-main {
    padding: 0 27px 0 27px;

  }

  .news-container {
    width: 100%;
  }

  .left-aside {
    float: left;
    width: 10%;
  }

  .left-aside ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .left-aside ul li {
    height: 80px;
    padding-top: 20px;
    border-bottom: 1px solid #979797;;
  }

  .left-aside ul li a {
    display: block;
    height: 60px;
    line-height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #333333;
    text-align: center;
  }

  .left-aside ul li a:hover {
    background: #58A4ED;
    border-radius: 8px;
    color: #FFFFFF;
  }

  .news-detail {
    width: 58%;
    float: left;
    margin-left: 2%;
  }

  .news-detail h3 {
    color: #333333;
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 40px;
  }

  .news-detail-t {
    height: 60px;
    padding-top: 14px;
  }

  .news-detail-t-l {
    float: left;
    width: 10%;
    height: 60px;
    padding-top: 10px;
  }

  .news-detail-t-l img {
    width: 40px;
    height: 40px;
  }

  .news-detail-t-r {
    float: left;
    width: 89%;
    text-align: left;
    height: 60px;
  }

  .news-detail-t-r-t span {
    color: #333333;
    line-height: 30px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;

  }

  .news-detail-t-r-t button {
    background: #76BCFF;
    border-radius: 2px;
    border: 1px solid transparent;
    outline: none;
    color: #ffffff;
    margin-left: 27px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 17px;
  }

  .news-detail-t-r-d {
    height: 30px;
  }

  .news-detail-t-r-d span {
    display: block;
    float: right;
    color: #666666;
    line-height: 30px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .news-detail-t-r-d-l {
    width: 50%;
    float: left;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
    line-height: 30px;
  }

  .news-detail-c p {
    color: #333333;
    text-align: left;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
  }

  .news-detail-c img {
    width: 100%;
  }

  .news-detail-r {
    width: 24%;
    float: left;
    margin-left: 3%;

  }

  .hot-news-list {
    border: 1px solid #D0D0D0;;
    margin-top: 30px;
    padding: 12px 14px 12px 14px;

  }

  .hot-news-list-t {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: left;
    vertical-align: middle;

  }

  .hot-news-list-t-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    float: left;
    margin-right: 14px;
  }

  .hot-news-list-t span {

    color: #000000;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 25px;
  }

  .hot-news-list-t img {
    width: 30px;
    height: 30px;
    margin-left: 50px;
  }


  .hot-news-list-d {
    /*margin-top: 17px;*/

  }

  .hot-news-list-d ul {
    margin: 0;
    padding: 0;
  }

  .hot-news-list-d ul li {
    height: 90px;
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
    width: auto;
    height: auto;
    max-height: 100%;
  }

  .hot-news-list-d-r {
    width: 60%;
    height: 99px;
    float: right;
    text-align: left;

  }

  .hot-news-list-d-r a {
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    padding: 0 0 0 10px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .news-detail-rec {
    /*height: 520px;*/
    border: 1px solid #D0D0D0;;
    padding: 12px 14px 12px 14px;
    margin-top: 20px;
  }

  .news-detail-rec-l {
    float: left;
    width: 20%;

  }

  .news-detail-rec-r {
    width: 69%;
    float: left;
    text-align: left;
    padding-left: 10px;
  }

  .news-detail-rec-r span {

    color: #333333;
    line-height: 30px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);

  }

  .news-detail-rec-r button {
    background: #76BCFF;
    border-radius: 2px;

    border: 1px solid transparent;
    outline: none;
    color: #ffffff;
    margin-left: 27px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 17px;
  }

  .news-detail-rec-r p {

    color: #838383;

    margin: 0;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
    line-height: 20px;
  }

  .news-detail-rec-j {

    color: #838383;
    line-height: 30px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
  }

  .news-detail-tag {
    margin-top: 25px;
    text-align: left;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
  }

  .news-detail-bread-crumbs{
    text-align: left;
    margin-top: 25px;
  }
  .news-detail-bread-crumbs a{
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:30px;
  }

</style>
