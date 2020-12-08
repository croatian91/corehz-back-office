<template>
  <StatCardComponent title="Rankings" tooltip-content="All time.">
    <template v-slot:charts>
      <v-icon size="64" color="primary"> mdi-podium </v-icon>
      <RankingComponent :items="getChannelStats.topWorkouts" />
      <RankingComponent
        :items="getChannelStats.lastWorkouts"
        :top="false"
        title="Least 5 liked workouts"
      />
      <v-icon size="64" color="primary"> mdi-podium </v-icon>
    </template>
  </StatCardComponent>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RankingsComponent',
  computed: {
    ...mapGetters(['getChannelStats']),
  },
}
</script>
