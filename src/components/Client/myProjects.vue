<template>
  <!-- <br />GETPROJECTS<br />
  <p>{{ projects[0].category }} {{ projects[0].title }}</p>
  <br />
  <div v-for="(p, index) in projects" :key="index">
    {{ p.title }}{{ index }}
  </div> -->

  <!-- <br />GETPROJECTSTeams<br />
  <br />
  <div v-for="(p, index) in projectsTeams" :key="index">
    {{ p }}
    <div v-for="(member, j) in p.team_members" :key="j">
      <p>Member ID: {{ member.id }}</p>
      <p>First Name: {{ member.first_name }}</p>
      <p>Last Name: {{ member.last_name }}</p>
      <p>Email: {{ member.email }}</p>
    </div>
  </div> -->
  <div
    class="row p-4 px-5"
    v-for="(project, index) in projectsTeams"
    :key="index"
  >
    <div class="col-md-3 mb-5 mb-md-2">
      <div class="progressdiv2 rounded-4 p-3 pt-4 divShadow">
        <h6 class="fw-bold ms-1">Progress</h6>
        <p class="rounded-4 ps-3 py-1">
          Started<br />
          <span class="text-black-50">{{ project.start_date }}</span>
        </p>
        <h1>{{ project.project_status + "%" }}</h1>

        <div class="progress ms-1 my-5">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated progressbar"
            :style="{ width: project.project_status + '%' }"
          ></div>
        </div>
        <hr />
        <div class="row text-start">
         
            <p class="fw-bold">Deadline <br />{{project.project_deadline}}Days</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-2">
      <div class="progressdiv2 rounded-4 p-3 pt-4 divShadow">
        <h6 class="fw-bold ms-1">Project details</h6>
        <div class="rounded-4 p-2">
          <dl>
            <dt>{{ project.project_title }}</dt>
            <dd class="text-black-50 me-4">
              {{ project.project_description }}
            </dd>
            <dt>Status</dt>
            <dd class="text-black-50">{{ project.project_status }}</dd>
            <dt>Category</dt>
            <dd class="text-black-50 pt-3">
              <span class="rounded-5 px-3 py-2 status">{{
                project.project_category
              }}</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="col-md-5 mb-2">
      <div class="progressdiv2 rounded-4 p-3 divShadow">
        <h6 class="fw-bold ms-1 mb-4s">Project team</h6>
        <p class="fw-bold ms-1">Project manager:- {{ project.manager_first_name +' '}}{{ project.manager_last_name }}</p>
        <p class="fw-bold ms-1">Teams:-
          <FIcons
                 v-if="project.project_status == 100"
                class="text-warning"
                :icon="['fas', 'star']"
                @click="copyProject(project);addStars(project)"
              />
            
        </p>
        <div
          class="rounded-4 "
          v-for="(member, j) in project.team_members"
          :key="j"
        >
          <dl>
            <dt>
              {{ j + 1 + ":- " }}{{ member.first_name }} {{ member.last_name }}
            </dt>
           
          </dl>
        </div>
      </div>
    </div>
  </div>
    <!--Toast already given-->
    <div
    class="toast text-light pt-1 mb-2"
    style="background-color: red"
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
          class="bg-light text-danger p-1 rounded"
          :icon="['fas', 'close']"
          data-bs-dismiss="toast"
          @click="toastshowaccept = !toastshowaccept"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">You have alredy  given star </p>
  </div>
     <!--Toast succefull given-->
     <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastgiven == true ? 'show' : '']"
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
          @click="toastgiven = !toastgiven"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Team gave stars successfully </p>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      currentProject:{},
      toastshowaccept:false,
      toastgiven:false
    };
  },

  computed: {
    projects() {
      return this.$store.getters["client/projects"];
    },
    projectsTeams() {
      return this.$store.getters["client/projectsTeams"];
    },
    star() {
      return this.$store.getters["client/star"];
    },
  
  },
  mounted() {
    this.fetchProjects();
    this.fetchProjectsTeams();
  }, 
  methods: {
    fetchProjects() {
      try {
        this.$store.dispatch("client/fetchProjects");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },

    fetchProjectsTeams() {
      try {
        this.$store.dispatch("client/fetchProjectsTeams");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
      copyProject(project){
      this.currentProject=project;
      const proj = {
        project_id: this.currentProject.project_id,
          team_id: this.currentProject.team_id,      };
      try {
          this.$store.dispatch("client/checkStar", proj);
         this.fetchProjectsTeams;
         if(this.$store.getters["client/star"]=='false'){
        this.toastgiven=true
          }
      } catch (error) {
        this.error = error.message;
      }
  
    },
      addStars(project){
      this.currentProject=project;
      if(this.star=='true'){
        this.toastshowaccept=true
          }
      const proj = {
        project_id: this.currentProject.project_id,
        team_id:this.currentProject.team_id
              };
      try {
          this.$store.dispatch("client/addStars", proj);
         this.fetchProjectsTeams;
      } catch (error) {
        this.error = error.message;
      }
     
    }
  },
};
</script>
<style scoped lang="scss">
// .progressdiv2 {
//   background-color: #e2dcc8;
//   color: #0f3d3e;
// }
.progressbar,
.status {
  background-color: #0f3d3e;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
}
img {
  height: 5rem;
  width: 5rem;
}
.imgmanager {
  margin-left: 40%;
}
.divShadow {
  //  background-color: rgb(240 235 240);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  background-color: rgb(244, 240, 244);
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