<template>
  <div class="row pe-4">
    <NavBarManager />
    <CreateRoadmap />
  </div>
  <!--Body-->

  <div class="row roadmap m-4 mt-5 rounded-4 py-4" v-for="(road, index) in roadmaps" :key="index">
    <div class="col-1 text-start">
      <img src="@/assets/man1.png" class="img-fluid" alt="" />
    </div>
    <div class="col-md-11">
      <div class="row">
         <div class="col-4">
          <h4 class="fw-bold">Dr: {{ road.first_name }}{{ road.last_name }}</h4>
          <p class="text-white-50">
            {{ road.date }}
          </p>
        </div>
        <div class="col-8 text-end">
          <FIcons
            class="text-light p-1 rounded"
            :icon="['fas', 'pen-to-square']"
            data-bs-toggle="modal"
            data-bs-target="#myModal3"
            @click="copyRoadmap(road)"
          
            />
          <FIcons
            class="text-light p-1 px-3 rounded"
            :icon="['fas', 'trash']"
            data-bs-toggle="modal"
            data-bs-target="#myModal1"
            @click="copyRoadmap(road)"

          />
        </div>
      </div>

      <h6 class="lh-lg">
        <h4>{{ road.title}}</h4>
        <h6>{{ road.category}}</h6>
        {{ road.description }}
      </h6>
    </div>
  </div>
  <!-- Model for Delete  Roadmap-->
  <div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content px-5 py-2">
        <!-- Modal Header -->
        <h4 class="text-center fw-bold mt-3">Are you sure ?</h4>

        <!-- Modal body -->
        <div class="modal-body">
          <p class="text-center text-black-50 text-danger">
            Your are about to delete this roadmap
          </p>

          <div class="d-grid">
            <button
              class="btn buttonsend rounded mx-3 my-2 py-2"
              data-bs-dismiss="modal"
              @click=" deleteRoadmap()"
            >
              <h6>Yes am sure</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Delete Roadmap-->
  <div
    class="toast bg-danger text-light pt-1 mb-2"
    :class="[toastShowDeleteRoadmap == true ? 'show' : '']"
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
          @click="toastShowDeleteRoadmap = !toastShowDeleteRoadmap"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Roadmap deleted successfully</p>
  </div>

  <!-- The Modal  for Update Roadmap-->
  <div class="modal fade" id="myModal3">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->

        <h4 class="text-center fw-bold mt-4">Update Roadmap</h4>

        <!-- Modal body -->
        <div class="modal-body px-5">
          <form action="#">
            <label class="mt-2 fw-bold my-2 mt-2">Title</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Title"
              v-model="currentRoadmap.title"
              name="Title"
            />
            <label class="mt-4 fw-bold my-2 mt-2">Category</label>

            <div class="ms-1 row">
              <div class="form-check col-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="currentRoadmap.category='web_development'"
                />
                <label class="form-check-label mb-1" for="flexRadioDefault1">
                  Web development
                </label>
              </div>

              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  @click="currentRoadmap.category='web_security'"

                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  Security
                </label>
              </div>
              <div class="form-check col-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  @click="currentRoadmap.category='ui_ux'"

                />
                <label class="form-check-label mb-2" for="flexRadioDefault1">
                  UI/UX
                </label>
              </div>
            </div>
            <label class="mt-4 fw-bold my-2 mt-2">Description</label>
            <textarea
              class="form-control rounded-3"
              rows="9"
              id="description"
              v-model="currentRoadmap.description"
              name="description"
            ></textarea>
          </form>
          <div class="row">
            <div class="col-6 text-end">
              <button
                class="btn buttonsend rounded my-3 px-5"
                data-bs-dismiss="modal"
                @click="updateRoadmap"
              >
                Update
              </button>
            </div>
            <div class="col-6 text-start">
              <button
                class="btn btnCancel rounded my-3 px-5"
                data-bs-dismiss="modal"
                @click="toastShowUpdateRoadmap = !toastShowUpdateRoadmap"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Update Roadmap-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowUpdateRoadmap == true ? 'show' : '']"
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
          @click="toastShowUpdateRoadmap = !toastShowUpdateRoadmap"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Roadmap updated successfully</p>
  </div>
</template>
       
<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
import CreateRoadmap from "./createRoadMap.vue";
export default {
  components: {
    NavBarManager,
    CreateRoadmap,
  },

  data() {
    return {
    
      currentRoadmap: {
         },
         
      toastShowDeleteRoadmap: false,
      toastShowUpdateRoadmap: false,
    };
  },
  computed: {
    roadmaps() {
      return this.$store.getters["manager/roadmaps"];
    },
 
  
  },
  mounted() {
    this.fetchRoadmaps();
  },
  methods: {
    async fetchRoadmaps() {
      try {
        await this.$store.dispatch("manager/fetchRoadmaps");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },

    async deleteRoadmap() {
    
    const road = {
          id:this.currentRoadmap.id,

    }; 

    try {
       this.$store.dispatch("manager/deleteRoadmap", road);
       this.$store.dispatch("manager/fetchRoadmaps");

      this.toastShowDeleteRoadmap = !this.toastShowDeleteRoadmap;
   } catch (error) {
      this.error = error.message;
    }
  },

  // Update
  
  async updateRoadmap() { 

const road = {
    id: this.currentRoadmap.id,
    title: this.currentRoadmap.title,
    description: this.currentRoadmap.description,
    category: this.currentRoadmap.type,
};
try {
  await this.$store.dispatch("manager/updateRoadmap", road);
  await this.$store.dispatch("manager/fetchRoadmaps");
  this.toastShowUpdateRoadmap = !this.toastShowUpdateRoadmap
} catch (error) {
  this.error = error.message;
}  
},
    //CUREENT ROADMAP
    copyRoadmap(road) {
     this.currentRoadmap=road;
     console.log(this.road)
    },
  },
};
</script>
<style lang="scss" scoped>
.roadmap {
  background-color: #3f4f5f;
  color: white;
}

.buttonsend {
  background-color: #3f4f5f;
  color: white;
}
.btnCancel {
  background-color: red;
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

