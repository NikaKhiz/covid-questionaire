import axios from "@/plugins/axios";
export default {
  setQuestionaire(context, payload) {
    context.commit("setQuestionaire", payload);
  },
  async modifieDataToSend(context, payload) {
    context.commit("modifieDataToSend", payload);
    try {
      const response = await axios.post("/create", payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
