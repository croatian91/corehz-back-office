<template>
  <div>
    <v-card class="pa-2">
      <v-card-title>
        {{ edit ? 'Edit a ' : 'Add new ' }} {{ getModelName }}
        <v-spacer />
        <v-btn
          :disabled="!valid"
          color="primary"
          class="ma-2 white--text"
          @click="onSave"
        >
          <v-icon left dark> {{ edit ? 'mdi-check' : 'mdi-plus' }} </v-icon>
          {{ edit ? 'Save' : 'Add' }}
        </v-btn>
      </v-card-title>

      <v-form ref="form" v-model="valid" lazy-validation> </v-form>
    </v-card>

    <v-snackbar v-model="snackbar" color="red" :timeout="-1" dark>
      {{ error }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'CoreDetail',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      snackbar: false,
      error: '',
      valid: true,
    }
  },
  computed: {
    getModelName() {
      return this.$nuxt.$route.name
    },
  },
  methods: {
    onSave() {},
  },
}
</script>
