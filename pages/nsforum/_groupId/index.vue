<template>
  <el-main>
    <el-row>
     <LeftAside></LeftAside>

      <el-col :span="14"
              class="forum-list"
      >
        <el-col :span="24" v-for="(forum,i) in forumList" :key="i" class="forum-list-item">
          <el-col v-if="forum.group==='NBA'" :span="1" class="forum-list-item-icon"><img src="@/assets/image/nba.png" alt="nba"></el-col>
          <el-col v-if="forum.group==='足球'" :span="1" class="forum-list-item-icon"><img src="@/assets/image/football.png" alt="nba"></el-col>
          <el-col v-if="forum.group==='全部'" :span="1" class="forum-list-item-icon"><img src="@/assets/image/bbs.png" alt="nba"></el-col>
          <el-col v-if="forum.group==='篮球'" :span="1" class="forum-list-item-icon"><img src="@/assets/image/basketball.png" alt="nba"></el-col>
          <el-col :span="23" class="forum-list-item-league">{{forum.group}}</el-col>

          <el-col :span="24" class="forum-list-item-title">
            <nuxt-link
              :to="{name: 'nsforum-groupId-articleId', params: { groupId:groupId,articleId:forum.article_id } }">
              {{forum.title}}
            </nuxt-link>
          </el-col>
          <el-col :span="24" class="forum-list-content">
            <p v-for="(c,i) in forum.content" :key="i" v-if="c.type ===1" class="news-list-content-item">
              {{c.content}}
            </p>
          </el-col>
          <el-col :span="24" class="forum-list-item-time">{{forum.create_time | dateFormat}}</el-col>
        </el-col>

      </el-col>

      <el-col :span="5" >
        <!-- 热门专题       -->
        <el-col :span="24" class="hot-topics">
          <el-col :span="24" class="hot-topics-title">
            <el-col :span="24">热门专题</el-col>
            <el-col :span="3" class="hot-topics-xuanzhuan">
              <img @click="randomTopics()" src="@/assets/image/xuanzhuan-icon.png" alt="icon">
            </el-col>
          </el-col>

          <el-col :span="24" class="hot-topics-item" v-for="(topic,i) in topicsList" :key="i">
            <el-col :span="24" class="hot-topics-item-img">
              <!--              <el-image-->
              <!--                style="width: 100%; height: 124px"-->
              <!--                :src="topic.cover_pic"-->
              <!--                fit="cover"-->
              <!--                :preview-src-list="[topic.cover_pic]" lazy>-->
              <!--              </el-image>-->
              <el-image
                @click="turnColumn(topic.id)"
                style="width: 100%; height: 124px"
                :src="topic.cover_pic"
                fit="cover"
                lazy>
              </el-image>

            </el-col>
            <el-col :span="24" class="hot-topics-item-title">
              <nuxt-link :to="{name:'nscolumn-columnId',params:{columnId:topic.id}}"> {{topic.name}}</nuxt-link>
            </el-col>
            <el-col :span="24" class="hot-topics-item-topics">专题文章 {{topic.article_amount}}</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="join-qq-wechat">
          <el-col :span="24" class="join-qq">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq-icon.png" alt="qq"></el-col>
            <el-col :span="20" class="join-qq-text">
              <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=72f3014553b1953de71861de3876f9d2470314c80db8841846605de452008500">
                加入篮球QQ群：568468754
              </a>
            </el-col>
          </el-col>

          <el-col :span="24" class="join-qq">
            <el-col :span="4" class="join-qq-img"><img src="@/assets/image/qq-icon.png" alt="qq"></el-col>
            <el-col :span="20" class="join-qq-text">
              <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=4645b8b96c0f3a75b896250bd58c50b02eec5d4b20d9a81462165e68354ba9ba">
                加入足球QQ群：826695023
              </a>
            </el-col>
          </el-col>

        </el-col>

      </el-col>

    </el-row>
  </el-main>
</template>

<script>
  import LeftAside from '../../../components/LeftAside'
  import base from '../../../api/base'

  export default {
    name: 'index',
    layout: 'nsforumLayout',
    components:{
      LeftAside
    },
    data () {
      return {
        forumList: [], //帖子列表
        topicsList: [], //专栏列表
        allTopicsList:[], // 所有的专栏
        topicsCount: 0, //专栏数量
        forumOffset: 10,
        loading: false,
        groupId:'',

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
    async asyncData (context) {

      let ns_device_id = 'website';
      let limit = 10;
      let offset = 0;
      let group_id = context.params.groupId;

      let forum_params = {
        sort_type:'newest',
        group_id:group_id
      }

      let [forumListRes, topicsRes] = await Promise.all([
        context.$axios.$get(`${base.sq}/v3/forum/articles/${limit}/${offset}`, { params: forum_params ,
          headers:{ ns_device_id:ns_device_id }}),
        context.$axios.$get(`${base.sq}/v2/all/columns`, {
          params: {}
        })
      ]).catch(err => {
        error({
          statusCode: 400,
          message: err
        })
      })

      let forumList = []

      // console.log(forumListRes)
      if (forumListRes.Status === 1) {
        forumList = forumListRes.Data.list
      }

      let topicsList = []
      let topicsLength = 0
      if (topicsRes.Status === 1) {
        topicsList = topicsRes.Data.list
        topicsLength = topicsRes.Data.list.length
      }

      let allTopicsList = topicsList;
      topicsList = topicsList.slice(0, 4)


      return {
        forumList: forumList,
        topicsList: topicsList,
        groupId:context.params.groupId,
        allTopicsList:allTopicsList,
        topicsCount: topicsLength,
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
          this.getMoreForum(this.forumOffset);
        }

      },
      turnColumn(id){
        this.$router.push({name:'nscolumn-columnId',params:{columnId:id}});
      },
      randomTopics () {
        let that = this
        let count = that.topicsCount - 4

        let start = parseInt(Math.random() * count, 10)
        let end = start + 4

        this.$forceUpdate(this.topicsList =  that.allTopicsList.slice(start, end));
        // console.log(this.topicsList)
      },
      getMoreForum (i) {
        let ns_device_id = 'website';
        let limit = 10;
        let offset = this.forumOffset;
        let group_id = this.groupId;

        let forum_params = {
          sort_type:'newest',
          group_id:group_id
        }
        //下面这个很重要 记住哟
        this.$axios.$get(`${base.sq}/v3/forum/articles/${limit}/${offset}`, { params: forum_params ,
          headers:{ ns_device_id:ns_device_id }}).then(
            res=>{
              if (res.Status === 1){
                // this.forumList = res.Data.list;
                this.forumList = this.forumList.concat(res.Data.list)
                this.forumOffset = i+10;
                this.loading = false;
              } else {
                this.$message.error(res.ErrMsg)
              }

            }
        )

      }

    },
    watch: {
      $route (to, from) {
        this.groupId = to.params.groupId;
      }
    },
    computed: {},
    mounted () {
      this.groupId = this.$route.params.groupId;
      window.addEventListener('scroll', this.handleScroll, true)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll,true)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll,true)
    }

  }


</script>

<style scoped>
  @import "assets/css/topics.css";
  .el-main {

    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 1440px;

  }


  .forum-list {
    padding-left: 25px;
    overflow: auto;
    /*height: 900px;*/
  }

  .forum-list::-webkit-scrollbar {
    /*display: none;*/
  }

  .forum-list-item {
    /*height: 490px;*/
    margin-top: 30px;
    padding: 14px;
    background-color: #FFFFFF;
    border-radius: 21px 8px 8px 8px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }

  .forum-list-item:first-child {
    margin-top: 0px !important;
  }

  .forum-list-item-icon {
    text-align: left;
    height: 25px;
    display: flex;
    align-items: center;
  }

  .forum-list-item-icon img {
    max-height: 100%;
    max-width: 100%;
    align-items: center;
  }

  .forum-list-item-league {
    text-align: left;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }

  .forum-list-item-title {
    margin-top: 10px;
    text-align: left;

  }

  .forum-list-item-title a {
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .forum-list-content {
    text-align: left;
    height: 30px;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;

  }

  .forum-list-content p {
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
  }

  .forum-list-item-time {
    text-align: left;
    font-size: 10px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);

  }



</style>
