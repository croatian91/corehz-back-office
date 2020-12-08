<template>
  <v-container fill-height fluid>
    <v-col align="center">
      <h1>Welcome to CoreHz.io</h1>

      <v-divider class="ma-3 divider" inset />

      <v-row justify="center">
        <v-btn class="ma-2" fab large color="blue" @click="onFacebookLogin()">
          <v-icon size="45">mdi-facebook</v-icon>
        </v-btn>

        <v-btn class="ma-2" fab large color="red" @click="onGoogleLogin()">
          <v-icon size="45">mdi-google-plus</v-icon>
        </v-btn>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <div class="my-2">
          <v-btn color="primary" dark large @click="onSendEmail()"
            >Sign-in</v-btn
          >
        </div>
      </v-row>
    </v-col>

    <v-snackbar v-model="emailSent" color="green" dark>
      An email has been sent to
      <b>{{ email }}</b
      >, please do checkout your inbox.
    </v-snackbar>

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

<style scoped>
.divider {
  margin: 5vh !important;
}
</style>

<script>
import firebase from 'firebase/app'

export default {
  data() {
    return {
      error: '',
      snackbar: false,
      email: '',
      emailSent: false,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          return (
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value
            ) || 'Invalid e-mail.'
          )
        },
      },
    }
  },
  mounted() {
    if (Object.keys(this.$nuxt.$route.query)) {
      this.confirmSignIn(this.$nuxt.$route.fullPath)
    }
    this.email = window.localStorage.getItem('email') || ''
  },
  methods: {
    async onSendEmail() {
      const actionCodeSettings = {
        url: 'http://localhost:3000/login',
        // This must be true.
        handleCodeInApp: true,
        dynamicLinkDomain: 'corehz.page.link',
      }

      try {
        await this.$fire.auth.sendSignInLinkToEmail(
          this.email,
          actionCodeSettings
        )
        this.emailSent = true
        window.localStorage.setItem('email', this.email)
      } catch (e) {
        this.error = e
        this.snackbar = true
      }
    },
    async confirmSignIn(url) {
      try {
        if (this.$fire.auth.isSignInWithEmailLink(url)) {
          let email = window.localStorage.getItem('email')
          if (!email) {
            email = window.prompt('Please provide your email for confirmation')
          }
          await this.$fire.auth.signInWithEmailLink(email, url)
        }
      } catch (e) {
        this.error = e
        this.snackbar = true
      }
    },
    async onFacebookLogin() {
      try {
        const provider = new firebase.auth.FacebookAuthProvider()
        await this.$fire.auth.signInWithPopup(provider)
      } catch (e) {
        this.error = e
        this.snackbar = true
      }
    },
    async onGoogleLogin() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        await this.$fire.auth.signInWithPopup(provider)
      } catch (e) {
        this.error = e
        this.snackbar = true
      }
    },
  },
}
</script>
