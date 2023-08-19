export default {
    setTasks(state,payload){
        const webQuestsArray = Array.from(payload.w);
        const ui_uxArray = Array.from(payload.u);
        const secuirtyArray = Array.from(payload.s);
        
        state.webQuests=webQuestsArray;
        state.ui_uxQuests=ui_uxArray;
        state.secuirtyQuests=secuirtyArray;
    },
    setResult(state,payload){
        if(payload.res.ok==='wrong'){
            state.isCorrect=0
        }else if(payload.res.ok==='correct'){
            state.isCorrect=1;
        }else{
            state.isCorrect=2;
        }
    },
    restFeed(state){
        state.isCorrect=null
    }
}