<template>
    <div style="display:flex">
        <div class="post-list">
            <router-link class="post-item" v-for="post in posts" :key="post.id" :to="'/posts/' + post.id">
                <strong>Title: </strong>{{ post.title }}
            </router-link>
        </div>
        <div style="width: 400px;">
            <h3>Selected post</h3>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    inject: ['posts'],
    mounted() {
        console.log("posts", this.posts);
    }
}
</script>

<style scoped>
.post-list {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 16px;
}

.post-item {
    border: #ccc solid 2px;
    display: flex;
}

.post-item.router-link-active {
    border-color: red;
}
</style>
