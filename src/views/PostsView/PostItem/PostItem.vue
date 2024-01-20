<template>
    <div>
        <p>
            <strong>Title:</strong>
            {{ post.title }}
        </p>
        <p>
            <strong>Body:</strong>
            {{ post.body }}
        </p>
        <router-link :to="'/users/' + user.id">
            <strong>User:</strong>
            {{ user.name }}
        </router-link>
    </div>
</template>

<script>
export default {
    inject: ['posts', 'users'],
    computed: {
        post() {
            const postId = this.$route.params.postId
            return this.posts.find(post => post.id == postId)
        },
        user() {
            const userId = this.post.userId;
            return this.users.find(user => user.id == userId)
        }
    }
}
</script>
