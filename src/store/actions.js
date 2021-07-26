export default{

    // setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    // },2000)
    dateInfo(context,payload){
      return new Promise ((resolve,reject) => {
        setTimeout(() => {
            context.commit('updateInfo')
            console.log(payload);
            resolve('我是参数')
        },2000)
      })
    }

}