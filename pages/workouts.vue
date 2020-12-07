<template>
  <div>
    <v-card>
      <v-card-title>
        My workouts
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search..."
          single-line
          hide-details
        />
      </v-card-title>
      <v-btn :loading="loading" color="primary" class="ma-2 white--text">
        <v-icon left dark> mdi-plus </v-icon>
        New
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="$store.state.workouts"
        :items-per-page="15"
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading"
        class="elevation-1"
      >
        <template v-slot:item.image="{ item }">
          <v-list-item-avatar size="85">
            <v-img :src="item.image"></v-img>
          </v-list-item-avatar>
        </template>
        <template v-slot:item.createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleString() }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-snackbar v-model="snackbar" color="red" :timeout="-1">
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
  layout: 'admin',
  data() {
    return {
      search: '',
      loading: false,
      snackbar: false,
      error: '',
      headers: [
        {
          text: '',
          value: 'image',
          align: 'center',
        },
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        {
          text: 'Rating (max 5)',
          align: 'start',
          value: 'rating',
        },
        {
          text: 'Sessions done',
          align: 'start',
          value: 'sessionsCount',
        },
        {
          text: 'Creation date',
          align: 'start',
          value: 'createdAt',
        },
        {
          text: 'Actions',
          align: 'start',
          value: 'actions',
          sortable: false,
        },
      ],
    }
  },
  async mounted() {
    try {
      this.loading = true
      await this.$store.dispatch('bindWorkouts')
    } catch (e) {
      this.error = e
      this.snackbar = true
    } finally {
      this.loading = false
    }
  },
  methods: {},
}
</script>
