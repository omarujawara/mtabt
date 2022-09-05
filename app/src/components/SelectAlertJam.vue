<template>
<div>
  <select class="form-select" v-model="selected" @change="selectedDropDown">
  <option disabled value="">Select Alerts/Jams</option>
  <option value="alerts">Alerts</option>
  <option value="jams">Jams</option>

</select>
</div>

</template>

<script>
  export default {
    name :'alert-jam',
    data() {
      return {
        selected : '',
      }
    },
    methods : {
        selectedDropDown() {
            this.$store.commit('selectAlertsOrJams',this.selected);
        }
    }
  }
</script>

<style scoped>

</style>