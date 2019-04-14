<template>
  <b-col cols="6" id="list-container">
  <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <ul>
      <li v-for="(points, index) in firstDriver.delivery_points" :key="index" :id="points.id" v-on:click="dandoInfo($event)"> {{points.raw_address}} </li>
      <li>Rellenando Direcciones #3</li>
      <li>Rellenando Direcciones #3</li>
      <li>Rellenando Direcciones #3</li>
      <li>Rellenando Direcciones #3</li>
      <li>Rellenando Direcciones #3</li>
      <li>Rellenando Direcciones #3</li>
      <li>Listado <button @click="probando">consola</button></li>
    </ul>
  </vue-custom-scrollbar>
  </b-col>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Point from '@/components/Point.vue'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  name: 'List',
  components:{
    Point,
    vueCustomScrollbar
  },
  data() { // config del scroll
    return {
      settings: {
        maxScrollbarLength: 60,
        suppressScrollX: true
      }
    }
  },
  computed:{
      ...mapState(['driversData', 'prueba', 'pointData', 'firstDriver', 'idForInfo', 'infoForDetails']),
      
  },
  methods:{
      ...mapMutations(['callData', 'probando', 'changeLoadingState','dandoInfo']),
      scrollHanle(evt) {
      
    }
  },
  created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  },
  mounted(){
    console.log('hola')
  }
}
// <p> {{firstDriver.delivery_points}} </p>
</script>


<style>
  #list-container {
    text-align:left;
  }
  #list-container ul{
    list-style: none;
    width:100%;
    height:500px;
    text-align:left;
    padding:0 15px 0 0;
    margin:0 5px;
    display:inline-block;
  }
  #list-container li{
    background-color:#F5F5F7;
    border:1px solid #EEEEEE;
    border-radius: 3px;
    font-size:12px;
    padding:25px;
    margin:5px;
    color:#1A1A1A;
    text-transform:uppercase;
  }
  #list-container li:hover{
    cursor:pointer;
  }
  .scroll-area {
  position: relative;
  margin: auto;
  width:auto;
  height: 500px;
}
.ps > .ps__rail-x,
.ps > .ps__rail-y {
  opacity: 0.6;
}
</style>
