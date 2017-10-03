<template>
    <section class="container">
        <div>
            <search />
            <error v-if="message" :message="message" />
            <chart v-if="chartInfo" />
        </div>
    </section>
</template>

<script>
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
</style>
