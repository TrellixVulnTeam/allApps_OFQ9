import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[
        { name : 'Ali', age : 20, city : 'Tehran'},
        { name : 'Sina', age : 21, city : 'Karaj'},
        { name : 'Mina', age : 20, city : 'Qum'},
        { name : 'Mohammad', age : 19, city : 'Tehran'},
    ],
    item : null,
    form :{ name : null, age : null, city : null},
    token : Cookies.get('token')
  },
  getters: {
    items(state){
      return state.items
    },
    token(state){
      return state.token
    },
  },
  mutations: {
    pushItems(state){
        state.item = { ...state.form }
        state.items.push( state.item )
    }
  },
});
