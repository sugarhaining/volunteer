<template>
   <a-row class="s-row">
     <a-col :span="23" :offset="0.5">
         <a-row>
           <a-col :span="24">
               <list-top :count='count'>{{currDepart}}已面试人员</list-top>
           </a-col>
         </a-row>
         <a-row class="table">
            <a-col :span="22" :offset="1">
                <a-row class="table-top">
                    <a-col :span='2'>序号</a-col>
                    <a-col :span='3' :offset='1'>姓名</a-col>
                    <a-col :span='2' :offset='2'>性别</a-col>
                    <a-col :span='2' :offset="2">分数</a-col>
                    <a-col :span="8" :offset="2">印象关键词</a-col>
                </a-row>
                <a-row class="table-item" v-for="(item,index) in data" :key="index">
                    <a-col :span='2'>{{++index}}</a-col>
                    <a-col :span='3' :offset='1'>{{item.name}}</a-col>
                    <a-col :span='2' :offset='2'>{{item.sex}}</a-col>
                    <a-col :span='2' :offset="2">{{item.count}}</a-col>
                    <a-col :span="8" :offset="2">{{item.key_word}}</a-col>
                </a-row>
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
        currDepart:'工作室',
        count:50,
        data,
    }
  },
    components:{
        listTop
    }
}

</script>
<style lang='scss'>
  .table {
    margin-top: 50px;
    margin-bottom: 23px;

    .table-top {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background-color: rgba(184, 220, 219, 1);
    }

    .table-item {
        background-color: white;
        border-bottom: 1px solid #CCCCCC;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }
}
</style>