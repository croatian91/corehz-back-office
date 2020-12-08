<template>
  <div>
    <v-card class="pa-2">
      <v-card-title>
        Add a new workout
        <v-spacer />
        <v-btn
          :disabled="!valid || !!uploadProgress"
          color="primary"
          class="ma-2 white--text"
          @click="setWorkout"
        >
          <v-icon left dark> mdi-plus </v-icon>
          Add
        </v-btn>
      </v-card-title>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                v-model="title"
                :rules="[(v) => !!v || 'The title is required']"
                label="Title"
                required
              />
            </v-col>
            <v-col>
              <v-select
                v-model="difficulty"
                item-text="text"
                item-value="value"
                :items="levels"
                :rules="[(v) => !!v || 'The difficulty is required']"
                label="Difficulty"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-if="image">
                <template v-slot:default="{ hover }">
                  <v-img
                    class="workout-img"
                    :src="image"
                    max-width="400"
                    max-height="250"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="primary lighten-5"
                        />
                      </v-row>
                    </template>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute>
                        <v-btn color="primary" dark @click="resetImage">
                          <v-icon left>mdi-delete</v-icon>
                          Delete
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-img>
                </template>
              </v-hover>
              <v-file-input
                v-else
                :rules="imageRules"
                :disabled="!!uploadProgress"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                label="Image"
                @change="uploadImage"
              />
              <v-progress-linear
                v-if="uploadProgress"
                :value="uploadProgress"
              />
              <v-card-subtitle v-if="uploadProgress">
                {{ Math.ceil(uploadProgress) }}% uploaded...
              </v-card-subtitle>
            </v-col>
            <v-col>
              <SocialComponent :social="social" />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-snackbar v-model="imageUploaded" color="green" dark>
      Image uploaded successfully
    </v-snackbar>

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

<style scoped>
.workout-img {
  border-radius: 10px;
}
</style>

<script>
import SocialComponent from '~/components/SocialComponent.vue'

export default {
  components: {
    SocialComponent,
  },
  layout: 'admin',
  data() {
    return {
      imageUploaded: false,
      uploadProgress: null,
      uploadTask: null,
      snackbar: false,
      error: '',
      valid: true,
      title: '',
      difficulty: null,
      levels: [
        { text: 'Beginner', value: 0.5 },
        { text: 'Easy', value: 1 },
        { text: 'Medium', value: 2 },
        { text: 'Hard', value: 3 },
        { text: 'Very Hard', value: 3.5 },
      ],
      social: [],
      image: null,
      imageRules: [
        (v) => !v || v.size < 4000000 || 'Image size should be less than 4 MB!',
      ],
    }
  },
  methods: {
    async setWorkout() {
      if (!this.$refs.form.validate()) return
      try {
        await this.$store.dispatch('setWorkout', {
          title: this.title,
          difficulty: this.difficulty,
          social: this.social,
          image: this.image,
        })
      } catch (e) {
        this.error = e
      }
    },
    uploadImage(file) {
      if (!file) return

      const uid = this.$store.state.user.uid
      this.uploadTask = this.$fire.storage
        .ref()
        .child(`images/${uid}/${file.name}`)
        .put(file)

      this.uploadTask.on(
        'state_changed',
        this.onStateChanged,
        this.onError,
        this.onUploaded
      )
    },
    resetImage() {
      this.image = null
    },
    onStateChanged(snapshot) {
      this.uploadProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    },
    onError(e) {
      this.error = e
      this.snackbar = true
      this.uploadProgress = null
      this.uploadTask = null
    },
    async onUploaded() {
      this.image = await this.uploadTask.snapshot.ref.getDownloadURL()
      this.imageUploaded = true
      this.uploadProgress = null
      this.uploadTask = null
    },
  },
}
</script>
