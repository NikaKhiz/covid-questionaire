import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      questionaire: JSON.parse(sessionStorage.getItem("questionaire")) ?? {
        identification: {
          first_name: "",
          last_name: "",
          email: "",
        },
        covid: {
          had_covid: "",
          had_antibody_test: null,
          covid_sickness_date: "",
          antibodies: {
            test_date: "",
            number: null,
          },
        },
      },
      page: 1,
    };
  },
  getters: {
    questionaire(state) {
      return state.questionaire;
    },
    getPage(state) {
      return state.page;
    },
  },
  mutations: {
    setQuestionaire(_, payload) {
      sessionStorage.setItem("questionaire", JSON.stringify(payload));
    },
    setPage(state, payload) {
      sessionStorage.setItem("page", JSON.stringify(payload));
      state.page = payload;
    },
  },
  actions: {
    setQuestionaire(context, payload) {
      context.commit("setQuestionaire", payload);
    },
    setPage(context, payload) {
      context.commit("setPage", payload);
    },
  },
});

export default store;
