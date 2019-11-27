<template>
  <div>
    <el-button type="info" @click="logout">注销</el-button>
  </div>
</template>

<script>
  export default {
    methods:{
      //注销
      logout(){
        //清空token
        window.sessionStorage.clear()
        //跳转页面
        this.$router.push("/login")
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
