import { createStore } from 'vuex'

export default createStore({
  state: {
    userData: {},
    token: ''
  },
  getters: {
    storageToken: state => state.token,
    storageUser: state => state.userData
  },
  mutations: {
  },
  actions: {
    setToken: ({state}, value) => state.token = value,
    setUser: ({state}, value) => state.userData = value
  },
  modules: {
  }
})
