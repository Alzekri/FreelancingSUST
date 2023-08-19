import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  namespaced: true,
  state() {
    return {
      counts: null,
      managers: [],
    };
  },
  mutations: {
    setCounts(state, payload) {
      state.counts = payload;
    },
    setManagers(state, payload) {
      state.managers = payload;
    },
    push(state, payload) {
      state.managers.push(payload);
    },
  },
  getters: {
    counts(state) {
      return state.counts;
    },
    managers(state) {
      return state.managers;
    },
  },
  actions: {
    async fetchCounts(context) {
      const url = "http://127.0.0.1:8000/api/admin/count_users";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const counts = response.data;
      console.log(counts);
      context.commit("setCounts", counts);
    },

    async fetchManagers(context) {
      const url = "http://127.0.0.1:8000/api/admin/show_managers";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const managersdata = response.data.managers;
      const managers = [];

      for (const object of managersdata) {
        const manager = object;
        managers.push(manager);
      }

      context.commit("setManagers", managers);
    },

    async addManager(context, payload) {
      const url = "http://127.0.0.1:8000/api/admin/addmanager";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          first_name: payload.first_name,
          last_name: payload.last_name,
          email: payload.email,
          role: payload.role,
          password: payload.password,
          password_confirm: payload.password_confirm,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    async deleteManager(context, payload) {
      const url = 'http://127.0.0.1:8000/api/admin/delete';
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.post(url, 
        {
          id: payload.id,
       
        },{
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      console.log(response);
    },

    // async updateManager(context, payload) {
    //   const url = 'http://127.0.0.1:8000/api/admin/system_managers/edit/update/';
    //   const Authorization = localStorage.getItem("Authorization");
    //   const manager = payload.manager;
    //   const response = await axios.put(
    //     url,
    //     manager,

    //     {
    //       headers: {
    //         Authorization: `${Authorization}`,
    //       },
    //     }
    //   );
    //   console.log(response);
    // },

        async updateManager(context, payload) {
      const url = 'http://127.0.0.1:8000/api/admin/update';
      const Authorization = localStorage.getItem("Authorization");
      const manager = payload.manager;
      const response = await axios.put(
        url,
        manager,

        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
      console.log(response);
    },

    
    async logout() {
      const url = "http://127.0.0.1:8000/api/admin/logout";
      const Authorization = localStorage.getItem("Authorization");
      await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
    },
  },
};
