export const resetCovidVaccinationInfo = (element, questionaire) => {
  if (Boolean(element.target.value) === true) {
    questionaire["vaccination_stage"] = "";
  } else {
    questionaire["i_am_waiting"] = "";
  }
};
