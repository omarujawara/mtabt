import { createStore } from 'vuex';
import axios from 'axios'
const store = createStore({
    state () {
        return {
            bronx : true,
            brooklyn : true,
            manhattan : true,
            queens : true,
            statenIsland : true,
            alerts : [],
            jams : [],
            endTime : "",
            startTime : "",
            startTimeMillis : 0,
            endTimeMillis : 0,
            showAlerts : true,
            showJams : false,   
            selectedBridge : "polygon3"       

        }
    },
    getters:{},
    mutations:{
        getFeed(state, data) {
            state.alerts = data.alerts;
            state.jams = data.jams;
            state.endTime = data.endTime;
            state.startTime = data.startTime;
            state.startTimeMillis = data.startTimeMillis;
            state.endTimeMillis = data.endTimeMillis;
        },
        filterOutBronx : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Bronx, NY') },
        filterOutBrooklyn : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Brooklyn, NY') },
        filterOutManhattan : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Manhattan, NY') },
        filterOutQueens : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Queens, NY') },
        filterOutStatenIsland : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Staten Island, NY') },
        
        filterInBronx : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Bronx, NY') },
        filterInBrooklyn : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Brooklyn, NY') },
        filterInManhattan : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Manhattan, NY') },
        filterInQueens : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Queens, NY') },
        filterInStatenIsland : (state) => { state.alerts = state.alerts.filter( (alert)  =>  alert.city != 'Staten Island, NY') },

        selectAlertsOrJams : (state,data) => {
            if(data === 'alerts') {
                state.showAlerts = true;
                state.showJams = false;
            }
            else if (data === 'jams') {
                state.showJams = true;
                state.showAlerts = false;
            }
        },
        assignSelectedBridge : (state, data) => { 
            state.selectedBridge = data;
        }


    },

    actions:{
        loadFeed({commit}) {
            let url = `http://localhost:3000/${this.state.selectedBridge}`
            axios.get(url)
                .then(({data}) => {
                    console.log(data.alerts)
                    commit('getFeed', data)
                    }).catch((err) => {
                        console.log(err)
                    }); 
        }
    },
    modules:{}
})

export default store;
