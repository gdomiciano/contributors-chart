<template>
  <section class="container">
    <div>
      <search @showChart="getInfo" />
      <error
        v-if="message"
        :message="message" />
      <chart v-if="chartInfo" />
    </div>
  </section>
</template>

<script>
    import Search from '@/components/Search.vue';
    import Error from '@/components/Error';
    import Chart from '@/components/Chart';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        components: {
            Search,
            Error,
            Chart,
        },

        data() {
            return {
                repository: null,
            };
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
            },
        },
    };
</script>