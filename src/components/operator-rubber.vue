<template>
   <a-row class="s-row">
     <a-col :span="22" :offset="1">
       <a-row>
         <a-col :span="4" class="title">志愿分舵列表</a-col>
       </a-row>
       <a-row>
         <a-col :span="24" v-for="(item,index) in data" :key="index">
           <rubber-banner :info="item"></rubber-banner>
         </a-col>
       </a-row>
     </a-col>
   </a-row>
</template>

<script>
import rubberBanner from './rudder-banner.vue'
const data=require('../mock/rubber.json')
export default {
  data () {
    return {
      data
    }
  },
components:{
  rubberBanner
}
}

</script>
<style lang='scss' scoped>
  .title{
    font-size: 18px;
  }
</style>