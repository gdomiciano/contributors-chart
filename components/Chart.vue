<template>
  <div class="Chart">
    <h2
      v-if="!!repositoryName"
      class="Chart-title"
      data-cy="chart-title"
    >
      {{ $t('chart title', { repository: repositoryName }) }}
    </h2>
    <div class="Chart-container">
      <p
        v-if="!!chartInfo"
        class="Chart-description"
      >
        {{ $tc('total contributors',chartInfo.labels.length) }}

        {{ chartInfo.length }}
      </p>
      <bar-chart
        :chart-data="chartInfo"
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
    margin-bottom: 15px;
  }

  .Chart-container {
    position: relative;
    height: calc(100vh - 400px);
    width: 80vw;
    margin: 0 auto;
    text-align: center;
  }
</style>