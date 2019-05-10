<template>
<swiper :options="swiperOption" class='swiper'>
    <swiper-slide class='swiper-slide'>
        <img src='../assets/images/1.jpg'>
        <p>
            <span class='span-title'>借助互联网技术</span>
            <span class='span-content'>整合中国高校的志愿者人际资源</span>
        </p>
    </swiper-slide>
    <swiper-slide>
        <img src='../assets/images/2.jpg'>
        <p>
            <span class='span-title'>搭建网络社交平台</span>
            <span class='span-content'>突破高校生社交的志愿障碍</span>
        </p>
    </swiper-slide>
    <swiper-slide>
        <img src='../assets/images/3.jpg'>
        <p>
            <span class='span-title'>信息互通志愿共享</span>
            <span class='span-content'>倾听每一个人的志愿心</span>
        </p>
    </swiper-slide>
    <swiper-slide>
        <img src='../assets/images/4.jpg'>
        <p>
            <span class='span-title'>运用互联网技术</span>
            <span class='span-content'>传播一个个平凡的感人瞬间</span>
        </p>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                autoplay: true,
                delay: 2000,
                effect: 'coverflow',
                loop: true,
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 550px;
    width: 100%;

    .swiper-slide {
        position: relative;

        >img {
            width: 100%;
            height: 100%;
        }

        >p {
            position: absolute;
            top: 50%;
            left: 50%;
            color: white;
            z-index: 2;
            transform: translate3d(-50%, -50%, 0);
            @include flex_column;
            justify-content: space-between;
            height: 15%;

            .span-title {
                font-size: 24px;
            }

            .span-content {
                font-size: 16px;
            }
        }
    }
}
</style>
