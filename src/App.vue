<template>
  <div id="app">
    <h1>{{$store.state.a.name}}</h1>
    <button @click="asyncName">异步修改</button>
    <h1>---------上面的异步修改</h1>
    <h2>{{$store.getters.fullName3}}</h2>
    <h2>------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="upName">丢该名字</button>
    <h1>---------modules中内容</h1>
    <h2>{{$store.state.info}}</h2>
    <h2>----------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="updateInfo">增加名字</button>
<HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {INCREMENT} from './store/Mutations-type.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
			// console.log(this.$store.dispatch('dateInfo','我是携带的信息'))
      this.$store.dispatch('dateInfo','我是携带的信息')
      .then(res => {
        console.log(res);
        console.log('里面完成了提交')
      })
    },
    upName(){
      this.$store.commit('upName','Durant')
    },
    asyncName(){
      this.$store.dispatch('ybName')
    }
  }
}
</script>

<style>


</style>
