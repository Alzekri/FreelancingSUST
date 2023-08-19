export default {
    roadmaps(state){
        return state.stdRoadmaps;
    },

    hasroadmaps(state){
        return state.stdRoadmaps.length>0;
    }
}