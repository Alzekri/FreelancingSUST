<template>
  <div class="row me-0">
    <div class="col-md-7"><router-view></router-view></div>
    <div class="col-md-5 colimg">
      <img src="../../assets/login.svg" alt="" />
    </div>
  </div>
</template>
  <style lang="scss">
.colimg {
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: #556c7b;
  padding: {
    top: 13.5%;
  }
}

img {
  height: 20rem;
  width: 20rem;
  margin-left: 30%;
}
</style>