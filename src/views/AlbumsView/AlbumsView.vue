<template>
    <div style="display:flex">
        <div style="flex-grow:1" class="album-list">
            <router-link class="album-item" v-for="album in albums" :key="album.id" :to="albumDetailLink(album.id)">
                {{ album.title }}
            </router-link>
        </div>
        <div style="width: 400px;">
            <h3>Selected Album</h3>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {
    inject: ['albums'],
    methods: {
        albumDetailLink(albumId) {
            return {
                name: 'album-detail',
                params: {
                    albumId
                },
                query: {
                    sort: 'asc'
                }
            }
        }
    },


}
</script>

<style scoped>
.album-list {
    display: flex;
    flex-grow: 1;
    gap: 8px;
    flex-direction: column;
}

.album-item {
    display: flex;
    border: #ccc solid 2px;
}

.album-item.router-link-active {
    border-color: red;
}
</style>