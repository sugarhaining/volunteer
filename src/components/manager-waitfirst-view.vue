<template>
<a-row class="s-row">
    <a-col :span="23" :offset="0.5">
        <a-row>
            <a-col :span="24">
                <list-top :count='count'>{{currDepart}}待面试人员</list-top>
            </a-col>
        </a-row>
        <a-row class="table">
            <a-col :span="22" :offset="1">
                <a-row class="table-top">
                    <a-col :span='2'>序号</a-col>
                    <a-col :span='3' :offset='1'>姓名</a-col>
                    <a-col :span='2' :offset='1'>性别</a-col>
                    <a-col :span='5' :offset="2">电话</a-col>
                    <a-col :span="6" :offset="2">微信</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{(index+1) < 10?`0${index+1}`:index+1}}</a-col>
                    <a-col :span='3' :offset='1'>{{item.name}}</a-col>
                    <a-col :span='2' :offset='1'>{{item.sex}}</a-col>
                    <a-col :span='5' :offset="2">{{item.number}}</a-col>
                    <a-col :span="6" :offset="2">{{item.weID}}</a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row class="page-size">
            <a-col :span="10" :offset="14">
                <a-pagination v-model="pagination_current" :total="count" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="4" :offset="10">
                <a-button type='default' size='large'>发面试通知</a-button>
            </a-col>
            <a-col :span="4" :offset="2">
                <a-button type='default' size='large'>导出生成面试名单</a-button>
            </a-col>
        </a-row>
    </a-col>
</a-row>
</template>

<script>
import listTop from './list-top'

const data = require('../mock/member.json')
export default {
    data() {
        return {
            currDepart: '工作室',
            count: 50,
            data,
            pagination_current: 1,
        }
    },
    components: {
        listTop
    }
}
</script>

<style lang="scss" scoped>
.s-row {

    .page-size {
        margin-bottom: 15px;
    }
}
</style>
