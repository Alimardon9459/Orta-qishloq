import { AddressbarColor } from 'quasar'
import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
//import state from './state'
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state:{
      fullname:"",
      complaints:[]
    },
    mutations:{
      SED_NAME(state,fullname){
        state.fullname=fullname
      },
      ADD(state,complaint){
        state.complaints.unshift(complaint)
      },
      REMOVE(state,i){
        state.complaints.splice(i,1)
      },

    },
    modules: {

    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
