


<template>
   
    <div class="m-5  px-5 messege"> 
    
      <h2 class="fw-bold p-5">Notifications</h2>
      <div class="alert alert-success alert-dismissible fade show mx-5 mt-3" v-for="(c, index) in contactUs" :key="index">
        {{ c.message }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      
      };
    },
  
    
    computed: {
      contactUs() {
        return this.$store.getters["client/contactUs"];
      },
   
    
    },
    mounted() {
      this.fetchContactUs();
    },
    methods: {
      async fetchContactUs() {
        try {
          await this.$store.dispatch("client/fetchContactUs");
        } catch (error) {
          this.errors = error.message || " Something went wrong!";
        }
      },

    },
  };
  </script>
  
  <style scoped>
 .messege{
height:43rem;
 }
 
  </style>
  
  
  