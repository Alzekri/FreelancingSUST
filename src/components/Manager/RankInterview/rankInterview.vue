<template>
  <div class="row">
    <NavBarManager />
  </div>
  <dl class="my-4">
    <dt><h3 class="fw-bold">Interviews</h3></dt>
    <dd class="text-black-50">Accept or decline ranks interviews</dd>
  </dl>
  <div class="row me-5 ms-1">
    <table class="table">
      <thead class="text-center">
        <tr class="tablebody">
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody class="text-center"  v-for="(rank, index) in interviewRequests" :key="index">
        <tr class="">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ rank.first_name }}  </td>
          <td>{{ rank.last_name }}</td>
          <td>{{ rank.username }}</td>
          <td>{{ rank.role }}</td>
          <td>{{ rank.current_rank }}</td>
          <td>{{ rank.next_rank }}</td>
          <td>
            <FIcons
              class="text-light p-1 rounded-1 me-2"
              style="background-color: #8b9bb2"
              :icon="['fas', 'check-double']"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
              @click="copyRank(rank)"
            />
            <FIcons
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'trash']"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              @click="copyRank(rank)"

            />
          </td>
        </tr>
        <div class="divhr"></div>
      </tbody>
    </table>
  </div>

  <h3 class="fw-bold my-4">Accepted Interviews</h3>
  <div class="row me-5 ms-1">
    <table class="table">
      <thead class="text-center">
        <tr class="tablebody">
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody class="text-center"  v-for="(rank, index) in acceptedInterviewRequests" :key="index">
        <tr class="">
          <th scope="row">{{ index + 1   }}</th>
          <td>{{ rank.first_name }}</td>
          <td>{{ rank.last_name }}</td>
          <td>{{ rank.username }}</td>
          <td>{{ rank.role }}</td>
          <td>{{ rank.current_rank }}</td>
          <td>{{ rank.next_rank }}</td>
          <td>
            <FIcons
              class="text-light p-1 rounded-1 me-2"
              style="background-color: #8b9bb2"
              :icon="['fas', 'upload']"
              data-bs-toggle="modal"
              data-bs-target="#myModal3"
              @click="copyRank(rank)"

            />
            <FIcons
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'circle-xmark']"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              @click="copyRank(rank)"

            />
          </td>
        </tr>
        <div class="divhr"></div>
      </tbody>
    </table>
  </div>
  <!-- Model for Accept-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50">
            Your are about to select the below student for rank meeting
          </p>
          <pre class="bg-success ps-3 text-light rounded-2">
Ali adam   From:D   To:A   Role:Ui/Ux</pre
          >

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="acceptRank()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Accept-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowAcceptInterview == true ? 'show' : '']"
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
          @click="toastShowAcceptInterview = !toastShowAcceptInterview"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Student added successfuly to accepted interviews
    </p>
  </div>
  <!-- Model for Reject interviews-->
  <div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50 text-danger">
            Your are about to reject the below student request for upgrade rank
          </p>
          <pre class="bg-success ps-3 text-light rounded-2">
Ali adam   From:D   To:A   Role:Ui/Ux</pre
          >

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="rejectRank()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Reject Interview-->
  <div
    class="toast bg-danger text-light pt-1 mb-2"
    :class="[toastShowRejectInterview == true ? 'show' : '']"
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
          @click="toastShowRejectInterview = !toastShowRejectInterview"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Request deleted successfully</p>
  </div>

  <!-- Model for Accept Upgare-->
  <div class="modal fade" id="myModal3">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50 text-danger">
            Your are about to upgrade the below student request rank
          </p>
          <pre class="bg-success ps-3 text-light rounded-2">
Ali adam   From:D   To:A   Role:Ui/Ux</pre
          >

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="acceptUpgrade()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Accept Upgare-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowAcceptUpgrade == true ? 'show' : '']"
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
          @click="toastShowAcceptUpgrade = !toastShowAcceptUpgrade"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Student rank upgraded successfully
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
      toastShowAcceptInterview: false,
      toastShowRejectInterview: false,
      toastShowAcceptUpgrade: false,
      currentRank:{}
    };
  },
  
  computed: {
    interviewRequests() {
      return this.$store.getters["manager/interviewRequests"];
    },
    acceptedInterviewRequests() {
      return this.$store.getters["manager/acceptedInterviewRequests"];
    },
  
  },
  mounted() {
    this.fetchRank();
  },
  methods: {
    async fetchRank() {
      try {
        await this.$store.dispatch("manager/fetchRank");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async acceptRank() {
    
    const rank = {
          id:this.currentRank.id,
          student_id: this.currentRank.student_id,

    };

    try {
       this.$store.dispatch("manager/acceptRank", rank);
      this.$store.dispatch("manager/fetchRank");
      this.toastShowAcceptInterview = !this.toastShowAcceptInterview
      } catch (error) {
      this.error = error.message;
    }
  },
  async rejectRank() {
    
    const rank = {
          id:this.currentRank.id,
          student_id: this.currentRank.student_id,

    };

    try {
       this.$store.dispatch("manager/rejectRank", rank);
      this.$store.dispatch("manager/fetchRank");
      this.toastShowRejectInterview = !this.toastShowRejectInterview      } catch (error) {
      this.error = error.message;
    }
  },
 
  async acceptUpgrade() {
    
    const rank = {
          id:this.currentRank.id,
          student_id: this.currentRank.student_id,
          rank:this.currentRank.rank

    };

    try {
       this.$store.dispatch("manager/acceptUpgrade", rank);
      this.$store.dispatch("manager/fetchRank");
      this.toastShowAcceptUpgrade = !this.toastShowAcceptUpgrade} catch (error) {
      this.error = error.message;
    }
  },
 
  async cancelUpgrade() {
    
    const rank = {
          id:this.currentRank.id,
          student_id: this.currentRank.student_id,

    };

    try {
       this.$store.dispatch("manager/cancelUpgrade", rank);
      this.$store.dispatch("manager/fetchRank");
      this.toastShowRejectInterview = !this.toastShowRejectInterview      } catch (error) {
      this.error = error.message;
    }
  },
 
    copyRank(rank){
this.currentRank=rank;
    }
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