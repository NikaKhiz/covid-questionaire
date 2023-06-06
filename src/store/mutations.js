export default {
  setQuestionaire(_, payload) {
    sessionStorage.setItem("questionaire", JSON.stringify(payload));
  },
};
