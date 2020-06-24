<template>
  <el-main>
    <el-row class="kol-bg-1">
      <el-col :span="24" class="kol-1">全民体育合作大咖</el-col>
      <el-col :span="24" class="kol-2">
        <el-col :span="6" :offset="6" class="kol-2-1">
          <a href="javascript:;" :class="showBasketball ? 'active' : ''"  @click="turnBF(1)">篮球大咖</a>
        </el-col>
        <el-col :span="6"  class="kol-2-2">
          <a href="javascript:;" :class="showFootball ? 'active' : ''" @click="turnBF(2)">足球大咖</a>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="kol-bg" style="padding-top: 80px;">

      <el-col :span="24" v-if="showBasketball">
        <el-col :span="24" class="kol-3" >
          <el-col :span="10" class="kol-3-1">
            <img style="margin-top: -10px;" src="@/assets/image/czh.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col class="kol-3-2-1" :span="24">陈正昊（前中国男篮队员）</el-col>
            <el-col class="kol-3-2-2" :span="24">陈正昊，曾任中国男篮国青队队长，18岁成为上海男篮的核心球员之一，19岁便入选钱澄海教练的中国男篮国家队。退役后曾在ESPN担任篮球解说超过十年，现担任多家电视和新媒体的篮球解说嘉宾。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">张天昊（NCAA专家）</el-col>
            <el-col :span="24" class="kol-4-1-2">肯塔基大学管理学学士和金融学硕士，曾任肯塔基大学篮球中文推广负责人。本科四年时间曾走遍所有NBA球馆，曾任《灌篮》杂志和《体坛周报》驻美NBA记者，采访过詹姆斯、字母哥、伦纳德、库里等球星。2020疫情期间视频采访多位旅美中国高中生（张镇麟、曾凡博、吴勇豪、程祎铭、李弘权等）</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/zth.png" alt="zth"></el-col>
        </el-col>

        <el-col :span="24" class="kol-3">
          <el-col :span="10" class="kol-3-1">
            <img src="@/assets/image/lingguang.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col :span="24" class="kol-3-2-1">凌光（前中国女篮队员）</el-col>
            <el-col :span="24" class="kol-3-2-2">前上海女篮和中国女篮队员，球员时代几乎参加过所有世界大赛，是一位技术全面的前锋选手，退役后从事女篮教练工作。从1997年开始担任ESPN篮球节目的评论员，现担任多家电视和新媒体的篮球解说嘉宾。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">汪轩（五星体育广播篮球主持人）</el-col>
            <el-col :span="24" class="kol-4-1-2">五星体育广播主持人，资深篮球、足球、评论员，转播报道多届奥运会、世界杯、欧锦赛、全运会。是五星体育广播《强强三人组》的主持人，也在多家新媒体平台担任足、篮球解说嘉宾。</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/wangxuan.png" alt="zth"></el-col>
        </el-col>

        <el-col :span="24" class="kol-3">
          <el-col :span="10" class="kol-3-1">
            <img src="@/assets/image/zhangdawei.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col :span="24" class="kol-3-2-1">张大维（前中国女篮主教练）</el-col>
            <el-col :span="24" class="kol-3-2-2">前中国男篮队长，率领中国队获得了两届亚锦赛冠军，退役后担任中国女篮主教练，率队夺得了亚锦赛、亚运会冠军以及世锦赛第五名，现担任多家电视和新媒体的篮球解说嘉宾。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">张小天（NBA官方旗舰店女主播）</el-col>
            <el-col :span="24" class="kol-4-1-2">曾在NBA官方旗舰店担任淘宝直播工作，对NBA球星和周边产品有深入了解。同时，在天天NBA平台担任NBA赛事直播，是国内为数不多的专业NBA赛事女主持，能够为球迷带来独特的女性视角解读。</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/zxiaotian.png" alt="zth"></el-col>
        </el-col>
      </el-col>

      <el-col :span="24"  v-if="showFootball">
        <el-col :span="24" class="kol-3" >
          <el-col :span="10" class="kol-3-1">
            <img style="margin-top: -10px;" src="@/assets/image/fanzhiyi.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col class="kol-3-2-1" :span="24">范志毅（亚洲足球先生）</el-col>
            <el-col class="kol-3-2-2" :span="24">前中国职业男子足球运动员、教练员，曾担任中国国家男子足球队队长，现任上海市足球协会副主席。1995、96年连续2次当选中国足球先生，2001年荣膺亚洲足球先生。共代表中国国家队出场90次，进14球。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">刘越（五星体育、PPTV首席解说嘉宾）</el-col>
            <el-col :span="24" class="kol-4-1-2">前中国职业足球运动员，曾效力于山东鲁能泰山。退役后刘越曾赴大学修读本科学位，同时也受到上海电视台的邀请，担任电视转播评论员。刘越目前在五星体育以及PPTV等平台担任解说嘉宾，现主说英超和欧冠等赛事。</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/liuyue.png" alt="zth"></el-col>
        </el-col>

        <el-col :span="24" class="kol-3">
          <el-col :span="10" class="kol-3-1">
            <img src="@/assets/image/baiguohua.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col :span="24" class="kol-3-2-1">白国华（《足球报》著名记者）</el-col>
            <el-col :span="24" class="kol-3-2-2">白国华，2002年复旦大学新闻系毕业，就职于《足球报》至今，他是《足球报》最后一个以应届生身份进入报社的记者。同时也是广州恒大多年跟队，几十年的采访经历，拥有诸多一手资料，文笔独到优美。其微博名称为：戴上紧箍咒的白国华，粉丝数达到125万。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">姬宇阳（国内知名足球记者、评论员）</el-col>
            <el-col :span="24" class="kol-4-1-2">国内著名足球记者、评论员。曾经供职于《新民晚报》体育部、并长期担任《足球报》驻上海记者，担任《东方体育日报》首席记者兼评论员。著有《目击十强赛》一书，并和李承鹏、刘晓新共同完成《甲A十年》一书。</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/jiyuyang.png" alt="zth"></el-col>
        </el-col>

        <el-col :span="24" class="kol-3">
          <el-col :span="10" class="kol-3-1">
            <img src="@/assets/image/xiongbingjie.png" alt="czh">
          </el-col>
          <el-col :span="14" class="kol-3-2">
            <el-col :span="24" class="kol-3-2-1">熊冰杰（爱奇艺体育首席解说）</el-col>
            <el-col :span="24" class="kol-3-2-2">毕业于上海体育学院，资深体育解说，爱奇艺体育首席主持人。熊冰杰的解说幽默风趣、反应敏捷、充满活力，高颜值更是让他获得了解说界杨洋的称号。现主说西甲、英超等比赛。</el-col>
          </el-col>
        </el-col>

        <el-col :span="24" class="kol-4">
          <el-col :span="14" class="kol-4-1">
            <el-col :span="24" class="kol-4-1-1">唐晖（西乙胡米利亚足球俱乐部董事）</el-col>
            <el-col :span="24" class="kol-4-1-2">资深足球人，08年毕业于上海外国语大学，随后进入劲爆体育。自2011年起以西甲欢乐多名义与李翔搭档解说西甲。15/16赛季通过赞助拉科鲁尼亚进军西班牙足球界，并在16年完成对西乙B俱乐部胡米利亚足球俱乐部的收购，现任球队董事。</el-col>
          </el-col>
          <el-col :span="10" class="kol-4-2"><img src="@/assets/image/tanghui.png" alt="zth"></el-col>
        </el-col>
      </el-col>

    </el-row>
  </el-main>

</template>

<script>
  export default {
    name: 'kol',
    layout: 'default',
    data () {
      return {
        showBasketball:false,
        showFootball:true,

      }
    },
    mounted () {
    },
    methods: {
      turnBF:function (type) {
          if (type === 1){
            this.showBasketball = true;
            this.showFootball = false;
          }
          if (type === 2){
            this.showBasketball = false;
            this.showFootball = true;
          }
      }
    }
  }
</script>

<style scoped>
  .el-main {
    padding: 0;
    margin: 0 auto;
    width: 1440px;

  }
  .kol-bg-1 {
    background: url("https://aloss.hotforest.cn/web/kol-bg-1.png") no-repeat center;
    background-size: 100% 100%;

  }
  .kol-bg {
    background: url("https://aloss.hotforest.cn/web/kol-bg.png") no-repeat center;
    background-size: 100% 100%;
  }

  .kol-1 {
    margin-top: 50px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);

  }

  .kol-2 {
    margin-top: 46px;
  }

  .kol-2 a {
    width: 193px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }


  .kol-2-1 {

  }
  .kol-2-1 a {
    display: block;
    float: right;
  }

  .kol-2-2 a {
    display: block;

  }

  .kol-3{
    height: 300px;
    margin-top: 20px;
  }
  .kol-3-1{

  }
  .kol-3-1 img{
    width: 300px;
    height: 300px;
    margin-top: 25px;

  }
  .kol-3-2{

  }
  .kol-3-2-1{
    font-size:24px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 50px;
    text-align: left;
  }
  .kol-3-2-2{
    text-align: left;
    margin-top: 10px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    line-height: 30px;
    color:rgba(51,51,51,1);
  }

  .kol-4{
    height: 300px;
    margin-top: 20px;
  }
  .kol-4-1{
    padding-left: 60px;
  }

  .kol-4-1-1{
    margin-top: 60px;
    font-size:24px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 50px;
    text-align: left;
  }
  .kol-4-1-2{

    text-align: left;
    margin-top: 10px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height: 30px;
  }
  .kol-4-2{
    /*height: 300px;*/
  }
  .kol-4-2 img{
    margin-top: -70px;
    width: 300px;
    height: 300px;
  }

  .active{
    border-radius:32px;
    color: #ffffff !important;
    background-color: #AB2E2E ;
  }
</style>
