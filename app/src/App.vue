<template>
  <div>
    <div style="margin-bottom:25px"><h2>{{this.$store.state.selectedBridge.toUpperCase()}} 's {{this.$store.state.showAlerts? "Alerts" : "Jams"}}</h2></div>
    <div class="top-components">
      <!-- <div class="">Traffic Feed</div> -->
      <div class=""><SelectAlertJam/></div>
      <div class=""><Polygon/></div>
      <div class=""><Cities /></div> 
    </div>
      <div class="" v-if="this.$store.state.showAlerts"><Alert/></div>
      <div class="" v-if="this.$store.state.showJams"><Jams/></div>
  </div>

</template>

<script>
// import axios from 'axios'
import Cities from './components/Cities.vue'
import Alert from './components/Alerts.vue'
import Polygon from './components/Polygon.vue'
import SelectAlertJam from './components/SelectAlertJam.vue'
import Jams from './components/Jams.vue'

export default {
  name: 'App',
  components: {
    Cities,
    Alert,
    Polygon,
    SelectAlertJam,
    Jams
},
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.top-components {
  display: flex;
  margin : 0;
  padding: 0;
  justify-content: center;
  gap: 2rem;
}

</style>
  