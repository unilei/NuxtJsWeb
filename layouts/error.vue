<template>
<el-main>
  <el-row class="error-bg">
    <el-col  :span="24">
      <el-col :span="24" class="error-404">{{error.statusCode}}</el-col>
      <el-col :span="24" class="error-404-text">{{error.message}}</el-col>
    </el-col>
  </el-row>
</el-main>

</template>

<script>
  export default {
    name: 'error',
    props: ['error'],

  }
</script>

<style scoped>
  .el-main {
    padding-left: 40px;
    padding-right: 40px;

  }
.error-bg{
  height: 400px;
  background-color:#F7F7F7;
  background-size: 100% 100%;
}
.error-404{
  margin-top: 100px;
  font-size: 34px;
  color: rgba(0,0,0,1);
  font-weight: bolder;
}
  .error-404-text{
    font-size: 28px;
    margin-top: 50px;
  }
</style>
