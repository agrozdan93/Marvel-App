<template>
  <div class="user-card d-flex">
    <div class="card-avatar d-flex justify-content-center">
      <Placeholder width="100%" height="200px" borderRadius="2%" />
    </div>
    <div class="card-info">
      <Placeholder width="200px" height="36px" />
      <p class="name mb-1"></p>
      <Placeholder height="26px" />
      <Placeholder height="26px" />
      <Placeholder height="26px" />
      <p class="summary-placeholder mb-0"></p>
    </div>
  </div>
</template>

<script>
import Placeholder from "../Common/Placeholder.vue";
export default {
  name: "ComicCardSkeleton",
  components: { Placeholder },
  data() {
    return {};
  },
};
</script>

<style scoped>
.summary-placeholder {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.user-card {
  padding: 15px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.card-avatar {
  width: 30%;
  margin-right: 7%;
}
.card-avatar img {
  width: 100%;
  height: 200px;
  border-radius: 2%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
}
.card-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
}
.name {
  font-size: 20px;
}
.summary {
  font-size: 20px;
}
</style>
