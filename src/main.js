import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/bootstrap-vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
}).$mount("#app");

/* 
** marvel **
[x] configure(ajdust) env for work
[x] register on marvel to get api key
[x] create vue3 new app - vue create marvel-app
[x] file structure, env var, api key, etc
[x] set basic vue rotuer
[x] add ui bootstrap connect it	
[x] create simple view of app (search bar, grids, etc), config scss
[x] auth to marvel
[x] install axios, config it and try first request and list data
[x] loadsh for chucking arrays
[x] think about componets and create what is need
[x] config basic vuex
[x] work with search bar, show list, connect to store, add debounce install _loadsh
[x] style marvel cards
[x] add date picker component, add search by date-range (based on year)
[x] implement possibility to click on element and open it (from list)
[x] complete main view with all data think is nesecary
[x] dynamic queries, stay on same page after refresh, combine queries, open and close variants
[x] adjust store and calls, correct the limits and params, etc.
[x] more styling
[x] responsive check and header adjust
[x] add load more comic feature
[x] animation on date range filter and search 
[x] add call to combine range and search if both active --> dont work one filter when filters are deleted
[x] back btn to the main list
[x] page refresh on list
[x] page refresh on main view
[x] main view withouth thumnail is bigger
[x] loading main view (use placeholder maybe)

-noticed urgent-
[] remember dates and search input afte filtering and opening some comic
[] comic list is brouken after double refresh in main view or double refresh on list
[] set init width for grid
[] how created empty objects and space for two card if not even
[] make wrappers to look code clenaer
[] testing, check bugs and fix it
[] clean code, made some stuff simplified, adjusting, etc
[x]create readme file
[x] push to git
*/
