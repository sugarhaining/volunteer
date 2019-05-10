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
                    <a-col :span='8' :offset='1'>密码</a-col>
                    <a-col :span="3" :offset="1">操作</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{(index+1) < 10?`0${index+1}`:index+1}}</a-col>
                    <a-col :span='8' :offset='1'>{{item.account}}</a-col>
                    <a-col :span='8' :offset='1'>{{item.password}}</a-col>
                    <a-col :span="3" :offset="1">
                        <a-button type="danger" @click="persuasionMember(item)">修改密码</a-button>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-col>
  </a-row>
</template>

<script>
const data=require('../mock/count.json')
export default {
  data () {
    return {
      data
    }
  },

}

</script>
<style lang='scss' scoped>
  .s-row{
    font-size: 18px;
    overflow-y: scroll;
  }
</style> 