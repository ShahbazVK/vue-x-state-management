<template>
    <div>
        {{ counter }}
        <p>We do more...</p>
    </div>
</template>

<script>
export default {
    computed:{
        counter(){
            return this.$store.getters.finalCounter
        }
    }
}
</script>

<style>

</style>