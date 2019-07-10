<template>
<a-row class="s-row">
    <a-col :span="22" :offset="1">
        <a-row>
            <a-col :span="4" class="top-title">分舵申请列表</a-col>
        </a-row>
        <a-row>
            <a-col :span="24" v-for="(item,index) in data" :key="index">
                <rubber-info :info='item' @confirm='confirmEstablish'></rubber-info>
            </a-col>
        </a-row>
    </a-col>
</a-row>
</template>

<script>
import rubberInfo from './rudder-info.vue'
const data = require('../mock/rubber.json')
export default {
    data() {
        return {
            data,
            info: null,
        }
    },
    components: {
        rubberInfo
    },
    methods: {
        confirmEstablish(info) {
            console.log('确认建立志愿分舵', info); //数据请求
            this.info = info;
            info.ifPass=true;
            this.openNotificationWithIcon('success')
        },
        openNotificationWithIcon(type) {
            this.$notification[type]({
                message: 'Success',
                description: '志愿分舵创建成功',
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.top-title {
    font-size: 18px;
}
</style>
