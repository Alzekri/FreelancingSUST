<template>
  <div class="mainDiv sticky-top d-none d-lg-block">
    <div class="row text-start">
      <img
        src="@/assets/logo.png"
        alt=""
        style="
          width: 300px;
          height: 250px;
          margin-left: -2rem;
          margin-bottom: -2rem;
          margin-top: -2rem;
        "
      />
    </div>
    <div class="row IconDashboard" style="margin-top: -1rem">
      <div class="col-12 text-start">
        <router-link to="projectRequests">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3 p-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons
              class="rounded-pill pe-2"
              :icon="['fas', 'code-pull-request']"
            />Projects requests
          </button>
        </router-link>
        <router-link to="approvedProjects">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons
              class="rounded-pill pe-2"
              :icon="['fas', 'circle-half-stroke']"
            />
            Approved projects
          </button>
        </router-link>
        <router-link to="teamrequests">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons class="rounded-pill pe-2" :icon="['fas', 'people-group']" />
            Team requests
          </button>
        </router-link>
        <router-link to="tasks">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons class="rounded-pill pe-2" :icon="['fas', 'list']" /> Tasks
          </button></router-link
        >
        <router-link to="rank">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons class="rounded-pill pe-2" :icon="['fas', 'ranking-star']" />
            Rank interview
          </button></router-link
        >
        <router-link to="submittedtask">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons
              class="rounded-pill pe-2"
              :icon="['fas', 'check-to-slot']"
            />
            Submitted Tasks
          </button></router-link
        >
        <router-link :to="role === 'manager' ? 'roadmaps' : 'roadmaps/teacher'">
          <button
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons
              class="rounded-pill pe-2"
              :icon="['fas', 'book-open-reader']"
            />
            Roadmaps
          </button></router-link
        >
        <router-link to="inbox">
          <button
            :class="role == 'teacher' ? 'text-secondary' : 'die'"
            :disabled="role == 'teacher'"
            class="text-start ps-3"
            style="padding-top: 0.7rem; padding-bottom: 0.7rem"
          >
            <FIcons class="rounded-pill pe-2" :icon="['fas', 'inbox']" /> Inbox
          </button></router-link
        >
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 text-center">
        <div class="accountIcon pt-2">
          <FIcons class="rounded-pill text-light" :icon="['fas', 'user']" />
        </div>
      </div>
      <div class="col-9 text-center text-light mt-1">
        <h6>{{ user.first_name }}{{ user.last_name }}</h6>
      </div>
      <div class="text-light col-9 text-center text-light-50">
        <h6>{{ user.email }}</h6>
      </div>
      <div class="col-9 text-end text-black-50">
        <div class="row">
          <div class="col-7 text-end text-light">
            <h6>Logout</h6>
          </div>
          <div class="col-5 text-start">
            <FIcons
              class="rounded-pill text-light"
              :icon="['fas', 'right-from-bracket']"
              @click="logout"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      user: {},
    };
  },

  created() {
    this.setUser();
  },

  computed: {
    role() {
      return this.$store.getters["auth/role"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("manager/logout");
      this.$store.dispatch("auth/logout");
      this.$router.replace({ path: "login" });
    },
    setUser() {
      this.user = this.$store.getters["auth/user"];
    },
  },
};
</script>
  
  
  <style scoped lang="scss">
.mainDiv {
  background-color: #3f4f5f;
  height: 100vh;
  padding-left: 2rem;
}

.accountIcon {
  background-color: #129fbb;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: 27%;
}
button {
  background-color: #3f4f5f;
  border: none;
  width: 17rem;
}
a,
button {
  display: block;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin: {
    right: 2rem;
  }
}
a:hover,
:hover {
  color: white;
}
.router-link-active {
  a,
  button {
    color: white;
    background-color: #129fbb;
    border-radius: 1rem;
  }
}
</style>
  