<template>
	<div class="box">
    <img :src="src" alt="" class="bg">
		<button class="nex" @click="nextdata"></button>
    <ul class="list">
      <li @click="choos('q')" v-bind:class="{'lightq':q}"><span>Q</span><b>{{data.q}}</b></li>
      <li @click="choos('w')" v-bind:class="{'lightw':w}"><span>W</span><b>{{data.w}}</b></li>
      <li @click="choos('e')" v-bind:class="{'lighte':e}"><span>E</span><b>{{data.e}}</b></li>
      <li @click="choos('r')" v-bind:class="{'lightr':r}"><span>R</span><b>{{data.r}}</b></li>
    </ul>
	</div>
</template>
<script>
	export default {
        data(){
            return {
                data:[],
                ques:0,
                src:"",
                q:false,
                w:false,
                e:false,
                r:false
            }
        },
        methods:{
            choos:function(res){
                this.q=false;
                this.w=false;
                this.e=false;
                this.r=false;
                this[res]=true;
            },
            nextdata:function(){
                if(this.ques>=4){
                  this.$router.push("/fouth")
                }else{
                  if(this.q==false&&this.w==false&&this.e==false&&this.r==false){

                  }else{
                    this.ques=this.ques+1;
                  this.q=false;
                  this.w=false;
                  this.e=false;
                  this.r=false;
                  this.data=this.$store.state.data.data.title[this.ques].opctions;
                  this.src=this.$store.state.data.data.title[this.ques].src;
                  }
                   
                }
            }
        },
        mounted:function(){
          this.data=this.$store.state.data.data.title[this.ques].opctions;
          this.src=this.$store.state.data.data.title[this.ques].src; 
        }
    }
</script>
<style scope>
.box{
  width:100%;
  height:100%;
  position:relative;
   }
.bg{
  width: 100%;
  height: 100%;
}
.nex{
  position: absolute;
  left: 62%;
  bottom: 7%;
  height: 9%;
  width: 23%;
  opacity: 0;
}
.list{
  position: absolute;
  width: 73%;
  height: 13%;
  left: 14%;
  bottom: 15%;
  display: flex;
   flex-wrap:wrap;
}
li{
  width:48%;
  height: 50%;
  display: flex;
  align-items:center;
  word-break:break-all;
  font-size: 10px;
}
li span{
  color: #162d4f;
  width: 19%;
  border: 2px solid #162d4f;
  height: 60%;
  display: flex;
  align-items:center;
  justify-content:center;
  margin-left: 2px;
}
li b{
  flex:1;
  margin-left: 3px;
  display: inline-block;
  background: #bd3839;
  color: #fff;
  height: 70%;
  display: flex;
  align-items:center;
  border-radius: 3px;
}
.lightq,.lightw,.lighte,.lightr{
  border: 2px solid yellow;
}
</style>