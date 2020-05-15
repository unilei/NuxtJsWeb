<template>
  <div>
    <el-row>
      <el-col :span="24" class="profile">
        <img src="@/assets/image/profile-banner.png" alt="profile">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="profile-tags">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="服务协议" name="first">
<!--            <Agreement></Agreement>-->
          </el-tab-pane>
          <el-tab-pane label="隐私政策" name="second">
            <!--            <Privacy></Privacy>-->
          </el-tab-pane>
          <el-tab-pane label="个人信息指引" name="third">个人信息指引</el-tab-pane>
          <el-tab-pane label="投诉侵权" name="fourth">
<!--            <Complaints></Complaints>-->
          </el-tab-pane>
        </el-tabs>
      </el-col>

    </el-row>


  </div>
</template>

<script>
  // import Agreement from '../../components/Agreement'
  // import Privacy from '../../components/Privacy'
  // import Complaints from '../../components/Complaints'

  export default {
    name: 'index',
    components: {
      // Agreement,
      // Privacy,
      // Complaints,
    },
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab)
        // console.log(tab, event)
      }
    }
  }
</script>

<style scoped>
  .profile img {
    height: 340px;
  }

  .profile-tags {
    text-align: center;
  }

  /deep/ .el-tabs__nav {
    float: none !important;
  }

  /deep/ .el-tabs__header {
    height: 70px;
    background: rgba(248, 248, 248, 1);
    border: 1px solid rgba(221, 221, 221, 1);
  }

  /deep/ .el-tabs__nav {
    height: 70px;
    line-height: 70px;
  }

  /deep/ .el-tabs__active-bar {
    left: 534px;
    bottom: 15px;

  }
</style>
