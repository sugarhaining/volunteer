<template>
<a-row class="main">
    <a-col :span="24">
        <a-row>
            <a-col :span="10" class="line">{{info.school}}&nbsp;&nbsp;&nbsp;{{info.organization}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="10" :offset="5" class="line">{{info.principal}}&nbsp;&nbsp;&nbsp;{{info.number}}</a-col>
        </a-row>
        <a-row>
            <a-col :span="4" :offset="14">
                <a-button type="danger" size="large">生成邀请码</a-button>
            </a-col>
            <a-col :span="4">
                <a-button type="danger" size="large" @click='bannerToggle(info)'>禁封</a-button>
            </a-col>
        </a-row>
    </a-col>
</a-row>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {

        }
    },
    methods:{
        bannerToggle(info){
            this.$emit('bannerToggle',info)
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin: 10px 0;
    font-size: $form_font_size;
    line-height: 50px;
    padding: 10px 4px;
    box-sizing: border-box;
    border: 1px solid #CCCCCC;
    height: 220px;
    background-color: white;

    .line {
        height: 70px;
    }
}
</style>
