export default {
  setQuestionaire(_, payload) {
    sessionStorage.setItem("questionaire", JSON.stringify(payload));
  },
  modifieDataToSend(_, payload) {
    if (
      payload["had_covid"] === "no" ||
      payload["had_covid"] === "have_right_now"
    ) {
      delete payload["had_antibody_test"];
      delete payload["covid_sickness_date"];
      delete payload["antibodies"];
    }
    if (Boolean(payload["had_antibody_test"]) === true) {
      if (
        !payload["antibodies"]["test_date"] ||
        !payload["antibodies"]["number"]
      ) {
        delete payload["antibodies"];
      }
      delete payload["covid_sickness_date"];
    } else {
      delete payload["antibodies"];
    }
    if (Boolean(payload["had_vaccine"]) === true) {
      delete payload["i_am_waiting"];
    } else {
      delete payload["vaccination_stage"];
    }
  },
};
