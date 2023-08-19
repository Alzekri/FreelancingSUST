import axios from "axios";
axios.defaults.withCredentials = true;

export default {
    async registerStudent(context, payload) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/student/register",
            {
              first_name: payload.firstName,
              last_name: payload.lastName,
              username:payload.userName,
              email: payload.email,
              password: payload.password,
              password_confirm: payload.passwordConfrim,
            }
          );
          console.log(response);
          context.commit("register", payload);
        } catch (e) {
          const error = new Error(
            "something went wrong on server !! Try again later "
          );
          console.log(e);
          throw error;
        }
      },

      async loginStd(context, payload) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/student/login_action",
            {
              username: payload.username,
              password: payload.password,
            }
          );
          const std = response.data.student;
          const Authorization = response.data.Authorization;
          

          localStorage.setItem("firstName", std.first_name);
          localStorage.setItem("lastName", std.last_name);
          localStorage.setItem("userName", std.username);
          localStorage.setItem("email", std.email);
          localStorage.setItem("avatar", std.avater);
          localStorage.setItem("role", std.role);
          localStorage.setItem("teamId", std.team_id);
          
          localStorage.setItem("Authorization", Authorization);
          localStorage.setItem("std", JSON.stringify(std));
  
          context.commit("setStd", {
            student:std,
            Authorization: Authorization, 
          });
        } catch (e) {
          var error = e.message
            ? new Error(e.message + " !! Try again later")
            : new Error("Something went wrong !! Try again later");
          if (e.message === "Request failed with status code 403") {
            error = new Error("Please enter valid email and password");
          }
          throw error;
        }
      },
      
      pickupTheData(context){
        const Authorization = localStorage.getItem("Authorization");
        const std = localStorage.getItem("std");
        console.log(std);

        context.commit("setStd", {
          student:std,
          Authorization: Authorization, 
        });
      },
      async logout() {
        const url = "http://127.0.0.1:8000/api/student/logout";
        const Authorization = localStorage.getItem("Authorization");
        await axios.get(url, {
          headers: {
            Authorization: `${Authorization}`,
          },
        });
      },

      async sendAvatar(context,payload){
     
        const url = "http://127.0.0.1:8000/api/student/changeinfo";
        const Authorization = localStorage.getItem("Authorization");
        await axios.put(
          url,
          {
            avater: payload.av,
            role:payload.role
              },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );

        context.commit("setAvatar",{
          role:payload.role,
          av:payload.av
          
        });
      },

      async createTeam (context,payload){
        const url = "http://127.0.0.1:8000/api/student/create_team";
        const Authorization = localStorage.getItem("Authorization");
        await axios.post(url,{
          team_name:payload.tName
        },{
          headers: {
            Authorization: `${Authorization}`,
          },
        });

        context.commit("setTeamName",{
          tName:payload.tName,
        });
      },
      async getTeam (context){
        const url = "http://127.0.0.1:8000/api/student/get_team_members";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const theTeamInfo=response.data;
        console.log(theTeamInfo);
        context.commit("setTeamInfo",{
          t:theTeamInfo,
        });
      },


      async updateTeamName(context,payload){
        alert(payload.newName);
     
        const url = "http://127.0.0.1:8000/api/student/edit_team_name";
        const Authorization = localStorage.getItem("Authorization");
        await axios.put(
          url,
          {
            team_name: payload.newName,
              },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );

        
      },
      async deleteTeam(){
        const url = "http://127.0.0.1:8000/api/student/delete_team";
        const Authorization = localStorage.getItem("Authorization");
       // alert(Authorization);
        await axios.post(
          url,
          {
          },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );
       
      },

      async joinTeam(context,payload){
        const url = "http://127.0.0.1:8000/api/student/join_team";
        const Authorization = localStorage.getItem("Authorization");
       // alert(Authorization);
        await axios.post(
          url,
          {
            invitation_link:payload.inviteL
          },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );

      },

      async deleteTeamMember(context,payload){
        const url = "http://127.0.0.1:8000/api/student/delete_team_member";
        const Authorization = localStorage.getItem("Authorization");
        await axios.post(
          url,
          {
            student_id:payload.stdId
          },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );
      },


      async getSolvedTask (context){
        const url = "http://127.0.0.1:8000/api/student/last_solved";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const solved=response.data;
        console.log(solved);
        context.commit("setSolvedTasks",{
          t:solved,
        });
      },

      async getRecentTask (context){
        const url = "http://127.0.0.1:8000/api/student/lastes_tasks";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const recent=response.data.data;
        console.log(recent);
        context.commit("setRecentTasks",{
          t:recent,
        });
      },

      async getRankInfo (context){
        const url = "http://127.0.0.1:8000/api/student/rank";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const rankInfo=response.data.attributes;
        // console.log(recent);
        context.commit("setRankInfo",{
          t:rankInfo,
        });
      },
      async getStarsInfo (context){
        const url = "http://127.0.0.1:8000/api/student/getStarsCountForStudent";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const starsInfo=response.data;
        // console.log(recent);
        context.commit("setStarsInfo",{
          t:starsInfo,
        });
      },

      async getIndInfo (context){
        const url = "http://127.0.0.1:8000/api/student/calculateCategoryIndicators";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const indInfo=response.data;
        // console.log(recent);
        context.commit("setIndInfo",{
          t:indInfo,
        });
      },

      async getPersonalInfo (context){
        const url = "http://127.0.0.1:8000/api/student/getinfo";
        const Authorization = localStorage.getItem("Authorization");
       const response= await axios.get(url,{
          headers: {
            Authorization: `${Authorization}`,
          },
        });
        const PersonalInfo=response.data.studentinfo;
        // console.log(recent);
        context.commit("setPersonalInfo",{
          t:PersonalInfo,
        });
      },
}