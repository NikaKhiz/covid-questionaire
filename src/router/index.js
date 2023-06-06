import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import Identificationview from "@/views/IdentificationView.vue";
import CovidView from "@/views/CovidView.vue";
import VaccinationView from "@/views/VaccinationView.vue";
import SuggestionsView from "@/views/SuggestionsView.vue";
import GreatingsView from "@/views/GreatingsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "redirect",
      path: "/",
      redirect: { name: "welcome" },
    },
    {
      name: "welcome",
      path: "/welcome",
      component: WelcomeView,
    },
    {
      name: "identification",
      path: "/identification",
      component: Identificationview,
    },
    {
      name: "covid",
      path: "/covid",
      component: CovidView,
    },
    {
      name: "vaccinate",
      path: "/vaccinate",
      component: VaccinationView,
    },
    {
      name: "suggestions",
      path: "/suggestions",
      component: SuggestionsView,
    },
    {
      name: "greatings",
      path: "/greatings",
      component: GreatingsView,
    },
  ],
});

export default router;
