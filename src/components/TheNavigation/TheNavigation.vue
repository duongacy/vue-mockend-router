<template>
    <div class="navigation">
        <router-link class="router-link" to="/posts">Posts</router-link>
        <router-link class="router-link" to="/comments">Comments</router-link>
        <router-link class="router-link" to="/albums">Albums</router-link>
        <router-link class="router-link" to="/photos">Photos</router-link>
        <router-link class="router-link" to="/todos">Todos</router-link>
        <router-link class="router-link" to="/users">Users</router-link>
    </div>
</template>

<style scoped>
.navigation {
    display: flex;
    gap: 16px;
}

.router-link {
    display: inline-flex;
    height: 30px;
    padding-inline: 8px;
    align-items: center;
}

.router-link.router-link-active {
    background-color: red;
    color: white;
}
</style>