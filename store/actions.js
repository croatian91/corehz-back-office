import firebase from 'firebase/app'
import { firestoreAction } from 'vuexfire'

export default {
  onAuthStateChanged({ commit }, { authUser }) {
    commit('SET_AUTH_USER', { authUser })
    this.$router.replace('/')
  },
  bindWorkouts: firestoreAction(function ({ state, bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('workouts')
      .where('channel.uid', '==', state.user.uid)
    return bindFirestoreRef('workouts', ref, { wait: true })
  }),
  setWorkout: firestoreAction(function ({ state }, workout) {
    const workoutRef = workout.id
      ? this.$fire.firestore.collection('workouts').doc(workout.id)
      : this.$fire.firestore.collection('workouts').doc()
    const createdAt =
      workout.createdAt || firebase.firestore.FieldValue.serverTimestamp()
    const updatedAt = workout.createdAt
      ? firebase.firestore.FieldValue.serverTimestamp()
      : null
    return workoutRef.set(
      {
        ...workout,
        channel: state.channel,
        createdAt,
        updatedAt,
      },
      { merge: true }
    )
  }),
  deleteWorkout: firestoreAction(function ({ state }, workout) {
    return this.$fire.firestore.collection('workouts').doc(workout.id).delete()
  }),
}
