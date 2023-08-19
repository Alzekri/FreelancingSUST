export default {
    setRoadmaps(state,payload){
        const roadmapsArr=Array.from(payload.road);

        state.stdRoadmaps=roadmapsArr;
    }
}