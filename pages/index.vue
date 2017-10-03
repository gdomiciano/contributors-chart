<template>
<section class="container">
    <div>
        <search />
        <error v-if="message" :message="message" />
        <chart />
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
    import Error from '~/components/Error.vue'
    import Chart from '~/components/Chart.vue'

    export default {
        data() {
            return {
                online: true,
            };
        },

        components: {
            Search,
            Error,
            Chart,
        },

        computed: {
            message() {
                return this.$store.state.error;
            },
        },

        methods: {
        },
    };
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    .network {
        font-weight: 400;
        font-size: 1rem;
    }

    .network .circle {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: green;
        padding: .1rem .5rem;
        border-radius: 1rem;
    }

    .network.offline .circle {
        background: red;
    }
</style>
