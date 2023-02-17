<template>
<button v-if="!userAuthenticated" @click="logout">Logout </button>
<button v-else @click="login">Login</button>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    methods: {
        login() {
            console.log(!this.userAuthenticated)
            this.$store.dispatch('login')
        },
        logout() {
            console.log(!this.userAuthenticated)

            this.$store.dispatch('logout')
        },
        ...mapGetters(['userAuthenticated'])
    }
}
</script>

<style>

</style>
