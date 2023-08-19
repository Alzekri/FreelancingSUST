<template>
  <div class="row main_row">
    <div class="col-md-6 welcome pe-5">
      <h3>WELCOME TO</h3>
      <h3> <span>CAREER CRAFT</span> PLATFORM</h3>
      <p class="mb-3">
        Career Craft is a place where students can develop their skills by providing an environment similar to the labor market, a place where customers can find professionals to get their work done, Career Craft from Zero To Hero.

      </p>
      <router-link to="choose" class="text-decoration-none">
        <base-button
          >Get Started
          <FIcons
            class="Ficons Ficons3 rounded-pill ms-2"
            :icon="['fas', 'arrow-right']" /></base-button
      ></router-link>
    </div>
    <div class="col-md-6 pt-3">
      <img src="@/assets/pic1_hero_section.svg" alt="" />
    </div>
  </div>
</template>
    <script>
export default {
  name: "getStarted",
};
</script>
    <style scoped lang="scss">
.main_row {
  padding: 4rem;
  background-color: hsl(215, 27%, 63%);
  // background-color: #556c7b;
}
.main_row {
  .welcome {
    padding-top: 7rem;
    span {
      color: white
    }
  }
}

img {
  height: 20rem;
  width: 30rem;
}
</style>