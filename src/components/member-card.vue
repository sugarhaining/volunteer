<template>
   <div class="main-wrap">
       <a-row>
         <a-col :span="24" class="title">{{title}}</a-col>
       </a-row>
       <a-row type="flex" align="middle" justify="start">
         <a-col :span="3" v-for="(item,index) in members" :key="index" class="member-item">{{item}}</a-col>
       </a-row>
   </div>
</template>

<script>
export default {
    props:['title','members'],
  data () {
    return {

    }
  },

}

</script>
<style lang='scss' scoped>
  .main-wrap{
      font-size: 16px;
      background-color: rgba(184,220,219,1);
      padding: 10px 10px;
      border-radius: 10px;
      .title{
          text-align: left;
          font-weight: 600;
      }
      .member-item{
          height: 30px;
          line-height: 30px;
          margin-top: 10px;
      }
  }
</style>