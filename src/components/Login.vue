<template>
    <div class="login_container">
      <div class="login_box">
        <div class="avatar_box">
            后台管理系统
        </div>
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="80px" class="login_form">
          <el-form-item label="用户名" prop="username">
            <el-input  v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input  type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item class="btn_box">
            <el-button class="btn" type="primary" @click="login">提交</el-button>
            <el-button class="btn" type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        //登录表单信息
        loginForm:{
          username : "root",
          password : "123"
        },
        //规则
        loginFormRules:{
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur' },
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      //重置表单方法
      resetLoginForm(){
        this.$refs.loginFormRef.resetFields();
      },
      //登录方法
      login(){
        //登录校验
        this.$refs.loginFormRef.validate(async valid =>{
          if (valid){
            //调用登录接口
            const {data:res} = await this.$http.post("/user/login",this.loginForm)
            //判断返回结果
            if(res.message=="success"){
              window.sessionStorage.setItem("token",res.data)
              //登录成功 跳转到首页
              this.$router.push("/index")
             return this.$message.success("登录成功")
            }else {
              return this.$message.error("用户名密码错误")
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .login_container{
      height: 100%;
      background-color: cadetblue;
  }

  .login_box{
    padding-right: 20px;
    background-color: aliceblue;
    width: 450px;
    height: 300px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px black;
    transform: translate(-50%,-50%);
  }

  .avatar_box{
    height: 80px;
    font-size: 35px;
    text-align: center;
    padding-top: 20px;
  }

  .btn_box{
    position: absolute;
    transform: translate(80%);
  }

</style>
