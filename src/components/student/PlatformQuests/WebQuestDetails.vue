<template>
  <div class="m-0 colored">
    <div class="d-flex main">
      <!-- NOTE Web Quest -->
      <div v-if="selectedWebQuest.level === 'easy'" class="container w-75 justify-content-center m-0" id="main-container">
        <div class="row gx-5 justify-content-center">
          <div class="col justify-content-between px-5 mt-5">
            <div class="row justify-content-between ">
              <div class="col-6">
                <p class=" fs-2 fw-bold text-white ">{{ selectedWebQuest.title }}</p>
                <p class="fs-5 text-white">Web development ● <span class="text-success text-uppercase" >{{ selectedWebQuest.level
                }} 🙂</span>
                  ●{{ selectedWebQuest.points }} </p>
              </div>
              <div class="col-2 text-end ">
                <button class="btn" @click="goBack">
                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                </button>
              </div>

            </div>
            <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-center" id="CardContainer">
              <div class="col">
                <p class="fs-4 text-white">{{ selectedWebQuest.description}}
                </p>

                <label for="formFileLg" class="form-label text-white fs-3 fw-bold mt-3">Write down your
                  Solution {{ getRes }} </label>
                <textarea class="form-control form-control-lg" id="formControlReadonly" rows="4"
                  placeholder="Solution here..." aria-label="readonly input example" v-model="Solution"/>
                <button type="button" class="btn  btn-rounded mt-3" @click="submittedT(selectedWebQuest.task_id)">Submit</button>
                <p v-if="getRes===1" class="text-danger fs-4 fw-bold">Nailed it! Well done!🎉</p>
                <p v-if="getRes===0" class="text-danger fs-4 fw-bold">Oops! That's not quite right. Give it another shot! 🙃</p>
                <p v-if="getRes===2" class="text-primary fs-4 fw-bold">Well well well, look who's ahead of the game! You've already hit that submit button like a boss. 😉</p>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedWebQuest.level === 'medium'" class="container w-75 justify-content-center m-0" id="main-container">
        <div class="row gx-5 justify-content-center">
          <div class="col justify-content-between px-5 mt-5">
            <div class="row justify-content-between ">
              <div class="col-6">
                <p class=" fs-2 fw-bold text-white">{{ selectedWebQuest.title }}</p>
                <p class="fs-5 text-white">Web development ● <span class="text-primary text-uppercase"> MID 😈</span> ● {{
                  selectedWebQuest.points }} Cubes</p>
              </div>
              <div class="col-2 text-end ">
                <button class="btn" @click="goBack">
                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                </button>
              </div>

            </div>
            <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5" id="CardContainer">
              <div class="col">
                <p class="fs-4 text-white">
                  {{ selectedWebQuest.description }}
                </p>
                <label for="formFileLg" class="form-label text-white fs-5 fw-bold mt-3">Githup
                  repostiroy link </label>
                <input class="form-control form-control-lg" id="formControlReadonly" type="url"
                  placeholder="githup link here..." aria-label="readonly input example" />
                <div class="d-flex gap-3">
                  <button type="button" class="btn btn-success btn-rounded mt-3">Submit</button>
                  <button type="button" class="btn btn-danger btn-rounded mt-3">Cancel</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedWebQuest.level === 'hard'" class="container w-75 justify-content-center m-0" id="main-container">
        <div class="row gx-5 justify-content-center">
          <div class="col justify-content-between px-5 mt-5">
            <div class="row justify-content-between">
              <div class="col-6">
                <p class=" fs-2 fw-bold text-white">{{ selectedWebQuest.title }}</p>
                <p class="fs-5 text-white">Web Development ● <span class="text-danger"> HARD 👿</span> ●{{
                  selectedWebQuest.points }} Cubes</p>
              </div>
              <div class="col-2 text-end ">
                <button class="btn" @click="goBack">
                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                </button>
              </div>
            </div>
            <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5" id="CardContainer">
              <div class="col">
                <p class="fs-4 text-white">{{ selectedWebQuest.description }}
                </p>
                <label for="formFileLg" class="form-label text-white fs-5 fw-bold mt-3">Githup
                  repostiroy link </label>
                <input class="form-control form-control-lg" id="formControlReadonly" type="url"
                  placeholder="githup link here..." aria-label="readonly input example" />
                <div class="d-flex gap-3">
                  <button type="button" class="btn btn-success btn-rounded mt-3">Submit</button>
                  <button type="button" class="btn btn-danger btn-rounded mt-3">Cancel</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['wId'],
  data() {
    return {
      selectedWebQuest: [],
      Solution:''
     
    };
  },
  computed:{
    getRes(){
      return this.$store.getters['quests/getResult']
    },
 
  },
  // mounted (){
   
  // },
  mounted() { 
    this.getTasks();
    
  
  },
  methods :{
    goBack(){
      this.$router.go(-1);
      this.$store.dispatch('quests/resetFeedBack');
    },
    async submittedT(taskId){
      const toNumm2=parseInt(taskId,10);
      try{
          await this.$store.dispatch('quests/submitQuest',{
            taskId:toNumm2,
            Solution:this.Solution,
            });
        }catch (e){
          console.log(e)
        }
        console.log(this.getRes)
        
    },
   async getTasks(){
      const toNumm=parseInt(this.wId,10);
     this.selectedWebQuest = await this.$store.getters['quests/webQuests'].find((quest) => quest.task_id === toNumm);
    }
  }
};
</script>
<style scoped>
#main-container {
  padding-left: 20%;
}

.main {
  background-color: #212121;
  height: 100vh;
}

#CardContainer {
  background: #1B1D1D;
  border-radius: 16px;
}

.btn {
  background-color: #F28C18;
  color: white;
  border-color: #F28C18;
}

.btn:hover {
  background-color: #d28126;
  color: white;
  border-color: #F28C18;
}

.bi-arrow-return-left:hover {
  background-color: #323232;
  border-radius: 15px;
  padding: 5px;
}
</style>