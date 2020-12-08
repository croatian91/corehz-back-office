<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title class="headline pa-2">
        {{ title }}
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search..."
          single-line
          hide-details
          :disabled="!items.length"
        />
      </v-card-title>
      <v-btn
        :loading="loading"
        color="primary"
        class="ma-2 white--text"
        :to="getAddPath"
      >
        <v-icon left dark> mdi-plus </v-icon>
        New
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="15"
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading"
        class="elevation-1"
      >
        <template v-slot:item.image="{ item }">
          <v-list-item-avatar size="85">
            <v-img :src="item.image" />
          </v-list-item-avatar>
        </template>
        <template v-slot:item.createdAt="{ item }">
          {{ item.createdAt.toDate().toLocaleString() }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon>
            <v-icon small @click="onEditItem(item)"> mdi-pencil </v-icon>
          </v-btn>

          <v-dialog
            v-model="confirmDialog"
            :retain-focus="false"
            persistent
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon v-on="on">
                <v-icon small> mdi-delete </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"> Are you sure? </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="grey darken-1"
                  text
                  @click="confirmDialog = false"
                >
                  No
                </v-btn>
                <v-btn
                  color="primary darken-1"
                  text
                  @click="onDeleteItem(item)"
                >
                  Yes
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card>

    <v-snackbar v-model="snackbar" color="red" :timeout="-1" dark>
      {{ error }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'CoreList',
  props: {
    title: {
      type: String,
      default: 'My List',
    },
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      loading: false,
      snackbar: false,
      confirmDialog: false,
      error: '',
    }
  },
  computed: {
    getAddPath() {
      return `/${this.$nuxt.$route.name}/add`
    },
  },
}
</script>
