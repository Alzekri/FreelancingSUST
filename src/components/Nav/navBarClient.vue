<template>
  <div class="row maindiv">
    <nav class="navbar navbar-expand-lg fixed-top fw-bold">
      <div class="container">
        <div class="text-light col-2 text-start">
          <img
            src="@/assets/logo.png"
            alt=""
            style="
              width: 150px;
              height: 90px;
              margin-left: -9rem;
              margin-bottom: -1.4rem;
              margin-top: -1.4rem;
            "
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FIcons class="icon" :icon="['fas', 'bars']" />
        </button>
        <div class="collapse navbar-collapse" id="main">
          <ul class="navbar-nav col-6">
            <router-link to="projects" exact>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"> My Projects </a>
              </li>
            </router-link>
            <router-link to="request">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                  Request Project
                </a>
              </li></router-link
            >
            <router-link to="contact">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                  Contact Us
                </a>
              </li></router-link
            >
            <router-link to="inbox">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                  Inbox
                </a>
              </li></router-link
            >
          </ul>
          <div class="col-7 text-end">
            <button
              @click="logout"
              class="btn btn-outline-light round px-3 py-1"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$store.dispatch("client/logout");
      this.$store.dispatch("auth/logout");

      this.$router.replace({ path: "login" });
    },
  },
};
</script>
<style scoped lang="scss">
h4 {
  position: fixed;
  top: 0.7rem;
  left: 1rem;
}
.maindiv {
  margin-bottom: 5rem;
}
a {
  text-decoration: none;
}
.navbar {
  background-color: #3f4f5f;
  .navbar-toggler {
    border: 1px solid white;
  }
  .navbar-nav {
    .nav-link {
      color: white;
    }
  }
}
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:active,
.navbar .navbar-nav .nav-link:hover {
  color: #129fbb;
}

.icon {
  color: white;
}
</style>

           