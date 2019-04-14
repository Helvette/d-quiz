<template>
  <li>x {{points}} </li>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Point',
  computed:{
      ...mapState(['driversData', 'prueba', 'pointData', 'firstDriver']),
      
  },
  methods:{
      ...mapMutations(['callData', 'probando', 'changeLoadingState']),
  },
  created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  }
  //{{points.raw_address}}
}
</script>