import axios from "axios";

axios.defaults.withCredentials = true;
export default {
  namespaced: true,
  state() {
    return {
      projects: [],
      projectsTeams: [],
      contactUs:[],
      star:false
    };
  },
  //mutations here set the variables in the state above
  mutations: {
    //assign projects array in local state to the fetched projects from database
    setProjects(state, payload) {
      state.projects = payload;
    },
    setStar(state, payload) {
      state.star = payload;
    },
    push(state, payload) {
      state.projects.push(payload);
    },

    setProjectsTeams(state, payload) {
      state.projectsTeams = payload;
    },
    setContactUs(state, payload) {
      state.contactUs = payload;
    },
    // pushTeams(state, payload) {
    //   state.projectsTeams.push(payload);
    // },
  },
  //use getters to return the values stored in state object
  getters: {
    //return list of projects
    star(state) {
      return state.star;
    },
    projects(state) {
      return state.projects;
    },

    projectsTeams(state) {
      return state.projectsTeams;
    },
    contactUs(state) {
      return state.contactUs;
    },
  },
  actions: {
    async addUser(context, payload) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/client/register_action",
          {
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            password: payload.password,
            password_confirm: payload.password_confirm,
          }
        );
        console.log(response);
        context.commit("push", payload);
      } catch (e) {
        const error = new Error(
          "something went wrong on server !! Try again later "
        );
        console.log(e);
        throw error;
      }
    },
    
    async fetchProjects(context) {
      const url = "http://localhost:8000/api/client/getProjects";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const projectsdata = response.data.projects;
      const projects = [];

      for (const object of projectsdata) {
        const project = object;
        projects.push(project);
      }

      context.commit("setProjects", projects);
    },

    async fetchProjectsTeams(context) {
      const url = "http://localhost:8000/api/client/getProjectsAndTeams";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const projectsTeamsdata = response.data.data;
      const projectsTeams = [];

      for (const object of projectsTeamsdata) {
        const projectTeams = object;
        projectsTeams.push(projectTeams);
      }

      context.commit("setProjectsTeams", projectsTeams);
    },
    async checkStar(context,payload) {
      const url = "http://localhost:8000/api/client/checkstar";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.post(url, 
        {
        project_id:payload.project_id,
        team_id:payload.team_id,
      },{
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const stardata = response.data;

      context.commit("setStar", stardata);
    },


    async addStars(context, payload) {
      const url = "http://127.0.0.1:8000/api/client/stars_store";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          project_id: payload.project_id,
          team_id:payload.team_id

        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },


    async contactUS(context, payload) {
      const url = "http://127.0.0.1:8000/api/client/contact_us";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          description: payload.description,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },



    async projectRequest(context, payload) {
      const url = "http://127.0.0.1:8000/api/client/client_project_requets";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          project_title: payload.project_title,
          project_description: payload.project_description,
          project_file: payload.project_file,
        },
        {
          headers: {
            'Content-type':'multipart/form-data',
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    
    async fetchContactUs(context) {
      const url = "http://127.0.0.1:8000/api/client/notifications";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //contactUsdata
      const contactUsdata = response.data.notifications;
      const contactUs = [];
      for (const object of contactUsdata) {
        const contact = object;
        contactUs.push(contact);
      }
      context.commit("setContactUs", contactUs);
    },

    async logout() {
      const url = "http://localhost:8000/api/client/logout";
      const Authorization = localStorage.getItem("Authorization");
      await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
    },
  },
};
