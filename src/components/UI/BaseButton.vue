<template>
  <button v-if="!link" :class="[mode]">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>



<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    width: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  cursor: pointer;
  background-color:#834876;
  /* background-color:rgba(43, 139, 158, 0.87); */
  color: white;
  border: none;

  font-weight: bold;
  border-radius: 0.5rem;
}
a:hover,
button:hover,
.light:hover,
.dark {
  background-color: #100f0f;
  color: white;
  border-color: #100f0f;
  border-style: solid;
}
.dark2 {
  background-color: #3f4f5f;
  color: white;
  border-color: #3f4f5f;
  border-style: solid;
}

a:hover,
button:hover,
.dark:hover,
.light {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
  border-style: solid;
}
</style>
