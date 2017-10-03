<template>
    <div>
        <fixed-header/>
        <nuxt/>
    </div>
</template>

<script>
    import FixedHeader from '~/components/FixedHeader.vue';

    export default {
        components: {
            FixedHeader,
        },
    };
</script>

<style lang="scss">
    @import '~assets/scss/base';
</style>
