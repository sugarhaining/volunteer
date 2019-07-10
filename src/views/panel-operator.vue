<template>
<a-layout class="layout">
    <a-layout-header class='layout-header'>
        <a-row>
            <a-col :span="3" :offset="1">
                <a-row type="flex" align="middle" justify="space-between">
                    <a-col>
                        <img src="../assets/icons/moments.png" class="logo-image">
                    </a-col>
                    <a-col>志愿圈运营团队</a-col>
                </a-row>
            </a-col>
            <a-col :span="2" :offset="17">
                <a-row>
                  <a-col :span="24"><a-icon type='poweroff' class='poweroff-icon'></a-icon>退出</a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-layout-header>
    <a-layout-content class="layout-content">
        <a-layout class="content-layout">
            <a-layout-sider class="layout-sider">
                <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />运营团队</span>
                        <a-menu-item key="1">
                            <router-link :to="{name:'operator_account'}" tag="a">账号管理</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link :to="{name:'operator_application'}" tag="a">申请列表</router-link>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <router-link :to="{name:'operator_rudder'}" tag="a">志愿分舵</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout-content>
</a-layout>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .layout-header {
        background-color: $text_theme_color;
        color: white;
        font-size: 16px;
        .logo-image{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .poweroff-icon{
            font-size: 18px;
            margin-right: 3px;
        }
    }

    .layout-content {
        .content-layout {
            height: 100%;

            .layout-sider {
                height: 100%;
            }
        }
    }
}
</style>
