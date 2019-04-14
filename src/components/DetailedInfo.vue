<template>
  <div class="point">
  <h2 v-if="idForInfo == 10"> Selecciona uno de los puntos de entrega en el listado para ver más información. </h2>
  <div v-else class="no-info">
    <p>
      <span> id: {{idForInfo}} </span> 
      <span> dirección: {{infoForDetails.raw_address}} </span>
      <span> latitude: {{infoForDetails.point.latitude}} </span>
      <span> longitude: {{infoForDetails.point.longitude}} </span>
    </p>
  </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'DetailedInfo',
  computed:{
      ...mapState(['driversData', 'prueba', 'pointData', 'firstDriver', 'idForInfo', 'infoForDetails']),
      
  },
  methods:{
      ...mapMutations(['callData', 'probando', 'changeLoadingState', 'dandoInfo'])
  },
  created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  }
}
</script>



<style>
 .point h2{
    color:dimgray;
    font-weight: normal;
    font-size:16px;
 }
 .point{
    margin:5px;
    padding:20px;
    height:185px;
    width:100%;
    background-color:#F5F5F7;
    border:1px solid #EEEEEE;
 }
 .no-info{
   color:dimgray;
 }
 .no-info span{
   display:inline-block;
   width:100%;
   font-size:12px;
 }
</style>
