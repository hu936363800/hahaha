export default {
  state:{
    name:'奥尼尔'
  },
  mutations:{
    upName(state,payload){
        state.name = payload
    }
  },
  actions:{
    ybName(context){
      console.log(context)
      setTimeout( () => {
        context.commit('upName','我是异步传过来的')
      },1000)
    }
  },
  getters :  {
    fullName(state){
      return state.name + '1111'
    },
    fullName2(state,getters){
      return getters.fullName + '我是后来的name'
    },
    fullName3(state,getters,rootstate){
      return getters.fullName2 + '根state'+rootstate.counter
    }
  }
}