<template>
  <div>
    <div class="bbs-list">
      <ul>
        <li v-for="(bbs,i) in bbsList" :key="i">
          <div class="bbs-list-l">
            <img v-if="i === 0" src="../../assets/image/zhiding.png" alt="">
            <nuxt-link :to="'/bbs/detail?article_id='+bbs.article_id" target="_blank" class="a-left" v-if="i=== 0 ">
              {{bbs.title}}
            </nuxt-link>
            <nuxt-link :to="'/bbs/detail?article_id='+bbs.article_id" target="_blank" v-if="i !== 0 ">{{bbs.title}}
            </nuxt-link>
            <div v-for="(content,index) in bbs.content" :key="index">
              <p v-if="content.type === 1">
                {{content.content}}
              </p>
              <p v-if="content.type !== 1">

              </p>
            </div>

            <div class="bbs-list-l-d">
              <span>{{bbs.create_time | dateForHour}}</span>
              <ul>
                <li>
                  {{bbs.comments_count}}
                </li>
                <li>
                  <img src="../../assets/image/news-comment.png" alt="">
                </li>
                <li>
                  {{bbs.likes_count}}
                </li>
                <li>
                  <img src="../../assets/image/news-like.png" alt="">
                </li>
              </ul>
            </div>
          </div>
          <!--                    <div class="bbs-list-r">-->
          <!--                        <a>-->
          <!--                            {{bbs.author.nickName}}-->
          <!--                        </a>-->
          <!--                    </div>-->


        </li>
      </ul>

      <div class="bbs-list-more">
        <span @click="showMoreBbs(offset)">查看更多</span>
      </div>

    </div>

    <div class="news-detail-rec">
      <div class="news-detail-rec-container">
        <div class="hot-news-list-t">
          <div class="hot-news-list-t-icon"></div>
          <span>你可能感兴趣的</span>
          <a href="#">
            <img style="width: 20px;height: 20px;margin-right: 12px;" src="../../assets/image/xuanzhuan.png" alt="">
            换一换
          </a>

        </div>
        <div class="hot-news-list-d">
          <ul>
            <li>
              <div class="news-detail-rec-l">
                <img src="../../assets/image/star.png" alt="">
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
                <img src="../../assets/image/star.png" alt="">
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
                <img src="../../assets/image/star.png" alt="">
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

    <!--        热门帖子-->
    <div class="bbs-r">
      <div class="bbs-r-container">
        <div class="bbs-r-c-t">
          <div class="bbs-r-c-t-icon"></div>
          <span>热门帖子</span>
        </div>
        <ul>
          <li v-for="(hotBbs,i) in hotBbsList" :key="i">
            <nuxt-link :to="'/bbs/detail?article_id='+hotBbs.article_id" target="_blank">{{hotBbs.title}}
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
</template>

<script>

  import base from '../../api/base'

  export default {
    name: 'List',
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
        title:'社区论坛-全名体育',
        meta:[
          {hid:'keywords',name:'keywords',content:'社区论坛,体育社区,体育论坛,篮球社区,足球社区'},
          {hid:'description',name:'description',content:'全名体育社区论坛拥有专业的互动参与平台，以篮球、足球话题为主，拥有热情而不失理性的良好讨论氛围,观看优质比赛，加入兴趣圈子，参与社区讨论！'}
        ]
      }
    },
    watchQuery:['sportType'],
    async asyncData(context){
      const sportType = context.query.sportType
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

      return {
        bbsList:bbsList.data.Data.list,
        hotBbsList:hotBbsList.data.Data.list
      }


    },
    mounted () {
      this.sportType = this.$route.query.sportType
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
        this.sportType = to.query.sportType
      }
    },

  }
</script>

<style scoped>
  .bbs-list {
    float: left;
    width: 60%;
    padding: 0 2% 0 2%;

  }

  .bbs-list ul {
    margin: 0;
    padding: 0;

  }

  .bbs-list ul li {
    height: 140px;
    border-bottom: 1px solid #D5D5D5;;
    padding-top: 30px;
  }

  .bbs-list-l {
    width: 100%;
    float: left;
    text-align: left;
    position: relative;

  }

  .bbs-list-l img {
    width: 56px;
    height: 26px;
    position: absolute;
    top: 2px;


  }

  .bbs-list-l a {
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
    padding-top: 5px;
  }

  .a-left {
    margin-left: 74px;
  }

  .bbs-list-l p {

    color: #666666;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 25px;
    height: 50px;
  }

  .bbs-list-l-d {

  }

  .bbs-list-l-d span {
    display: block;
    float: left;
    color: #BBBBBB;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 30px;
  }

  .bbs-list-l-d ul {
    margin: 0;
    padding: 0;
  }

  .bbs-list-l-d ul li {
    float: right;
    width: 20px;
    height: 20px;
    /*border: 1px solid red;*/
    padding: 0;
    margin-right: 15px;
    border-bottom: 1px solid transparent;

  }

  .bbs-list-l-d ul li img {
    width: 20px;
    height: 20px;
    position: static;
  }


  .bbs-list-r {
    width: 18%;
    float: left;
    text-align: center;

  }

  .bbs-list-r a {
    color: #333333;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 30px;

  }

  .bbs-r {
    width: 22%;
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

  .bbs-r-c-t {
    display: flex;
    align-items: flex-start;
    justify-content: left;
    vertical-align: middle;

  }

  .bbs-r-c-t-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    /*position: absolute;*/

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
    line-height: 25px;

  }

  .bbs-r-container ul li div span {
    width: 40%;
    display: block;
    float: left;

    color: #BBBBBB;


    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;

    line-height: 30px;
  }

  .bbs-r-container ul li div a {
    width: 60%;
    float: left;

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
    text-align: right;

  }

  .bbs-list-more {
    text-align: center;
    margin-top: 30px;
  }

  .bbs-list-more span {
    color: #666666;
    cursor: pointer;

    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 20px;

  }

  .news-detail-rec {
    width: 22%;
    float: left;
    padding-top: 30px;
    /*height: 720px;*/
    /*margin-top: 20px;*/
  }

  .news-detail-rec-container {
    width: 100%;
    margin: auto 0;
    border: 1px solid #D0D0D0;
    position: relative;
    text-align: left;
    padding: 10px 14px 10px 14px;
  }

  .hot-news-list-d ul li {
    height: 80px;
    padding-top: 20px;
    border-bottom: 1px solid #DDDDDD;
  }

  .hot-news-list-d ul li:last-child {
    border-bottom: 1px solid transparent !important;
  }

  .news-detail-rec-l {
    float: left;
    width: 20%;

  }

  .news-detail-rec-l img {
    width: 60px;
    height: 60px;
  }

  .news-detail-rec-r {
    width: 69%;
    float: left;
    text-align: left;
    padding-left: 10px;
  }

  .news-detail-rec-r span {

    color: #333333;


    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;

    line-height: 30px;
  }

  .news-detail-rec-r button {
    background: #76BCFF;
    border-radius: 2px;
    border-radius: 2px;
    border: 1px solid transparent;
    outline: none;
    color: #ffffff;
    margin-left: 27px;
    width: 70px;
    height: 30px;
  }

  .news-detail-rec-r p {

    color: #838383;

    margin: 0;

    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 20px;
  }

  .news-detail-rec-j {

    color: #838383;

    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(131, 131, 131, 1);
    line-height: 30px;
  }

  .hot-news-list-t {
    text-align: left;
    position: relative;
    height: 40px;


  }

  .hot-news-list-t-icon {
    width: 8px;
    height: 34px;
    background-color: #EBB031;
    /*float: left;margin-right: 14px;*/
    position: absolute;
    left: 0;

  }

  .hot-news-list-t span {

    color: #000000;

    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 25px;
    position: absolute;
    left: 25px;
    top: 5px;

  }

  .hot-news-list-t a {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(118, 188, 255, 1);
    line-height: 30px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

  }

  .hot-news-list-t img {
    width: 30px;
    height: 30px;
  }

  .hot-news-list-d ul li {
    height: 110px;
  }


</style>
