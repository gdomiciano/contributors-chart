<template>
    <div class="Chart">
        <h2 class="Chart-title"> {{ repositoryName }}'s chart:</h2>
        <bar-chart :chart-data="chartInfo"></bar-chart>
    </div>
</template>

<script>
    import BarChart from '@/components/BarChart';
    import { mapGetters } from 'vuex'

    export default {
        name: 'Chart',

        components: {
            BarChart,
        },

        computed: {
            ...mapGetters ([
                'chartInfo',
                'repositoryName'
            ]),
        },

        beforeMount() {
            this.visibleArea = window.innerHeight / 2;
        },
    };

</script>

<style scoped>

    .Chart {
        width: 95%;
        max-height: 50%;
        margin: 0 auto 40px;
    }

    .Chart-title{
        font-size: 28px;
        text-align: center;
    }
</style>