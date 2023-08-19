<template>
  <div class="text-center py-4" id="services"><h3>OUR SERVICES</h3></div>

  <div class="row main_row_1">
    <div class="col-md-6 py-3 web">
      <img src="@/assets/pic2_web_services.svg" alt="" />
    </div>
    <div class="col-md-6 welcome1 pt-5 pe-5">
      <h3 class="pt-5">WEB DEVELOPMENT</h3>

      <p class="mb-3 pe-5">
        From creating custom websites tailored to your specific needs, to optimizing your site for search engines and mobile devices, our team has the expertise to deliver outstanding results. We use the latest technologies and best practices to ensure your website is fast, secure, and user-friendly.
Whether you're looking to build a new website from scratch or revamp an existing one, our team can help. Contact us today to schedule a consultation and see how we can help you succeed online.
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button class="mb-5"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
  </div>
  <div class="row main_row_2 text-light">
    <div class="col-md-6 welcome2 pt-5 ps-5 pe-5 text-dark">
      <h3>UI/UX DESIGN</h3>

      <p class="mb-3 pe-5">
        From creating intuitive and visually appealing interfaces to streamlining navigation and optimizing usability, our team has the skills and expertise to bring your vision to life. We focus on understanding your target audience and designing solutions that meet their needs and preferences, resulting in higher user satisfaction and retention rates.
Don't settle for a mediocre user experience. Contact us today to learn how we can take your UI/UX design to the next level!
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button class="mb-2"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 text-start">
      <img src="@/assets/pic3_ui-ux_services.svg" alt="" />
    </div>
  </div>
  <div class="row main_row_3 text-dark">
    <div class="col-md-6 pe-5 py-5 security">
      <img src="@/assets/pic4_security_services.svg" alt="" />
    </div>

    <div class="col-md-6 welcome1 pt-5 pe-5">
      <h3 class="pt-5">WEB SECURITY</h3>

      <p class="mb-3 pe-5">
        We offer a range of security solutions, including malware scans, vulnerability assessments, and firewall setup, to keep your website safe and secure. Our team of experts stays up-to-date with the latest threats and security trends, ensuring your website is always protected.

Don't wait until it's too late. Contact us today to learn how we can help you safeguard your website and ensure your business stays protected.
      </p>
      <router-link to="client/login" class="text-decoration-none">
        <base-button class="mb-5"
          >Request Now
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
  </div>
</template>
    <script>
export default {
  name: "getStarted",
};
</script>
    <style scoped lang="scss">
img {
  height: 20rem;
  width: 30rem;
}
.web,
.security {
  padding-right: 20%;
}
.main_row_1 {
  background-color: #ffffff;
}
.main_row_2 {
  padding: 2rem 5rem;
  background-color: hsl(215, 38%, 75%);
}
.main_row_3 {
  background-color: #ffffff;
  color: black;
}
</style>
    