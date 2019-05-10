<template>
<a-row type="flex" align="middle" class="row">
    <a-col :span="22" offset="1" class="col">
        <a-row>
            <a-col :span="19" offset="1">{{$route.params.title?$route.params.title:'管理层'}}</a-col>
            <a-col :span="3">
                <a-button type="danger" block>邀请新成员</a-button>
            </a-col>
        </a-row>
        <a-row v-for="(item,index) in decisions" :key="index" class="member-list">
            <a-col :span="22" offset="1">
                <member-card :title="item.title" :members='item.members'></member-card>
            </a-col>
        </a-row>
    </a-col>
</a-row>
</template>

<script>
import memberCard from '../components/member-card.vue'
export default {
    data() {
        return {
            decisions: [{
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
                {
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
                {
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
                {
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
                {
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
                {
                    title: '2019~2020',
                    members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛']
                },
            ]
        }
    },
    components: {
        memberCard
    }
}
</script>

<style lang="scss" scoped>
.row {
    .col {
        font-size: 20px;
        padding: 19px 19px;
        background-color: white;
        text-align: left;

        .member-list {
            margin: 10px 0;
        }
    }
}
</style>
