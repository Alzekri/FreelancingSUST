<template>
  <div class="col-7 mt-4">
    <h3 class="fw-bold">ADMIN DASHBOARD</h3>
    <p class="text-black-50">
      WELCOME, DR.{{ user.first_name }} {{ user.last_name }}
    </p>
  </div>
  <div class="col-5 text-end mt-4 pe-5">
    <base-button
      class="py-3 buttonsend"
      mode="dark2"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    >
      +ADD NEW MANAGER
    </base-button>
  </div>

  <!-- The Modal For Add Manager-->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Add New Manager</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <label class="fw-bold my-2 mt-2">First Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="email"
              placeholder="Enter Your Email"
              name="Email"
              v-model="first_name"
            />
            <label class="fw-bold my-2 mt-2">Last Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="email"
              placeholder="Enter Your Email"
              name="Email"
              v-model="last_name"
            />
            <label class="fw-bold my-2 mt-2">Email</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="email"
              placeholder="Enter Your Email"
              name="Email"
              v-model="email"
            />
            <label class="fw-bold my-2 mt-2">Password</label>
            <input
              type="password"
              class="form-control rounded-3"
              id="password"
              placeholder="Enter Your Password"
              name="password"
              v-model="password"
            />
            <label class="fw-bold my-2 mt-2">Confirm Password</label>
            <input
              type="password"
              class="form-control rounded-3"
              id="confirm_password"
              placeholder="Enter Your Password"
              name="confirm_password"
              v-model="password_confirm"
            />
            <label class="fw-bold ms-2 my-2">Select Role</label>

            <div class="ms-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="role = 'manager'"
                />
                <label class="form-check-label mb-1" for="flexRadioDefault1">
                  Manager
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="role = 'teacher'"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Teacher
                </label>
              </div>
            </div>
            <div class="d-grid">
              <button
                class="btn buttonsend rounded mx-3 my-1"
                data-bs-dismiss="modal"
                @click="toastShowAddManager = !toastShowAddManager"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Add Manager-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowAddManager == true ? 'show' : '']"
  >
    <div class="row rowtoast">
      <div class="col-2">
        <img src="@/assets/icons8-futurama-bender-144.svg" alt="" />
      </div>
      <div class="col-8">
        <h6 class="">The System</h6>
      </div>
      <div class="col-2 text-end pe-4">
        <FIcons
          class="bg-light text-success p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastShowAddManager = !toastShowAddManager"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Manager added successfully</p>
  </div>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      currentManager: {},
      toastShowAddManager: false,
      user: {},
      first_name: "",
      last_name: "",
      email: "",
      role: "",
      password: "",
      password_confirm: "",
    };
  },
  // computed: {
  //   user() {
  //     return this.$store.getters["auth/user"];
  //   },
  // },
  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.user = this.$store.getters["auth/user"];
    },
    async submitForm() {
      // manager object stores the data from the form
      const manager = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        role: this.role,
        password: this.password,
        password_confirm: this.password_confirm,
      };

      try {
        await this.$store.dispatch("admin/addManager", manager);
        this.$store.dispatch("admin/fetchManagers");
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>
<style scoped  lang="scss">
.buttonsend {
  background-color: #3f4f5f;
  color: white;
}

.toast {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 25rem;
}
.rowtoast {
  margin-bottom: -13px;
}
img {
  height: 30px;
  width: 30px;
}
.bodytoast {
  margin: {
    top: -10px;
  }
}
</style>