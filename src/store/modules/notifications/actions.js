import axios from "axios";

axios.defaults.withCredentials = true;

export default {
    async getNotification (context){
        const url = "http://localhost:8000/api/student/notifications";
        const Authorization = localStorage.getItem("Authorization");

        const response = await axios.get(url, {
            headers: {
              Authorization: `${Authorization}`,
            },
          });
          const notifications= response.data.notifications;

          context.commit('setNotificitions',{
            noti:notifications,
          });

    },
 
}