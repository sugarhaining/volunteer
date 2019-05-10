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
           <depart-member :departLists='departLists'></depart-member>
         </a-col>
       </a-row> 
     </a-col>
   </a-row>
</template>

<script>
import memberCard from './member-card.vue'
import departMember from './depart-member'
export default {
  data () {
    return {
      members:['苏国涛','苏国涛','苏国涛','苏国涛','苏国涛','苏国涛','苏国涛','苏国涛','苏国涛','苏国涛'],
      departLists:[
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
        {name:'工作室',number:35},
      ]
    }
  },
  components:{
    memberCard,departMember
  }
}

</script>
<style lang='scss' scoped>
  .row{
    .col{
      @include panel_top;
      &:nth-child(2){
        margin-top: 20px;
      }
      .col-1{
        text-align: left;
        margin-bottom: 19px;
      }
    }
  }
</style>