
  <template>
  <div class="mainDiv pt-3 ps-5 sticky-top d-none d-lg-block">
    <div class="row text-start">
      <img
        src="@/assets/logo.png"
        alt=""
        style="
          width: 350px;
          height: 300px;
          margin-left: -2.5rem;
          margin-bottom: -2rem;
          margin-top: -2rem;
        "
      />
    </div>
    <div class="row IconDashboard">
      <div class="col-12 text-start mt-3">
        <router-link
          v-for="(link, index) in Links"
          :key="index"
          :to="link.route"
        >
          <a class="py-2 ps-4 mb-4">
            <FIcons class="rounded-pill pe-2" :icon="['fas', link.icon]" />{{
              link.title
            }}
          </a>
        </router-link>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 text-center mt-5">
        <div class="accountIcon pt-2">
          <FIcons class="rounded-pill text-light" :icon="['fas', 'user']" />
        </div>
      </div>
      <div class="col-9 text-center text-light mt-2">
        <h6>{{ user.first_name }} {{ user.last_name }}</h6>
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
      Links: [
        {
          icon: "gear",
          title: "Dashboard",
          route: "dashboard",
        },
        {
          icon: "user-group",
          title: "Manager",
          route: "manager",
        },
      ],
      user: {},
    };
  },
  created() {
    this.setUser();
  },

  methods: {
    logout() {
      this.$store.dispatch("admin/logout");
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
}

.accountIcon {
  background-color: #129fbb;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  margin-left: 27%;
}
a {
  display: block;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin: {
    right: 2rem;
  }
}
a:hover {
  color: white;
}
.router-link-active {
  a {
    color: white;
    background-color: #129fbb;
    border-radius: 1rem;
  }
}
</style>
   
 