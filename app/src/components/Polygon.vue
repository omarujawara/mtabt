<template>
<div>
  <select class="form-select" v-model="selected" >
  <option disabled value="">Select Bridge/Tunnel</option>
  <option value="polygon1">polygon 1</option>
  <option value="polygon2">polygon 2</option>
  <option value="polygon3">polygon 3</option>
  <option value="polygon4">polygon 4</option>
  <option value="polygon5">polygon 5</option>
  <option value="polygon6">polygon 6</option>
  <option value="polygon7">polygon 7</option>
  <option value="polygon8">polygon 8</option>
  <option value="polygon9">polygon 9</option>
</select>
</div>

</template>

<script>
  export default {
    name :'polygon-component',
    data() {
      return {
        selected : '',
      }
    }
  }
</script>

<style scoped>
 .form-select {
  max-width: 250px
 }
 select {
  border-radius: 5%;
 }

</style>