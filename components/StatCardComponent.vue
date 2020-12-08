<template>
  <v-container>
    <v-card class="mb-2">
      <v-row class="ml-2">
        <v-card-title class="headline"> {{ title }} </v-card-title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon size="28" v-bind="attrs" color="primary" v-on="on">
              mdi-information-outline
            </v-icon>
          </template>
          <span>{{ tooltipContent }}</span>
        </v-tooltip>
      </v-row>
      <v-divider inset />
      <v-row class="justify-space-around ma-2 pa-2">
        <slot name="charts"> No chart available </slot>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'StatCardComponent',
  props: {
    title: {
      type: String,
      default: 'No Title',
    },
    tooltipContent: {
      type: String,
      default: 'No explanation',
    },
  },
}
</script>

<style></style>
