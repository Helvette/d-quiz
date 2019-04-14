<template>
  <div id="map">
  <GmapMap
  v-bind:center="{lat:10, lng:10}"
  v-bind:zoom="7"
  map-type-id="terrain"
  style="width:100%; height: 300px"
>
</GmapMap>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Map'
}
</script>

<style>
  #map{
    display:inline-block;
    margin:5px;
    height:300px;
    width:100%;
  }
</style>
