export default {
    student (state){
        return state.student
    },
    getTeamInfo(state){
        return state.teamDetalis;
    },
    isTeamInfoIsEmpty(state){
        return Object.values(state.teamDetalis).every(value => {
            return value === '' || value === null || value === undefined;
          });
    },
    getSolvedTasks(state){
        return state.stdLatestSolved;
    },
    getRecentTasks(state){
        return state.recentAdded;
    },
    getRankInfo(state){
        return state.rankInfo;
    },
    getStarsInfo(state){
        return state.starsInfo;
    },
    getIndInfo(state){
        return state.indInfo;
    },
    getPersonalInfo(state){
        return state.personalInfo;
      }


}