import axios from "@/plugins/axios";

export async function sendQuestionaire(dataToSend) {
  const response = await axios.post(`/create`, dataToSend);
  return response;
}
