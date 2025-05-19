<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/todocomponents/header.vue'
import List from '@/components/todocomponents/list.vue'
import Footer from '@/components/todocomponents/footer.vue'
let order = ref(null)

const list = ref([
    { txt: '吃饭', zt: false },
    { txt: '睡觉', zt: false },
    { txt: '打张嘉欣', zt: false }
])
const count = computed(() => list.value.filter(item => item.zt === false).length)
const addList = (data) => {
    list.value.push({
        txt: data,
        zt: false
    })
}
const delList = (index) => {
    list.value.splice(index, 1)
}
const ft = (temp) => {
    order.value = temp
}
</script>
<template>
    <Header @addData="addList" />
    <List :list="list" :order="order" @delData="delList" />
    <Footer :count="count" @order="ft" />
</template>
<style>

button {
    font-family: 'fontB';
    color: #fff;
    box-shadow: 3px 3px 1px rgba(0, 0, 0, .1);
    transition: .2s;
}

button:hover {
    opacity: .6;
}

button:active {
    transform: scale(.9);
}
</style>