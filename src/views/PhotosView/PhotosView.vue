<template>
    <div style="display:flex">
        <div style="flex-grow:1" class="photo-list">
            <router-link class="photo-item" :to="'/photos/' + photo.id" v-for="photo in photos.slice(0, 10)"
                :key="photo.id">
                <figure>
                    <img :src="photo.thumbnailUrl" :alt="photo.title">
                    <figcaption>
                        <strong>Title:</strong> {{ photo.title }}
                    </figcaption>
                </figure>
            </router-link>
        </div>
        <div style="width: 600px;">
            <h3>Selected Photo</h3>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {
    inject: ['photos'],
}
</script>

<style scoped>
.photo-item {
    border: #ccc solid 2px;
    display: flex;
}
.photo-item.router-link-active {
    border-color: red;
}

.photo-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}


</style>