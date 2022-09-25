<template>
  <BContainer>
    <ComicDetailSkeleton v-if="!isComicLoad"></ComicDetailSkeleton>
    <div class="comic-content" v-else>
      <div class="comic-content__item">
        <div>
          <img
            :class="{
              'not-available-img': !isImageAvailable,
              'comic-content__img': true,
            }"
            :src="
              getComic.thumbnail.path === null
                ? '#'
                : getComic.thumbnail.path + '.jpg'
            "
            alt=""
          />
        </div>
        <div class="content">
          <div class="comic-content__title">{{ getComic.title }}</div>
          <span class="comic-content__txt">Id: {{ getComic.id }} </span>
          <span class="comic-content__txt">Isbn: {{ getComic.isbn }} </span>
          <span class="comic-content__txt">Format: {{ getComic.format }} </span>
          <span class="comic-content__txt"
            >Series: {{ getComic.series.name }}
          </span>
          <span class="comic-content__txt"
            >Stories available: {{ getComic.stories.available }}
          </span>
          <span class="comic-content__txt"
            >Characters available: {{ getComic.characters.available }}
          </span>
          <span class="comic-content__txt"
            >Creators available: {{ getComic.creators.available }}
          </span>
          <span class="comic-content__txt"
            >Events available: {{ getComic.events.available }}
          </span>
          <span class="comic-content__txt"
            >Description: <br />{{ getComic.description }}
          </span>
          <BButton
            class="mt-5 w-100"
            block
            variant="outline-dark"
            squared
            @click="goBack"
            >Back</BButton
          >
        </div>
      </div>
    </div>
  </BContainer>
</template>

<script>
import { mapGetters } from "vuex";
import ComicDetailSkeleton from "./ComicDetailSkeleton.vue";

export default {
  name: "ComicDetails",
  components: { ComicDetailSkeleton },
  props: {
    imgPath: { type: String, default: "" },
    description: { type: String, default: "" },
    title: { type: String, default: "" },
  },
  data() {
    return {
      comic: {
        thumbnail: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getComic: "getComic",
      isComicLoad: "isComicLoad",
    }),
    isImageAvailable() {
      return !this.getComic.thumbnail.path.includes("image_not_available");
    },
  },
  mounted() {
    window.addEventListener("unload", this.reloadPage);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      // this.$store.dispatch("setComicsList", { params: { limit: 12 } });
    },

    reloadPage() {
      window.localStorage.setItem(
        "query",
        JSON.stringify({ id: this.$route.params.id })
      );
    },
  },
  beforeDestroy() {
    window.removeEventListener("unload", this.reloadPage);
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.container {
  margin-top: 1%;
}

.not-available-img {
  width: 100% !important;
}

.comic-content {
  width: 95%;
  position: relative;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 90vh;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__img {
    height: 85vh;
    width: auto;
    flex-shrink: 0;
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);

    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      border-radius: 20px;
      transition: all 0.3s;
    }

    @media screen and (max-width: 992px) {
    }
    @media screen and (max-width: 768px) {
      transform: translate(0);
      height: 65vh;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__content {
    padding-right: 25px;
    @media screen and (max-width: 992px) {
    }
    @media screen and (max-width: 768px) {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all 0.4s;
    }
  }

  &__txt {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
}
</style>
