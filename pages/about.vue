<template>
  <el-main>
    <pre>
        全民体育是一款懂球迷的体育App，满足球迷对体育赛事的需求，就是全民体育对App最大的要求！
        全民体育提供完整的体坛内容，包括即时新闻、最新赛程、深度专栏、准确数据，搭配人性化又时尚的操作接口，让球迷在接收资讯之馀还享有尊绝不凡的使用体验。
        懂球迷不是随便说说！全民体育打造了有温度的人工智能系统，将根据每位球迷的兴趣、爱好、使用习惯推荐独一无二的内容，「宾至如归」是团队唯一的目标。
        【完整资讯】体坛最新消息报导，伤病、交易、访谈、球员表现、花边，所有资讯一手掌握。 
        【深度专栏】全民体育不接受粗制滥造的内容，以最高规格要求带给球迷最专业的赛事解析。 
        【最新赛程】不错过任何一场比赛！文字直播搭配比赛聊天室，所有球迷一起热血享受比赛。 
        【准确数据】力求所有数据的准确性与即时性，并提供数据比较功能，让球迷能更深入解析。 
        【独一无二】提供最个人化的使用体验，让每个球迷都能感受自己是独一无二的！
    </pre>
  </el-main>
</template>

<script>
  export default {
    name: 'about',
    head () {
      return {
        title: '关于全名体育',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '全民体育,全民体育资讯,全民体育新闻,全民体育视频,全民体育篮球,全民体育足球,全民体育赛事,全民体育NationalSports,全民体育直播,全民体育app'
          },
          {
            hid: 'description',
            name: 'description',
            content: '全民体育,一款为体育粉丝量身定做的APP。这里有最全面最专业的体育资讯，让体育迷们在家的氛围中获得完美的赛事体验，提供全方位、多样化的体育资讯。'
          }
        ]
      }
    },
  }
</script>

<style scoped>
  pre{
    font-size:24px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:40px;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

</style>
