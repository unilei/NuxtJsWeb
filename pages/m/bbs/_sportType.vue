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
          <van-cell v-for="(item,k) in bbsList" :key="k">

            <van-col span="24" class="bbs-list">
              <div class="bbs-list-rm" v-show="k===0">
                <img src="http://aloss.hotforest.cn/web/m/remen-icon.png" alt="">
              </div>
              <p>
                {{item.title}}
              </p>
              <van-col span="8">
                <span>{{item.author.nickName}}</span>
              </van-col>
              <van-col span="4">
                <span>{{item.create_time | dateForHour}}</span>
              </van-col>
              <van-col span="8" class="bbs-like">
                <img src="http://aloss.hotforest.cn/web/m/like-icon.png" alt="">
                <span>{{item.likes_count}}</span>
              </van-col>
              <van-col span="4" class="bbs-comment">
                <img src="http://aloss.hotforest.cn/web/m/comment-icon.png" alt="">
                <span>{{item.comments_count}}</span>
              </van-col>

            </van-col>

          </van-cell>

        </van-list>
      </van-pull-refresh>
    </van-col>
  </div>

</template>

<script>
  import base from '../../../api/base'


  export default {
    name: 'mSportType',
    layout: 'mLayout',
    data () {
      return {
        sportType: 'all',
        bbsList: [],
        loading: false,
        finished: false,
        refreshing: false,
        offset:10,
      }
    },
    async asyncData (context) {

      let sportType = 'all'
      let type = 'newest'
      let offset = 0
      let limit = 10
      let req_url = `${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles?limit=`+limit+`&offset=`+offset
      let bbsList = await  context.$axios.$get(req_url)

      console.log(bbsList)
      return {
        bbsList:bbsList.Data.list

      }

    },
    mounted () {
      this.sportType = this.$route.params.sportType

    },
    methods: {
      onLoad () {
        setTimeout(() => {
          if (this.refreshing) {
            this.newsList = []
            this.refreshing = false
          }

          // 获取全部帖子
          let sportType = 'all'
          let type = 'newest'
          let offset = this.offset
          let limit = 10
          let req_url = ''

          req_url = `${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles?limit=`+limit+`&offset=`+offset

          this.$axios.$get(req_url).then(
            res => {
              console.log(res)
              this.bbsList = this.bbsList.concat(res.Data.list)
              this.totalCount = res.Data.totalCount
              this.offset = offset + 10
            }
          )

          this.loading = false

          if (this.bbsList.length >= this.totalCount) {
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

  .bbs-list{
    /*height: 2.16rem;*/
  }

  .bbs-list p {
    font-size:0.28rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:0.4rem;
    height:0.8rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;

  }

  .bbs-list span{
    font-size:0.18rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:0.3rem;
  }

  .bbs-list-rm img{
    width: 0.83rem;
    height: 0.38rem;
  }
  .bbs-like{
    text-align: right;
  }
  .bbs-like img{
    width: 0.2rem;
    height: 0.2rem;
  }
  .bbs-comment{
    text-align: right;
  }
  .bbs-comment img{
    width: 0.2rem;
    height: 0.2rem;
  }

</style>
