<template>
  <div class="row">
    <NavBarManager />
  </div>
  <p></p>
  <h3 class="fw-bold my-3">Approved Projects</h3>
  <div class="row d-flex justify-content-around">
    <div
      class="col-md-5 mb-4"
      v-for="(project, index) in projectsApproveds"
      :key="index"
    >
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">{{ project.project_title }}</h6>
        <div class="rounded-4 p-3 divShadow">
          <dt>Description</dt>
          <p>{{ project.project_description }}</p>
          <input
            class="col-3 form-control"
            type="text"
            placeholder="enter description "
            v-model="editdescription"
          />

          <dt>Client email</dt>
          <p class="text-black-50 me-4">
            {{ project.email }}
          </p>
          <dt>Category</dt>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              @click="category = 'web_development'"
            />
            <label class="form-check-label mb-1" for="flexRadioDefault1">
              Web development.
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              @click="category = 'web_security'"
            />
            <label class="form-check-label mb-2" for="flexRadioDefault1">
              Web Security.
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              @click="category = 'ui_ux'"
            />
            <label class="form-check-label mb-2" for="flexRadioDefault1">
              UI/UX Design.
            </label>
          </div>

          <dt>Deadline</dt>
          <input
            class="col-2 mb-2 form-control w-50"
            type="text"
            v-model="deadline"
          />
          <dt>Rank</dt>
          <input
            class="col-2 mb-2 form-control w-25"
            type="text"
            v-model="rank"
          />

          <dt class="mt-4">Team roles</dt>
          <dd class="text-black-50">
            Select the numbers of team roles requireed for this project and
            publish
          </dd>
          <div class="row mt-4">
            <div class="col-md-6">
              <label class="col-md-9">Frontend </label>
              <!-- <input class="col-3" type="number" :value="project.frone_end" /> -->
              <input class="col-3" type="number" v-model="frontend" />
            </div>
            <div class="col-md-6">
              <label class="col-md-9">Backend </label>
              <input class="col-3" type="number" v-model="backend" />
              <!-- <input class="col-3" type="number" :value="project.back_end" /> -->
            </div>
            <div class="col-md-6 mt-2">
              <label class="col-md-9">UI/UX </label>
              <input class="col-3" type="number" v-model="ui_ux" />
              <!-- <input class="col-3" type="number" :value="project.ui_ux" /> -->
            </div>
            <div class="col-md-6 mt-2">
              <label class="col-md-9">Security</label>
              <input class="col-3" type="number" v-model="security" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-7 ms-md-4">
              <button
                class="w-100 btn accepted rounded-3 px-5 py-2 fw-bold"
                @click="publishAction(project)"
              >
                Publish
              </button>
            </div>
            <div class="col-md-4">
              <button
                class="btn btn-dark rounded-3 px-4 py-2 fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#myModal1"
                @click="cancelAction(project)"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3 class="fw-bold my-3">Ready Projects</h3>
  <div class="row d-flex justify-content-around">
    <div
      class="col-md-5 mb-4"
      v-for="(project, index) in projectsReady"
      :key="index"
    >
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">{{ project.project_title }}</h6>
        <div class="rounded-4 p-3 divShadow">
          <dt>Description</dt>
          <p>{{ project.project_description }}</p>
          <dt>Client email</dt>
          <dd class="text-black-50">{{ project.email }}</dd>
          <dt class="mt-3">Category</dt>
          <dd class="text-black-50 pt-2 mt-1">
            <span class="rounded-5 px-2 py-2 status">{{
              project.project_category
            }}</span>
          </dd>
          <!-- <dt class="mt-4">Team roles</dt>
          <dd class="text-black-50">
            Select the numbers of team roles requireed for this project and
            publish
          </dd>
          <div class="row mt-4">
            <div class="col-md-6">
              <label class="col-md-9">Frontend </label>
              <input
                class="col-3"
                type="text"
                :value="project.frontend + '/' + project.frontend"
              />
            </div>
            <div class="col-md-6">
              <label class="col-md-9">Backend </label>
              <input
                class="col-3"
                type="text"
                :value="project.backend + '/' + project.backend"
              />
            </div>
            <div class="col-md-6 mt-2">
              <label class="col-md-9">UI/UX </label>
              <input
                class="col-3"
                type="text"
                :value="project.ui_ux + '/' + project.ui_ux"
              />
            </div>
            <div class="col-md-6 mt-2">
              <label class="col-md-9">Security</label>
              <input
                class="col-3"
                type="text"
                :value="project.security + '/' + project.security"
              />
            </div>
          </div> -->
          <div class="mt-4 text-center">
            <button
              class="w-75 btn accepted rounded-3 px-5 py-2 fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#myModalupdate"
              @click="updateAction(project)"
            >
              Update status
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Model for cancel-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <h2 class="modal-title text-danger fw-bold text-center mt-2">
          Warning
        </h2>

        <p class="text-black-50 text-center">
          you are about to cancel project that's already accepted
        </p>

        <!-- Modal body -->
        <div class="modal-body">
          <form action="#" class="px-3">
            <div class="chooses">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="id_cancel = 13"
                />
                <label class="form-check-label mb-1" for="flexRadioDefault1">
                  We are busy.
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="id_cancel = 2"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Not enough resources.
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="id_cancel = 3"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Services unavaliable.
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="id_cancel = 6"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Others.
                </label>
              </div>
            </div>
          </form>
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-3"
              data-bs-dismiss="modal"
              @click="cancelProject()"
            >
              <h6 class="text-light">Send</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Model for update-->
  <div class="modal fade" id="myModalupdate">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="modal-title fw-bold">Manage progress</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <div v-if="currentProject.project_status != null">
            <div class="d-grid">
              <button
                class="btn buttonstage btn-success rounded mx-2 my-3 py-2"
                data-bs-dismiss="modal"
              >
                <h6 class="text-light">Under developing</h6>
              </button>
            </div>
            <div>
              <input
                class="w-75 ms-5"
                style="accent-color: #0f3d3e"
                type="range"
                min="1"
                max="100"
                step="1"
                v-model="currentProject.project_status"
              />
              <p class="text-center">{{ currentProject.project_status }}%</p>
            </div>

            <div class="d-grid">
              <button
                class="btn buttonsend rounded mx-2 py-2"
                data-bs-dismiss="modal"
                @click="updateStatus()"
              >
                <h6 class="text-light">Update progress</h6>
              </button>
            </div>
          </div>
          <div v-else><h3>Not started yet..</h3></div>
          <h4 class="mt-4 mb-3 fw-bold">Team members</h4>
          <div
            v-for="(member, index) in currentProject.team_members"
            :key="index"
          >
            <p>
              {{
                member.first_name +
                member.last_name +
                "   Rank:" +
                member.rank +
                "   Role:" +
                member.role
              }}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Reject-->
  <div
    class="toast bg-danger text-light pt-1 mb-2"
    :class="[toastshowreject == true ? 'show' : '']"
  >
    <div class="row rowtoast">
      <div class="col-2">
        <img src="@/assets/icons8-futurama-bender-144.svg" alt="" />
      </div>
      <div class="col-8">
        <h6 class="text-light">The System</h6>
      </div>
      <div class="col-2 text-end pe-4">
        <FIcons
          class="bg-light text-danger p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastshowreject = !toastshowreject"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">The project has been canceld</p>
  </div>
  <!--Toast Accept-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastshowaccept == true ? 'show' : '']"
  >
    <div class="row rowtoast">
      <div class="col-2">
        <img src="@/assets/icons8-futurama-bender-144.svg" alt="" />
      </div>
      <div class="col-8">
        <h6 class="text-light">The System</h6>
      </div>
      <div class="col-2 text-end pe-4">
        <FIcons
          class="bg-light text-success p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastshowaccept = !toastshowaccept"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">The project has been already.</p>
  </div>
  <!--Toast Update-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastshowupdate == true ? 'show' : '']"
  >
    <div class="row rowtoast">
      <div class="col-2">
        <img src="@/assets/icons8-futurama-bender-144.svg" alt="" />
      </div>
      <div class="col-8">
        <h6 class="text-light">The System</h6>
      </div>
      <div class="col-2 text-end pe-4">
        <FIcons
          class="bg-light text-success p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastshowupdate = !toastshowupdate"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Project status has been updated successfully.
    </p>
  </div>
</template>
         
  <script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
export default {
  components: {
    NavBarManager,
  },
  data() {
    return {
      toastshowreject: false,
      toastshowaccept: false,
      toastshowupdate: false,
      slide: "10",
      currentProject: {},
      category: "",
      rank: "",
      deadline: "",
      frontend: 0,
      backend: 0,
      ui_ux: 0,
      security: 0,
      editdescription: "",
      id_cancel: 0,
    };
  },

  computed: {
    projectsApproveds() {
      return this.$store.getters["manager/projectsApproveds"];
    },
    projectsReady() {
      return this.$store.getters["manager/projectsReady"];
    },
  },
  mounted() {
    this.fetchProjectsApproveds();
  },
  methods: {
    async fetchProjectsApproveds() {
      try {
        await this.$store.dispatch("manager/fetchProjectsApproveds");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async publishAction(project) {
      this.currentProject = project;
      const pro = {
        id: this.currentProject.id,
        client_id: this.currentProject.client_id,
        title: this.currentProject.project_title,
        category: this.category,
        description: this.editdescription,
        deadline: this.deadline,
        rank: this.rank,
        frontend: this.frontend,
        backend: this.backend,
        ui_ux: this.ui_ux,
        web_security: this.security,
      };
      try {
        await this.$store.dispatch("manager/publishProject", pro);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.toastshowaccept = !this.toastshowaccept;
      this.fetchProjectsApproveds();
    },
    updateAction(project) {
      this.currentProject = project;
      console.log(this.currentProject.id);
    },
    cancelAction(project) {
      this.currentProject = project;
    },

    async cancelProject() {
      const pro = {
        id: this.currentProject.id,
        client_id: this.currentProject.client_id,
        cancel: this.id_cancel,
      };

      try {
        this.$store.dispatch("manager/cancelProject", pro);
        this.$store.dispatch("manager/fetchProjectsApproveds");
        this.toastshowreject = !this.toastshowreject;
      } catch (error) {
        this.error = error.message;
      }
    },

    async updateStatus() {
      const pro = {
        id: this.currentProject.id,
        status: this.currentProject.project_status,
      };

      try {
        this.$store.dispatch("manager/updateStatus", pro);
        this.$store.dispatch("manager/fetchProjectsApproveds");
      } catch (error) {
        this.error = error.message;
      }
      this.toastshowupdate = !this.toastshowupdate;
    },
  },
};
</script>
  <style lang="scss" scoped>
.status {
  background-color: #0f3d3e;
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
}
.accepted {
  background-color: hsl(215, 35%, 58%);
  color: white;
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
.buttonstage {
  background-color: rgb(0, 98, 34);
  color: white;
  border: none;
}
h6 {
  color: rgb(0, 0, 0);
}
.divShadow {
  background-color: rgb(244, 240, 244);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>