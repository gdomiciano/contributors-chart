<template>
  <div class="Chart">
    <h2 class="Chart-title"> {{ repositoryName }}'s chart:</h2>
    <div class="Chart-container">
      <bar-chart
        :chart-data="corlorfulChart"
        :options="options"
      />
    </div>
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

  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            stacked: true,
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            },
          }],
        },
      }
    }
  },

  computed: {
    ...mapGetters ([
      'chartInfo',
      'repositoryName'
    ])
  },

  updated () {
    this.$el.querySelector('.Chart-container').scrollIntoView();
  }
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

  .Chart-container {
    position: relative;
    height: calc(100vh - 400px);
    width: 80vw;
    margin: 0 auto;
  }
</style>