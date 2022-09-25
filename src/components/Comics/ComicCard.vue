<template>
  <div class="comic-card d-flex">
    <div class="card-avatar d-flex justify-content-center">
      <img :src="thumbnail.path + '/portrait_xlarge.jpg'" alt="" />
    </div>
    <div class="card-info">
      <p class="title mb-1">{{ title }}</p>
      <span class="description mb-0">
        {{ description ? description.slice(0, 100) + "..." : "" }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicCard",
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    thumbnail: { type: Object, default: () => {} },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.comic-card {
  padding: 15px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 5%;
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
  gap: 5px;
  padding-left: 15px;
}
.title {
  font-size: 19px;
  text-align: center;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
}
.description {
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
}
</style>
