export default {
    setStd(state, payload) {
        state.student = {
            firstName:payload.student.first_name,
            lastName:payload.student.last_name,
            userName:payload.student.username,
            email:payload.student.email,
            password:payload.student.password,
            passwordConfrim:'',
            avatar:payload.student.avater,
            role:payload.student.role,
            teamId:payload.student.team_id,
            teamName:'',
        };
        state.Authorization = payload.Authorization;
      },
      setAvatar(state,payload){
        state.student={...state.student,role:payload.role,avatar:payload.av}
      },
    
      setTeamInfo(state,payload){
        state.teamDetalis={
          invLink:payload.t.invation_link,
          teamName:payload.t.team_name,
          teamLeader:payload.t.team_leader,
          teamMembers:payload.t.team_members
        }
      },

      setSolvedTasks(state,payload){
        state.stdLatestSolved=payload.t
      },
      setRecentTasks(state,payload){
        state.recentAdded=payload.t
      },
      setRankInfo(state,payload){
        state.rankInfo=payload.t;
      },
      setStarsInfo(state,payload){
        state.starsInfo=payload.t;
      },
      setIndInfo(state,payload){
        state.indInfo=payload.t;
      },
      setPersonalInfo(state,payload){
        state.personalInfo=payload.t;
      }
}
