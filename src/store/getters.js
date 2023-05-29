export default {
  questionaire(state) {
    return state.questionaire;
  },
  getPage(state) {
    return state.page;
  },
  showCovidQuestions(state) {
    if (state.questionaire["had_covid"] === "yes") {
      state.showCovidAdditionalQuestions = true;
    } else {
      state.showCovidAdditionalQuestions = false;
    }
    return state.showCovidAdditionalQuestions;
  },
  hadAntibodyTest(state) {
    if (Boolean(state.questionaire["had_antibody_test"]) === true) {
      return true;
    }
  },
  hadnotAntibodyTest(state) {
    if (
      state.questionaire["had_antibody_test"] !== null &&
      Boolean(state.questionaire["had_antibody_test"]) === false
    ) {
      return true;
    }
  },
  showVaccinationQuestions(state) {
    if (state.questionaire["had_vaccine"] !== null) {
      state.showAdditionalVaccinationQuestions = true;
    } else {
      state.showAdditionalVaccinationQuestions = false;
    }
    return state.showAdditionalVaccinationQuestions;
  },
  hadVaccine(state) {
    if (
      state.questionaire["had_vaccine"] !== null &&
      Boolean(state.questionaire["had_vaccine"])
    ) {
      return true;
    } else {
      return false;
    }
  },
  hadNotVaccine(state) {
    if (
      state.questionaire["had_vaccine"] !== null &&
      Boolean(state.questionaire["had_vaccine"]) === false
    ) {
      return true;
    } else {
      return false;
    }
  },
  dontDelay(state) {
    if (
      state.questionaire["vaccination_stage"] ===
      "first_dosage_and_not_registered_yet"
    ) {
      return true;
    }
    return false;
  },
  vaccinationRecommendation(state) {
    if (
      state.questionaire["i_am_waiting"] ===
      "had_covid_and_planning_to_be_vaccinated"
    ) {
      return true;
    }
    return false;
  },
};
