<template>
<a-layout class='layout'>
    <a-layout-header class='layout-header'>
        <a-menu mode="horizontal" class='menu'>
            <a-row>
                <a-col :span="8">
                    <a-menu-item key="login">
                        <router-link to='/login' tag="span">首页</router-link>
                    </a-menu-item>
                </a-col>
                <a-col :span="8">
                    <a-anchor :affix="false" >
                      <a-anchor-link href="#service-page" title="产品服务" :wrapperStyle="wrapperStyle"/>
                    </a-anchor>
                </a-col>
                <a-col :span="8">
                    <!-- <a-anchor :affix="false"> -->
                        <a href="#service-join" title="加入志愿圈" >加入志愿圈</a>
                    <!-- </a-anchor> -->
                </a-col>
            </a-row>
        </a-menu>
    </a-layout-header>
    <a-layout-content class='layout-content'>
        <swiper></swiper>
        <a-row class='service-page'>
            <a-row class='service-float'></a-row>
            <a-col :span="10" :offset="7" class='service-title' id='service-page'>产品服务</a-col>
            <a-row class='service-desc'>
                <a-col :span="18" :offset="3">我们的核心产品是志愿圈小程序，该平台致力于为高校志愿者提供一个用图片分享他们的日常志愿活动，并且可以结识志愿的同道中人</a-col>
            </a-row>
            <a-row class='desc-card'>
                <a-col :span="18" offset="3">
                    <desc-card></desc-card>
                </a-col>
            </a-row>
        </a-row>
        <a-row class='service-join' id='service-join'>
            <a-col :span="10" :offset="7" class='service-title'>加入志愿圈</a-col>
            <a-col :span="18" :offset="3">
                <join-step></join-step>
            </a-col>
        </a-row>
        <a-row class='service-register'>
            <a-col :span="8" :offset="12" class='form-col'>
                <apply-form></apply-form>
            </a-col>
            <a-row :span="24" class='ribbon'>
                <a-col :span="12" class='ribbon-leave'>
                    <div class='layout'>
                        <p>温馨提示</p>
                        <p></p>
                        <p>在线客服:18710815240</p>
                    </div>
                </a-col>
            </a-row>
        </a-row>
    </a-layout-content>
    <a-layout-footer class='layout-footer'>
        <a-divider type="horizontal">Cyberspace@西电青年志愿者总队</a-divider>
    </a-layout-footer>
</a-layout>
</template>

<script>
import Swiper from '../components/swiper'
import descCard from '../components/desc-card.vue'
import joinStep from '../components/join-step.vue'
import applyForm from '../components/apply-form.vue'
export default {
    data() {
        return {
            wrapperStyle:{
                height: '100%',
                color: 'white',
                backgroundColor:'rgba(0,0,0,0.7)'
            }
        }
    },
    components: {
        Swiper,
        descCard,
        joinStep,
        applyForm
    }
}
</script>

<style lang="scss" scoped>
.layout {
    .layout-header {
        position: fixed;
        z-index: 999;
        width: 100%;
        color: white;
        padding: 0;
        background-color: transparent;

        .menu {
            line-height: 64px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            border: none;
        }
    }

    .layout-content {
        position: relative;
        color: white;

        .service-page {
            background-color: rgba(0, 0, 0, 0.6);
            background-image: url('../assets/images/5.jpg');
            background-size: 100% 100%;

            .service-title {
                font-size: 22px;
                margin-top: 20px;
            }

            .service-desc {
                fonr-size: 18px;
                margin-top: 150px;
            }

            .desc-card {
                margin-top: 80px;
                margin-bottom: 104px;
            }
        }

        .service-join {
            background-image: url('../assets/images/6.jpg');
            background-size: contain;

            .service-title {
                font-size: 22px;
                margin-top: 20px;
            }
        }

        .service-register {
            position: relative;
            padding: 60px 0;
            background-color: rgba(0, 0, 0, 0.7);
            background-image: url('../assets/images/7.jpg');
            background-size: 100% 100%;

            .form-col {
                height: 400px;
                background-color: whitesmoke;
                z-index: 2;
                padding: 40px 0;
            }

            .ribbon {
                position: absolute;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(43, 198, 223, 0.7);
                height: 140px;
                z-index: 1;

                .ribbon-leave {
                    height: 100%;

                    .layout {
                        @include flex_column;
                        justify-content: center;
                        height: 100%;
                        p:nth-of-type(1){
                            font-size: 16px;
                        }
                        p:nth-of-type(2) {
                            width: 200px;
                            height: 2px;
                            background-color: white;
                            margin: 10px 0  ;
                        }
                    }
                }
            }
        }
    }
}

.service-float {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #000;
}
</style>
