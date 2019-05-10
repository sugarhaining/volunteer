<template>
<a-row>
    <a-col :span="22" :offset="1" class="col-wrap">
        <list-top :count='count'>{{currDepart}}部员名单</list-top>
        <a-row class="table">
            <a-col :span="24">
                <a-row class="table-top">
                    <a-col :span='2'>序号</a-col>
                    <a-col :span='3' :offset='1'>姓名</a-col>
                    <a-col :span='2' :offset='1'>性别</a-col>
                    <a-col :span='4' :offset="1">电话</a-col>
                    <a-col :span="5" :offset="1">微信</a-col>
                    <a-col :span="3" :offset="1">操作</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{(index+1) < 10?`0${index+1}`:index+1}}</a-col>
                    <a-col :span='3' :offset='1'>{{item.name}}</a-col>
                    <a-col :span='2' :offset='1'>{{item.sex}}</a-col>
                    <a-col :span='4' :offset="1">{{item.number}}</a-col>
                    <a-col :span="5" :offset="1">{{item.weID}}</a-col>
                    <a-col :span="3" :offset="1">
                        <a-button type="danger" @click="persuasionMember(item)">退部</a-button>
                    </a-col>
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
                <a-button type="default" size="large">生成录取通知</a-button>
            </a-col>
            <a-col :span="4" :offset="1">
                <a-button type="default" size="large">导出部员名单</a-button>
            </a-col>
            <a-col :span="4" :offset="1">
                <a-button type="default" size="large">生成例会考察表</a-button>
            </a-col>
        </a-row>
    </a-col>
</a-row>
</template>

<script>
const data = require('../mock/member.json')
import listTop from './list-top.vue'
export default {
    data() {
        return {
            currDepart: '工作室',
            count: 50,
            data,
            pagination_current: 1, //分页器专用数据
        }
    },
    methods: {
        persuasionMember(item) { //退部操作
            console.log(item)
        }
    },
    components: {
        listTop
    },
    watch: {
        pagination_current(newVal) {
            console.log(newVal)
        }
    }
}
</script>

<style lang="scss" scoped>
.col-wrap {
    margin-top: 43px;
    font-size: 18px;

    .table {
        margin-top: 50px;
        margin-bottom: 23px;

        .table-top {
            height: 50px;
            line-height: 50px;
            font-size: $form_font_size;
            background-color: rgba(184, 220, 219, 1);
        }

        .table-item {
            background-color: white;
            border-bottom: 1px solid #CCCCCC;
            height: 40px;
            line-height: 40px;
            font-size: $form_font_size;
        }
    }

    .page-size {
        margin-bottom: 15px;
    }
}
</style>
