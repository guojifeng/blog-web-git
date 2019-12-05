<template>
  <div class="all">
    <div class="top">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
        <el-menu-item index="1" style="margin-left: 200px">首页</el-menu-item>
        <el-menu-item index="2" style="margin-left: 20px">文章</el-menu-item>
        <el-menu-item index="3" style="margin-left: 20px">留言板</el-menu-item>
        <el-menu-item index="4" style="margin-left: 680px">登录</el-menu-item>
        <el-menu-item index="5" style="margin-left: 20px">注册</el-menu-item>
      </el-menu>
      <div class="line">
        辉哥天下第一
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="main_left_left1">
          <h3 style="text-align: center">标题</h3>
          <p style="text-align: left">内容</p>
        </div>
        <div class="main_left_left2">
          <h3 style="text-align: center">标题2</h3>
          <p style="text-align: left">内容</p>
        </div>
      </div>
      <div class="main_right">
        <div  v-for="article in articleList" class="main_right_right">
          <h3 style="margin-left: 5%">{{article.title}}</h3>
          <p style="margin-left: 5%">{{article.content}}</p>
          <div>
            <ul >
              <li>{{ article.createtime | FormatDate('yyyy-MM-dd HH:mm:ss') }}</li>
              <li>{{article.pageview}}</li>
              <li>{{article.commentNum}}</li>
              <li>{{article.author}}</li>
            </ul>
          </div>
        </div>

        <div class="page_class">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>

      </div>
    </div>
    <div class="foot">
      <p style="text-align: center;line-height: 60px">底部内容</p>
    </div>
<!--    <el-button type="info" @click="logout">注销</el-button>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        tags:[{
          title:'标题1',
          content:'内容1',
          date: '2016-05-02',
          name: '郭继峰1'
        }, {
          title:'标题2',
          content:'内容2',
          date: '2016-05-04',
          name: '郭继峰2'
        }, {
          title:'标题3',
          content:'内容3',
          date: '2016-05-01',
          name: '郭继峰3'
        }],
        articleList:[]
        // activeIndex2: '1'
      };
    },
    created(){
      this.getArticleList()
    },
    methods:{
      //注销
      logout(){
        //清空token
        window.sessionStorage.clear()
        //跳转页面
        this.$router.push("/login")
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     async getArticleList(){
        const {data:res} = await this.$http.post("/article/getAllArticle")
        console.log(res)
       if (res.message=='success'){
          this.articleList=res.model
       }
      }
    }
  }
</script>

<style lang="less" scoped>

.all{
  /*background: aqua;*/
  height: 100%;
  width: 100%;
}
  .top{
    /*background: aquamarine;*/
    height: 20%;
    margin-top: 20px;
  }
  .line{
    line-height: 40px;
    text-align: center;
    font-size: 40px;
    letter-spacing:.5em;
    margin-top: 15px;
  }
  .main{
    /*background: antiquewhite;*/
    height: 70%;
    margin-left: 1%;
    margin-right: 1%;
    border:2px solid black;
  }
  .main_left{
    /*background: cadetblue;*/
    float: left;
    width: 20%;
    height: 100%;
    /*border:2px solid black;*/
  }
  .main_left_left1{
    /*background: chartreuse;*/
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    height: 40%;
    border:2px solid black;
  }
  .main_left_left2{
    /*background: blue;*/
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    height: 40%;
    border:2px solid black;
  }
  .main_right{
    /*background: blueviolet;*/
    margin-left: 3%;
    width: 76%;
    height: 100%;
    float: left;
    /*border:2px solid black;*/
  }
  .main_right_right{
    /*background: cornflowerblue;*/
    margin-top: 2%;
    height: 25%;
    border:2px solid black;
  }


ul {
  list-style: none;
  line-height: 40px;
  margin-left: 1%;
}

li {
  display: block;
  float: left;
  margin-left: 3%;
}

.page_class{
    margin-bottom: 1%;
    margin-left: 30%;
    margin-top: 1%;

  }
  .foot{
    /*background: brown;*/
    height: 10%;
  }
</style>
