  <template>
  <div class="row mainDiv">
    <div class="col-3"><SideBarManager /></div>
    <div class="col-12 col-lg-9 ms-5 ms-lg-0">
      <div><router-view></router-view></div>
    </div>
  </div>
</template>
  <script>
import SideBarManager from "../components/Nav/sideBarManager.vue";

export default {
  components: {
    SideBarManager,
  },
};
</script>
  <style lang="scss" scoped>
.mainDiv {
  margin-right: 0px;
}
</style>
