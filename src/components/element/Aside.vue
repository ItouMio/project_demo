<script setup>
import { ref } from 'vue'
const floatRef = ref(null)

function pages(e) {
    const index = e.target.dataset.i
    const distance = index * 50
    floatRef.value.style.top = `${distance}px`
}
</script>
<template>
    <aside>
        <ul @click="pages">
            <li><router-link data-i="0" to="/home/users">用户管理</router-link></li>
            <li><router-link data-i="1" to="/home/permission">权限管理</router-link></li>
            <li><router-link data-i="2" to="/home/goods">商品管理</router-link></li>
            <li><router-link data-i="3" to="/home/order">订单管理</router-link></li>
            <li><router-link data-i="4" to="/home/setting">系统设置</router-link></li>
            <div class="float" ref="floatRef"></div>
        </ul>
    </aside>
</template>
<style scoped>
aside {
    height: 100%;
    width: 300px;
    border-right: 1px solid #000;
}

ul {
    /* margin-top: 20px; */
    overflow: hidden;
    position: relative;
}

ul li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
}

ul li::after {
    content: '';
    display: block;
    background-color: #33333320;
    height: 50px;
    width: 0;
    position: absolute;
    transition: .3s;
}

ul li:hover::after {
    width: 300px;
}

ul li a {
    display: block;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
}

.float {
    position: absolute;
    top: 0px;
    height: 50px;
    width: 5px;
    background-color: #2ad18b;
    transition: .2s;
}
</style>
<script>
export default {
    name: 'AsidePage'
}
</script>