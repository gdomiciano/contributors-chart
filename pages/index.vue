<template>
<section class="container">
    <div>
        <search />
        <error v-if="message" :message="message" />
        <chart v-if="chartInfo" />

        <div class="links">
            <a href="https://nuxtjs.org/" target="_blank" class="button--green" rel="noopener">Documentation</a>
            <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey" rel="noopener">GitHub</a>
        </div>
    </div>
</section>
</template>

<script>
    /* eslint-disable no-underscore-dangle */
    import Search from '~/components/Search.vue';
    import Error from '~/components/Error.vue';
    import Chart from '~/components/Chart.vue';

    export default {

        components: {
            Search,
            Error,
            Chart,
        },

        computed: {
            message() {
                return this.$store.state.error;
            },
            chartInfo() {
                return this.$store.state.chartInfo;
            },
        },

        methods: {
        },
    };
</script>

<style>
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    .container {
        height: 100%;
    }
</style>
