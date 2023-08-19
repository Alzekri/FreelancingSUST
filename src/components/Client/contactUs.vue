<template>
  <div class="row me-0">
    <div class="text-center">
      <img src="@/assets/pic10_request_project.svg" class="me-5 mx-5" alt="" />
      <dt>
        <h1>Contact us now I need help</h1>
        <dl class="text-black-50 mx-5">
          write down your problem and we will help you as soon as possible
        </dl>
      </dt>
    </div>
    <div>
      <form @submit.prevent="submitForm" class="m-auto mb-3">
        <label class="ms-3 fw-bold mb-2">Message</label>
        <textarea
          class="form-control ms-3"
          rows="7"
          id=""
          placeholder="Send us your messege"
          v-model="description"
        ></textarea>
        <div class="d-grid ms-4 ps-2">
          <button
            class="mt-3 fw-bold py-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Send Message
          </button>
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
              We will review your message and contact you soon stay tuned
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
      isAdd: false,
      description: "",
    };
  },
  methods: {
    async submitForm() {
      const message = {
        description: this.description,
      };
      try {
        await this.$store.dispatch("client/contactUS", message);
      } catch (error) {
        this.error = error.message;
      }
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