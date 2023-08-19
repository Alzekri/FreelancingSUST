<template>
  <div class="row text-center">
    <img
      src="@/assets/lightLogo.png"
      alt=""
      style=" width: 300px;
        height: 250px;
        margin-top: -3rem;
        margin-bottom: -4rem;
      "
    />
  </div>
  <div class="row row_form text-align-items-center">
    <form @submit.prevent="logInValid" class="m-auto">
      <h1 class="text-center fw-bold mb-2">Welcome back</h1>
      <p class="text-center fw-bold">Please Enter Your Details</p>
      <div class="mx-4">
        <label class="fw-bold m-2">Email OR Username</label>
        <input
          type="text"
          class="form-control ms-3 py-3 mb-3"
          id="email"
          placeholder="Enter Your Email"
          name="Email"
          v-model="userName"
        />
      </div>
      <div class="mx-4">
        <label class="fw-bold m-2">Password</label>
        <input
          type="password"
          class="form-control ms-3 py-3 mb-3"
          id="password"
          placeholder="*****************"
          name="password"
          v-model="password"
        />
      </div>
      <div class="row ms-4">
        <div class="col-md-6 text-start">
          <input
            class="form-check-input me-2"
            type="checkbox"
            id="check1"
            name="remeber"
            value="something"
          />
          <label class="form-check-label fw-bold">Remember me</label>
        </div>
        <div class="col-md-6 text-end pe-4">
          <p class="text-black-50 fw-bold">Forget Password</p>
        </div>
      </div>
        <button @click="logInValid" class="btn text-light mt-2 fw-bold py-3 px-5 buttonSign me-5 ms-5">
          Sign in
        </button>
      <div class="row mt-2">
        <span class="text-black-50 col-md-12 text-center">
          Don't have an account?

          <router-link
            to="signup"
            class="col-md-7 text-end text-decoration-none ms-1"
          >
            <span class="span2">Sign up</span>
          </router-link>
        </span>
      </div>
    </form>
    <p class="text-danger text-center">{{error}}</p>
  </div>
</template> 
<script>
  export default {
    data() {
      return {
          userName:'',
          password:'',
          error:''
      }
    },

    methods :{
     async logInValid(){  
      try {
        await this.$store.dispatch("std/loginStd", {
          username: this.userName,
          password: this.password,
        });
        const role=localStorage.getItem("role");
        console.log(role)
        if (role===null) {
          this.$router.replace({ path: "welcome" });
        }else{
          this.$router.replace({ path: "overview" });
        }
        
      } catch (e) {
        this.error = 'wrong username or password';
      }
      
      }
    }
  }
</script>
  <style lang="scss" scoped>
form {
  max-width: 55%;
  p {
    color: #063535;
  }

  .form-control {
    border-radius: 0.9rem;
  }
  button {
    background-color: #556c7b;
    border-radius: 0.9rem;
  }
  button:hover {
    background-color: #538f8f;
    border-radius: 0.9rem;
  }
  .span2 {
    color: #063535;
  }
}
label {
  color: #063535;
}
@media only screen and (min-width: 600px) {
  .row_form {
    height: calc(100vh - 14rem);
  }
}
.buttonSign {
  width: 21.6rem;
  padding-left: 10rem;
}
</style>