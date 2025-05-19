<script setup>
const users = [
    { id: 1, name: '张三', level: '一级客户' },
    { id: 2, name: '王五', level: '三级客户' },
    { id: 3, name: '李四', level: '二级客户' },
]
</script>
<template>
    <article>
        <h1>用户管理</h1>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>等级</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.level }}</td>
                    <td><router-link :to="{ name: 'UserDetail', params: { id: item.id } }">详情</router-link></td>
                </tr>
            </tbody>
        </table>
    </article>
</template>
<style scoped>
article {
    padding: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    margin: 20px 0px;
}

table {
    border-collapse: collapse;
    width: 80%;
    cursor: pointer;
}

table tr:nth-child(2n) {
    background-color: #bebebe;
}

thead {
    background-color: rgb(104, 218, 202);
}

table th,
table td {
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #000;
}
</style>