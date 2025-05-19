/* eslint-disable vue/multi-word-component-names */
<script setup>
import Header from './element/Header.vue'
import Aside from './element/Aside.vue'
</script>
<template>
    <div class="container">
        <Header />
        <main>
            <Aside />
            <section>
                <router-view></router-view>
            </section>
        </main>
    </div>
</template>
<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
    display: flex;
    padding: 10px;
}

section {
    flex: 1;
}
</style>