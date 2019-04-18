<template>
<a-col :span="16" :offset="4" class='col'>
    <a-form :form="form" @submit="handleSubmit" layout='horizontal'>
        <a-row type="flex" justify="center">
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 20,offset: 2 }">
                    <a-input v-decorator="['user_name',{...validateRules('请输入姓名')}]" placeholder="请输入姓名"></a-input>
                </a-form-item>
            </a-col>
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 20,offset: 2 }">
                    <a-radio-group v-decorator="['user_sex',{initialValue:'male'}]" buttonStyle="solid">
                        <a-radio-button value="male">
                            男
                        </a-radio-button>
                        <a-radio-button value="female">
                            女
                        </a-radio-button>
                    </a-radio-group>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 20,offset: 2 }">
                    <a-input v-decorator="['user_wechatID',{...validateRules('请输入微信ID')}]" placeholder="请输入微信ID"></a-input>
                </a-form-item>
            </a-col>
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 24 }">
                    <a-input v-decorator="['user_wechatNumber',{...validateRules('请输入微信号')}]" placeholder="请输入微信号"></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="20" :offset="2">
                <a-form-item :wrapper-col="{ span: 22,offset: 1 }">
                    <a-input v-decorator="['user_phoneNumber',{...validateRules('请输入手机号码',{validator:checkPhoneNumber})}]" type="number" placeholder="请输入电话号码（输入的电话号码就是登录账号）" @focus='handlePhoneConfirmFocus'></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 20,offset: 2 }">
                    <a-input v-decorator="['user_password',{...validateRules('请输入密码',{validator:checkPasswordToSecond})}]" type="password" placeholder="请输入登陆密码"></a-input>
                </a-form-item>
            </a-col>
            <a-col :span="10">
                <a-form-item :wrapper-col="{ span: 20,offset: 2 }">
                    <a-input v-decorator="['user_passValidator',{...validateRules('请验证密码',{validator: checkPasswordToFirst})}]" type="password" placeholder="请确认登陆密码" @blur='handleConfirmBlur'></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="10">
                <a-form-item label="部门" :wrapper-col="{ span: 16, offset:2 }" :labelCol="{span: 4, offset:1}">
                    <a-select v-decorator="['user_depart',{initialValue:departLists[0]}]">
                        <a-select-option v-for='(item,index) in departLists' :value="item" :key="index">{{item}}</a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
            <a-col :span="10">
                <a-form-item label="职位" :wrapper-col="{ span: 16, offset:2}" :labelCol="{span: 4, offset:1}" class='form-item'>
                    <a-select v-decorator="['user_position',{initialValue:positionLists[0]}]">
                        <a-select-option v-for='(item,index) in positionLists' :value="item" :key="index">{{item}}</a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
        </a-row>
        <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
            <a-button type="primary" htmlType="submit" size="large">提交</a-button>
        </a-form-item>
    </a-form>
</a-col>
</template>

<script>
import {
    validateRules
} from '../utils/validator'
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            departLists: [], //当前可选部门
            positionLists: [], //当前可选职位
            confirmPassDirty: false, //控制验证密码框有值时再校验数据
            confirmPhoneDirty: false,
            validateRules,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log(values)
                }
            });
        },
        checkPasswordToSecond(rule, value, callback) { //初始密码二次输入时检验
            const form = this.form;
            if (value && this.confirmPassDirty) {
                form.validateFields(['user_passValidator'], {
                    force: true
                });
            }
            callback();
        },
        checkPasswordToFirst(rule, value, callback) { //验证密码改变时检验
            const form = this.form;
            if (value && value !== form.getFieldValue('user_password')) {
                callback('输入密码不一致');
            } else {
                callback();
            }
        },
        handleConfirmBlur(e) {
            const value = e.target.value;
            this.confirmPassDirty = this.confirmPassDirty || !!value;
        },
        handlePhoneConfirmFocus(){
            this.confirmPhoneDirty=true;
        },
        checkPhoneNumber(rule, value, callback) { //电话号码验证器
            const form = this.form;
            let phoneRule = /^1[3|4|5|7|8][0-9]{9}$/;
            if(!value){
                this.confirmPhoneDirty=false;
                console.log()
            }
            if (this.confirmPhoneDirty && !phoneRule.test(value)) {
                callback('电话号码格式有误')
            }
            callback()
        },
        _initData() {
            this.departLists = ['决策层', '网络技术工作室', '秘书处', '宣传部', '交流部'];
            this.positionLists = ['队长', '部长', '副部长', '副队长'];
        }
    },
    created() {
        this._initData();
    }
}
</script>

<style lang="scss" scoped>
.col {
    margin-top: 120px;
}
</style>
