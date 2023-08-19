import axios from "axios";

axios.defaults.withCredentials = true;

export default {
    async getRealTasks (context){
        const url = "http://localhost:8000/api/student/projects";
        const Authorization = localStorage.getItem("Authorization");

        const response = await axios.get(url, {
            headers: {
              Authorization: `${Authorization}`,
            },
          });

          const allRealTasks= response.data.data;


          const webRealTasks= allRealTasks.filter(task => task.category==="web_development");
          const ui_uxRealTasks= allRealTasks.filter(task => task.category==="ui_ux");
          const secRealTasks= allRealTasks.filter(task => task.category==="web_security");

          console.log

          context.commit('setRealTasks',{
            w:webRealTasks,
            u:ui_uxRealTasks,
            s:secRealTasks
          });

    },

    async applySolo(context,payload){
      const url = "http://localhost:8000/api/student/student_project_request";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.post(url,
        {
          project_id:payload.project_id
        }
        ,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        // console.log(response.data.ok);
        context.commit('setFeedback',response.data.ok);

    },
    async applyTeam(context,payload){
      const url = "http://localhost:8000/api/student/team_project_request";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.post(url,
        {
          project_id:payload.project_id
        }
        ,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        // console.log(response.data.ok);
        context.commit('setTeamFeedback',response.data.ok);

    },


    reset(context){
      context.commit('resetState');
    }
}
