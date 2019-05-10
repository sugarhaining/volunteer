<template>
<a-layout class="layout">
    <a-layout-header class="layout-header">
        <nav class='top-nav'>
            <div class='logo'>
                <img src="../assets/icons/circle4.png" class='avatar'/>
                <span>志愿圈平台</span>
            </div>
            <nav class='menu-nav'>
                <router-link to='/register' tag="span">注册</router-link>
                <router-link to="/about" tag='span'>加入志愿圈</router-link>
                <router-link to='/about' tag='span'>了解更多</router-link>
            </nav>
        </nav>
    </a-layout-header>
    <a-layout-content class='layout-content'>
        <a-row class='row'>
            <a-col :span="6" :offset="9" class='col'>
                <a-form :form="form" @submit="handleSubmit" layout='vertical' class='form'>
                    <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
                        <a-input v-decorator="['userName',{...validateRules('请输入用户名')}]" placeholder="请输入用户名">
                            <a-icon slot='prefix' type="user" style="color:rgba(92,127,116,0.8)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
                        <a-input v-decorator="['password',{...validateRules('请输入密码')}]" type="password" placeholder="请输入密码">
                             <a-icon slot='prefix' type="lock" style="color:rgba(92,127,116,0.8)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
                        <a-button type="primary" html-type="submit" size='large'>
                            登陆
                        </a-button>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </a-layout-content>
</a-layout>
</template>

<script>
import {validateRules} from '../utils/validator'
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            validateRules,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
    }
};
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .layout-header {
        background-color: white;
        color: $text_theme_color;

        .top-nav {
            @include flex_row;
            justify-content: space-between;

            .logo {
                font-size: 26px;
                text-align: left;
                font-weight: 600;

                .avatar {
                    width: 64px;
                    height: 64px;
                }

                span {
                    margin-left: 35px;
                }
            }

            .menu-nav {
                font-size: 18px;
                @include flex_row;

                span {
                    width: 100px;
                }
            }
        }
    }

    .layout-content {
        background-image: url('../assets/images/pcbackground1.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .col {
            background-color: rgba(184, 220, 219, 0.7);
            height: 420px;
            border-radius: 8px;
            padding-top: 110px;
            box-sizing: border-box;
            margin-top: 160px;
        }
    }
}
</style>
