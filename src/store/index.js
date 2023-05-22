import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      questionaire: JSON.parse(sessionStorage.getItem("questionaire")) ?? {
        identification: {
          first_name: "",
          last_name: "",
          email: "",
        },
      },
    };
  },
  getters: {
    questionaire(state) {
      return state.questionaire;
    },
  },
  mutations: {
    setQuestionaire(_, payload) {
      sessionStorage.setItem("questionaire", JSON.stringify(payload));
    },
  },
  actions: {
    setQuestionaire(context, payload) {
      context.commit("setQuestionaire", payload);
    },
  },
});

export default store;
