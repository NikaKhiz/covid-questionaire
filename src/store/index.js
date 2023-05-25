import { createStore } from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

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
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default store;
