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
      page: JSON.parse(sessionStorage.getItem("page")) ?? 1,
      showCovidAdditionalQuestions: false,
    };
  },
  getters: {
    questionaire(state) {
      return state.questionaire;
    },
    getPage(state) {
      return state.page;
    },
    showCovidQuestions(state) {
      if (state.questionaire.covid["had_covid"] === "yes") {
        state.showCovidAdditionalQuestions = true;
      } else {
        state.showCovidAdditionalQuestions = false;
      }
      return state.showCovidAdditionalQuestions;
    },
    hadAntibodyTest(state) {
      if (Boolean(state.questionaire.covid["had_antibody_test"]) === true) {
        return true;
      }
    },
    hadnotAntibodyTest(state) {
      if (
        state.questionaire.covid["had_antibody_test"] !== null &&
        Boolean(state.questionaire.covid["had_antibody_test"]) === false
      ) {
        return true;
      }
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
