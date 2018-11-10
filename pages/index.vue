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
    import Search from '@/components/Search.vue';
    import Error from '@/components/Error';
    import Chart from '@/components/Chart';
    import { mapActions, mapGetters } from 'vuex';

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
            ...mapGetters([
                'message',
                'chartInfo',
            ]),
        },

        methods: {
            ...mapActions([
                'getChartInfo',
            ]),

            async getInfo(repository) {
                await this.getChartInfo(repository.trim());
                // eslint-disable-next-line
                this.repository = repository.split('/')[1];
            },
        },
    };
</script>