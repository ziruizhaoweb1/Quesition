<template>
	<div class="box">
    <router-link to=/second class="btn"></router-link>
	</div>	
</template>
<script>
    export default {
        data(){
            return {
                title:'test'
            }
        }
    }
</script>

<style scope>
.box{
  width:100%;
  height:100%;
  background:url('../../static/images/1_02.png');
  background-size:100% 100%;
  position:relative;
}
.btn{
    width:70%;
    height:11%;
    position: absolute;
    left: 15%;
    top: 38%;
}
</style>