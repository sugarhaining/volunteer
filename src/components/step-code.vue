<template>
<a-col :span="12" :offset="6" class='col'>
    <a-form :form="form" @submit="handleSubmit">
        <a-form-item :wrapper-col="{ span: 18,offset: 3 }" class='form-item'>
            <a-input v-decorator="['code',{...validateRules('请输入邀请码')}]" type="number" placeholder="请输入邀请码"></a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 18,offset: 3 }">
            <a-button type="primary" htmlType="submit" size="large">提交</a-button>
        </a-form-item>
    </a-form>
</a-col>
</template>

<script>
import {validateRules} from '../utils/validator'
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            validateRules,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.col {
    margin-top: 220px;
}
</style>
