<template>
    <section class="container">
        <div>
            <search @showChart="getInfo" />
            <error v-if="message" :message="message" />
            <chart v-if="chartInfo" :repo="repository"/>
        </div>
    </section>
</template>

<script>
    import Search from '~/components/Search.vue';
    import Error from '~/components/Error.vue';
    import Chart from '~/components/Chart.vue';

    export default {

        data() {
            return {
                repository: null,
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
            chartInfo() {
                return this.$store.state.chartInfo;
            },
        },

        methods: {
            async getInfo(repository) {
                await this.$store.dispatch('getChartInfo', repository);
                this.repository = repository;
            },
        },
    };
</script>