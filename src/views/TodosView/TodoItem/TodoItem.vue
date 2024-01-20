<template>
    <div>
        <p>
            <strong>Title:</strong>
            {{ todo.title }}
        </p>
        <p>
            <strong>Status:</strong>
            {{ todo.completed == true ? 'Completed' : 'Todo' }}
        </p>
        <router-link v-if="user" :to="'/users/' + user.id">{{ user.name }}</router-link>
    </div>
</template>

<script>
export default {
    inject: ['todos', 'users'],
    computed: {
        todo() {
            const todoId = this.$route.params.todoId;
            return this.todos.find(todo => todo.id == todoId)
        },
        user() {
            return this.users.find(user => user.id == this.todo.userId)
        }
    }
}
</script>

<style lang="scss" scoped></style>