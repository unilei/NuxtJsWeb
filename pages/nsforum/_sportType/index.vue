<template>
  <div>
    <el-col :span="13" :offset="1" class="forum-list">
      <el-col :span="24" v-for="(bbs,i) in bbsList" :key="i" class="forum-list-item">
        <el-col :span="24" class="forum-list-item-title">
          <el-col :span="2"><img v-if="i === 0" src="https://aloss.hotforest.cn/web/zhiding.png" alt="zd"></el-col>
          <el-col :span="22">
            <nuxt-link :to="{name:'nsforum-sportType-articleId',params:{'sportType':sportType,'articleId':bbs.article_id}}"  target="_blank">
            {{bbs.title}}
            </nuxt-link>
          </el-col>
        </el-col>

        <el-col :span="24" class="forum-list-item-content" >
          <p v-for="(content,index) in bbs.content" :key="index"  v-if="content.type === 1">{{content.content}}</p>
        </el-col>

        <el-col :span="6" class="forum-list-item-time">
          {{bbs.create_time | dateFormat}}
        </el-col>
        <el-col :span="2"  :offset="10" class="forum-list-item-like-img">
          <img src="https://aloss.hotforest.cn/web/news-like.png" alt="like">
        </el-col>
        <el-col :span="2"  class="forum-list-item-like">
          {{bbs.likes_count}}
        </el-col>
        <el-col :span="2" class="forum-list-item-comment-img">
          <img src="https://aloss.hotforest.cn/web/news-comment.png" alt="comment">
        </el-col>
        <el-col :span="2" class="forum-list-item-comment">
          {{bbs.comments_count}}
        </el-col>

      </el-col>

      <el-col :span="24" class="forum-list-more">
        <span @click="showMoreBbs(offset)">查看更多</span>
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
            <img style="width: 20px;height: 20px;margin-right: 5px;" src="https://aloss.hotforest.cn/web/xuanzhuan.png"
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
          <span>热门帖子</span>
        </el-col>
        <el-col :span="24" v-for="(hotBbs,i) in hotBbsList" :key="i" class="hot-news-list-item">
          <el-col :span="24" class="hot-forum-list-title">
            <nuxt-link  :to="{name:'nsforum-sportType-articleId',params:{'sportType':sportType,'articleId':hotBbs.article_id}}"  target="_blank">{{hotBbs.title}}
            </nuxt-link>
          </el-col>
          <el-col :span="24" style="margin-top: 14px;">
            <el-col :span="10" class="hot-forum-list-time">
              {{hotBbs.create_time | dateFormat}}
            </el-col>
            <el-col :span="10" :offset="4" class="hot-forum-list-nickname">
              {{hotBbs.author.nickName}}
            </el-col>
          </el-col>
        </el-col>
      </el-col>
    </el-col>
  </div>
</template>

<script>

  import base from '../../../api/base'

  export default {
    name: 'index',
    layout: 'bbsLayout',
    data () {
      return {
        sportType: 'all',
        offset: 0,
        bbsList: [],
        hotBbsList: []
      }
    },
    head(){
      return {
        title:'社区论坛-全民体育',
        meta:[
          {hid:'keywords',name:'keywords',content:'社区论坛,体育社区,体育论坛,篮球社区,足球社区'},
          {hid:'description',name:'description',content:'全民体育社区论坛拥有专业的互动参与平台，以篮球、足球话题为主，拥有热情而不失理性的良好讨论氛围,观看优质比赛，加入兴趣圈子，参与社区讨论！'}
        ]
      }
    },
    watchQuery:['sportType'],
    async asyncData(context){
      const sportType = context.params.sportType
      const type = 'newest'
      const params = {
        limit: 6,
        offset: 0
      }
      let bbsList = await context.$axios.get(`${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles`,{params:params})

      const type_hot = 'toplike'
      const params_hot = {
        limit: 4,
        offset: 0
      }
      let hotBbsList = await context.$axios.get(`${base.sq}/v1/forum/`+sportType+`/0/`+type_hot+`/articles`,{params:params_hot})

      // console.log(bbsList.data.Data.list[0].content)
      // console.log(bbsList.data.Data.list)
      return {
        bbsList:bbsList.data.Data.list,
        hotBbsList:hotBbsList.data.Data.list
      }


    },
    mounted () {
      this.sportType = this.$route.params.sportType
    },
    methods: {

      showMoreBbs (i) {
        this.offset = i + 6
        const sportType = this.sportType
        const type = 'newest'
        this.$axios.get(`${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles`,{params:{
            limit: 6,
            offset: this.offset
          }}).then(
          res => {
            // console.log(res)
            if (res.data.Status === 1) {
              this.bbsList = this.bbsList.concat(res.data.Data.list)

            } else {
              this.$message.error(res.data.ErrMsg)
            }
          }
        )
      }
    },
    watch: {
      $route (to, from) {
        this.sportType = to.params.sportType
      }
    },

  }
</script>

<style scoped>
  .forum-list{
    margin-top: 30px;
  }
  .forum-list-item{
    padding: 10px 0px;
    border-bottom: 1px solid #D5D5D5;
    text-align: left;
  }
  .forum-list-item-title{
    text-align: left;
    height: 28px;
  }
  .forum-list-item-title img{
    height: 28px;
  }
  .forum-list-item-title a{
    font-size:18px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 28px;
  }
  .forum-list-item-content{
    height: 90px;
    margin-top: 14px;
  }

  .forum-list-item-content p{
    font-size:12px;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:30px;
  }
  .forum-list-item-time{
    font-size:12px;
    font-weight:400;
    color:rgba(187,187,187,1);
    line-height:30px;
  }
  .forum-list-item-like{
    font-size:12px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:17px;
  }
  .forum-list-item-comment{
    font-size:12px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:17px;
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

  .hot-forum-list-title {
    text-align: left;
    padding-left: 10px;
  }

  .hot-forum-list-title a {
    font-size:18px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:25px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .hot-forum-list-time{
    font-size:12px;
    font-weight:400;
    color:rgba(187,187,187,1);
    line-height:30px;
  }

  .hot-forum-list-nickname{
    font-size:12px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:30px;
    text-align: right;
  }

  .forum-list-more{
    cursor: pointer;
    font-size: 16px;
    color: #666666;
    margin-top: 30px;
  }

</style>
