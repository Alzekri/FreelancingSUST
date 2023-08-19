<template>
  <div class="row">
    <NavBarManager />
    <GreatTask />
  </div>
  <dl>
    <dt><h3 class="fw-bold">Tasks</h3></dt>
    <dd class="text-black-50">Manage tasks here</dd>
  </dl>
  <!-- Tasks Table -->
  <div class="row me-5 ms-1">
    <table class="table">
      <thead class="text-center">
        <tr class="tablebody">
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">File</th>
          <th scope="col">Level</th>
          <th scope="col">Rank</th>
          <th scope="col">Total points</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody class="text-center" v-for="(task, index) in tasks" :key="index">
        <tr class="">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ task.title }}</td>
          <td>{{ task.category }}</td>
          <td v-if="task.file_path==null"> 
        </td>
        <td v-else> <button class="btn button1 border border-light rounded-4  bg-light">
            <a :href="task.file_path"  class="text-decoration-none text-dark me-2">Download</a>
            <FIcons :icon="['fas', 'download']" />
          </button>
        </td>
          <td>{{ task.level }}</td>
          <td>{{ task.rank }}</td>
          <td>{{ task.points }}</td>
          <td>
            <FIcons
              class="text-light p-1 rounded-1 me-2"
              style="background-color: #8b9bb2"
              :icon="['fas', 'pen-to-square']"
              data-bs-toggle="modal"
              data-bs-target="#myModal3"
              @click="copyTask(task)"
            />
            <FIcons
              class="text-dark p-1 rounded-1"
              :icon="['fas', 'trash']"
              data-bs-toggle="modal"
              data-bs-target="#myModal4"
              @click="copyTask(task)"

            />
          </td>
        </tr>
        <div class="divhr"></div>
      </tbody>
    </table>
  </div>
  <!-- The Modal  for Update  Task-->
  <div class="modal fade" id="myModal3">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->

        <h4 class="text-center fw-bold mt-4">Update Task</h4>

        <!-- Modal body -->
        <div class="modal-body px-5">
          <form action="#">
            <label class="fw-bold my-2 mt-2">Name</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Name"
              v-model="currentTask.title"
              name="Name"
            />
            <label class="fw-bold my-2 mt-2">Description</label>
            <textarea
              class="form-control rounded-3"
              rows="3"
              id="description"
              v-model="currentTask.description"
              name="description"
            >
          </textarea>
          <label class="ms-1 fw-bold mt-3 mb-2" for="customFile"
          >Upload File</label
        >
        <input
          type="file"
          class="form-control w-75 m2-4"
          id="customFile"
          @change="handleFileUpload"
        />
            <label class="fw-bold ms-2 my-2">Level</label>
            <div class="ms-3 row">
              <div class="form-check col-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="currentTask.level = 'easy'"
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
                  @click="currentTask.level = 'medium'"
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
                  @click="currentTask.level = 'hard'"
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
              v-model="currentTask.points"
              name="points"
            />
            <div
              v-if="
                currentTask.category == 'security' ||
                currentTask.level == 'easy'
              "
            >
              <label class="fw-bold my-2 mt-2 ms-2"> Solution </label>
              <textarea
                class="form-control rounded-3 mx-2"
                rows="3"
                id="description"
                placeholder="Enter  solution for task"
                name="description"
                v-model="currentTask.solution"
              ></textarea>
            </div>
          </form>
          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-3"
              data-bs-dismiss="modal"
              @click="updateTask"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Update Task-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowUpdateTask == true ? 'show' : '']"
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
          @click="toastShowUpdateTask = !toastShowUpdateTask"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Task updated successfully</p>
  </div>
  <!-- Model for Delete Task-->
  <div class="modal fade" id="myModal4">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50 text-danger">
            Your are about to delete this task
          </p>

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click="deleteTask()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Delete Task-->
  <div
    class="toast bg-danger text-light pt-1 mb-2"
    :class="[toastShowDeleteTask == true ? 'show' : '']"
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
          @click="toastShowDeleteTask = !toastShowDeleteTask"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Task deleted successfully</p>
  </div>
</template>
  
  <script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
import GreatTask from "./greateTask.vue";
export default {
  components: {
    NavBarManager,
    GreatTask,
  },
  data() {
    return {
      toastShowDeleteTask: false,
      toastShowUpdateTask: false,
      currentTask: {},
      file_path:''
    };
  },
  computed: {
    tasks() {
      return this.$store.getters["manager/tasks"];
    },
  
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        await this.$store.dispatch("manager/fetchTasks");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async deleteTask() {
    
    const task = {
      id: this.currentTask.id,
            };

    try {
       this.$store.dispatch("manager/deleteTask", task);
      this.$store.dispatch("manager/fetchTasks");
      this.toastShowDeleteTask = !this.toastShowDeleteTask    } catch (error) {
      this.error = error.message;
    }
  },
  async updateTask() { 

      const task = {
          id: this.currentTask.id,
          title: this.currentTask.title,
          level: this.currentTask.level,
          description: this.currentTask.description,
          rank: this.currentTask.rank,
          category: this.currentTask.type,
          solution:this.currentTask.solution, 
           points:this.currentTask.points ,
        file_path:this.currentTask.file_path    
      };
      try {
        await this.$store.dispatch("manager/updateTask", task);
        await this.$store.dispatch("manager/fetchTasks");
        this.toastShowUpdateTask = !this.toastShowUpdateTask
      } catch (error) {
        this.error = error.message;
      }  
    },
    handleFileUpload(event) {
      this.currentTask.file_path = event.target.files[0];
     
    },
 
    copyTask(task) {
      this.currentTask = task;
    },
  },
};
</script>
  <style lang="scss" scoped>
.tablebody {
  background-color: #e1d6e1;
}
.divhr {
  height: 10px;

  background-color: white;
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