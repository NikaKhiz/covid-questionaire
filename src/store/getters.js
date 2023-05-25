export default {
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
};
