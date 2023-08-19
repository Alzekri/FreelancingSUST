export default {
    webRQuests(state){
        return state.webQuests;
    },
    ui_uxRQuests(state){
        return state.ui_uxQuests;
    },
    secuirtyRQuests(state){
        return state.secuirtyQuests;
    },
    hasWebRQuests(state){
        return state.webQuests && state.webQuests.length >0 ;
    },
    hasui_uxRQuests(state){
        return state.ui_uxQuests && state.ui_uxQuests.length >0 ;
    },
    hasSecRQuests(state){
        return state.secuirtyQuests && state.secuirtyQuests.length >0 ;
    },
    getFeedback(state){
        return state.feedBack;
    },
    getTeamFeedback(state){
        return state.teamFeedBack;
    }
}