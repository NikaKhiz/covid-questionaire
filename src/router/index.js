import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/welcome/WelcomeView.vue";
import Identificationview from "@/views/identification/IdentificationView.vue";
import CovidView from "@/views/covid/CovidView.vue";
import VaccinationView from "@/views/vaccination/VaccinationView.vue";
import SuggestionsView from "@/views/suggestions/SuggestionsView.vue";
import GreatingsView from "@/views/greatings/GreatingsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/welcome",
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
