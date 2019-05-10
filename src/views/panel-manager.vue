<template>
<a-layout class="layout">
    <a-layout-header class='layout-header'>
        <panel-top :info='userInfo'></panel-top>
    </a-layout-header>
    <a-layout-content class="layout-content">
        <a-layout class="content-layout">
            <a-layout-sider class="layout-sider">
                <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user" />志愿组织</span>
                        <a-menu-item key="1">
                            <router-link :to="{name:'manager_tissue',params:{title:'管理层'}}" tag="a">组织结构</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link :to="{name:'manager_staff'}" tag="a">我的部员</router-link>
                        </a-menu-item>
                        <a-sub-menu key="sub2">
                            <span slot="title"><a-icon type="bar-chart" />一面情况</span>
                            <a-menu-item key="3">
                                <router-link :to="{name:'manager_waitfirst_view'}" tag="a">待面试人员</router-link>
                            </a-menu-item>
                            <a-menu-item key="4">
                                <router-link :to="{name:'manager_hasfirst_view'}" tag="a">已面试人员</router-link>
                            </a-menu-item>
                            <a-menu-item key="5">
                                <router-link :to="{name:'manager_commonfirst_view'}" tag="a">跨部人员</router-link>
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <span slot="title"><a-icon type="bar-chart" />二面情况</span>
                            <a-menu-item key="6">
                                <router-link :to="{name:'manager_final_view'}" tag="a">待面试人员</router-link>
                            </a-menu-item>
                            <a-menu-item key="7">
                                <router-link :to="{name:'manager_hasfinal_view'}" tag="a">已面试人员</router-link>
                            </a-menu-item>
                        </a-sub-menu>
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
import panelTop from '../components/panel-top.vue'
export default {
    data() {
        return {
            userInfo: {
                nickName: '海宁',
                AvatarUrl: require('../assets/icons/circle4.png'),
                position: '决策层',
                organization: '西电青年志愿者总队'
            }
        }
    },
    methods: {

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
