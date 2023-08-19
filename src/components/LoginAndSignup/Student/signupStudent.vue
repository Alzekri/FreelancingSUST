<template>
  <div class="row ms-4 mt-2 pt-5 mt-4 me-0">
    <form action="#">
      <h3 class="fw-bold mb-2">
        Welcome TO<br />
        <span class="span1">Career Crafter </span>PLATFORM
      </h3>
      <p>Please Enter Your Details</p>
      <div>
        <label class="fw-bold">First Name</label>
        <input v-model="firstName" type="text" class="form-control py-2 mb-1" id="email" placeholder="Enter Your Full Name" name="Email" />
      </div>
      <div>
        <label class="fw-bold">Last Name</label>
        <input v-model="lastName" type="text" class="form-control py-2 mb-1" id="email" placeholder="Enter Your Full Name" name="Email" />
      </div>
      <div>
        <label class="fw-bold">User Name</label>
        <input v-model="userName" type="text" class="form-control py-2 mb-1" id="email" placeholder="Enter Your Full Name" name="Email" />
      </div>

      <div>
        <label class="fw-bold">Email</label>
        <input v-model="email" type="text" class="form-control py-2 mb-1" id="email" placeholder="Enter Your Email" name="Email" />
      </div>

      <div>
        <label class="fw-bold">Password</label>
        <input v-model="password" type="password" class="form-control py-2 mb-1" id="email" placeholder="*****************" name="Email" />
      </div>
      <div>
        <label class="fw-bold">Confirm Password</label>
        <input v-model="passwordConfrim" type="password" class="form-control py-2 mb-1" id="email" placeholder="*********************"
          name="Email" />
      </div>
      <div class="d-grid">
        <router-link to="login">
          <button @click="registerStd" class="btn text-light fw-bold py-3 mt-2 mb-3">Sign up</button>
        </router-link>
      </div>
      <div class="row mt-1">
        <span class="text-black-50 col-md-5 text-end">
          Already have an account?
        </span>
        <router-link to="login" class="col-md-4 text-start span2 text-decoration-none">
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
      firstName: '',
      lastName: '',
      userName:'',
      email: '',
      password: '',
      passwordConfrim:''
    }
  },

  methods:{
    async registerStd(){
      const std= this.$store.getters['std/student'];
      
      std.firstName=this.firstName;
      std.lastName=this.lastName;
      std.userName=this.userName;
      std.email=this.email;
      std.password=this.password;
      std.passwordConfrim=this.passwordConfrim;

      try {
        await this.$store.dispatch("std/registerStudent", std);
        this.$router.replace("login");
      } catch (error) {
        this.error = error.message;
      }

      console.log(std)
    }
  }
}

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

@media only screen and (min-width: 600px) {}
</style>