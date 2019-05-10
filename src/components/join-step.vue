<template>
<a-row type="flex" justify="space-between" align="middle">
    <a-col v-for="(item, index) in stepInfo" :key="index" class='step-wrap'>
        <span class='step'>{{item}}</span>
        <a-icon type="right" v-if="index!==stepInfo.length-1"></a-icon>
    </a-col>
</a-row>
</template>

<script>
export default {
    data() {
        return {
            stepInfo: [
                '志愿组织负责人填写申请表',
                '志愿圈客服联系志愿组织负责人',
                '志愿组织负责人注册登录志愿圈',
                '组织负责人邀请成员加入'
            ]
        }
    },

}
</script>

<style lang="scss" scoped>
.step-wrap {
    @include flex_row;
    margin: 61px 0;

    &:nth-child(2n) .step {
        background-color: #2BC6DF;
        border-radius: 10px;
    }
    &:nth-child(2n-1) .step{
        border: 1px solid white; 
         border-radius: 10px;
    }

    .step {
        width: 100px;
        height: 120px;
        padding: 10px 10px 10px 10px;
        font-size: 16px;
        margin-right: 40px;
    }
}
</style>
