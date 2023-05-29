import { createStore } from "vuex";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

const store = createStore({
  state() {
    return {
      questionaire: JSON.parse(sessionStorage.getItem("questionaire")) ?? {
        first_name: "",
        last_name: "",
        email: "",
        had_covid: "",
        had_antibody_test: null,
        covid_sickness_date: "",
        antibodies: {
          test_date: "",
          number: 0,
        },
        had_vaccine: null,
        vaccination_stage: "",
        i_am_waiting: "",
        non_formal_meetings: "",
        number_of_days_from_office: null,
        what_about_meetings_in_live: "",
        tell_us_your_opinion_about_us: "",
      },
      page: JSON.parse(sessionStorage.getItem("page")) ?? 0,
      showCovidAdditionalQuestions: false,
      showAdditionalVaccinationQuestions: false,
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default store;
