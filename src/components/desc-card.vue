<template>
<a-row type="flex" justify="space-around" align="middle">
    <a-col class='service-list' :span='4' v-for="(item, index) in description" :key="index">
        <span class='list-content'>{{item}}</span>
    </a-col>
</a-row>
</template>

<script>
export default {
    data() {
        return {
            description:[
                '分享日常志愿活动',
                '志愿时光主题相册',
                '紧跟行业动态趋势',
                '结识其他高校志愿者'
            ]
        }
    },

}
</script>

<style lang='scss' scoped>
.service-list{
    color: white;
    font-size: 20px;
    width: 160px;
    height: 160px;
    line-height: 40px;
    padding: 40px 25px 40px 25px;
    position: relative;
    border: 1px solid white;
    border-radius: 50%;
}
</style>
