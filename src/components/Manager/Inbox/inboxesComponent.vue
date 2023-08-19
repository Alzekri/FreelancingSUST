


<template>
  <div class="row mb-3">
    <NavBarManager />
  </div>
  <div>
  
    <h2 class="fw-bold mb-4">Notifications</h2>
    
    <div class="alert alert-success alert-dismissible fade show mx-5 mt-3" v-for="(c, index) in contactUs" :key="index">
      {{ c.client_email+'  =>        (' }}{{c.description+')'  }}
    </div>
  </div>
</template>

<script>
import NavBarManager from "@/components/Nav/navBarManager.vue";
export default {
  components: { NavBarManager },
  data() {
    return {
    
    };
  },

  
  computed: {
    contactUs() {
      return this.$store.getters["manager/contactUs"];
    },
 
  
  },
  mounted() {
    this.fetchContactUs();
  },
  methods: {
    async fetchContactUs() {
      try {
        await this.$store.dispatch("manager/fetchContactUs");
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },

    // deleteEvent(noteID) {
    //   const index = this.notifications.findIndex((item) => item.id === noteID);
    //   if (index >= 0) {
    //     this.notifications.splice(index, 1);
    //   }
    // },
  },
};
</script>

<style scoped>
.main {
  margin-left: 10%;
  background-color: #212121;
  height: 100vh;
}

#CardContainer {
  background: #1b1d1d;
  border-radius: 16px;
  height: 70px;
}
.bigC {
  background-color: #212121;
  height: 100vh;
  margin-left: 10%;
}
</style>


