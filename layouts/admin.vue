<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn @click="$fire.auth.signOut()">
        Sign-out
        <v-icon right dark> mdi-logout </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }} - Corehz.io</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      clipped: true,
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/admin',
        },
        {
          icon: 'mdi-format-list-bulleted',
          title: 'My workouts',
          to: '/workouts',
        },
      ],
      title: 'CoreHz.io - Back office',
    }
  },
}
</script>
