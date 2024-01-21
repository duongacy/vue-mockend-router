<template>
    <div style="display:flex">
        <div class="user-list" style="flex-grow:1">
            <p v-for="user in users" :key="user">
                <router-link class="user-link" :to="'/users/' + user.id">{{ user.name }}</router-link>
            </p>
        </div>
        <div style="width: 400px;">
            <h2>Selected User</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UserItem from './UserItem/UserItem.vue';

export default {
    components: { UserItem },
    inject: ['users'],
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter');
        // const confirmed = confirm(`Do you want to enter ${to.name}?`)
        // next(confirmed);
        next()
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave');
        // const confirmed = confirm(`Do you want to leave ${from.name}?`)
        // next(confirmed)
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate');
        next()
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
}
</script>

<style scoped>
.user-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.user-link.router-link-active {
    color: white;
    background-color: green;
}
</style>