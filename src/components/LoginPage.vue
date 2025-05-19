/* eslint-disable vue/multi-word-component-names */
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref(null)
const password = ref(null)
const onLogin = () => {
    if (username.value == 'admin' && password.value == '123456') {
        localStorage.setItem('token', username.value)
        router.push('/home')
    } else {
        alert('用户名或密码有误')
        localStorage.removeItem('token')
    }
}

</script>

<template>
    <div class="main">
        <h1>Login</h1>
        <form action="">
            <div>
                用户名: <input type="text" v-model.trim="username" placeholder="请输入用户名">
            </div>
            <div>
                密&emsp;码: <input type="password" v-model.trim="password" placeholder="请输入密码">
            </div>
            <div>
                <button @click="onLogin">登陆</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    padding-top: 10%;
}

.main form {
    margin: 0 auto;
    margin-top: 5%;
    height: 400px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main form input {
    height: 25px;
    width: 200px;
    border-radius: 8px;
    outline: none;
    padding-left: 10px;
    margin-bottom: 5px;
    border: 1px solid #7ddbbf;
}

.main form input:focus {
    border: 1px solid rgb(191, 214, 137);
}

.main h1 {
    text-align: center;
}

form button {
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 8px;
    background-color: rgb(108, 145, 214);
    color: #fff;
}

form button:hover {
    background-color: rgba(108, 145, 214, .5);
}
</style>