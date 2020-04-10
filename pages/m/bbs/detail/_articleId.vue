<template>
  <div>
    <!--  新闻详情页-->
    <van-col span="24" class="m-news-detail">
      <h3>{{bbsDetail.title}}</h3>
    </van-col>

    <van-col span="24" class="m-news-detail">
      <van-col span="2" class=" m-news-detail-avatar">
        <img :src="bbsDetail.author.avatar_url" alt="">
      </van-col>
      <van-col span="6" class=" m-news-detail-name">
        <span>{{bbsDetail.author.nickName}}</span>
      </van-col>
      <van-col span="16" class=" m-news-detail-time">
        <span>{{bbsDetail.create_time | dateForHour}}</span>
      </van-col>
    </van-col>


    <van-col span="24" class="m-news-detail m-news-detail-content"
             v-for="(item,k) in bbsDetail.content"
             v-if="k < bbsLength"
             :key="k">

      <div v-if="item.type == 1">
        <p>
          {{item.content}}
        </p>
      </div>
      <div v-if="item.type ==2">
        <img :src="item.content" alt="">
      </div>
    </van-col>

    <van-col span="12" offset="6" v-show="showMoreBbsModal === false">
      <div class="m-show-more-news" @click="showMoreNews">
        展开全文
      </div>
    </van-col>
    <van-col span="12" offset="6" v-show="showMoreBbsModal === true">
      <div class="m-show-more-news" @click="closeMoreNews">
        收起全文
      </div>
    </van-col>

    <van-col span="24">
      <van-divider :style="{ color: '#DEDEDE', borderColor: '#DEDEDE', padding: '0 16px' }">
      </van-divider>
    </van-col>

    <!--热门新闻列表-->
    <van-col span="24">
      <van-list>
        <van-col span="4" class="hot-news-icon">

        </van-col>

        <van-col span="19" offset="1" class="hot-news-name">
          热门帖子
        </van-col>

        <van-cell v-for="(item,k) in hotBbsList" :key="k">

          <van-col span="24" class="news-list-r">
            <nuxt-link :to="{name:'m-bbs-detail-articleId',params:{articleId:item.article_id}}">{{item.title}}
            </nuxt-link>

            <van-col span="14">
              <span>{{item.author.nickName}}</span>
            </van-col>
            <van-col span="8" offset="2">
              <span>{{item.create_time | dateForHour}}</span>
            </van-col>

          </van-col>
        </van-cell>
      </van-list>
    </van-col>

    <!--留言-->

    <div class="msg-position">
      <van-col span="10">
        <van-field
          style="padding: 0;background-color: #FFF6F6F6;"
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="我来说几句"
          left-icon="edit"
        />
      </van-col>
      <van-col span="2" class="msg">
        <img src="http://aloss.hotforest.cn/web/m/comment-like.png" alt="">
      </van-col>
      <van-col span="3" class="msg">
        1111+
      </van-col>
      <van-col span="2" class="msg">
        <img src="http://aloss.hotforest.cn/web/m/comment-msg.png" alt="">
      </van-col>
      <van-col span="3" class="msg">
        1111+
      </van-col>
      <van-col span="4" class="msg">
        <img src="http://aloss.hotforest.cn/web/m/share-icon.png" alt="">
      </van-col>
    </div>

  </div>

</template>

<script>
  import base from '../../../../api/base'

  export default {
    name: 'articleId',
    layout: 'mNewsLayout',
    data () {
      return {
        bbsDetail: '',
        showMoreBbsModal: false,
        bbsContentLength: 0,
        bbsLength: 3,
        hotBbsList: [],
        message: ''

      }
    },
    async asyncData (context) {

      let article_id = context.params.articleId
      let req_url = `${base.sq}/v1/forum/` + article_id
      let bbsDetail = await context.$axios.$get(req_url)

      let sportType=  bbsDetail.Data[0].category
      let type = 'toplike'
      let limit = 5
      let offset = 0
      let hot_bbs_req_url = `${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles?limit=`+limit+`&offset=`+offset
      let hotBbsList = await context.$axios.$get(hot_bbs_req_url)

      console.log(hotBbsList.Data.list)
      console.log(bbsDetail.Data[0])

      return {
        bbsDetail: bbsDetail.Data[0],
        bbsContentLength: bbsDetail.Data[0].content.length,
        hotBbsList:hotBbsList.Data.list,
      }
    },
    methods: {
      //展示全文
      showMoreNews () {
        this.showMoreBbsModal = true
        this.bbsLength = this.bbsContentLength
      },
      //收起全文
      closeMoreNews () {
        this.showMoreBbsModal = false
        this.bbsLength = 3
      }
    },
    mounted () {
      let article_id = this.$route.params.articleId
      let req_url = `${base.sq}/v1/forum/` + article_id
      this.$axios.$get(req_url).then(
        res => {
          console.log(res)
        }
      )

    }
  }
</script>

<style scoped>
  .m-news-detail {
    padding: 0.2rem 0.35rem 0 0.35rem;
  }
  .m-news-detail h3 {
    /*font-size: 0.3rem;*/
    font-size: 0.36rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 0.52rem;
    text-align: left;
  }

  .m-news-detail-avatar img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
  }

  .m-news-detail-name {
    text-align: left;
  }

  .m-news-detail-name span {
    font-size: 0.18rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.25rem;
  }

  .m-news-detail-time {
    text-align: left;
  }

  .m-news-detail-time span {
    font-size: 0.18rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.25rem;
  }

  .m-news-detail-content {
    text-align: left;
  }

  .m-news-detail-content p {
    font-size: 0.24rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.55rem;
  }

  .m-news-detail-content img {
    width: 100%;
  }

  .m-show-more-news {
    cursor: pointer;
    border: 1px solid #7AC9F6;
    height: 0.6rem;
    font-size: 0.2rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(122, 201, 246, 1);
    line-height: 0.6rem;
  }

  .news-list-l img {
    /*width: 2.7rem;*/
    /*height: 1.5rem;*/
    max-width: 100%;
    max-height: 100%;
  }

  .news-list-r a {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 1.4rem;
    font-size: 0.30rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 0.5rem;
    display: block;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .news-list-r span {
    font-size: 0.14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 0.3rem;
  }

  .hot-news-icon {
    width: 0.23rem;
    height: 0.34rem;
    background: rgba(235, 176, 49, 1);
  }

  .hot-news-name {
    text-align: left;
    font-size: 0.3rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 0.42rem;
  }

  .msg {
    font-size: 0.24rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 0.33rem;
    /*padding: 10px 16px;*/
  }

  .msg img {
    width: 0.4rem;
    height: 0.4rem;
  }

  .msg-position {
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    padding:0.1rem 0.35rem 0.07rem 0.35rem;
  }

</style>
