export default {
    setRealTasks(state,payload){
        const webQuestsArray = Array.from(payload.w);
        const ui_uxArray = Array.from(payload.u);
        const secuirtyArray = Array.from(payload.s);
        
        state.webQuests=webQuestsArray;
        state.ui_uxQuests=ui_uxArray;
        state.secuirtyQuests=secuirtyArray;
    },
    setFeedback(state,payload){
        
        if(payload==="done"){
            state.feedBack=1;
        }else if(payload==="Not Allowed"){
            state.feedBack=0
        }else{
            state.feedBack=2
        }
    },

    setTeamFeedback(state,payload){
        
        if(payload==="applied"){
            state.teamFeedBack=1;
        }else if(payload==="sent"){
            state.teamFeedBack=2
        }else if(payload==="No Team Leader"){
            state.teamFeedBack=3
        }else if(payload==="No Team"){
            state.teamFeedBack=4
        }
    
    },

    resetState(state){
        state.feedBack=null;
        state.teamFeedBack=0
    }
}