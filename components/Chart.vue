<template>
    <div class="Chart">
        <h2 class="Chart-title"> {{repo}}'s chart:</h2>
        <bar-chart :chart-data="chartInfo"></bar-chart>
    </div>
</template>

<script>
    import BarChart from './BarChart.js';

    export default {
        name: 'Chart',

        props: {
            repo: {
                type: String,
                required: true,
            },
        },

        components: {
            BarChart,
        },

        beforeMount() {
            this.visibleArea = window.innerHeight / 2;
        },

        computed: {
            chartInfo() {
                return this.$store.state.chartInfo;
            },
        },
    };

</script>

<style scoped>

    .Chart {
        width: 95%;
        max-height: 50%;
        margin: 0 auto;
    }

    .Chart-title{
        font-size: 28px;
        text-align: center;
    }
</style>