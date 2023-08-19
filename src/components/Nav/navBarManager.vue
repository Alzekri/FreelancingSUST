<template>
  <div class="col-7 mt-4">
    <h3 class="fw-bold">MANGER DASHBOARD</h3>
    <p class="text-black-50">
      WELCOME, DR.{{ user.first_name }} {{ user.last_name }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
    };
  },

  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.user = this.$store.getters["auth/user"];
    },
  },
};
</script>
