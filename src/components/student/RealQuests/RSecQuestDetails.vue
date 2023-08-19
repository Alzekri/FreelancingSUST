<template>
  <div class="m-0 colored">
    <div class="d-flex main">
      <div class="container w-75 justify-content-center m-0" id="main-container">
        <div class="row gx-5 justify-content-center">
          <div class="col justify-content-between px-5 mt-5">
            <div class="row justify-content-between">
              <div class="col-6">
                <p class=" fs-2 fw-bold text-white">{{ selectedSecQuest.title }}</p>
                <p class="fs-5 text-white">Web Development ● <span class="text-warning">⭐</span></p>
              </div>
              <div class="col-2 text-end ">
                <button class="btn" @click="goBack">
                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                </button>
              </div>

            </div>
            <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5" id="CardContainer">
              <div class="col">
                <p class="fs-4 text-white">{{ selectedSecQuest.description }}
                </p>
                <p class="fs-4 fw-bold text-white">Required Roles 👨‍💼
                </p>
                <ul class="fs-5 text-white">
                  <li>Front-end 👨‍💻:{{ selectedSecQuest.frontend }}</li>
                  <li>Back-end 👩‍🌾:{{ selectedSecQuest.backend }}</li>
                  <li>Ui-Ux 🧑‍🎨:{{ selectedSecQuest.ui_ux }}</li>
                  <li>web_security 🕵️‍♀️:{{ selectedSecQuest.web_security }}</li>
                </ul>
                <div class="d-flex gap-3">
                  <button type="button" class="btn btn-success btn-rounded mt-3 "
                    :class="{ 'disabled': getFeedback === 2 || getFeedback === 1 || getFeedback === 0 || getTeamFeedback === 2 || getTeamFeedback === 1 }"
                    id="ApplyBtn" @click="applySolo(selectedSecQuest.project_id)">Apply Solo</button>
                  <button type="button" class="btn btn-warning btn-rounded mt-3" data-bs-toggle="modal"
                    @click="applyTeam(selectedSecQuest.project_id)" data-bs-target="#applyModal"
                    :class="{ 'disabled': getTeamFeedback === 2 || getTeamFeedback === 1 || getTeamFeedback === 3 || getTeamFeedback === 4 || getFeedback === 2 || getFeedback === 1 || getFeedback === 0 }">Apply
                    as Team</button>
                </div>
                <p v-if="getFeedback === 2" class="text-primary fw-bold fs-4 ">Sorry you already sent request</p>
                <p v-if="getFeedback === 1" class="text-success">The request has been sent successfully</p>
                <p v-if="getFeedback === 0" class="text-danger">your rank is low sorry</p>

                <p v-if="getTeamFeedback === 1" class="text-success fw-bold fs-4 ">applied successfully</p>
                <p v-if="getTeamFeedback === 2" class="text-primary">Sorry you already sent request</p>
                <p v-if="getTeamFeedback === 3" class="text-danger">Sorry you are not team leader</p>
                <p v-if="getTeamFeedback === 4" class="text-danger fw-bold ">Sorry you do not have team</p>
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
  props: ['sId'],
  data() {
    return {
      selectedSecQuest: [],
    };
  },
  computed: {
    getFeedback() {
      return this.$store.getters['realQuests/getFeedback'];
    },
    getTeamFeedback() {
      return this.$store.getters['realQuests/getTeamFeedback'];
    },
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      this.$store.dispatch('realQuests/reset');
    },
    getTasks() {
      const toNumm = parseInt(this.sId, 10);
      this.selectedSecQuest = this.$store.getters['realQuests/secuirtyRQuests'].find((quest) => quest.project_id === toNumm);
    },
    async applySolo(projects_id) {

      const toNumm2 = parseInt(projects_id, 10);
      try {
        await this.$store.dispatch('realQuests/applySolo', {
          project_id: toNumm2,
        });
      } catch (e) {
        console.log(e)
      }
      console.log('jf');
      console.log(this.getFeedback);
    },
    async applyTeam(projects_id) {

      const toNumm2 = parseInt(projects_id, 10);
      try {
        await this.$store.dispatch('realQuests/applyTeam', {
          project_id: toNumm2,
        });
      } catch (e) {
        console.log(e)
      }
      console.log('jf');
      console.log(this.getFeedback);
    },
  }
};
</script>

<style scoped>
#main-container {
  padding-left: 20%;
}

#CardContainer {
  background: #1B1D1D;
  border-radius: 16px;
}

.main {
  background-color: #212121;
  height: 100vh;
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