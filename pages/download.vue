<template>

  <el-main>
    <el-row class="download-bg">
      <el-col :span="12">
        <el-col :span="24" class="download-title">全民体育 懂球迷的聚集地</el-col>
        <el-col :span="24" class="download-qrcode">
          <img id="downloadButton" src="https://aloss.hotforest.cn/web/m/download-qrcode.png" alt="qrcode">
        </el-col>
        <el-col :span="14" class="download-c-text">
          点击二维码即可下载
        </el-col>
        <el-col :span="10" class="download-click-icon">
          <img src="https://aloss.hotforest.cn/web/click-icon.png" alt="icon">
        </el-col>
      </el-col>
      <el-col :span="12" class="download-phone">
        <img src="https://aloss.hotforest.cn/web/download-mobile.png" alt="phone">

      </el-col>
    </el-row>
  </el-main>


</template>

<script>
  export default {
    name: 'download',
    layout:'downloadLayout',
    data(){
      return {

      }
    },
    head () {
      return {
        title: '立即下载_全民体育',
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
    mounted () {
      //openinstall app唤醒
      var data = OpenInstall.parseUrlParams()
      console.log(data)

      new OpenInstall({
        /*appKey必选参数，openinstall平台为每个应用分配的ID*/
        appKey: 'y346df',
        /*可选参数，自定义android平台的apk下载文件名；个别andriod浏览器下载时，中文文件名显示乱码，请慎用中文文件名！*/
        //apkFileName : 'com.fm.openinstalldemo-v2.2.0.apk',
        /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
        //preferWakeup:true,
        /*自定义遮罩的html*/
        //mask:function(){
        //  return "<div id='openinstall_shadow' style='position:fixed;left:0;top:0;background:rgba(0,255,0,0.5);filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;'></div>"
        //},
        /*openinstall初始化完成的回调函数，可选*/
        onready: function () {
          var m = this
          var button = document.getElementById('downloadButton')
          button.style.visibility = 'visible'

          /*在app已安装的情况尝试拉起app*/
          m.wakeupOrInstall()
          /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
          button.onclick = function () {
            m.wakeupOrInstall()
            return false
          }
        }
      }, data)


    },
  }
</script>

<style scoped>
  .el-main {
    padding: 0 20px;
    width: 1440px;
  }

.download-bg{

  background: url("https://aloss.hotforest.cn/web/download-bg.png") no-repeat center;
  background-size: 100% 160%;

}
.download-title{
  text-align: center;
  margin-top: 100px;
  font-size:38px;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:67px;
}

  .download-qrcode{
    margin-top: 35px;
    text-align: center;
  }
  .download-qrcode img{
    width: 200px;
    height: 200px;
    cursor: pointer;

  }
  .download-click-icon{
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
  }
  .download-click-icon img{
    width: 49px;
    height:49px;
    /*height: 40px;*/
  }

  .download-c-text{
    font-size:16px;
    font-weight:500;
    color:rgba(255,255,255,1);
    /*line-height:25px;*/
    text-align: right;
    line-height: 69px;
  }

  .download-phone{
    text-align: center;
    margin-top: 50px;
    padding-bottom: 50px;
  }
  .download-phone img{
    width: 320px;
  }
  /deep/ .el-footer{
    margin-top: 0 !important;
  }

</style>
