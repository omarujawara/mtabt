<template>
  <div class="">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" @change="brooklyn()" checked>
        <label class="form-check-label" for="inlineCheckbox1">Brooklyn</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" @change="bronx()" checked>
        <label class="form-check-label" for="inlineCheckbox2">Bronx</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" @change="manhattan()" checked>
        <label class="form-check-label" for="inlineCheckbox3">Manhattan</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" @change="queens()" checked>
        <label class="form-check-label" for="inlineCheckbox2">Queens</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" @change="statenIsland()" checked>
        <label class="form-check-label" for="inlineCheckbox3">Staten Island</label>
      </div>
      <div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cities-component',
  data() {
    return {
    }
  },
 methods : {
  bronx() {this.$store.commit('filterOutBronx')},
  brooklyn() {this.$store.commit('filterOutBrooklyn')},
  manhattan() {this.$store.commit('filterOutManhattan')},
  queens() {this.$store.commit('filterOutQueens')},
  statenIsland() {this.$store.commit('filterOutStatenIsland')},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
