<template>
<button @click="fetchData">获取</button>
<p>{{ data }}</p>
</template>
<script lang="ts" setup name="index">
import {ref } from 'vue';
import axios from 'axios';
const data =ref('');
const fetchData=async()=>{
    try{
        const response=await axios.get("http://localhost:3001")
        data.value=response.data;
    }catch(error){
        console.log("错误：",error)
    }
}


</script>
<style code>

</style>