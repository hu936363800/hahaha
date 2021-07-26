import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/modulesA.js'

const state = {
     counter :1000,
     info:{
       name:'human',
       age:18,
       height:188
     }
   }
// 1安装插件
Vue.use(Vuex)
// 创建对象
const store = new Vuex.Store({
   state,
   getters,
   mutations,
   actions,
   modules:{
      a:moduleA
      // b:moduleB
   },

})
export default store
