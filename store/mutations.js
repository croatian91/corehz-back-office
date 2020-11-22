export default {
  SET_AUTH_USER: (state, { authUser }) => {
    if (!authUser) {
      state.user = null
    } else {
      const { uid, email, emailVerified } = authUser

      state.user = { uid, email, emailVerified }
    }
  },
}
