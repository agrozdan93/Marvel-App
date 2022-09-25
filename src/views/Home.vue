<template>
  <BContainer>
    <!-- should be in wrapper -->
    <div class="d-flex">
      <SearchInput
        @input="searchComic"
        class="me-3"
        placeholder="Search comic by title"
      />
      <DatePicker
        v-model="dateRange"
        @change="selectRange"
        @clear="clearRange"
        range
        class="mb-3 mt-3 w-25"
        type="year"
        placeholder="Search comic by date range"
      />
    </div>
    <BRow
      class="justify-content-center mb-3"
      v-for="(comics, i) in comicList"
      :key="i"
    >
      <BCol
        v-for="(comic, i) in comics"
        :key="i"
        @click="viewComicDetails(comic)"
      >
        <!-- should be in wrapper -->
        <div v-if="getComicList.length === 0">
          <ComicCardSkeleton />
        </div>
        <div v-else>
          <ComicCard
            class="card-col"
            :title="comic.title"
            :description="comic.description"
            :thumbnail="comic.thumbnail"
          />
        </div>
      </BCol>
    </BRow>
    <Pagination @viewMore="viewMore" />
  </BContainer>
</template>

<script>
import _ from "lodash";
import { format } from "date-fns";
import { mapGetters } from "vuex";
import "vue2-datepicker/index.css";

import ComicCard from "@/components/Comics/ComicCard.vue";
import ComicCardSkeleton from "@/components/Comics/ComicCardSkeleton.vue";
import SearchInput from "@/components/Common/SearchInput.vue";
import Pagination from "@/components/Common/Pagination.vue";
import DatePicker from "vue2-datepicker";

export default {
  name: "Home",
  components: {
    ComicCard,
    ComicCardSkeleton,
    SearchInput,
    DatePicker,
    Pagination,
  },
  data() {
    return {
      emptyList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      dateRange: null,
      query: {
        params: {
          limit: 12,
        },
      },
      z: {},
      chunkNum: 3,
    };
  },
  computed: {
    ...mapGetters({
      getComicList: "getComicsList",
    }),
    comicList() {
      return _.chunk(
        this.getComicList.length === 0 ? this.emptyList : this.getComicList,
        this.chunkNum
      );
    },
    queryData() {
      return this.query;
    },
  },
  mounted() {
    window.addEventListener("unload", this.reloadPage);

    // check user display because of responsive and _lodash
    this.$nextTick(() => {
      window.addEventListener("resize", (e) => {
        this.checkUserInnerWidth(e.target.innerWidth);
      });
    });
  },
  methods: {
    searchComic: _.debounce(async function (searchString) {
      this.query.params.titleStartsWith = searchString;

      if (!searchString) {
        delete this.query.params.titleStartsWith;
        await this.$store.dispatch("setComicsList");
      } else await this.$store.dispatch("filterComic", this.queryData);
    }, 300),

    async selectRange(range) {
      this.query.params.dateRange = [range[0], range[1]];

      if (range[0] === null) await this.$store.dispatch("setComicsList");
      else await this.$store.dispatch("filterComic", this.queryData);
    },

    async clearRange() {
      delete this.query.params.dateRange;
      await this.$store.dispatch("filterComic", this.queryData);
    },

    async viewComicDetails(comic) {
      await this.$store.dispatch("getComicDetails", comic.id);
      await this.$router.push(`comic/${comic.id}`);
    },

    async viewMore() {
      await this.$store.dispatch("loadMoreComics");
      console.log("view more...");
    },

    reloadPage() {
      window.localStorage.setItem("query", JSON.stringify(this.queryData));
    },

    formatDate(date) {
      return format(new Date(date), `yyyy.MM.dd`);
    },

    checkUserInnerWidth(value) {
      if (value > 992) this.chunkNum = 3;
      if (value < 992 && value > 767) this.chunkNum = 2;
      if (value < 768) this.chunkNum = 1;
    },
  },
  beforeDestroy() {
    window.removeEventListener("unload", this.reloadPage);
  },
};
</script>

<style lang="scss" scoped>
.card-col {
  cursor: pointer;
}
</style>
