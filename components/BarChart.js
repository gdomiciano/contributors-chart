import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default Bar.extend({
    mixins: [reactiveProp],
    props: {
        options: {
            type: Object,
        },
    },

    mounted() {
    // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options);
    },

    // reset default oprions so it is possible to resize the chart
    data() {
        return {
            defaultOptions: {
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
            },
            plugins: [],
        };
    },
});
