<template>
<a-row class="s-row">
    <a-col :span="22" :offset="1">
        <a-row>
            <a-col :span="2">超级管理员</a-col>
        </a-row>
        <a-row class="table">
            <a-col :span="24">
                <a-row class="table-top">
                    <a-col :span='2'>序号</a-col>
                    <a-col :span='8' :offset='1'>账号</a-col>
                    <a-col :span='4' :offset='1'>密码</a-col>
                    <a-col :span="7" :offset="1">操作</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{(index+1) < 10?`0${index+1}`:index+1}}</a-col>
                    <a-col :span='8' :offset='1'>{{item.account}}</a-col>
                    <a-col :span='4' :offset='1'>{{item.password}}</a-col>
                    <a-col :span="2" :offset="2">
                        <a-button type="danger" @click="modify1(index)">修改账号</a-button>
                    </a-col>
                    <a-col :span="2" :offset="1">
                        <a-button type="danger" @click="modify2(index)">修改密码</a-button>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-modal title="Title" @ok="handleOk1" :visible="visible1" @cancel="handleCancel">
            <a-form :form="form1">
                <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
                    <a-input v-decorator="['newValue',{...validateRules('内容不能为空')}]" placeholder="请输入修改后的内容"></a-input>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal title="Title" @ok="handleOk2" :visible="visible2" @cancel="handleCancel">
            <a-form :form="form2">
                <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
                    <a-input v-decorator="['newValue',{...validateRules('内容不能为空')}]" placeholder="请输入修改后的内容"></a-input>
                </a-form-item>
            </a-form>
        </a-modal>
    </a-col>
</a-row>
</template>

<script>
const data = require('../mock/count.json');
import {
    validateRules
} from '../utils/validator'
export default {
    data() {
        return {
            data,
            visible1: false,
            visible2:false,
            form1: this.$form.createForm(this),
            form2: this.$form.createForm(this),
            validateRules,
            currIndex:0,//当前正在被修改的数据索引
        }
    },
    methods: {
        openNotificationWithIcon(type) {
            this.$notification[type]({
                message: 'Message',
                description: '操作成功',
            });
        },
        modify1(index) {
            this.visible1 = true;
            this.currIndex=index;
        },
        modify2(index) {
            this.visible2 = true;
            this.currIndex=index;
        },
        handleOk1() {
            this.form1.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.data[this.currIndex].account=values.newValue;//修改请求发送
                    this.handleCancel();
                    this.openNotificationWithIcon('success');
                }
            })
        },//账号修改
        handleOk2() {
            this.form2.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.data[this.currIndex].password=values.newValue;//修改请求发送
                    this.handleCancel();
                    this.openNotificationWithIcon('success');
                }
            })
        },//密码修改
        handleCancel() {
            this.visible1 = false;
            this.visible2 = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.s-row {
    font-size: 18px;
}
</style>
