export default {
    webQuests(state){
        return state.webQuests;
    },
    ui_uxQuests(state){
        return state.ui_uxQuests;
    },
    secuirtyQuests(state){
        return state.secuirtyQuests;
    },
    hasWebQuests(state){
        return state.webQuests && state.webQuests.length >0 ;
    },
    hasui_uxQuests(state){
        return state.ui_uxQuests && state.ui_uxQuests.length >0 ;
    },
    hasSecQuests(state){
        return state.secuirtyQuests && state.secuirtyQuests.length >0 ;
    },
    getResult(state){
        return state.isCorrect;
    }
}