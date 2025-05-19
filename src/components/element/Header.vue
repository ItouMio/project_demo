<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function exit() {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>
<template>
    <header>
        <div class="txt">商城后台管理系统</div>
        <div class="exit" @click="exit">退出</div>
    </header>
</template>
<style scoped>
header {
    height: 80px;
    width: 100vw;
    background-color: rgb(89, 187, 233);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 24px;
    color: #eee;
    cursor: pointer;
}
</style>
<script>
export default {
    name: 'HeaderPage'
}
</script>