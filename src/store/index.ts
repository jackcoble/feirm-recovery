import { createStore } from 'vuex'

export default createStore({
  state: {
    mnemonic: ""
  },
  mutations: {
    setMnemonic(state, mnemonic) {
      state.mnemonic = mnemonic;
    }
  },
  getters: {
    getMnemonic: state => state.mnemonic
  }
})
