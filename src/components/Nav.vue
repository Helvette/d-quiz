<template>
<div>
  <b-navbar id="nav">
  </b-navbar>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Nav',
}
</script>


<style>
  #nav{
    background-color:#EEEEEE;
    color:#1A1A1A;
    height:40px;
    border-top:3px solid #AAD500;
  }
  #nav h1{
    font-size:18px;
  }
</style>
