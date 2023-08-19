<template >
  <div class="text-center py-4" id="footer"><h3>ARE YOU STUDENT?</h3></div>
  <div class="row main_row_2 pt-3">
    <div class="col-md-6 welcome2 pt-5 ps-5 pe-5">
      <p>
        Lorem ipsum dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem
        ipsum dolor site Lorem ipsum dolor site Lorem ipsum dolor siteLorem
        ipsum dolor siteLorem ipsum dolor site Lorem ipsum dolor site Lorem
        ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor site Lorem ipsum
        dolor site Lorem ipsum dolor siteLorem ipsum dolor siteLorem ipsum dolor
        site
      </p>
      <router-link to="student/login" class="text-decoration-none">
        <base-button mode="dark" class="mb-5"
          >Join us
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 text-start">
      <img src="@/assets/pic5_join_us.svg" alt="" />
    </div>
  </div>
  <div class="row main_row_3 text-light text-center">
    <div class="col-md-3 text-start ">
      <img
        src="@/assets/logo.png"
        alt=""
        style="
          width: 200px;
          height: 150px;
          margin-left: -2.5rem;
        "
      />
     
      <div class="row text-start ps-4">
        <a href="https://www.facebook.com/sustech.edu/" class="text-light col-1"> <FIcons class="rounded-pill " :icon="['fab', 'facebook']" ></FIcons></a>
        <a href="https://twitter.com/sudanuniv_sust?lang=ar" class="text-light col-1"> <FIcons class="rounded-pill " :icon="['fab', 'twitter']" ></FIcons></a>
        <a href="https://uk.linkedin.com/in/lo-mag-8b5737223?original_referer=https%3A%2F%2Fwww.google.com%2F" class="text-light col-1"> <FIcons class="rounded-pill " :icon="['fab', 'linkedin']" ></FIcons></a>

      </div>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Services</h3>
      <a class="text-white-50 mt-3 text-doc">Web development</a>
      <a class="text-white-50">Web security</a>
      <a class="text-white-50">Ui/Ux sedign</a>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Join Us</h3>
      <router-link to="/choose">      <a class="text-white-50 mt-3 text-doc">Login</a>
</router-link>
<router-link to="/choose">            <a class="text-white-50">Sign Up</a>

</router-link>
    </div>
    <div class="col-md-2 text-start p-5">
      <h3>Contacts</h3>
      <a class="text-white-50 mt-3 text-doc">contact@sustech.edu</a>
    </div>
  </div>
</template>
      <script>
export default {
  name: "footerView",
};
</script>
      <style scoped lang="scss">
img {
  height: 20rem;
}
.main_row_2 {
  padding: 0rem 5rem;
  background-color: #f1f1f1;
}
a {
  text-decoration: none;
  display: block;
}
.main_row_3 {
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #100f0f;
}
</style>
      