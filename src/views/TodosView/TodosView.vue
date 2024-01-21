<template>
    <div style="display:flex">
        <div class="todo-list">
            <router-link class="todo-item" v-for="todo in todos" :key="todo.id" :to="'/todos/' + todo.id">{{ todo.title
            }}</router-link>
        </div>
        <div style="width: 400px;">
            <h3>Selected Item</h3>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {
    inject: ['todos'],
}
</script>

<style scoped>
.todo-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
}

.todo-item {
    display: flex;
    border: #ccc solid 2px;

}

.todo-item.router-link-active {
    border-color: red;
}
</style>