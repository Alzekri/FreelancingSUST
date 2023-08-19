<template>
  <div class="m-0 colored">
    <div class="d-flex main">
      <std-navbar class="w-auto"></std-navbar>
      <div class="d-flex gap-3" id="main-row">
        <div class="d-flex flex-column">
          <p class="fs-1 text-white fw-bold">Overview</p>
          <div class="container m-0 rounded" id="CardContainer">
            <div class="col text-center">
              <img src="../../assets/icons8-flame-princess.svg" class="bmoImage" alt="" srcset="" />
              <div class="btn border-white text-white mb-3 mt-3 custom" data-bs-toggle="modal"
                data-bs-target="#changeAvatarModal">
                Change Information
              </div>
            </div>
          </div>
          <!--NOTE Change avatar model -->
          <div class="modal fade " id="changeAvatarModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog ">
              <div class="modal-content bg-dark">
                <div class="modal-header">
                  <h5 class="modal-title text-white" id="exampleModalLabel">Change avatar</h5>
                  <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="container px-5 ">
                    <div class="row">
                      <div class="col-4 gap-2" v-for="av in avatarsNames" :key="av.id">
                        <img :src="avatars(av.name)" class="avatarImg" alt="" srcset="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn custom2 text-white">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div class="container m-0 rounded mt-2 mb-2 p-5" id="CardContainer">
            <div class="d-flex flex-column text-center">
              <p class="text-white fw-bold">Personal Information</p>
              <p class="text-white">Name</p>
              <p class="greying">{{ getPerInfo.first_name }} {{ getPerInfo.lastName }}</p>
              <p class="text-white">Nickname</p>
              <p class="greying fw-800">{{ getPerInfo.username }}</p>
              <p class="text-white">Role</p>
              <p class="greying fw-800">{{ getPerInfo.role }}</p>
            </div>
          </div>
        </div>
        <div class="col-6 mt-5">
          <!--NOTE  Cubes card -->
          <div class="container m-0 rounded mt-2 mb-2 p-3 " id="CardContainer">
            <div class="row">
              <div class="col gap-3">
                <p class="text-white fs-5 fw-bold ">Your magic cubes</p>
                <div class="row gap-2">
                  <div class="col align-items-start">
                    <img src="../../assets/Shape-73-small.svg" class="cubeImage mb-3" alt="" srcset="" />
                  </div>
                  <div class="col">
                    <p class="text-white fs-2">{{ getRankInfo.points }}</p>
                  </div>
                  <div class="col">
                    <button type="button" class="btn btn-secondary custom" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="By completing as much as possible quests 🧐">
                      How to earn magic cubes ?
                    </button>
                  </div>

                </div>
                <p class="text-white fs-6 fw-bold mb-4">Recent completed quest</p>
                <!-- NOTE   -->
                <!-- quest section -->
                <div v-if="getSovled">
                  <div class="container" v-for="(quest, index) in getSovled" :key="index">
                    <div class="row align-items-start">
                      <div class="col align-items-start p-0 m-0">
                        <img src="../../assets/Group3073.svg" alt="" class="questImg" />
                      </div>
                      <div class="col-4">
                        <P class="text-white mt-3">{{ quest.title }}</P>
                      </div>
                      <div class="col">
                        <p class="greying mt-3">LEVEL:{{ quest.level }}</p>
                      </div>
                      <div class="col">
                        <div class="row">
                          <div class="col align-items-center">
                            <img src="../../assets/Shape-73-ex-small.svg" class="questcubImg" alt="" />
                          </div>
                          <div class="col">
                            <P class="text-white mt-3">{{ quest.points }}</P>
                          </div>
                        </div>
  
                      </div>
                    </div>
                    <hr class="line mt-0" />
                  </div>
                 
                </div>
                <div v-else>
                    <p class="text-white">You did not solve any quest yet</p>
                </div>
                
              </div>
            </div>
          </div>
          <!--NOTE quest card -->
          <div v-if="getRecent" >
            <div class="container m-0 rounded mt-2 mb-2 p-3" id="CardContainer">
              <div class="d-flex flex-column">
                <p class="text-white fs-6 fw-bold">Active quest</p>
                <div class="container" v-for="(quest, index) in getRecent" :key="index">
                  <div class="row align-items-start">
                    <div class="col align-items-start p-0 m-0">
                      <img src="../../assets/Group3073.svg" alt="" class="questImg" />
                    </div>
                    <div class="col-4">
                      <P class="text-white mt-3">{{ quest.title }}</P>
                    </div>
                    <div class="col">
                      <p class="greying mt-3">LEVEL:{{ quest.level }}</p>
                    </div>
                    <div class="col">
                      <div class="row">
                        <div class="col align-items-center">
                          <img src="../../assets/Shape-73-ex-small.svg" class="questcubImg" alt="" />
                        </div>
                        <div class="col">
                          <P class="text-white mt-3">{{ quest.points }}</P>
                        </div>
                      </div>
  
                    </div>
                  </div>
                  <hr class="line mt-0" />
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="text-white">Nothing Added Yet</p>
        </div>
        </div>
        <div class="col-3 mt-4">
          <!--NOTE level card -->
          <div class="container m-0 rounded mt-2 mb-2 p-5" id="CardContainer">
            <div class="d-flex flex-column align-items-center gap-2">
              <p class="text-white fs-6 fw-bold">Rank</p>
              <img :src="personalInformation.rankImage('C_rank.svg')" alt="here img" srcset="" />
              <div class="container">
                <div class="progress">
                  <div class="progress-bar" role="progressbar"
                    :style="{ width: getRankInfo.percentageToNextRank + '%' }" aria-valuemin="0"
                    aria-valuemax="100">
                    {{ getRankInfo.percentageToNextRank}}%
                  </div>
                </div>
              </div>
              <p class="text-white fs-6">{{ getRankInfo.pointsToNextRank}} cubes to the next level</p>
              <button class="btn text-white mb-3 custom" data-bs-toggle="modal" :disabled="isButtonDisabled"
              data-bs-target="#levelUpgradeModal" >Upgrade Rank</button>
            </div>
          </div>
          <!--NOTE levelUpgradeModal -->
          <div class="modal fade " id="levelUpgradeModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog ">
              <div class="modal-content bg-dark">
                <div class="modal-header">
                  <h5 class="modal-title text-white" id="exampleModalLabel">Are you ready ? </h5>
                  <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p class="text-white ">you are about to request upgrade rank interview </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn custom2 text-white">Yes am ready</button>
                </div>
              </div>
            </div>
          </div>
          <!-- NOTE Stars section -->
          <div class="container m-0 rounded mt-2 mb-2 p-5" id="CardContainer">
            <div class="d-flex flex-column align-items-center gap-2">
              <p class="text-white fs-6 fw-bold">Real quests stars</p>
              <div class="d-flex gap-2">
                <p class="text-white fs-2 mt-3">{{ getStarsInfo.stars_count }}</p>
                <img src="../../assets/ic_stars_24px.svg" class="questcubImg" alt="" srcset="" />
              </div>
            </div>
          </div>
          <!-- NOTE skills section  -->
          <div class="container m-0 rounded mt-2 mb-2 p-5" id="CardContainer">
            <div class="d-flex flex-column gap-1">
              <p class="text-white fs-6 text-center fw-bold">Skills</p>
              <div class="d-flex flex-column align-items-start">
                <p class="text-white fs-6">Web Development</p>
                <div class="container p-0">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar"
                      :style="{ width: getIndInfo.web_development + '%' }" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100">
                      {{ getIndInfo.web_development }}%
                    </div>
                  </div>
                </div>
                <!-- NOTE Web security -->
                <p class="text-white fs-6">Web security</p>
                <div class="container p-0">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar"
                      :style="{ width: getIndInfo.web_security + '%' }" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100">
                      {{ getIndInfo.web_security  }}%
                    </div>
                  </div>
                </div>
                <!-- NOTE UI/UX -->
                <p class="text-white fs-6">UI/UX</p>
                <div class="container p-0">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar"
                      :style="{ width: getIndInfo.ui_ux + '%' }" aria-valuenow="25" aria-valuemin="0"
                      aria-valuemax="100">
                      {{  getIndInfo.ui_ux }}%
                    </div>
                  </div>
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
  data() {
    return {
      personalInformation: {
        name: '',
        nickName: '',
        role: '',
        avtarName:'',
        totalPoints: 2543,
        rankImage: (picName) => {
          return require('../../assets/ranks/' + picName)
        },
        rank: 'SS',
        remainPoints: 250,
        perLevelProgress: 10,
        numOfStars: 5,
        skills: {
          webDev: 70,
          webSec: 50,
          UIUX: 60
        }

      },
      avatars: (picName) => {
        return require('../../assets/' + picName)
      },
      avatarsNames: [
        { id: 1, name: 'icons8-bmo_sm.svg' },
        { id: 2, name: 'icons8-flame-princess.svg' },
        { id: 3, name: 'icons8-mando.svg' },
        { id: 4, name: 'icons8-walter-white.svg' },
        { id: 5, name: 'icons8-jake_sm.svg' },
        { id: 6, name: 'icons8-ice-king.svg' },
        { id: 7, name: 'icons8-iron-man.svg' },
        { id: 8, name: 'icons8-joker-suicide-squad.svg' },
        { id: 9, name: 'icons8-gunter.svg' },
        { id: 10, name: 'icons8-finn.svg' },
        { id: 11, name: 'icons8-genie.svg' }
      ],
      upgradeRankEnable:false
    }
  },
  computed:{
    isButtonDisabled(){
      return this.personalInformation.perLevelProgress !== 100;  
    },
    userInformation(){
      return this.$store.getters['std/student'];
    },
    getSovled(){
      return this.$store.getters['std/getSolvedTasks'];
    },
    getRecent(){
      return this.$store.getters['std/getRecentTasks'];
    },
    getRankInfo(){
      return this.$store.getters['std/getRankInfo']; 
    },
    
    getStarsInfo(){
      return this.$store.getters['std/getStarsInfo']; 
    },
    getIndInfo(){
      return this.$store.getters['std/getIndInfo']; 
    },
    getPerInfo(){
      return this.$store.getters['std/getPersonalInfo']; 
    },
   

  },

  mounted (){
    this.fetchPer();
    this.fetchSolved();
    this.fetchRecent();
    this.fetchRankInfo();
    this.fetchStarsInfo();
    this.fetchIndInfo();
    this.fetchPersonalInfo();
  },
methods: {
  async fetchPer(){
    try {
        await this.$store.dispatch("std/pickupTheData");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
  },
  async fetchSolved(){
    try {
        await this.$store.dispatch("std/getSolvedTask");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
  },
  async fetchRecent(){
    try {
        await this.$store.dispatch("std/getRecentTask");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
  },
  async fetchRankInfo(){
    try {
        await this.$store.dispatch("std/getRankInfo");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
  },
  async fetchStarsInfo(){
    try {
        await this.$store.dispatch("std/getStarsInfo");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
  },
  async fetchIndInfo(){
    try {
        await this.$store.dispatch("std/getIndInfo");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      console.log(this.$store.getters['std/getIndInfo']);
  },

  async fetchPersonalInfo(){
    try {
        await this.$store.dispatch("std/getPersonalInfo");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
   
  },

  
},
};
</script>


<style scoped>
.main {
  width: 100%;
  margin-right: 0px;
  height: auto;
}

.bmoImage {
  width: min-content;
  margin-left: auto;
}

.cubeImage {
  width: min-content;
  height: auto;
}

.avatarImg {
  width: 100%;
  height: auto;
  margin: 0;
}

.avatarImg:hover {
  background-color: #f28c18;
  border-radius: 50px;
  cursor: pointer;
}

.avatarImgLocked {
  background-color: #a4a4a4;
  border-radius: 50px;
}

.questImg {
  margin-left: 0;
  width: 50%;
  height: auto;
}

.questcubImg {

  width: 3rem;
  height: auto;
}

.greying {
  color: grey;
}

.custom:hover {
  background-color: #f28c18;
}

.custom2 {
  background-color: #f28c18;

}

.custom2:hover {
  background-color: #b86302;

}

hr.line {
  border-top: 2px solid #bbb;
}

#main-row {
  width: 75%;
  margin-left: 20%;
}

.colored {
  background-color: #212121;
}

#CardContainer {
  width: 100%;
  background: #1b1d1d;
  border-radius: 16px;
}
</style>