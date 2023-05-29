export const resetCovidSicknessInfo = (element, questionaire) => {
  if (element.target.value !== "yes") {
    questionaire["had_antibody_test"] = null;
    questionaire["covid_sickness_date"] = "";
    questionaire["antibodies"] = {
      number: null,
      test_date: "",
    };
  }
  if (Boolean(element.target.value) === true) {
    questionaire["covid_sickness_date"] = "";
  }
  if (Boolean(element.target.value) === false) {
    questionaire["antibodies"] = {
      number: null,
      test_date: "",
    };
  }
};
