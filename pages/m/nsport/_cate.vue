<template>
  <div>

    <!--新闻列表-->
    <van-col span="24">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="(item,k) in newsList"  :key="k">

            <van-col span="8" class="news-list-l">
              <img :src="item.image" :alt="item.title">
            </van-col>

            <van-col span="15" offset="1" class="news-list-r">
              <nuxt-link :to="{name:'m-nsport-detail-shorturl',params:{shorturl:item.shorturl}}">{{item.title}}</nuxt-link>

              <van-col span="14">
                <span>全民体育小勇士</span>
              </van-col>
              <van-col span="6" offset="4">
                <span>{{item.timestamp | dateForHour}}</span>
              </van-col>


            </van-col>

          </van-cell>

        </van-list>
      </van-pull-refresh>
    </van-col>
  </div>

</template>

<script>
  import { Lazyload } from 'vant'
  import base from '../../../api/base'

  export default {
    name: 'mCate',
    layout: 'mLayout',
    data () {
      return {
        newsCategory: 'all',
        newsList: [],
        loading: false,
        finished: false,
        refreshing: false,
        offset:10,
        cate:''
      }
    },
    async asyncData (context) {

      // 获取全部新闻
      let cate = context.params.cate
      let articleType = 2
      let offset = 0
      let limit = 10
      let req_url = ''

      if (cate === 'all'){
         req_url = `${base.sq}/v2/GetArticles?articleType=` + articleType +
          `&offset=` + offset + `&limit=` + limit
      }

      if (cate === 'basketball' || cate === 'football'){
         req_url = `${base.sq}/v2/GetArticles?articleType=` + articleType +
          `&offset=` + offset + `&limit=` + limit+`&category=`+cate
      }

      let newsList = await context.$axios.$get(req_url)
      // console.log(newsList.Data.articles)
      // console.log(newsList)

      return {
        newsList: newsList.Data.articles
      }

    },
    mounted () {
      // console.log(this.$route.query.cate)
      this.cate = this.$route.params.cate
      // console.log(this.$route.params.cate)
    },
    methods: {

      onLoad () {
        setTimeout(() => {
          if (this.refreshing) {
            this.newsList = []
            this.refreshing = false
          }

          // 获取全部新闻
          let cate = this.cate
          let articleType = 2
          let offset = this.offset
          let limit = 10
          let req_url = ''

          if (cate === 'bbs'){

          }
          if (cate === 'basketball' || cate === 'football'){
            req_url = `${base.sq}/v2/GetArticles?articleType=` + articleType + `&offset=` + offset +
              `&limit=` + limit+`&cate=`+cate
          }

          if (cate === 'all'){
            req_url = `${base.sq}/v2/GetArticles?articleType=` + articleType + `&offset=` + offset +
              `&limit=` + limit
          }

          this.$axios.$get(req_url).then(
            res => {
              this.newsList = this.newsList.concat(res.Data.articles)
              this.totalCount = res.Data.totalCount
              this.offset = offset + 10
            }
          )

          this.loading = false

          if (this.newsList.length >= this.totalCount) {
            this.finished = true
          }
        }, 1000)
      },
      onRefresh () {
        // 清空列表数据
        this.finished = false

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true
        this.onLoad()
      },

    }

  }
</script>

<style scoped>


  .news-list-l {
    /*width: 2.7rem;*/

  }

  .news-list-l img {
    /*width: 2.7rem;*/
    /*height: 1.5rem;*/
    max-width: 100%;
    max-height: 100%;
  }

  .news-list-r {
    /*padding-left: 0.2rem;*/
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


</style>
