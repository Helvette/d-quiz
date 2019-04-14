import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    driversData:[],
    prueba:['prueba', 'prueba2', 'prueba3'],
    loading: true,
    firstDriver: {id:1, delivery_points:[{id:15, texto:'primer punto', raw_address:'Vista Hermosa Playa Ancha', point:{latitude:-33.023102,longitude:-71.5618266}}, {id:48, texto:'segundo punto', raw_address:'Pelle 80 depto 1503-c', point:{latitude:-33.0336471, longitude:-71.5895228}}]},
    idForInfo:10,
    infoForDetails:[]
  },
  mutations: {
    callData(state, dataAction){ //pasando la data obtenida desde la URL a nuestro array en state
      state.driversData = dataAction
    },
    changeLoadingState(state,loading){
      state.loading = loading
    },
    probando(state){
      console.log(state.driversData) //visualiza: data[{cond1}, {cond2}]
      console.log(state.driversData[0].delivery_points) // visualiza: arr de objetos [{point}, {point}, {point}]ç
      console.log(state.firstDriver)
      console.log(state.firstDriver.delivery_points[0].raw_address) // Vista Hermosa Playa Ancha
    },
    testData(state, dataAction){
      state.firstDriver = dataAction[0]
    },
    dandoInfo(state, event){
      state.idForInfo = event.currentTarget.id
      //console.log(state.idForInfo)
      //console.log(state.firstDriver.delivery_points)
      for(let points of state.firstDriver.delivery_points){ //recorriendo delivery_points 
        if(points.id == state.idForInfo){ //encontrando si hay una casualidad de id
          state.infoForDetails = points; //si la hay, ese objeto pasa dentro de infoForDetails
          // ejemplo state.infoForDetails: {id:48, texto:'segundo punto'}
          console.log(state.infoForDetails.texto) 
        }
      }
    }
  }
  , actions: {
    loadData({commit}){
      axios.get('https://9f2c8fda-ac35-4753-8cda-5b62b7087d9f.mock.pstmn.io/v1/routes').then((response) => {
        // console.log(response.data, this)
        commit('callData', response.data)
        commit('changeLoadingState', false)
        commit('testData', response.data)
      })
    }
  } 
})


/*
      for (points of state.firstDriver[delivery_points]){
        if(points.id == state.idForInfo){
          state.infoForDetails = points;
          console.log(infoForDetails)
        }
      }

      */