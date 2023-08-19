import axios from "axios";

axios.defaults.withCredentials = true;

export default {
    async getTasks (context){
        const url = "http://localhost:8000/api/student/tasks";
        const Authorization = localStorage.getItem("Authorization");

        const response = await axios.get(url, {
            headers: {
              Authorization: `${Authorization}`,
            },
          });

          const allTasks= response.data.data;


          const webTasks= allTasks.filter(task => task.category==="web_development");
          const ui_uxTasks= allTasks.filter(task => task.category==="ui_ux");
          const secTasks= allTasks.filter(task => task.category==="web_security");

          context.commit('setTasks',{
            w:webTasks,
            u:ui_uxTasks,
            s:secTasks
          });

    },

   async submitQuest(context,payload){
    const url = "http://127.0.0.1:8000/api/student/submitTask";
    const Authorization = localStorage.getItem("Authorization");
   const response= await axios.post(
      url,
      {
        task_id:payload.taskId,
        solution:payload.solution
      },
      {
        headers: {
          'Content-type':'multipart/form-data',
          Authorization: `${Authorization}`,
        },
      }
    );

    const result=response.data;

     console.log(result);
    const payloads={
      res:result
    }
    context.commit('setResult',payloads);
    },




    async submitFileQuest(context,payload){
      const url = "http://127.0.0.1:8000/api/student/submitTask";
      const Authorization = localStorage.getItem("Authorization");
     const response= await axios.post(
        url,
        {
          task_id:payload.taskId,
          file_uplaod:payload.file_uplaod
        },
        {
          headers: {
            'Content-type':'multipart/form-data',
            Authorization: `${Authorization}`,
          },
        }
      );
  
      const result=response.data;
  
       console.log(result);
      const payloads={
        res:result
      }
      context.commit('setResult',payloads);
      },
  
    resetFeedBack(context){
      context.commit('restFeed');
    },
    
}