export default {
  setQuestionaire(_, payload) {
    sessionStorage.setItem("questionaire", JSON.stringify(payload));
  },
  setPage(state, payload) {
    sessionStorage.setItem("page", JSON.stringify(payload));
    state.page = payload;
  },
};
