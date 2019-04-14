<template>
  <div id="app">
    <Nav></Nav>
    <b-container class="contenedor-listado-mapa-info">
      <b-row> <!-- identificación del conductor -->
        <DriverTitle></DriverTitle>
      </b-row>
      <b-row> <!-- row lista + mapa + info -->
        <List></List>
        <b-col cols="6">
            <b-row style="padding:0 15px 0 0;">  <!-- row mapa -->
              <Map></Map>
            </b-row>
            <b-row style="padding:0 15px 0 0;"> <!-- row info -->
              <DetailedInfo></DetailedInfo>
            </b-row>
        </b-col>
        
      </b-row> <!-- fin row lista mapa info -->
    </b-container>
  </div>
</template>

<script>

import DriverTitle from './components/DriverTitle.vue'
import List from './components/List.vue'
import Nav from './components/Nav.vue'
import DetailedInfo from './components/DetailedInfo.vue'
import Map from './components/Map.vue'
import Point from './components/Point.vue'


export default {
  name: 'app',
  components: {
    DriverTitle,
    Nav,
    List,
    Map,
    DetailedInfo,
    Point
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
.contenedor-listado-mapa-info{
  margin-top:20px;
}
</style>
