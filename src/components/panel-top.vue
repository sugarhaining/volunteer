<template>
<nav class='main-wrap'>
    <div class='logo'>
        <img src='../assets/icons/moments.png'>
        <span>{{info.organization}}</span>
    </div>
    <div class='menu'>
        <div class='menu-list'>
            <img :src='info.AvatarUrl'/>
            <p class='text'>{{info.nickName}}</p>
            <p class='text'>{{info.position}}</p>
        </div>
        <div class='menu-list'>
            <a-icon type="bars" class='icon'></a-icon>
            <span>修改账号密码</span>
        </div>
        <div class='menu-list' @click='logOut'>
            <a-icon type="poweroff" class='icon'></a-icon>
            <span>退出</span>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {

        }
    },
  methods:{
    logOut(){
      //身份判断     运营团队   其他人两个身份
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrap {
    width: 100%;
    height: 100%;
    @include flex_row;
    justify-content: space-between;

    .logo,
    .menu,
    .menu-list {
        height: 100%;
        @include flex_row;
    }

    .logo {
        >img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        >span {
            margin-left: 30px;
            font-size: 16px;
        }
    }

    .menu-list {
        margin-left: 15px;

        &:first-child {

            p {
                margin-left: 5px;
            }
        }

        >img {
            width: 45px;
            height: 45px;
        }

        >.icon {
            font-size: 25px;
            margin-right: 5px;
        }
    }
}
</style>
