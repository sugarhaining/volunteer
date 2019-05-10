<template>
<a-form :form="form" @submit="handleSubmit">
    <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
        <a-input v-decorator="['user_name',{...validateRules('请输入申请人姓名')}]" placeholder="申请人姓名">
            <a-icon slot="addonAfter" type="user" style="color:rgba(92,127,116,0.8)" />
        </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
        <a-input v-decorator="['user_school',{...validateRules('请输入所在学校（全称）')}]" placeholder="所在学校（全称）">
            <a-icon slot="addonAfter" type="bank" style="color:rgba(92,127,116,0.8)" />
        </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
        <a-input v-decorator="['user_organization',{...validateRules('请输入志愿组织名称（全称）')}]" placeholder="志愿组织名称（全称）">
            <a-icon slot="addonAfter" type="global" style="color:rgba(92,127,116,0.8)" />
        </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
        <a-input v-decorator="['user_phone',{...validateRules('请输入申请人联系电话',{validator:checkPhoneNumber})}]" placeholder="申请人联系电话" @focus='handlePhoneConfirmFocus'>
            <a-icon slot="addonAfter" type="phone" style="color:rgba(92,127,116,0.8)" />
        </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
        <a-row>
            <a-col :span="12">
                <a-button type="primary" htmlType="submit" size="large">提交</a-button>
            </a-col>
            <a-col :span="12">
                <a-button type="danger" htmlType="reset" size="large">重置</a-button>
            </a-col>
        </a-row>
    </a-form-item>
</a-form>
</template>

<script>
import {
    validateRules
} from '../utils/validator'
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            validateRules
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
        handlePhoneConfirmFocus() {
            this.confirmPhoneDirty = true;
        },
        checkPhoneNumber(rule, value, callback) { //电话号码验证器
            const form = this.form;
            let phoneRule = /^1[3|4|5|7|8][0-9]{9}$/;
            if (!value) {
                this.confirmPhoneDirty = false;
            }
            if (this.confirmPhoneDirty && !phoneRule.test(value)) {
                callback('电话号码格式有误')
            }
            callback()
        },
    }
}
</script>

<style lang='scss' scoped>

</style>
