<template>
    <div v-if="album">
        <p>
            <strong>Title: </strong>{{ album.title }}
        </p>
        <router-link :to="'/users/' + user.id">
            <strong>User: </strong> {{ user.name }}
        </router-link>
    </div>
</template>

<script>
export default {
    inject: ['albums', 'users'],
    computed: {
        album() {
            const albumId = this.$route.params.albumId;
            return this.albums.find(album => album.id == albumId)
        },
        user() {
            const userId = this.album.userId
            return this.users.find(item => item.id == userId)
        }
    },
}
</script>
