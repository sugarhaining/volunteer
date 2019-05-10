<template>
<a-row type="flex" align="middle" justify='start' class="row" :gutter="8">
    <a-col :span="6" v-for="(item,index) in departLists" :key="index" class="member-list">
        <a-row type="flex" align="middle" class="list-item">
            <a-col :span="24">{{item.name}}</a-col>
            <a-col :span="24">{{item.number}}人</a-col>
        </a-row>
    </a-col>
    <a-col :span="6">
        <a-button type="danger" size='large'>创建新部门</a-button>
    </a-col>
</a-row>
</template>

<script>
export default {
    props: ['departLists'],
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
.row {
    font-size: 16px;

    .member-list {
        padding: 10px 40px ! important;

        .list-item {
            background-color: rgba(184, 220, 219, 1);
            border-radius: 10px;
        }
    }
}
</style>
