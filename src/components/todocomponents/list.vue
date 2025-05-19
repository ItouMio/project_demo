<script setup>
const emit = defineEmits(['delData'])
const data = defineProps({
    list: {
        type: Array,
        default: () => []
    },
    order: {
        type: [Boolean, null],
        default: null
    }
})
const fun = (index) => {
    emit('delData', index)
}

</script>
<template>
    <main>
        <ul>
            <li v-for="(item, index) in data.list" :key="index"
                v-show="data.order == null ? true : data.order == item.zt">
                <div>
                    <input type="checkbox" v-model="item.zt">
                    <span :class="{ zt: item.zt }">{{ item.txt }}</span>
                </div>
                <div>
                    <button @click="fun(index)">删除</button>
                </div>
            </li>
        </ul>
    </main>
</template>
<style scoped>
main {
    border-radius: 8px;
    padding: 0 10px;
    width: 60%;
    height: 400px;
    overflow-y: scroll;
    margin: 10px auto;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, .1) inset, 4px 4px 3px rgba(0, 0, 0, .1);
}

li {
    width: 100%;
    font-family: 'fontA';
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
}

input {
    margin-right: 5px;
}

button {
    height: 30px;
    width: 70px;
    border-radius: 8px;
    border: none;
    background-color: rgb(239, 63, 140);
    font-weight: bold;
    color: #fff;
}

.zt {
    text-decoration: line-through;
}
</style>
<script>
export default {
    name: "ListPage"
}
</script>