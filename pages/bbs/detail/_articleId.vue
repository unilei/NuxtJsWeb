<template>
  <div>
    <div>
      <!--            news-detail -->
      <div class="news-detail">
        <h3>{{bbsDetail.title}}</h3>
        <div class="news-detail-t">
          <div class="news-detail-t-l" v-if="bbsDetail.author">
            <img :src="bbsDetail.author.avatar_url" alt="">
          </div>
          <div class="news-detail-t-r">
            <div class="news-detail-t-r-t">
              <span v-if="bbsDetail.author">{{bbsDetail.author.nickName}}</span>
              <button>关注</button>
            </div>
            <div class="news-detail-t-r-d">
              <div class="news-detail-t-r-d-l">
                全民体育主编
              </div>
              <span>{{bbsPublishFormatTime}}</span>
            </div>
          </div>
        </div>
        <div class="news-detail-c">
          <div v-for="(content,index) in bbsDetail.content" :key="index">
            <div v-if="content.type == 1">
              <p>{{content.content}}</p>
            </div>
            <div v-if="content.type == 2">
              <img :src="content.content" alt="">
            </div>
          </div>
        </div>

        <!--                留言评论-->
        <div class="publish-comment">
          <p>我有话说</p>
          <div class="publish-comment-d">
            <div class="publish-comment-d-i">
              <img v-if="this.avatar_url === '' || this.avatar_url === null "
                   src="../../../assets/image/default-header.png" alt="">
              <img v-if="this.avatar_url !== '' & this.avatar_url !== null " :src="this.avatar_url" alt="">
            </div>
            <div class="publish-comment-d-tx">
                            <textarea name="" id="" cols="30" rows="10" placeholder="说两句呗"
                                      v-model="replyContent"></textarea>
              <button @click="replyNews(1)">发表<br>评论</button>
              <!--                            <button @click=""></button>-->
            </div>

          </div>
        </div>

        <div class="comment-list">
          <div class="comment-list-t">全部评论</div>
          <div class="comment-list-d" v-for="(newsReply,index) in newsReplyList" :key="index">
            <div class="comment-list-d-t">
              <img v-if="newsReply.author.avatar_url != null & newsReply.author.avatar_url != ''"
                   :src="newsReply.author.avatar_url" alt="">
              <img v-if="newsReply.author.avatar_url == null || newsReply.author.avatar_url == ''
                                || newsReply.author.avatar_url ==  'https://nsports-entity.171tiyu.com/'
                                "
                   src="../../../assets/image/star.png" alt="">
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
                        <img src="../../../assets/image/news-like.png" alt="">
                      </a>
                      <span>{{reply.likes_count}}</span>
                    </div>

                    <div class="comment-item-c-r">
                      <!--                                            <button v-if="reply.reply_id !== showCommentReply" @click="isShowCommentReply(reply.reply_id)">回复</button>-->
                      <!--                                            <button class="shouqi" v-if="reply.reply_id === showCommentReply" @click="isHideCommentReply(reply.reply_id)">收起</button>-->
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
                  <img src="../../../assets/image/news-like.png" alt="">
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
          <div class="news-detail-rec-container">
            <div class="hot-news-list-t">

              <div class="hot-news-list-t-icon"></div>
              <span>你可能感兴趣的</span>
              <a href="#">
                <img style="width: 20px;height: 20px;margin-right: 12px;" src="../../../assets/image/xuanzhuan.png" alt="">
                <span style="font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(118,188,255,1);
line-height:30px;cursor: pointer;">换一换</span>
              </a>

            </div>
            <div class="hot-news-list-d">
              <ul>
                <li>
                  <div class="news-detail-rec-l">
                    <img src="../../../assets/image/star.png" alt="">
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
                    <img src="../../../assets/image/star.png" alt="">
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
                    <img src="../../../assets/image/star.png" alt="">
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
        </div>

        <div class="bbs-r">
          <div class="bbs-r-container">
            <div class="bbs-r-c-t">
              <div class="bbs-r-c-t-icon"></div>
              <span>热门帖子</span>
            </div>
            <ul>
              <li v-for="(hotBbs,i) in hotBbsList" :key="i">
                <nuxt-link :to="{name:'bbs-detail-articleId',params:{'articleId':hotBbs.article_id}}" >{{hotBbs.title}}
                </nuxt-link>

                <div style="padding-top: 20px;">
                  <span>{{hotBbs.create_time | dateForHour}}</span>
                  <a>{{hotBbs.author.nickName}}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <!--        昵称弹出框-->
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
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="nickname" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo">确 定</el-button>
      </div>
    </el-dialog>
    <!--        昵称弹出框结束-->
  </div>
</template>

<script>
  import { getFormatTime } from '../../../utils/time'
  import base from '../../../api/base'

  export default {
    name: 'Detail',
    layout: 'bbsLayout',
    data () {
      return {
        article_id: '',
        bbsDetail: '',
        bbsPublishFormatTime: '',
        hotBbsList: [],
        bbsReplyList: [],
        newsReplyList: [],
        showComment: -1,
        showCommentReply: -1,
        offsetComment: 0,
        replyContent: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        nickname: '',
        ns_device_id: 'website',
        imageUrl: '',
        uploadBaseUrl: base.sq + '/UploadAvatar',
        fileObj: '',
        replyReplyContent: '',
        token: '',
        avatar_url: null
      }
    },
    watch: {
      $route (to, from) {
        // this.getBbsDetail(this.$route.query.article_id)
        // this.getReplyList(this.$route.query.article_id, 0)

      }
    },
    watchParams: ['articleId'],
    async asyncData (context) {

      const article_id = context.params.articleId
      let bbsDetail = await context.$axios.get(`${base.sq}/v1/forum/` + article_id, { params: {} })

      const sportType = 'all'
      const type = 'toplike'
      let hotBbsList = await context.$axios.get(`${base.sq}/v1/forum/` + sportType + `/0/` + type + `/articles`, {
        params: {
          limit: 4,
          offset: 0
        }
      })

      const reply_type = 'forum'
      const paraentId = article_id
      const reply_sort = 'newest'
      const reply_params = {
        offset: 0,
        limit: 4
      }
      let replyList = await context.$axios.get(`${base.sq}/v2/` + reply_type + `/` + paraentId + `/` + reply_sort + `/replys`, { params: reply_params })

      const _replyList = replyList.data.Data.list
      _replyList.forEach(item => {

        const reply_type = 'forum'
        const paraentId = item.reply_id
        const reply_sort = 'toplike'
        const reply_params = { offset: 0 }
        context.$axios.get(`${base.sq}/v2/` + reply_type + `/` + paraentId + `/` + reply_sort + `/replys`, { params: reply_params }).then(
          res => {
            // console.log(res)
            item.replyReply = res.data.Data.list
          })
      })

      return {
        bbsDetail: bbsDetail.data.Data[0],
        bbsPublishFormatTime: getFormatTime(bbsDetail.data.Data[0].create_time),
        hotBbsList: hotBbsList.data.Data.list,
        newsReplyList: _replyList
      }

    },
    mounted () {
      this.token = sessionStorage.getItem('token')

    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.fileObj = file.raw
      },
      beforeAvatarUpload (file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2

        // if (!isJPG) {
        //     this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      updateUserInfo () {
        // console.log(this.fileObj)
        if (this.fileObj !== '') {
          var form = new FormData()    // FormData 对象
          form.append('image', this.fileObj)

          this.$axios.post(`${base.sq}/UploadAvatar`, form, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'ns_device_id': 'website',
              'uid': sessionStorage.getItem('uid'),
              'token': sessionStorage.getItem('token')
            }
          }).then(
            res => {
              // console.log(res)
              if (res.data.Status === 1) {
                sessionStorage.removeItem('avatar_url')
                this.$forceUpdate(sessionStorage.setItem('avatar_url', res.data.Data.url))
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
              uid: sessionStorage.getItem('uid'),
              token: sessionStorage.getItem('token')
            }
          }).then(
            res => {
              this.dialogFormVisible = false
              if (res.data.Status === 1) {
                sessionStorage.removeItem('nickname')
                sessionStorage.setItem('nickname', this.nickname)

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
      isShowCommentReply (i) {

        this.showCommentReply = i
      },
      isHideCommentReply (i) {

        this.showCommentReply = -1
      },
      isShowComment (index) {

        this.showComment = index
      },
      isHideComment (index) {

        this.showComment = -1
      },
      updateNickname () {

        this.$axios.put(`${base.sq}/UpdateNickName`, {
          name: this.nickname
        }, {
          headers: {
            ns_device_id: this.ns_device_id,
            uid: sessionStorage.getItem('uid'),
            token: sessionStorage.getItem('token')
          }
        }).then(
          res => {
            this.dialogFormVisible = false
            if (res.data.Status === 1) {
              sessionStorage.removeItem('nickname')
              sessionStorage.setItem('nickname', this.nickname)

              this.$message({
                message: '昵称修改成功',
                type: 'success'
              })
              this.$router.go(0)
            } else {
              this.$message.error(res.data.ErrMsg)
            }
          }
        )
      },
      replyNews (level) {
        const ns_device_id = 'website'
        const uid = sessionStorage.getItem('uid')
        const token = sessionStorage.getItem('token')
        const nickname = sessionStorage.getItem('nickname')

        if (uid === null || token == null) {
          this.$message({
            message: '请先登录，再留言',
            type: 'success'
          })
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

            const type = 'forum'
            const parentId = this.$route.params.articleId

            this.$axios.post(`${base.sq}/v2/` + type + `/` + parentId + `/reply`, {
              content: [
                {
                  content: this.replyContent,
                  type: 1
                }
              ],
              level: level,
            }, {
              headers: {
                ns_device_id: ns_device_id,
                uid: uid,
                token: token
              }
            }).then(
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
        const uid = sessionStorage.getItem('uid')
        const token = sessionStorage.getItem('token')
        const nickname = sessionStorage.getItem('nickname')

        if (uid === null || token == null) {
          this.$message({
            message: '请先登录，再留言',
            type: 'success'
          })
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

            const type = 'forum'

            this.$axios.post(`${base.sq}/v2/` + type + `/` + reply_id + `/reply`, {
              content: [
                {
                  content: this.replyReplyContent,
                  type: 1
                }
              ],
              level: level,
            }, {
              headers: {
                ns_device_id: ns_device_id,
                uid: uid,
                token: token
              }
            }).then(
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

      showMoreComment (i) {
        // const a = i+1
        const article_id = this.$route.params.articleId
        this.offsetComment = i + 4
        // console.log(i+1)
        const type = 'forum'
        const sort = 'newest'
        this.$axios.get(`${base.sq}/v2/`+type+`/`+article_id+`/`+sort+`/replys`,{params:{
            offset: this.offsetComment,
            limit: 4
          }}).then(
          res => {
            // console.log(res)
            // this.newsReplyList = res.data.Data.list
            const newsReplyList = res.data.Data.list
            newsReplyList.forEach(item => {
              // console.log(item)
              const reply_id = item.reply_id

              const type = 'forum'
              const sort = 'toplike'
              this.$axios.get(`${base.sq}/v2/`+type+`/`+reply_id+`/`+sort+`/replys`,{params:{
                  offset: 0
                }}).then(res => {
                // console.log(res)
                const replyReplyArr = res.data.Data.list
                this.$forceUpdate(item.replyReply = replyReplyArr)
              })
            })
            // console.log(newsReplyList)
            // this.newsReplyList = newsReplyList
            this.newsReplyList = this.newsReplyList.concat(newsReplyList)

          }
        )
      }
    }

  }
</script>

<style scoped>
  @import "../../../assets/css/comment.css";

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9 !important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF !important;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }

  .el-main {
    padding: 0 27px 0 27px;

  }

  .news-container {
    width: 100%;
  }


  .news-detail {
    width: 58%;
    float: left;
    margin-left: 1%;
    padding: 1%;
  }

  .hot-news-list {
    /*width: 420px;*/
    /*width: 27%;*/
    height: 700px;
    /*float: left;*/
    border: 1px solid #D0D0D0;;
    margin-top: 30px;
    padding: 12px 14px 12px 14px;

  }

  .hot-news-list-t {
    position: relative;
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

  .hot-news-list-t a {

    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

  }

  .hot-news-list-t img {
    width: 20px;
    height: 20px;
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
    height: 110px;
    padding: 22px 0 0px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  .hot-news-list-d ul li:last-child {
    border-bottom: transparent !important;
  }

  .hot-news-list-d-l {
    width: 40%;
    height: 84px;
    float: left;
  }

  .hot-news-list-d-l img {
    width: 134px;
    height: 84px;

  }

  .hot-news-list-d-r {
    width: 60%;
    height: 99px;
    float: right;
    text-align: left;

  }

  .hot-news-list-d-r a {
    display: block;
    height: 98px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;

    padding: 0 0 0 10px;
    text-align: left;
  }

  .news-detail-rec {
    /*height: 720px;*/
    margin-top: 20px;
  }

  .news-detail-rec-container {
    width: 100%;
    margin: auto 0;
    border: 1px solid #D0D0D0;
    position: relative;
    text-align: left;
    padding: 10px 14px 10px 14px;
  }

  .news-detail-rec-l {
    float: left;
    width: 20%;

  }

  .news-detail-rec-r {
    width: 69%;
    float: left;
    text-align: left;
    padding-left: 20px;
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
    border-radius: 40px;
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
    /*padding-top: 10px;*/
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
    line-height: 30px;
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
    /*width: 720px;*/
    /*height: 400px;*/
    width: 100%;
  }

  .news-detail-r {
    width: 22%;
    float: left;
    margin-left: 3%;

  }


  /*.nuxt-link-active{*/
  /*    background: #58A4ED;*/
  /*    border-radius: 8px;*/
  /*    color: #FFFFFF;*/
  /*}*/


  .bbs-r {
    /*width: 24%;*/
    float: left;
    padding-top: 30px;
  }

  .bbs-r-container {
    width: 100%;
    margin: auto 0;
    border: 1px solid #D0D0D0;
    position: relative;
    text-align: left;
    padding: 10px 14px 10px 14px;
  }

  .bbs-r-c-t-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    position: absolute;

  }

  .bbs-r-c-t {
    display: flex;
    align-items: center;
    justify-content: left;
    vertical-align: middle;
  }

  .bbs-r-c-t span {

    color: #000000;
    margin-left: 20px;
    margin-top: 10px;

    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;

    line-height: 25px;
  }

  .bbs-r-container ul {
    margin: 0;
  }

  .bbs-r-container ul li {
    height: 110px;
    border-bottom: 1px solid #DDDDDD;
    padding-top: 20px;
  }

  .bbs-r-container ul li:last-child {
    border-bottom: 1px solid transparent !important;
  }

  .bbs-r-container ul li a {

    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;

  }

  .bbs-r-container ul li div span {
    width: 40%;
    display: block;
    float: left;

    color: #BBBBBB;
    line-height: 30px;

    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(187, 187, 187, 1);
    line-height: 30px;
  }

  .bbs-r-container ul li div a {
    width: 60%;
    float: left;
    text-align: right;
    color: #333333;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
  }

</style>
