import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state(){
        return {
            student:{
                firstName:'',
                lastName:'',
                userName:'',
                email:'',
                password:'',
                passwordConfrim:'',
                avatar:'',
                role:'',
                teamId:null,
              
            },
            Authorization:'',
            teamDetalis:{
                invLink:'',
                teamName:'',
                teamLeader:'',
                teamMembers:[]
            },
            stdLatestSolved:{},
            recentAdded:{},
            rankInfo:{},
            starsInfo:{},
            indInfo:{},
            personalInfo:{}

        }
    },
    mutations,
    actions,
    getters
}
