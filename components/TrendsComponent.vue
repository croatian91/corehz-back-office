<template>
  <StatCardComponent title="Trends" tooltip-content="During this year.">
    <template v-slot:charts>
      <CoreRadarChart
        :chartdata="getChannelStats.chartWorkoutStyleData"
        :options="options"
      />
      <CoreRadarChart
        :chartdata="getChannelStats.chartMuscleGroupData"
        :options="options"
      />
      <CoreRadarChart
        :chartdata="getChannelStats.chartEquipmentData"
        :options="options"
      />
    </template>
  </StatCardComponent>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TrendsComponent',
  data() {
    return {
      options: {
        legend: {
          labels: {
            fontColor: 'white',
            fontSize: 16,
          },
        },
        scale: {
          pointLabels: {
            fontColor: 'white',
            fontSize: 16,
          },
          ticks: {
            display: false,
          },
          gridLines: {
            color: 'grey',
            lineWidth: 0.5,
          },
        },
      },
    }
  },
  computed: {
    ...mapGetters(['getChannelStats']),
  },
}
</script>
