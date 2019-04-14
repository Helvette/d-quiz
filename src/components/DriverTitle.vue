<template>
  <div class="driver-title">
    <span>  ID Conductor: {{firstDriver.id}} </span>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'DriverTitle',
    computed:{
      ...mapState(['driversData', 'prueba', 'pointData', 'firstDriver', 'dandoInfo', 'idForInfo']),
      
  },
    methods:{
      ...mapMutations(['callData', 'probando', 'changeLoadingState']),
  }
}
</script>

<style>

  .driver-title{
    background-color:#AAD500;
    padding:10px 20px;
    width:100%;
    color:white;
    border-radius:3px;
    text-transform: uppercase;
    font-weight: bold;
    margin:0 20px 10px 20px;
    letter-spacing: 1px;
    font-size:14px;
  }

</style>
