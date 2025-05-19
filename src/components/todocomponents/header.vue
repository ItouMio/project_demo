<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addData'])
const txt = ref(null)
const fun = () => {
    if (txt.value == null || txt.value == '')
        return
    emit('addData', txt.value)
    txt.value = ''
}
</script>
<template>
    <header>
        <h1>待办事项</h1>
    </header>
    <hr>
    <main>
        <input type="text" v-model.trim="txt" placeholder="请输入代办事项">
        <button @click="fun">添加</button>
    </main>
</template>
<style scoped>
header {
    padding-top: 30px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    padding-top: 30px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    height: 30px;
    width: 55%;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ff99cc;
    padding-left: 10px;
}

button {
    height: 30px;
    width: 80px;
    border-radius: 8px;
    margin-left: 5px;
    border: none;
    background-color: #33c758;
}
h1 {
    font-family: 'fontA';
}
</style>
<script>
export default {
    name: 'HeaderPage'
}
</script>