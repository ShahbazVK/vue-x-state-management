<template>
<button @click="increase({value:500})">Add 2</button>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    methods: {
        ...mapActions(['increment', 'increase'])
    },

}
</script>

<style>

</style>
