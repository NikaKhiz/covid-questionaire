<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import FormMain from "@/components/ui/FormMain.vue";
import InputRadio from "@/components/ui/InputRadio.vue";
import IconVaccination from "@/components/icons/IconVaccination.vue";
import IconStar from "@/components/icons/IconStar.vue";
import TransitionDefault from "@/components/shared/TransitionDefault.vue";
import { resetCovidVaccinationInfo } from "@/utils/resetCovidVaccinationInfo.js";
import { reactive, watch, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const questionaire = reactive(store.getters.questionaire);

const showAdditionalQuestions = computed(() => {
  return store.getters.showVaccinationQuestions;
});
const hadVaccine = computed(() => {
  return store.getters.hadVaccine;
});
const hadNotVaccine = computed(() => {
  return store.getters.hadNotVaccine;
});
const vaccinationRecommendation = computed(() => {
  return store.getters.vaccinationRecommendation;
});
const dontDelay = computed(() => {
  return store.getters.dontDelay;
});

const hadVaccineOptions = [
  { label: "კი", value: 1 },
  { label: "არა", value: 0 },
];
const vaccinationStageOptions = [
  {
    label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
    value: "first_dosage_and_registered_on_the_second",
  },
  { label: "სრულად აცრილი ვარ", value: "fully_vaccinated" },
  {
    label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
    value: "first_dosage_and_not_registered_yet",
  },
];
const waitingOptions = [
  {
    label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
    value: "registered_and_waiting",
  },
  { label: "არ ვგეგმავ", value: "not_planning" },
  {
    label: "გადატანილი მაქვს და ვგეგმავ აცრას",
    value: "had_covid_and_planning_to_be_vaccinated",
  },
];

watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader :page="3" />
    <TransitionDefault>
      <FormMain>
        <template v-slot:form-content>
          <InputRadio
            name="had_vaccine"
            heading="უკვე აცრილი ხარ?*"
            rules="required"
            :options="hadVaccineOptions"
            @click="
              (element) => resetCovidVaccinationInfo(element, questionaire)
            "
          />
          <div
            v-if="showAdditionalQuestions"
            class="flex flex-col gap-10 w-full"
          >
            <InputRadio
              v-if="hadVaccine"
              name="vaccination_stage"
              heading="აირჩიე რა ეტაპზე ხარ*"
              rules="required"
              :options="vaccinationStageOptions"
              @click="
                (element) => resetCovidVaccinationInfo(element, questionaire)
              "
            />
            <InputRadio
              v-if="hadNotVaccine"
              name="i_am_waiting"
              heading="რას ელოდები?*"
              rules="required"
              :options="waitingOptions"
              @click="
                (element) => resetCovidVaccinationInfo(element, questionaire)
              "
            />
            <div
              v-if="dontDelay"
              class="flex flex-col text-neutralBlack font-normal pl-6 text-xl"
            >
              <p>რომ არ გადადო,</p>
              <p>ბარემ ახლავე დარეგისტრირდი</p>
              <a href="https://booking.moh.gov.ge/" class="text-lightBlue"
                >https://booking.moh.gov.ge/</a
              >
            </div>
            <div
              class="flex flex-col gap-6 text-neutralBlack font-normal pl-6 text-xl"
              v-if="vaccinationRecommendation"
            >
              <p>
                ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                ვაქცინის გაკეთება.
              </p>
              <div>
                <p>👉 რეგისტრაციის ბმული</p>
                <a href="https://booking.moh.gov.ge/" class="text-lightBlue">
                  https://booking.moh.gov.ge/
                </a>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:icon-view>
          <icon-vaccination class="block w-full object-contain" />
          <transition
            appear
            enter-from-class="translate-y-1/30 -translate-x-1/50 opacity-50"
            enter-active-class="transition-[all] duration-500"
          >
            <icon-star
              class="absolute top-1/4 left-1/20 transform -translate-x-1/2 -translate-y-1/2 -z-50"
            />
          </transition>
        </template>
      </FormMain>
    </TransitionDefault>
  </div>
</template>
