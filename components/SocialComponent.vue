<template>
  <v-form ref="socialForm" v-model="socialValid" lazy-validation>
    <v-row>
      <v-text-field
        v-model="socialLink"
        :rules="socialRules"
        hint="Copy paste a Youtube or Vimeo link. Maximum 3 links allowed"
        label="Video link"
      />
      <v-btn :disabled="!socialValid" icon @click="addSocialLink">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <v-list>
      <v-list-item v-for="(link, i) in social" :key="i">
        <v-list-item-icon>
          <v-icon v-text="getIconName(link)" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ link }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="social.splice(i, 1)">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-form>
</template>

<script>
export default {
  name: 'SocialComponent',
  props: {
    social: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      socialValid: true,
      socialLink: null,
      socialRules: [
        () => this.social.length < 3 || 'Maximum 3 links allowed',
        (v) =>
          /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/.test(
            v
          ) ||
          /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/.test(
            v
          ) ||
          'Should be a Youtube or Vimeo Link',
      ],
    }
  },
  methods: {
    addSocialLink() {
      if (!this.$refs.socialForm.validate()) return
      this.social.push(this.socialLink)
      this.$refs.socialForm.reset()
    },
    getIconName(link) {
      if (link.includes('youtu')) {
        return 'mdi-youtube'
      } else if (link.includes('vimeo')) {
        return 'mdi-vimeo'
      } else {
        return 'mdi-video'
      }
    },
  },
}
</script>
