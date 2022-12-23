import { createStore } from 'vuex'
import { Auth } from '@aws-amplify/auth';

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    }
  },
  actions: {
    async checkAuth(context) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        context.commit('setIsLoggedIn', true);
      } catch (error) {
        console.error(error)
        context.commit('setIsLoggedIn', false);
      }
    }
  }
})
