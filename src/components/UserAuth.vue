<template>
<button v-if="userAuthenticated" @click="logout">Logout </button>
<button v-else @click="login">Login</button>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['login','logout']),
        // login() {
        //     // console.log(this.userAuthenticated)
        //     this.$store.dispatch('login')
        // },
        // logout() {
        //     // console.log(this.userAuthenticated)
        //     this.$store.dispatch('logout')
        // },
    },
    computed:{
        ...mapGetters(['userAuthenticated'])
    }
}
</script>

<style>

</style>