<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
function back() {
    router.back()
}

</script>
<template>
    <button @click="back">后退</button>
    <main>
        <h1>用户详情</h1>
        <div>{{ route.params.id }}</div>
    </main>
</template>
<style scoped>
button {
    height: 30px;
    width: 100px;
    border-radius: 8px;
    background-color: #017aff;
    margin-top: 10px;
    margin-left: 10px;
    border: none;
    color: #fff;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>