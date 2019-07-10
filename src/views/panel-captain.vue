<template>
<a-layout class="layout">
    <a-layout-header class='layout-header'>
        <panel-top :info='userInfo' @modify='modify' @logout='logout'></panel-top>
    </a-layout-header>
    <a-layout-content class="layout-content">
        <a-layout class="content-layout">
            <a-layout-sider class="layout-sider">
                <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />志愿组织</span>
                        <a-menu-item key="1"><router-link :to="{name:'captain_tissue'}" tag="a">组织结构</router-link></a-menu-item>
                        <a-menu-item key="2"><router-link :to="{name:'captain_decision',params:{title:'决策层'}}" tag="a">决策层</router-link></a-menu-item>
                        <a-menu-item key="3"><router-link :to="{name:'captain_manager',params:{title:'管理层'}}" tag="a">管理层</router-link></a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout-content>
    <a-modal title="信息提示" @ok="handleOk1" :visible="visible1" @cancel="handleCancel">
        <p>确认要退出登陆吗</p>
    </a-modal>
</a-layout>
</template>

<script>
import panelTop from '../components/panel-top.vue'
export default {
    data() {
        return {
            userInfo: {
                nickName: '海宁',
                AvatarUrl: require('../assets/icons/circle4.png'),
                position: '决策层',
                organization: '西电青年志愿者总队'
            },
            visible1:false
        }
    },
    methods:{
        modify(){//密码修改

        },
        logout(){//退出登录
            this.visible1=true;
        },
        handleOk1(){      
      this.$router.replace({path:'/login'})
        },
        handleCancel(){
            this.visible1=false;
        }
    },
    components: {
        panelTop
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .layout-header {
        background-color: $text_theme_color;
        color: white;
    }
    .layout-content{
        .content-layout{
            height: 100%;
            .layout-sider{
                height: 100%;
            }
        }
    }
}
</style>
