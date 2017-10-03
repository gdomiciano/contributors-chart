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
    @import '~assets/scss/colors';
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: color($grey, 800);
    }

    li {
        list-style: none;
    }
</style>
