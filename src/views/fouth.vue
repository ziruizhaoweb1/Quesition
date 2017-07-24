<template>
	<div class="box">
    <p class="schoolname">{{schoolname}}</p>
		<img :src="src" alt="" class="bg">
    <button class="share" @click="share"></button>
	</div>
</template>
<script>
	export default {
        data(){
            return {
                schoolname:"",
                src:""
            }
        },
        methods:{
          share:function(){
            alert("分享成功^_^")
          }
        },
        mounted:function(){
          this.src=this.$store.state.data.data.title[5].src; 
          this.schoolname=this.$store.state.schoolname;
        }
    }
</script>
<style scope>
  .box{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .bg{
    width: 100%;
    height: 100%;
  }
  .schoolname{
    position: absolute;
    background: #c73e48;
    left: 34%;
    top: 37%;
    width: 32%;
    height: 4%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
  .share{
    position: absolute;
    left: 63%;
    bottom: 7%;
    width: 22%;
    height: 9%;
    opacity: 0;
  }
</style>