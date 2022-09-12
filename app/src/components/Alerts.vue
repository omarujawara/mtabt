<template>
    <div>
        <div class="container">
            <table class="table table-striped .table-condensed ">
                <thead>
                    <tr>
                        <th scope="col" v-for="(obj, index) in config" :key="index">{{obj.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in alerts " :key="index">
                        <td class="text-truncate" scope="row" v-for="(obj, index) in config" :key="index">
                            <span v-if="obj.key === 'pubMillis'">{{ new Date(row[obj.key]).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}) }}</span>
                            <span v-else>{{ row[obj.key] }}</span>
                            <span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import config from '../constants'
export default {
    name : 'alert-component',
    data : () => {
        return {

        }
    },
    methods:{
        
    },
    mounted(){
        //dispatch the loadFeed action from vuex $store
        this.$store.dispatch('loadFeed')
        // rerun every 2 minutes
        setInterval(() => {
            this.$store.dispatch('loadFeed')
        },120000)
    },
    computed : {
      alerts() {
        return this.$store.state.alerts
      },
      config() {
        return config.alertFieldHeader
      }
  }
    }
        

</script>
<style scoped>
    * {
        font-size:small;
        max-width: 200px;

    }
</style>

