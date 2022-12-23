import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {},
        email: '',
        requestedPage: ''
    },
    mutations: {
        setEmail(state, email) {
            state.email = email;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {

    }
})