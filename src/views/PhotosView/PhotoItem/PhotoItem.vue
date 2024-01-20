<template>
    <figure v-if="photo">
        <img :src="photo.url" :alt="photo.title">
        <figcaption>
            <strong>Title:</strong> {{ photo.title }}
        </figcaption>
        <p>
            <strong>Album:</strong> {{ getAlbum(photo.albumId).title }}
        </p>
    </figure>
    <p v-else>Not found</p>
</template>

<script>
export default {
    inject: ['albums', 'photos'],
    computed: {
        photo() {
            return this.photos.find(photo => photo.id == this.$route.params.photoId)
        },
    },
    methods: {
        getAlbum(albumId) {
            return this.albums.find(album => album.id == albumId)
        }
    }
}    
</script>
