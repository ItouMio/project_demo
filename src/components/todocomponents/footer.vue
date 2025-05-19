<script setup>
const emit = defineEmits(['order'])
const data = defineProps({
    count: {
        type: Number,
        default: 0
    }
})
const fun = (temp) => {
    emit('order', temp)
}
</script>
<template>
    <main>
        <div class="left">共{{ data.count }}项任务未完成</div>
        <div class="right">
            <button @click="fun(null)" style="--color:#33aee6">全部</button>
            <button @click="fun(true)" style="--color:#ff2c54">已完成</button>
            <button @click="fun(false)" style="--color:#ffcc00">未完成</button>
        </div>
    </main>
</template>
<style scoped>
main {
    padding-top: 20px;
    width: 60%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

button {
    height: 30px;
    border: none;
    width: 60px;
    border-radius: 8px;
    margin-left: 5px;
    background-color: var(--color);
    color: #fff;

}
</style>

<script>
export default {
    name: 'footerPage'
}
</script>