import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_URI, PUBLIC_KEY } from "../config/marvel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comics: [],
    comic: null,
    offset: 12,
    limit: 12,
    isComicLoad: false,
  },
  mutations: {
    setComic(state, payload) {
      state.comic = payload.data.data.results[0];

      setTimeout(() => {
        state.isComicLoad = true;
      }, 1000);
    },

    setComics(state, payload) {
      state.comics = payload.data.data.results;
      state.comic = null;
    },

    setComicsOnViewMore(state, payload) {
      state.comics = state.comics.concat(payload.data.data.results);
      state.offset = state.offset + 12;
    },
  },
  actions: {
    async appInit(state, params) {
      console.log(params, "APP INIT");
      if (params.id) state.dispatch("getComicDetails", params.id);
      else state.dispatch("setComicsList", params);
    },

    async setComicsList(state, query) {
      this.state.comics = [];
      const data = await axios.get(API_URI, query);
      state.commit("setComics", data);
    },

    async loadMoreComics(state) {
      const data = await axios.get(API_URI, {
        params: {
          limit: 12,
          offset: this.state.offset,
        },
      });
      state.commit("setComicsOnViewMore", data);
    },

    async filterComic(state, query) {
      this.state.comics = [];
      const data = await axios.get(API_URI, query);
      state.commit("setComics", data);
    },

    async getComicDetails(state, id) {
      this.state.comic = null;
      this.state.isComicLoad = false;

      const url = `http://gateway.marvel.com/v1/public/comics/${id}?apikey=${PUBLIC_KEY}`;
      const data = await axios.get(url);

      state.commit("setComic", data);
    },
  },
  getters: {
    getComicsList: (state) => state.comics,
    getComic: (state) => state.comic,
    isComicLoad: (state) => state.isComicLoad,
  },
});

// async filterComic(state, userInput) {
//   this.state.comics = [];
//   const data = await axios.get(API_URI, {
//     params: {
//       titleStartsWith: userInput,
//       limit: 12,
//     },
//   });
//   state.commit("setComics", data);
//   // console.log('USHO U FILTER',data);
// },

// async filterComicByDateRange(state, range) {
//   this.state.comics = [];
//   const date1 = range.from;
//   const date2 = range.to;

//   const data = await axios.get(API_URI, {
//     params: {
//       dateRange: [date1, date2],
//       limit: 12,
//     },
//   });

//   state.commit("setComics", data);
//   // console.log(data);
// },
