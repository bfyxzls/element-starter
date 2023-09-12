import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 数据状态
    count: 1 // 初始化状态
  },
  mutations: { // 主要作用是确保状态变更的可追踪性
    //修改指定的state的值
    CHANGE_SETTING: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions:{
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    },
  }
});

export default store
