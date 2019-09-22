import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: null,
    },
    chartData: {
      type: Object,
      default: null,
    },
  },

  mounted () {
    // this.chartData is created in the mixin
    this.renderChart(this.chartData, this.options);
  },
};