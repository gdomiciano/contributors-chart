// CommitChart.js

import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Bar.extend({
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin
    // this.renderChart(this.chartData, this.options)
    this.renderChart(this.chartData, this.options)
  }
});



// import { Line, mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins

// export default Line.extend({
//   mixins: [reactiveProp],
//   props: ['options'],
//   mounted () {
//     // this.chartData is created in the mixin
//     this.renderChart(this.chartData, this.options)
//   }
// })