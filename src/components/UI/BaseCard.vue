<template>
    <div class="card text-center  justify-content-center p-4">
      <div class="card-body text-center">
        <h1 class="card-title fw-bold text-white">Welcome Player</h1>
     
        <h5 class="text-white">
          Please complete the following details to continue
        </h5>
        
        <slot></slot>
      </div>
    </div>
</template>
<script>
</script>

<style scoped>
.card {
  width: 600px;
  height: auto;
  background: #222322;

  /*! to center the card*/
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.cont{
  padding: 5%;
}
</style>