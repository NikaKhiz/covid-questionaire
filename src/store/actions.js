export default {
  setQuestionaire(context, payload) {
    context.commit("setQuestionaire", payload);
  },
  modifieDataToSend(context, payload) {
    context.commit("modifieDataToSend", payload);
  },
};
