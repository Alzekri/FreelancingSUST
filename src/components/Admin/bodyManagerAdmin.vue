<template>
  <h1 class="fw-bold mt-5">Managers List</h1>
  <h6 class="text-black-50">
    Manage all existing managers or add new managers
  </h6>
  <div class="row me-4">
    <table class="table mt-2">
      <thead class="text-center tablebody">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First NAME</th>
          <th scope="col">Last NAME</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>

          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody class="text-center">
        <tr v-for="(manager, index) in managers" :key="index">
          <th scope="row">{{ manager.id }}</th>
          <td>{{ manager.first_name }}</td>
          <td>{{ manager.last_name }}</td>
          <td>{{ manager.email }}</td>

          <td>{{ manager.role }}</td>

          <td>
            <FIcons
              @click="selectManager(manager)"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
              class="text-light p-1 rounded-1 me-1"
              style="background-color: #8b9bb2"
              :icon="['fas', 'edit']"
            />

            <FIcons
              @click="selectManager(manager)"
              data-bs-toggle="modal"
              data-bs-target="#myModal4"
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'trash']"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- MODAL UPDATE -->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title fw-bold">Update Manager</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <form @submit.prevent="updateManager">
            <label class="fw-bold my-2 mt-2">First Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Name"
              name="Name"
              v-model.trim="currentManager.first_name"
            />
            <label class="fw-bold my-2 mt-2">Last Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Name"
              name="Name"
              v-model.trim="currentManager.last_name"
            />
            <label class="fw-bold my-2 mt-2">Email</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="email"
              name="Email"
              v-model.trim="currentManager.email"
            />
            <label class="fw-bold my-2 mt-2">Password</label>
            <input
              type="password"
              class="form-control rounded-3"
              id="confirm_password"
              name="confirm_password"
              v-model.trim="currentManager.password"
            />
            <label class="fw-bold my-2 mt-2">Confirm Password</label>
            <input
              type="password"
              class="form-control rounded-3"
              id="confirm_password"
              name="confirm_password"
              v-model.trim="currentManager.password"
            />
            <label class="fw-bold my-2 mt-2">Role</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                @click="currentManager.role = 'manager'"
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
                @click="currentManager.role = 'teacher'"
              />
              <label class="form-check-label mb-2" for="flexRadioDefault1">
                Teacher
              </label>
            </div>
            <div class="d-grid">
              <button
                class="btn buttonsend rounded mx-3 my-3"
                data-bs-dismiss="modal"
              >
                Update
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
    :class="[toastShowUpdateManager == true ? 'show' : '']"
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
          @click="toastShowUpdateManager = !toastShowUpdateManager"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Manager updated successfully</p>
  </div>
  <!-- Model for Delete Manager-->
  <div class="modal fade" id="myModal4">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50 text-danger">
            Your are about to delete this manager
          </p>

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="deleteAcion()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Delete Manager-->
  <div
    class="toast bg-danger text-light pt-1 mb-2"
    :class="[toastShowDeleteManager == true ? 'show' : '']"
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
          class="bg-light text-danger p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastShowDeleteManager = !toastShowDeleteManager"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Manager deleted successfully</p>
  </div>
</template>  
<script>
export default {
  data() {
    return {
      currentManager: {},
      toastShowUpdateManager: false,
      toastShowDeleteManager: false,
      id: 0,
    };
  },

  computed: {
    managers() {
      return this.$store.getters["admin/managers"];
    },
  },
  mounted() {
    this.fetchManagers();
  },
  methods: {
    fetchManagers() {
      try {
        this.$store.dispatch("admin/fetchManagers");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    selectManager(manager){
      this.currentManager=manager;
      console.log("this.currentManager.id");
      console.log(this.currentManager);
      console.log(this.currentManager.id);
    },
    deleteAcion() {
      try {
        this.$store.dispatch("admin/deleteManager",this.currentManager);
        this.fetchManagers()
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    updateManager() {
      try {
       
        this.$store.dispatch("admin/updateManager", {
          // manager: this.currentManager,
          // id: this.currentManager.id,
            manager: this.currentManager,

        });
        this.toastShowUpdateManager = !this.toastShowUpdateManager;

        this.$store.dispatch("admin/fetchManagers");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
  }, 
};
</script>
<style scoped lang="scss">
.tablebody {
  background-color: #e1d6e1;
  border-radius: 150px;
  margin-bottom: 2rem;
}
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