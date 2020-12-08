<template>
  <StatCardComponent
    title="Sessions"
    tooltip-content="Workouts performed during this year, month and week respectively."
  >
    <template v-slot:charts>
      <CoreLineChart
        :chartdata="getChannelStats.chartYearData"
        :options="options"
      />
      <CoreLineChart
        :chartdata="getChannelStats.chartmonthData"
        :options="options"
      />
      <CoreLineChart
        :chartdata="getChannelStats.chartWeekData"
        :options="options"
      />
    </template>
  </StatCardComponent>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SessionsComponent',
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          labels: {
            fontColor: 'white',
            fontSize: 16,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: 'grey',
                zeroLineColor: 'grey',
                zeroLineWidth: 0.5,
                lineWidth: 0.5,
                fontFamily: 'sans-serif',
              },
              ticks: {
                fontSize: 16,
                fontColor: 'white',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 16,
                fontColor: 'white',
              },
              gridLines: {
                display: true,
                color: 'grey',
                zeroLineColor: 'grey',
                zeroLineWidth: 0.5,
                lineWidth: 0.5,
              },
            },
          ],
        },
      },
    }
  },
  computed: {
    ...mapGetters(['getChannelStats']),
  },
}
</script>
