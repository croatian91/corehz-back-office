import 'firebase/firestore'
import { firestoreAction } from 'vuexfire'

export default {
  onAuthStateChanged({ commit }, { authUser }) {
    commit('SET_AUTH_USER', { authUser })
    this.$router.replace('/admin')
  },
  bindWorkouts: firestoreAction(function ({ state, bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('workouts')
      .where('channel.uid', '==', state.user.uid)
    return bindFirestoreRef('workouts', ref, { wait: true })
  }),
}
