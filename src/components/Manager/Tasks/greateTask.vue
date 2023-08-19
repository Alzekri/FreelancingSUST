<template>
  <div class="col-md-4 text-end ms-md-4 mt-4">
    <base-button mode="dark2" data-bs-toggle="modal" data-bs-target="#myModal1"
      >+create task
    </base-button>
  </div>
  <!-- Model for ADD New Task-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold">Confirm Selection</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <div v-for="(member, index) in team" :key="index"></div>
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              data-bs-dismiss="modal"
              @click="type = 'web_development'"
            > 
              <h6>Web development task</h6>
            </button>
          </div>
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              data-bs-dismiss="modal"
              @click="type = 'web_security'"
            >
              <h6>Web security task</h6>
            </button>
          </div>
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
              data-bs-dismiss="modal"
              @click="type = 'ui_ux'"
            >
              <h6>UI/UX task</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Add Task-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowAddTask == true ? 'show' : '']"
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
          @click="toastShowAddTask = !toastShowAddTask"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Task added successfully</p>
  </div>
  <!-- The Modal  for Select  Task-->
  <div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->

        <h4 class="text-center fw-bold mt-4">Add New Task</h4>

        <!-- Modal body -->
        <div class="modal-body px-5">
          <form @submit.prevent="submitForm">
            <label class="fw-bold my-2 mt-2">Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Name"
              placeholder="Enter name for task"
              name="Name"
              v-model="title"
            />
            <label class="fw-bold my-2 mt-2">Description</label>
            <textarea
              class="form-control rounded-3"
              rows="3"
              id="description"
              placeholder="Enter description for task"
              name="description"
              v-model="description"

            > </textarea>
            <label class="ms-1 fw-bold mt-3 mb-2" for="customFile"
          >Upload File</label
        >
        <input
          type="file"
          class="form-control w-75 m2-4"
          id="customFile"
          @change="handleFileUpload"
        />
            <label class="fw-bold my-2 mt-2">Rank</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Name"
              placeholder="Enter name for task"
              name="Name"
              v-model="rank"
            />
            <label class="fw-bold ms-2 my-2">Level</label>
            <div class="ms-3 row">
              <div class="form-check col-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="level = 'easy'"
                />
                <label class="form-check-label mb-1" for="flexRadioDefault1">
                  Easy
                </label>
              </div>

              <div class="form-check col-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  @click="level = 'medium'"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Medium
                </label>
              </div>
              <div class="form-check col-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="level = 'hard'"
                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Hard
                </label>
              </div>
            </div>
            <label class="fw-bold ms-2 mt-2">Points</label>
            <input
              type="number"
              class="form-control rounded-3 mx-2"
              id="points"
              placeholder="Enter points for task"
              name="points"
              v-model="points"

            />
            <div v-if="type == 'security' || level == 'easy'">
              <label class="fw-bold my-2 mt-2 ms-2"> Solution </label>
              <textarea
                class="form-control rounded-3 mx-2"
                rows="3"
                id="description"
                placeholder="Enter  solution for task"
                name="description"
                v-model="solution"

              ></textarea>
            </div>

            <div class="d-grid">
              <button
                class="btn buttonsend rounded mx-3 my-3"
                data-bs-dismiss="modal"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      toastShowAddTask: false,

      type: "",
      level: "easy",
      title:'',
      description:'',
      rank:'',
      solution:'',
      points:'',
      file_path: "",


    };
  },
  methods: {
    async submitForm() { 
      const task = {
          title: this.title,
          level: this.level,
          description: this.description,
          rank: this.rank,
          category: this.type,
          solution:this.solution, 
        points:this.points ,
        file_path:this.file_path    
      };
        console.log(task);
      try {
        await this.$store.dispatch("manager/addTask", task);
        await this.$store.dispatch("manager/fetchTasks");
        this.toastShowAddTask = !this.toastShowAddTask
      } catch (error) {
        this.error = error.message;
      }  
    },
    handleFileUpload(event) {
      this.file_path = event.target.files[0];
     
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