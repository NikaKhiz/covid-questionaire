import axios from "@/plugins/axios";

export async function sendQuestionaire(dataToSend) {
  try {
    const response = await axios.post(`/create`, dataToSend);
    return response;
  } catch (error) {
    return error;
  }
}
