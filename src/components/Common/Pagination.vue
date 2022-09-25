<template>
  <div class="view-more mb-3">
    <BButton size="sm" variant="outline-dark" squared @click="viewMore">
      View more
    </BButton>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  data() {
    return {};
  },
  computed: {
    comics() {
      return this.$store.getters("getComicsList").length;
    },
  },
  methods: {
    viewMore() {
      this.$emit("viewMore");
    },
  },
};
</script>

<style lang="scss">
.view-more {
  display: flex;
  justify-content: center;
}
</style>
