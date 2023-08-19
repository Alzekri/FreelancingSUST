<template>
  <div class="row">
    <NavBarManager />
  </div>
  <dl>
    <dt><h3 class="fw-bold">Teams</h3></dt>
    <dd class="text-black-50">
      See projects and the students whom applied to the project and select to
      fill the projects and positions.
      <br />
      <br />
      <p>
        <span class="text-danger fw-bold">Note: </span>you can't select more
        than the required position number.
      </p>
    </dd>
  </dl>
  <div class="mb-4 mt-5" v-for="(p,index) in teamRequests" :key="index">
    <dl>
      <dt><h4 class="fw-bold">{{ p.title }}</h4></dt>
      <dd>
        Client email <br />
        <span class="text-black-50">{{ p.client_email }}</span>
      </dd>
    </dl>
    <div class="row me-5 ms-1">
      <table class="table">
        <thead class="text-center">
          <tr class="tablebody">
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Rank</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody class="text-center" >
        
          <tr  v-for="(st,i) in p.student_requests" :key="i">
            <th scope="row">{{ i+1 }}</th>
            <td>{{ st.first_name }}</td>
            <td>{{ st.rank }}</td>
            <td>{{ st.role }}</td>
            <td>
              <FIcons
              class="text-light p-1 rounded-1 me-2"
              style="background-color: #8b9bb2"
              :icon="['fas', 'check']"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
              @click="copyStudent(p,st)"


            />
            <FIcons
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'circle-xmark']"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              @click="copyStudent(p,st)"


            />
            </td>
          </tr>
          <tr  v-for="(te,j) in p.team_requests" :key="j">
            <th scope="row">{{ j+1 }}</th>
            <td>{{ te.team_name }}</td>
            <td>Team</td>
            <td>Team</td>
            <td>
              <FIcons
              class="text-light p-1 rounded-1 me-2"
              style="background-color: #8b9bb2"
              :icon="['fas', 'check']"
              data-bs-toggle="modal"
              data-bs-target="#myModal3"
              @click="copyTeam(p,te)"


            />
            <FIcons
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'circle-xmark']"
              data-bs-toggle="modal"
              data-bs-target="#myModal4"
              @click="copyTeam(p,te)"


            />
            </td>
          </tr>
          <div class="divhr"></div>
        
           
        </tbody>
      </table>
    </div>
  </div>
<!--   
  <div class="divSelected text-light rounded-4">
    <pre>
        Ui/Ux 0 out of 1 <FIcons class=" text-success" :icon="['fas', 'check-double']" />
        back-end 0 out of 1<FIcons class=" text-success" :icon="['fas', 'check-double']" />
        front-end 0 out of 1<FIcons class=" text-success" :icon="['fas', 'check-double']" />
        security 0 out of 1<FIcons class=" text-success" :icon="['fas', 'check-double']" />
        other 0 out of 1<FIcons class=" text-success" :icon="['fas', 'check-double']" />
        total out of 1  <button class=" text-light border border-2 border-light rounded"   data-bs-toggle="modal"
                data-bs-target="#myModal1">Confirm</button>
      </pre>
  </div> -->
  <!-- Model for accept student-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h6 class="text-center fw-bold my-5">Are you sure you are accepted student's request</h6>

        <!-- Modal body -->
        <div class="modal-body">
        
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="acceptStudent()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Model for accept team-->
  <div class="modal fade" id="myModal3">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h6 class="text-center fw-bold my-5">Are you sure you are accepted team's request</h6>

        <!-- Modal body -->
        <div class="modal-body">
        
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="acceptTeam()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>

  <!--Toast Accept student-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastshowacceptstudent == true ? 'show' : '']"
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
          @click="toastshowacceptstudent = !toastshowacceptstudent"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Accepted successfully
    </p>
  </div>


<!-- Model for reject student-->
<div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h6 class="text-center fw-bold my-5">Are you sure you are reject student's request</h6>

        <!-- Modal body -->
        <div class="modal-body">
        
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="rejectStudent"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Model for reject team-->
  <div class="modal fade" id="myModal4">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h6 class="text-center fw-bold my-5">Are you sure you are reject team's request</h6>

        <!-- Modal body -->
        <div class="modal-body">
        
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="rejectTeam"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>

  <!--Toast reject student-->
  <div
    class="toast text-light pt-1 mb-2 bg-danger"
    :class="[toastshowrejectstudent == true ? 'show' : '']"
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
          @click="toastshowrejectstudent = !toastshowrejectstudent"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Rejected successfully
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
      toastshowacceptstudent: false,
      toastshowrejectstudent:false,
      currentStudent:{},
      currentTeam:{},
      student_id:0,
      team_id:0
    };
    
  },
  
  computed: {
    teamRequests() {
      return this.$store.getters["manager/teamRequests"];
    },
   
  },
  mounted() {
    this.fetchJoinRequests();
  },
  methods: {
    async fetchJoinRequests() {
      try {
        await this.$store.dispatch("manager/fetchJoinRequests");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async acceptStudent() {
    
    const request = {
          id:this.currentStudent.id,
          project_id:this.currentStudent.project_id,
          student_id: this.student_id

    };

    try {
       this.$store.dispatch("manager/acceptStudent", request);
      this.$store.dispatch("manager/fetchJoinRequests");
      this.toastshowacceptstudent = !this.toastshowacceptstudent

    } catch (error) {
      this.error = error.message;
    }
  },
  async acceptTeam() {
    
    const request = {
          id:this.currentStudent.id,
          project_id:this.currentStudent.project_id,
          team_id: this.team_id

    };

    try {
       this.$store.dispatch("manager/acceptTeam", request);
      this.$store.dispatch("manager/fetchJoinRequests");
      this.toastshowacceptstudent = !this.toastshowacceptstudent


    } catch (error) {
      this.error = error.message;
    }
  },
  async rejectStudent() {
    
    const request = {
          id:this.currentStudent.id,
       

    };

    try {
       this.$store.dispatch("manager/rejectStudent", request);
      this.$store.dispatch("manager/fetchJoinRequests");
      this.toastshowrejectstudent = !this.toastshowrejectstudent

    } catch (error) {
      this.error = error.message;
    }
  },
  
  async rejectTeam() {
    
    const request = {
          id:this.currentStudent.id,
       

    };

    try {
       this.$store.dispatch("manager/rejectTeam", request);
      this.$store.dispatch("manager/fetchJoinRequests");
      this.toastshowrejectstudent = !this.toastshowrejectstudent

    } catch (error) {
      this.error = error.message;
    }
  },
    copyStudent(p,st){
      this.currentStudent=p;
      this.student_id=st.student_id;
    },
    copyTeam(p,te){
      this.currentStudent=p;
      this.team_id=te.team_id;
    },
  }
};
</script>
<style lang="scss" scoped>
.tablebody {
  background-color: #e1d6e1;
}
.divhr {
  height: 5px;
}
.requestselected {
  background-color: rgb(1, 35, 9);
  border-color: rgb(1, 35, 9);
}
.divSelected {
  padding: {
    top: 1rem;
  }
  width: 15.5rem;
  height: 11rem;
  position: fixed;
  top: 12rem;
  right: 5rem;
  background-color: rgb(0, 0, 0);
  pre {
    margin-left: -3rem;
    button {
      background-color: rgb(0, 0, 0);
    }
  }
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