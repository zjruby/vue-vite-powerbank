<template>
    <button @click="fetchData">获取</button>
    <!-- <p>{{ users.values }}</p> -->
    <div>
        <h2>列表</h2>
        <ul v-if="users.length > 0">
            <li v-for="user in users" :key="user.name">{{ user.name }}</li>
        </ul>
        <ul v-if="users.length > 0">
            <li v-for="user in users" :key="user.number">{{ user.number }}</li>
        </ul>
        <ul v-if="users.length > 0">
          
            <li v-for="user in users" :key="user.time">{{ user.time }}</li>
        </ul>
        <p v-else>没有数据</p>
    </div>
</template>

<style code>
td{
    border: 1px black solid;
    padding: 20px;
}
</style>


<script lang="ts" setup name="index">
import { onMounted, ref } from 'vue';
import axios from 'axios';

interface user{
    name:string,
    number:number,
    time:string
}

const users=ref<user[]>([])

const fetchData = async () => {
    try {
        const response = await axios.get<user[]>("http://localhost:3001")
        users.value = response.data;
    } catch (error) {
        console.log("错误：", error)
    }
}

//生命周期钩子，组件在挂载后调用函数
onMounted(()=>{
    fetchData();
})
</script>