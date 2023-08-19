import axios from "axios";

axios.defaults.withCredentials = true;

export default {
    async getRoadmaps (context){
        const url = "http://localhost:8000/api/student/roadmaps";
        const Authorization = localStorage.getItem("Authorization");

        const response = await axios.get(url, {
            headers: {
              Authorization: `${Authorization}`,
            },
          });

          const roadmaps= response.data.data;

          context.commit('setRoadmaps',{
            road:roadmaps,
          });

    }
}