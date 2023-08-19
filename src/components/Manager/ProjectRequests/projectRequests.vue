<template>
  <div class="row">
    <NavBarManager />
  </div>
  <div class="row d-flex justify-content-around">
    <div
      class="col-md-5 mb-4"
      v-for="(project, index) in projectsRequests"
      :key="index"
    >
      <div class="progressdiv2 rounded-4 p-3 pt-4">
        <h6 class="fw-bold ms-1 mb-3">{{ project.project_title }}</h6>
        <div class="rounded-4 p-3 divShadow">
          <dt>Description</dt>

          <dd class="text-black-50 me-4">
            {{ project.project_description }}
          </dd>
          <dt>Client email</dt>
          <dd class="text-black-50">{{ project.email }}</dd>
          <dt>File</dt> 
          <button class="btn button1 border border-light rounded-4 mt-2 bg-light">
            <a :href="project.project_file_path" target="_blank" class="text-decoration-none text-dark me-2">Download</a>
            <FIcons :icon="['fas', 'download']" />
          </button>
          <div class="row mt-5 d-flex justify-content-around">
            <div class="col-5">
              <button
                class="btn accepted rounded-3 px-5 fw-bold"
                @click="acceptProject(project)"
              >
                Accept
              </button>
            </div>
            <div class="col-5">
              <button
                class="btn btn-dark rounded-3 px-5 fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#myModal1"
                @click="rejectAction(project)"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Model for reject-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <h5 class="text-center mt-2 fw-bold">Reason of reject</h5>

        <!-- Modal body -->
        <div class="modal-body">
          <form action="#">
            <div class="chooses">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
@click="id_reject=13"
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
                  @click="id_reject=2"

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
                  @click="id_reject=3"

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
                  @click="id_reject=6"

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
              @click="rejectProject();(toastshowreject = !toastshowreject)"
            >
              <h5>Send</h5>
            </button>
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
    <p class="fw-bold text-center bodytoast">The project has been rejected</p>
  </div>
  <!--Toast Acceot-->
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
    <p class="fw-bold text-center bodytoast">
      The project has been accepted check approved projects.
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
      currentProject: {},
      id:'',
      id_reject:0
    };
  },

  computed: {
    projectsRequests() {
      return this.$store.getters["manager/projectsRequests"];
    },
  },
  mounted() {
    this.fetchProjectsRequests();
  },
  methods: {
    async fetchProjectsRequests() {
      try {
        await this.$store.dispatch("manager/fetchProjectsRequests");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    }, 
    async acceptProject(project) {
      this.currentProject=project;
      console.log(this.currentProject.id);
      const pro = {
        id: this.currentProject.id,
              };

      try {
        await this.$store.dispatch("manager/acceptProject", pro);
        this.$store.dispatch("admin/fetchManagers");
      } catch (error) {
        this.error = error.message;
      }
      this.toastshowaccept = !this.toastshowaccept
    },
    rejectAction(project) {
      this.currentProject = project;
    },
    async rejectProject() {
      console.log( this.currentProject.id);
      console.log(this.id_reject);
      const pro = {
        id: this.currentProject.id,
        reject:this.id_reject,
              };

      try {
         this.$store.dispatch("manager/rejectProject", pro);
        this.$store.dispatch("admin/fetchManagers");
      } catch (error) {
        this.error = error.message;
      }
      this.toastshowaccept = !this.toastshowaccept
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
.chooses {
  margin-left: 3rem;
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
.buttonsend {
  background-color: #3f4f5f;
  color: white;
}
dt,
h6 {
  color: #000;
}
.divShadow {
  background-color: rgb(244, 240, 244);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>