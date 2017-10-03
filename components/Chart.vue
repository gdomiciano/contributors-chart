<template>
    <div class="Chart">
        <!-- here is the chart -->
        <bar-chart :chart-data="chartInfo"></bar-chart>
    </div>
</template>

<script>
    import BarChart from './BarChart.js'
    export default {
        name: 'Chart',
        components: {
            BarChart
        },

        beforeMount() {
            this.visibleArea = window.innerHeight/2;
        },

        computed: {
            chartInfo() {
                return this.$store.state.chartInfo;
            },
        },
    }

</script>

<style scoped>

    .Chart {
        width: 95%;
        max-height: 50%;
        margin: 0 auto;
    }
</style>