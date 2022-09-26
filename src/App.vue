<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  async created() {
    const query = JSON.parse(window.localStorage.getItem("query"));
    const defaultQuery = { params: { limit: 12 } };

    await this.$store.dispatch(
      "appInit",
      query === null ? defaultQuery : query
    );
  },
};
</script>

<style></style>
