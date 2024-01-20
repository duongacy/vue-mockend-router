<template>
    <div class="user-item" v-if="user">
        <div class="user-item-address">
            <strong>Address:</strong>
            <details>
                <summary>{{ user.address.street }}-{{ user.address.city }} </summary>
                <div class="user-item-address-detail">
                    <small>
                        <strong>City:</strong> {{ user.address.city }}
                    </small>
                    <small>
                        <strong>Street:</strong> {{ user.address.street }}
                    </small>
                    <small>
                        <strong>Suite:</strong> {{ user.address.suite }}
                    </small>
                    <small>
                        <strong>ZipCode:</strong> {{ user.address.zipcode }}
                    </small>
                    <small>
                        <strong>Geo:</strong>{{ user.address.geo.lat }} / {{ user.address.geo.lng }} (lat/long)
                    </small>
                </div>
            </details>
        </div>
        <div class="user-item-company">
            <strong>Company:</strong>
            <details>
                <summary>{{ user.company.name }}</summary>
                <div class="user-item-company-detail">
                    <small>
                        <strong>Name:</strong> {{ user.company.name }}
                    </small>
                    <small>
                        <strong>CatchPhrase:</strong> {{ user.company.catchPhrase }}
                    </small>
                    <small>
                        <strong>Bs:</strong> {{ user.company.bs }}
                    </small>
                </div>
            </details>
        </div>
        <p>
            <strong>Email:</strong>{{ user.email }}
        </p>
        <p>
            <strong>Name:</strong>{{ user.name }}
        </p>
        <p>
            <strong>Phone:</strong>{{ user.phone }}
        </p>
        <p>
            <strong>Username:</strong>{{ user.username }}
        </p>
        <p>
            <strong>Website:</strong>{{ user.website }}
        </p>
    </div>
    <div v-else>Not found</div>
</template>
<script>
export default {
    inject: ['users'],
    computed: {
        user() {
            const userId = this.$route.params.userId;
            return this.users.find(item => item.id == userId)
        }
    },
}
</script>
<style>
.user-item {
    border: #ccc solid 2px;
}

.user-item-address {
    display: flex;
    gap: 8px;
}

.user-item-company {
    display: flex;
    gap: 8px;
}

.user-item-address-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.user-item-company-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>