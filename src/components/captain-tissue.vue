<template>
<a-row class="row">
    <a-col :span="22" :offset="1" class='col'>
        <a-row>
            <a-col :span="22" :offset="1" class='col-1'>决策层</a-col>
        </a-row>
        <a-row>
            <a-col :span="22" :offset="1">
                <member-card title="当前决策层" :members='members'></member-card>
            </a-col>
        </a-row>
    </a-col>
    <a-col :span="22" :offset="1" class='col'>
        <a-row>
            <a-col :span="22" :offset="1" class='col-1'>管理层</a-col>
        </a-row>
        <a-row>
            <a-col :span="22" :offset="1">
                <depart-member :departLists='departLists' @addDepart='addDepart'></depart-member>
            </a-col>
        </a-row>
    </a-col>
    <a-modal title="部门创建" @ok="handleOk" :visible="visible" @cancel="handleCancel">
        <a-form :form="form">
            <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
                <a-input v-decorator="['newValue',{...validateRules('内容不能为空')}]" placeholder="部门一经创建不能修改名称"></a-input>
            </a-form-item>
        </a-form>
    </a-modal>
</a-row>
</template>

<script>
import memberCard from './member-card.vue'
import departMember from './depart-member'
import {
    validateRules
} from '../utils/validator'
export default {
    data() {
        return {
            members: ['苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛', '苏国涛'],
            departLists: [{
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
                {
                    name: '工作室',
                    number: 35
                },
            ],
            visible: false,
            validateRules,
            form: this.$form.createForm(this),
        }
    },
    components: {
        memberCard,
        departMember
    },
    methods: {
        handleOk() {
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.departLists.push({
                        name: values.newValue,
                        number: 0
                    })
                    this.handleCancel();
                    this.openNotificationWithIcon('success');
                }
            })
        },
        handleCancel() {
            this.visible = false;
        },
        addDepart(){
          this.visible=true;
        },
        openNotificationWithIcon(type) {
            this.$notification[type]({
                message: 'Message',
                description: '部门创建成功',
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.row {
    .col {
        @include panel_top;

        &:nth-child(2) {
            margin-top: 20px;
        }

        .col-1 {
            text-align: left;
            margin-bottom: 19px;
        }
    }
}
</style>
