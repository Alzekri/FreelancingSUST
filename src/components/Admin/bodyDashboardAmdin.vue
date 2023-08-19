<template>
  <div class="row">
    <!--Clients and Managers-->
    <div class="col-md-6 ms-5 me-5">
      <div class="row mb-5 mt-5 divTotal1 align-items-center">
        <div class="col-md-8 ps-5">
          <h6 class="text-black-50">Total Number of Clients</h6>
          <h2>{{ clients }}Clients</h2>
        </div>
        <div class="col-md-4 text-center p-5">
          <FIcons
            class="rounded-pill iconsize"
            :icon="['fas', 'calendar-days']"
          />
        </div>
      </div>
      <div class="row mt-5 divTotal2 align-items-center text-light">
        <div class="col-md-8 ps-5">
          <h6 class="text-white-50">Total Number of Managers</h6>
          <h2>{{ managers }} Managers</h2>
        </div>
        <div class="col-md-4 text-center p-5">
          <FIcons class="rounded-pill iconsize" :icon="['fas', 'user-group']" />
        </div>
      </div>
    </div>
    <!--Students-->

    <div class="col-md-4 divtotal3 ms-4 mt-5 text-light text-center">
      <div class="row">
        <FIcons
          class="rounded-pill iconsize"
          :icon="['fas', 'graduation-cap']"
        />
      </div>
      <div class="row">
        <h6 class="text-white-50 mt-5">Total Number of Students</h6>
      </div>
      <div class="row">
        <h2>{{ students }} Students</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counts: null,
      managers: 0,
      students: 0,
      clients: 0,
    };
  },

  // computed: {
  //   counts() {
  //     return this.$store.getters["admin/counts"];
  //   },
  // },
  mounted() {
    this.fetchCounts();
  },
  methods: {
    async fetchCounts() {
      try {
        await this.$store.dispatch("admin/fetchCounts");
        this.counts = this.$store.getters["admin/counts"];
        this.managers = this.counts.managers;
        this.students = this.counts.students;
        this.clients = this.counts.clients;
        console.log(this.manager);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
    },
  },
};
</script>
<style scoped lang="scss">
.divTotal1 {
  background-color: #ceb2cf;
  height: 11rem;
  border-radius: 1.5rem;
}
.divTotal2 {
  background-color: hsl(215, 27%, 63%);
  height: 14rem;
  border-radius: 1.5rem;
}
.divtotal3 {
  background-color: #8b9bb2;
  padding-top: 7rem;
}
.iconsize {
  height: 2rem;
}
</style>