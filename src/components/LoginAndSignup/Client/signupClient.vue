<template>
  <div class="row ms-md-4 mt-2 me-0">
    <form @submit.prevent="submitForm">
      <h3 class="fw-bold mb-2">
        Welcome TO<br />
        Career <span class="span1">Crafter </span>PLATFORM
      </h3>
      <p>Please Enter Your Details</p>
      <div>
        <label class="fw-bold">First Name</label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Full Name"
          name="Email"
          v-model="first_name"
          required
        />
      </div>
      <div>
        <label class="fw-bold">Last Name</label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Full Name"
          name="Email"
          v-model="last_name"
          required
        />
      </div>
      <div>
        <label class="fw-bold"
          >Company Name
          <pre class="text-danger d-inline"> *Optional</pre>
        </label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Current Company Name"
          name="Email"
          v-model="company_name"
        />
      </div>
      <div>
        <label class="fw-bold">Email</label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Email"
          name="Email"
          v-model="email"
          required
        />
      </div>
      <div>
        <label class="fw-bold"
          >Company Email
          <pre class="text-danger d-inline"> *Optional</pre>
        </label>
        <input
          type="text"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="Enter Your Company Email"
          name="Email"
          v-model="company_email"
        />
      </div>
      <div>
        <label class="fw-bold">Password</label>
        <input
          type="password"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="*****************"
          name="Email"
          v-model="password"
          required
        />
      </div>
      <div>
        <label class="fw-bold">Confirm Password</label>
        <input
          type="password"
          class="form-control py-2 mb-1"
          id="email"
          placeholder="*********************"
          name="Email"
          v-model="password_confirm"
          required
        />
      </div>
      <div class="d-grid">
        <button class="btn text-light fw-bold py-2 mt-2">Sign up</button>
      </div>
      <div class="row mt-1">
        <span class="text-black-50 col-md-5 text-md-end">
          Already have an account?
        </span>
        <router-link
          to="login"
          class="col-md-4 text-start span2 text-decoration-none"
        >
          <span class="span2">Sign in</span>
        </router-link>
      </div>
    </form>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      error: null,
      first_name: "",
      last_name: "",
      company_name: "",
      email: "",
      company_email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async submitForm() {
      // user object stores the data from the form
      const user = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      };
      //console.log(user);
      //send the user data to client module
      try {
        await this.$store.dispatch("client/addUser", user);
        this.$router.replace("login");
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.span1 {
  color: #063535;
}
form {
  padding-left: 12rem;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
    width: 60%;
  }
  button {
    background-color: #556c7b;
    border-radius: 0.9rem;
    width: 60%;
  }
  button:hover {
    background-color: #538f8f;
    border-radius: 0.9rem;
  }
  .span2 {
    margin-left: -0.6rem;
    color: #063535;
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
    .span2 {
      margin-left: 0rem;
    }
  }
}
</style>