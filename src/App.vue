<template>
<base-container v-if="this.$store.state.userAuthenticated" title="Vuex">
    <h3>{{$store.state.counter}}</h3>
    <favorite-value></favorite-value>
    <button @click="add10">Add 10</button>
    <br><br>
    <change-counter></change-counter>
    <br>
    <br>
    <the-counter></the-counter>
</base-container>
<base-container v-else title="Authentication">
    <UserAuth></UserAuth>
</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
    components: {
        BaseContainer,
        ChangeCounter,
        TheCounter,
        FavoriteValue,
        UserAuth
    },
    methods: {
        add10() {
            this.$store.dispatch('increase', {
                value: 10
            })

        }
    }
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
