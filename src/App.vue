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
    // await this.$store.dispatch("setComicsList", query);
    // console.log(this.$route);
    // console.log(query, "reload iz app");
    await this.$store.dispatch(
      "appInit",
      query === null ? { params: { limit: 12 } } : query
    );

    // await this.$store.dispatch("setComicsList", { params: { limit: 12 } });
  },
};
</script>

<style></style>
