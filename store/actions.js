export default {
  onAuthStateChanged({ commit }, { authUser }) {
    commit('SET_AUTH_USER', { authUser })
    this.$router.replace('/')
  },
}
