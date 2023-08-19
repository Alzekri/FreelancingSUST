<template>
  <div class="row me-0">
    <div class="text-center">
      <img src="@/assets/pic10_request_project.svg" class="me-5 mx-5" alt="" />
      <h1>Request your project now</h1>
      <p class="text-black-50 mx-5">
        Enter project title and briefly describe the requirements and the
        functionality
      </p>
    </div>
    <div>
      <form @submit.prevent="submitForm" class="m-auto mb-3">
        <label class="ms-3 fw-bold">Project title</label>
        <input
          type="text"
          class="form-control ms-3 mt-2 py-2"
          id="email"
          placeholder="Enter project title"
          name="Email"
          v-model="project_title"
        />
        <label class="ms-3 fw-bold mt-3 mb-2">Description</label>
        <textarea
          class="form-control ms-3"
          rows="7"
          id=""
          placeholder="Describe what you want in your project"
          v-model="project_description"
        ></textarea>
     
        <label class="ms-3 fw-bold mt-3 mb-2" for="customFile"
          >Upload File</label
        >
        <input
          type="file"
          class="form-control w-50 ms-4"
          id="customFile"
          @change="handleFileUpload"
        />
        <div class="d-grid ms-4 ps-1">
          <base-button
            class="mt-3 fw-bold py-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Send Request
          </base-button>
        </div>
      </form>
    </div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Thank you</h4>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <h6 class="text-black-50">
              We will review your request and contact you soon stay tuned
            </h6>
          </div>

          <!-- Modal footer -->

          <div class="d-grid my-4 mx-5">
            <base-button data-bs-dismiss="modal"> I Will </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      project_title: "",
      project_description: "",
      project_file: "",
    };
  },

  methods: {
    async submitForm() {
      const request = {
        project_title: this.project_title,
        project_description: this.project_description,
        project_file: this.project_file,
      };
      try {
        await this.$store.dispatch("client/projectRequest", request);
      } catch (error) {
        this.error = error.message;
      }
    },
    handleFileUpload(event) {
      this.project_file = event.target.files[0];
 
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 13rem;
  width: 13rem;
}

button {
  background-color: #556c7b;
  border-radius: 0.9rem;
  color: white;
  border: none;
}
button:hover {
  background-color: #538f8f;
  border-radius: 0.9rem;
}
form {
  width: 33%;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
  }
}
label {
  color: #063535;
}
@media only screen and (max-width: 600px) {
  form {
    padding-left: 5rem;
    width: 100%;
    .form-control {
      border-radius: 0.9rem;
      width: 80%;
    }
    button {
      background-color: #063535;
      border-radius: 0.9rem;
      width: 80%;
    }
  }
}
</style>