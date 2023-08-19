import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  namespaced: true,
  state() {
    return {
      email: null,
      user: {},
      Authorization: null,
      role: null,
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    email(state) {
      return state.email;
    },
    Authorization(state) {
      return state.Authorization;
    },

    role(state) {
      return state.role;
    },
    isAuthenticated(state) {
      return !!state.Authorization;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.email = payload.email;
      state.role = payload.role;
      state.Authorization = payload.Authorization;
    },
    setStdUser(state, payload) {
      state.student = payload.std;
      state.Authorization = payload.Authorization;
    },
  },
  actions: {
    //
    async loginClient(context, payload) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/client/login_action",
          {
            email: payload.email,
            password: payload.password,
          }
        );
        const user = response.data.client;
        const email = user.email;
        const role = "client";
        const Authorization = response.data.Authorization;
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("Authorization", Authorization);
        localStorage.setItem("user", JSON.stringify(user));

        context.commit("setUser", {
          Authorization: Authorization,
          user: user,
          email: email,
          role: role,
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

    async loginAdmin(context, payload) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/admin/login",
          {
            email: payload.email,
            password: payload.password,
          }
        );

        const user = response.data.admin;
        console.log(user.firs_name);
        const email = user.email;
        const role = "admin";
        const Authorization = response.data.Authorization;
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("Authorization", Authorization);
        localStorage.setItem("user", JSON.stringify(user));

        context.commit("setUser", {
          Authorization: Authorization,
          user: user,
          email: email,
          role: role,
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
    async loginManager(context, payload) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/manager/login",
          {
            email: payload.email,
            password: payload.password,
          }
        );

        const user = response.data.manager;
        const email = user.email;
        const role = user.role;
        const Authorization = response.data.Authorization;
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("Authorization", Authorization);
        localStorage.setItem("user", JSON.stringify(user));

        context.commit("setUser", {
          Authorization: Authorization,
          user: user,
          email: email,
          role: role,
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

    tryLogin(context) {
      const user = JSON.parse(localStorage.getItem("user"));
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");
      const Authorization = localStorage.getItem("Authorization");

      if (user && email && Authorization) {
        context.commit("setUser", {
          Authorization: Authorization,
          user: user,
          email: email,
          role: role,
        });
      }
    },

    logout(context) {
      localStorage.removeItem("user");
      localStorage.removeItem("Authorization");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      context.commit("setUser", {
        Authorization: null,
        user: null,
        email: null,
        role: null,
      });
      return;
    },

    Stdlogout(context) {
      localStorage.removeItem("std");
      localStorage.removeItem("Authorization");
      localStorage.removeItem("avatar");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("userName");
      localStorage.removeItem("teamId");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");

      context.commit("setStdUser", {
        Authorization: null,
        std: null,
      });
      return;
    },
  },
};
