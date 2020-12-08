<template>
  <v-list>
    <v-card-title v-text="title"> Default title </v-card-title>
    <v-list-item v-for="item in items" :key="item.id">
      <v-list-item-icon>
        <v-icon color="primary">
          {{ top ? 'mdi-podium-gold' : 'mdi-emoticon-sad-outline' }}
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar>
        <v-img :src="item.image"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'RankingComponent',
  props: {
    title: {
      type: String,
      default: 'Most 5 liked workouts',
    },
    top: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
