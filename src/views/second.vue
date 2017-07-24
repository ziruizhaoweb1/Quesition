<template>
	<div class="box">
		<input type="text" class="school" v-model="schoolname">
		<p class="btn" @click="btn"></p>
	</div>
</template>
<script>
	export default {
        data(){
            return {
                schoolname:""
            }
        },
        methods:{
        	btn:function(){
        		if(this.schoolname.length<=0){
              alert("请输入学校名字")
            }else{
              this.$store.state.schoolname=this.schoolname;
              this.$router.push("/third")
            }
        	}
        },
        mounted:function(){

        }
    }
</script>
<style scope>
.box{
  width:100%;
  height:100%;
  background:url('../../static/images/2_02.png');
  background-size:100% 100%;
  position:relative;
   }
 .school{
 	width: 70%;
 	position: absolute;
 	left: 15%;
 	top:11%;
 	height: 9%;
 	font-size: 20px;
 }
 .btn{
 	position: absolute;
 	top: 23%;
 	left: 56%;
 	width: 32%;
 	height: 7%;
 }
</style>