<template>
  <div class="row mb-3">
    <NavBarManager />
  </div>
  <div class="bg-gray maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron1 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron1 = 'up'"
    />
    <FIcons
      v-else-if="chevron1 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron1 = 'down'"
    />
    <h6>Web development</h6>
  </div>
  <div 
    v-if="chevron1 == 'up'"
    class="task border border-2 rounded-3 p-4 mb-4 px-3 py-2 my-3 pb-5"
  >
  <div v-for="(task , index) in submittedWeb " :key="index"> 
    <h4 class="fw-bold">Tkask: {{ task.title }}</h4>
    <p class="fw-bold">Level:{{ task.level }} <br />Total points: {{ task.points }}</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">{{ task.username }}</h4>
        
          <p
            class="text-dark bg-light "
          
            style="height: 20rem;"
          >
          {{ task.solution }}
        </p>
        <div class="row mt-5">
          <div class="col-md-6 text-end">
            <button
              class="btn py-3 px-5"
              @click="fullPoints(task)
"

            >
              Give full pionts
            </button>
          </div>
          <div class="col-md-6 text-start">
            <input type="number" class="col-md-3 h-75 py-3"              v-model="custom_points"
/>
            <button
              class="btn py-3 px-4"
              data-bs-toggle="modal"
              data-bs-target="#myModal1"
              @click="customPoints(task)"
            >
              Give pionts
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

  <div class="maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron2 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron2 = 'up'"
    />
    <FIcons
      v-else-if="chevron2 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron2 = 'down'"
    />

    <h6>UI/UX</h6>
  </div>
  <div
    v-if="chevron2 == 'up'"
    class="task border border-2 rounded-3 p-4 mb-4 px-3 py-2 my-3 pb-5"
  >
  <div v-for="(task , index) in submittedDesign " :key="index"> 
    <h4 class="fw-bold">Task: {{ task.title }}</h4>
    <p>Level:{{ task.level }} <br />Total points: {{ task.points }}</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">{{ task.username }}</h4>
        <form action="" class="pe-5">
          <button class="btn button1 border border-light rounded-4">
            <a :href="task.file_path" class="text-decoration-none text-dark me-2">Download</a>
            <FIcons :icon="['fas', 'download']" />
          </button>
        </form>
        <div class="row mt-5">
          <div class="col-md-6 text-end">
            <button class="btn py-3 px-5"       @click="fullPoints(task)
">Give full pionts</button>
          </div>
          <div class="col-md-6 text-start">
            <input type="number" class="col-md-3 h-75 py-3"           v-model="custom_points"
 />
            <button class="btn py-3 px-4" @click="customPoints(task)">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  
</div>
   </div>
  <div class="bg-gray maindiv ms-1 d-flex border border-2 ps-4 py-2 pt-3">
    <FIcons
      v-if="chevron3 == 'down'"
      :icon="['fas', 'chevron-down']"
      class="FIcons"
      @click="chevron3 = 'up'"
    />
    <FIcons
      v-else-if="chevron3 == 'up'"
      :icon="['fas', 'chevron-up']"
      class="FIcons"
      @click="chevron3 = 'down'"
    />

    <h6>Web security</h6>
  </div>
  <div
    v-if="chevron3 == 'up'"
    class="task border border-2 rounded-3 p-4 mb-4 px-3 py-2 my-3 pb-5"
  >
  <div v-for="(task , index) in submittedSecurity " :key="index"> 
    <h4 class="fw-bold">Task: {{ task.title }}</h4>
    <p>Level:{{ task.level }} <br />Total points: {{ task.points }}</p>
    <div class="row">
      <div class="col-2">
        <img src="@/assets/man1.png" alt="" class="img-fluid" />
      </div>
      <div class="col ps-5">
        <h4 class="fw-bold">{{ task.username }}</h4>
        <form action="" class="pe-5">
          <input
            class="form-control"
            type="text"
            id="myFile"
            name="filename"
            :value="task.solution"
          />
          <label class="fw-bold mt-3">The report:</label>
          <p
            class="text-dark bg-light "
          
            style="height: 20rem;"
          >
          {{ task.report }}
        </p>         
        </form>
        <div class="row mt-5">
          <div class="col-md-6 text-end">
            <button
              class="btn py-3 px-5"
              @click="fullPoints(task)
"
            >
              Give full pionts
            </button>
          </div>
          <div class="col-md-6 text-start">
            <input type="number" class="col-md-3 h-75 py-3" v-model="custom_points"     />
            <button class="btn py-3 px-4" @click="customPoints(task)">Give pionts</button>
          </div>
        </div>
      </div>
    </div>
  
</div>
    </div>


  <!--Toast Accept Upgare-->
  <div
    class="toast text-light pt-1 mb-2"
    style="background-color: #1a889d"
    :class="[toastShowGiveMark == true ? 'show' : '']"
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
          @click="toastShowGiveMark = !toastShowGiveMark"
        />
      </div>
    </div>
    <hr />
    <p class="fw-bold text-center bodytoast">
      Points have been awarded successfully.
    </p>
  </div>
</template>
<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
export default {
  components: { NavBarManager },
  data() {
    return {
      chevron1: "down",
      chevron2: "down",
      chevron3: "down",
      toastShowGiveMark: false,
      custom_points:0    };
  },
  
  
  computed: {
    submittedWeb() {
      return this.$store.getters["manager/submittedWeb"];
      
    },
 
    submittedSecurity() {
      return this.$store.getters["manager/submittedSecurity"];
      
    },
    submittedDesign() {
      return this.$store.getters["manager/submittedDesign"];
      
    },
 
  
  },
  mounted() {
    this.fetchSubmittedWeb();
    this.fetchSubmittedSecurity();
this.fetchsubmittedDesign();  },
  methods: {
    async fetchSubmittedWeb() {
      try {
        await this.$store.dispatch("manager/fetchSubmittedWeb");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async fetchSubmittedSecurity() {
      try {
        await this.$store.dispatch("manager/fetchSubmittedSecurity");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    async fetchsubmittedDesign() {
      try {
        await this.$store.dispatch("manager/fetchsubmittedDesign");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
    fullPoints(task){
    
    const full = {
      id:task.id,
      task_id:task.task_id,
      student_id: task.student_id

  };

  try {
     this.$store.dispatch("manager/fullPoints", full);
     this.fetchSubmittedWeb();
  this.fetchSubmittedSecurity();
this.fetchsubmittedDesign();
 


  } catch (error) {
    this.error = error.message;
  }
  this.toastShowGiveMark=!this.toastShowGiveMark;




  },
  customPoints(task){
    if(this.custom_points > task.points){
      alert("The enterd points is more than the total points")
    } else if(this.custom_points < 0){
      alert("Please enter correct number of points")

    }
    else{const costum = {
        id:task.id,
        task_id:task.task_id,
        student_id: task.student_id,
        custom_points:this.custom_points

    };

    try {
       this.$store.dispatch("manager/customPoints", costum);
       this.fetchSubmittedWeb();
    this.fetchSubmittedSecurity();
this.fetchsubmittedDesign();
   


    } catch (error) {
      this.error = error.message;
    }
    this.toastShowGiveMark=!this.toastShowGiveMark;



}
      
  }  
  
  }
};
</script>
<style lang="scss" scoped>
.maindiv {
  margin-right: 10%;
  background-color: #8b9bb2;
  color: #ffffff;

  h6 {
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
}
.FIcons {
  color: #ffffff;
  height: 1.3rem;
  width: 1.5rem;
  margin-right: 2%;
}
.task {
  max-width: 70%;
  margin-left: 10%;
  background-color: #8b9bb2;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  color: black;

  button {
    background-color: #ffffff;
    color: black;
  }

  .button1 {
    color: black;
    background-color: white;
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