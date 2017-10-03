<template>
    <div class="Chart">
        <!-- here is the chart -->
        <bar-chart :chart-data="chartInfo" :options="options" hei></bar-chart>
    </div>
</template>

<script>
import BarChart from './BarChart.js'
export default {
    name: 'Chart',
    components: {
      BarChart
    },
    data () {
      return {
        chartInfo: null,
        options: {responsive: true, maintainAspectRatio: false},
      }
    },
    mounted () {
      this.fillData();
    },
    methods: {
      fillData () {
        this.chartInfo = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }
      },
      async getContrib(){
                await this.$store.dispatch('getChartInfo', this.user);
                this.chartInfo = this.$store.state.chartInfo;
            }
    }
  }

</script>

<style scoped>

.Chart {
  width: 95%;
  height: 80%;
  margin: 0 auto;
}
</style>