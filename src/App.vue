<template>
<!-- <text1></text1> -->
<!-- <person></person> -->
 <index></index>
</template>

<script lang="ts">
import Person from './components/Person.vue';
import text1 from './components/text.vue'
import index from './components/index.vue'
export default{
    name:'App',//组件名
    components:{
        Person,
        text1,
        index
    }
}
</script>
<style>

</style>