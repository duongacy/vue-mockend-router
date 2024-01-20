<template>
    <div>
        <router-link :to="'/posts/' + post.id" v-if="post">Post: {{ post.title }}</router-link>

        <p><strong>Name:</strong> {{ comment.name }}</p>
        <p><strong>Body:</strong> {{ comment.body }}</p>
    </div>
</template>

<script>
export default {
    inject: ['comments', 'posts'],
    computed: {
        comment() {
            const commentId = this.$route.params.commentId
            return this.comments.find(comment => comment.id == commentId)
        },
        post() {
            return this.posts.find(post => post.id == this.comment.postId)
        }
    }
}
</script>

<style lang="scss" scoped></style>