<template>
   <a-row class="s-row">
     <a-col :span="23" :offset="0.5">
         <a-row>
           <a-col :span="24">
               <list-top :count="count">{{currDepart}}二面待面试人员</list-top>
           </a-col>
         </a-row>
         <a-row class="table">
            <a-col :span="22" :offset="1">
                <a-row class="table-top">
                    <a-col :span='2'>序号</a-col>
                    <a-col :span='3'>姓名</a-col>
                    <a-col :span='2'>性别</a-col>
                    <a-col :span='4' :offset='1'>电话</a-col>
                    <a-col :span="4" :offset="1">微信</a-col>
                    <a-col :span="5" :offset="1">一面分数</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{(index+1) < 10 ?`0${index+1}`:index+1}}</a-col>
                    <a-col :span='3'>{{item.name}}</a-col>
                    <a-col :span='2'>{{item.sex}}</a-col>
                    <a-col :span='4' :offset='1'>{{item.number}}</a-col>
                    <a-col :span="4" :offset='1'>{{item.weID}}</a-col>
                    <a-col :span="5" :offset='1'>{{item.count}}</a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row>
          <a-col :span="4" :offset="18">
              <a-button type="default" size="large">导出二面名单</a-button>
          </a-col>
        </a-row>
     </a-col>
   </a-row>
</template>

<script>
import listTop from './list-top.vue'
const data=require('../mock/member.json')
export default {
  data () {
    return {
        data,
        currDepart:'工作室',
        count:50
    }
  },
components:{
    listTop
}
}

</script>
<style lang='scss' scoped>
  
</style>