<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bacg">
    <div class="text-start">
      <img
        src="@/assets/logo.png"
        alt=""
        style="width: 300px;
          height: 250px;
          margin-left: -3rem;
          margin-bottom: rem;
          margin-top: rem;
        "
      />
    </div>
    <div
      class="d-flex flex-column align-items-center align-items-sm-start ps-2 pe-4 text-white"
    >
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
        id="menu"
      >
        <RouterLink to="overview" class="nav-link align-middle px-0 hov mb-1">
          <li class="nav-item w-100 px-3">
            <FIcons :icon="['fas', 'chalkboard-user']" class="fs-5 colored" />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white"
              >Overview</span
            >
          </li>
        </RouterLink>
        <RouterLink
          to="platform-quests"
          class="nav-link align-middle px-0 hov mb-1"
        >
          <li class="nav-item w-100 px-3">
            <FIcons :icon="['fas', 'book-open-reader']" class="fs-5 colored" />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white"
              >Platform quests</span
            >
          </li>
        </RouterLink>
        <RouterLink
          to="real-quests"
          class="nav-link align-middle px-0 hov mb-1"
        >
          <li class="nav-item w-100 px-3">
            <FIcons :icon="['fas', 'globe']" class="fs-5 colored" />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white pb-5"
              >Real quests</span
            >
          </li>
        </RouterLink>
        <RouterLink to="roadmaps" class="nav-link align-middle px-0 hov mb-1">
          <li class="nav-item w-100 px-3">
            <FIcons :icon="['fas', 'route']" class="fs-5 colored" />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white pb-5"
              >Roadmaps</span
            >
          </li>
        </RouterLink>
        <RouterLink
        to="teams-section"
        class="nav-link align-middle px-0  mb-1"
      >
        <li class="nav-item w-100 px-3">
          <FIcons :icon="['fas', 'people-group']" class="fs-5 colored" />
          <span class="ms-1 fs-6 d-none d-sm-inline text-white pb-5"
            >Teams</span
          >
        </li>
      </RouterLink>
        <RouterLink
          to="Notifications"
          class="nav-link align-middle px-0 hov mb-1"
        >
          <li class="nav-item w-100 px-3">
            <FIcons :icon="['fas', 'bell']" class="fs-5 colored" />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white pb-5"
              >Notifications</span
            >
          </li>
        </RouterLink>
        <li @click="logout" class="nav-item w-100 px-3 hov">
          <a href="#" class="nav-link align-middle px-0">
            <FIcons
              :icon="['fas', 'arrow-right-from-bracket']"
              class="fs-5 colored"
            />
            <span class="ms-1 fs-6 d-none d-sm-inline text-white">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  methods :{
    logout(){
      this.$store.dispatch("std/logout");
      this.$store.dispatch("auth/Stdlogout");
      this.$router.replace({ path: "login" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

.colored {
  color: white;
  background-color: transparent;
  font-family: "Montserrat", sans-serif;
}

.bacg {
  background-color: #1e1e1e;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

.hov:hover {
  background-color: #323232;
  border-radius: 15px;
  width: 100%;
}

.router-link-exact-active {
  background-color: #f28c18;
  border-radius: 15px;
  width: 100%;
}
</style>