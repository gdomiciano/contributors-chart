import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins

export default Bar.extend({
    mixins: [reactiveProp],
    props: {
        options: {
            type: Object,
        }
    },

    mounted () {
    // this.chartData is created in the mixin
    this.renderChart(this.chartData, this.options);
    },

    data() {
        return {
            defaultOptions: {
                responsive: true, // my new default options
                maintainAspectRatio: false, // my new default options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                        gridLines: {
                            display: true, // my new default options
                        },
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false,
                        },
                    }],
                }
            },
            plugins: []
        }
    },
});