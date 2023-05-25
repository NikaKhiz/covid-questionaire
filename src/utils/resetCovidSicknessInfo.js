export const resetCovidSicknessInfo = (element, questionaire) => {
  if (element.target.value !== "yes") {
    questionaire.covid["had_antibody_test"] = null;
    questionaire.covid["covid_sickness_date"] = "";
    questionaire.covid["antibodies"] = {
      number: null,
      test_date: "",
    };
  }
  if (Boolean(element.target.value) === true) {
    questionaire.covid["covid_sickness_date"] = "";
  }
  if (Boolean(element.target.value) === false) {
    questionaire.covid["antibodies"] = {
      number: null,
      test_date: "",
    };
  }
};
