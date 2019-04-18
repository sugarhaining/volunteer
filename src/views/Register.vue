<template>
<a-layout class="layout">
    <a-layout-header class='layout-header'>
        <nav class='nav'>
            <router-link to='/login' tag="span">登陆</router-link>
            <span class='select-nav'>注册</span>
        </nav>
    </a-layout-header>
    <a-layout class="layout-nest">
        <a-layout-sider class="layout-sider">
            <ul class='sider-list'>
                <li v-for="(item, index) in siderLists" :key="index" :class='index===0?"li-title":"li-item"'>{{index===0?'':`${index}.`}}{{item}}</li>
            </ul>
        </a-layout-sider>
        <a-layout-content class='layout-content'>
            <a-row class='row'>
                <router-view></router-view>
            </a-row>
        </a-layout-content>
    </a-layout>
</a-layout>
</template>

<script>
export default {
    data() {
        return {
            siderLists: [
                '温馨提示',
                '注册之前请确保你所在的组织已经注册了志愿圈平台',
                '注册之前请确保你已从志愿圈客户端获取你的微信ID',
                '注册之前请确保你已从你所在的志愿组织的负责人处获得了邀请码'
            ],
            form2: this.$form.createForm(this), //填写用户注册信息的表单实例
        }
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .layout-header {
        background-color: white;

        .nav {
            @include flex_row;
            justify-content: flex-end;
            color: $text_theme_color;

            span {
                width: 100px;
                text-align: center;
                font-size: 18px;
            }

            .select-nav {
                position: relative;

                &::after {
                    content: '';
                    width: 100%;
                    height: 2px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-color: $text_theme_color;
                }
            }
        }
    }

    .layout-nest {
        .layout-sider {
            color: white;
            max-width: 25% !important;
            width: 25% !important;
            min-width: 25% !important;
            background-color: $sider_theme_color;

            .sider-list {
                width: 90%;
                margin-left: 5%;
                @include flex_column;
                list-style: none;
                font-size: 16px;
                text-align: left;
                padding-top: 100px;
                box-sizing: border-box;

                li {
                    width: 92%;
                    margin-bottom: 10px;
                }

                .li-title {
                    align-self: flex-start;
                }

                .li-item {
                    align-self: flex-end;
                }
            }
        }
    }
}
</style>
