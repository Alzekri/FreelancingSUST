

<template>
  <div class="col-md-5 text-end mt-4">
    <base-button mode="dark2" data-bs-toggle="modal" data-bs-target="#myModal2"
      >+add roadmap
    </base-button>
  </div>
  <!-- The Modal  for Add  New Roadmap-->
  <div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->

        <h4 class="text-center fw-bold mt-4">Add New Roadmap</h4>

        <!-- Modal body -->
        <div class="modal-body px-5">
          <form >
            <label class="mt-2 fw-bold my-2 mt-2">Title</label>
            <input
              type="text"
              class="form-control rounded-3"
              id="Title"
              placeholder="Enter title for roadmap"
              name="Title"
              v-model="title"
            />
            <label class="mt-4 fw-bold my-2 mt-2">Category</label>

            <div class="ms-1 row">
              <div class="form-check col-6">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  @click="category='web_development'"
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
                  @click="category='web_security'"

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
                  @click="category='ui_ux'"

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
              placeholder="Enter description for task"
              name="description"
              v-model="description"

            ></textarea>
          </form>
          <div class="row">
            <div class="col-6 text-end">
              <button
                class="btn btnAdd rounded my-3 px-5"
                data-bs-dismiss="modal"

                @click="submitForm"
              >
                ADD
              </button>
            </div>
            <div class="col-6 text-start">
              <button
                class="btn btnCancel rounded my-3 px-5"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Toast Add Roadmap-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowAddRoadmap == true ? 'show' : '']"
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
          @click="toastShowAddRoadmap = !toastShowAddRoadmap"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">Roadmap added successfully</p>
  </div>
</template>
      <script>
export default {
  data() {
    return { toastShowAddRoadmap: false ,
    title:'',
    description:'',
    category:'',
  
  
  };
  },
  methods:{
    async submitForm() { 
      const road = {
          title: this.title,
          description: this.description,
          category: this.category,
        
      };
      try {
        await this.$store.dispatch("manager/addRoamap", road);
        await this.$store.dispatch("manager/fetchRoadmaps");
        this.toastShowAddRoadmap = !this.toastShowAddRoadmap
      } catch (error) {
        this.error = error.message;
      }
    },
  }
};
</script>
      <style scoped  lang="scss">
.btnAdd {
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