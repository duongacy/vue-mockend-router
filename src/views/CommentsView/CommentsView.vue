<template>
    <div style="display:flex">
        <div class="comment-list">
            <router-link class="comment-item" v-for="comment in comments" :to="'/comments/' + comment.id" :key="comment.id">
                {{ comment.name }}
            </router-link>
        </div>
        <div style="width: 400px;">
            <h3>Selected Comment</h3>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {
    inject: ['comments'],
}
</script>

<style scoped>
.comment-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
}

.comment-item {
    border: #ccc solid 2px;
}
</style>