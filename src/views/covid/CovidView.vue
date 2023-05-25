<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import RadioInput from "@/components/ui/inputs/RadioInput.vue";
import TextInput from "@/components/ui/inputs/TextInput.vue";
import IconCovid from "@/components/icons/IconCovid.vue";
import IconArrowRightDark from "@/components/icons/IconArrowRightDark.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconArrowRightLight from "@/components/icons/IconArrowRightLight.vue";
import IconCircle from "@/components/icons/IconCircle.vue";
import { resetCovidSicknessInfo } from "@/utils/resetCovidSicknessInfo.js";
import { Form } from "vee-validate";
import { reactive, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const questionaire = reactive(store.getters.questionaire);

const showAdditionalQuestions = computed(() => {
  return store.getters.showCovidQuestions;
});
const hadAntibodyTest = computed(() => {
  return store.getters.hadAntibodyTest;
});
const hadnotAntibodyTest = computed(() => {
  return store.getters.hadnotAntibodyTest;
});

const hadCovidOptions = [
  { label: "კი", value: "yes" },
  { label: "არა", value: "no" },
  { label: "ახლა მაქვს", value: "have_right_now" },
];
const hadAntibodyTestOptions = [
  { label: "კი", value: true },
  { label: "არა", value: false },
];

watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});

const goBack = () => {
  store.dispatch("setPage", 1);
  router.push({ name: "identification" });
};
const nextPage = () => {
  store.dispatch("setPage", 3);
  router.push({ name: "vaccinate" });
};
const onSubmit = () => {
  nextPage();
};
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader />
    <Form
      v-slot="{ meta }"
      class="relative flex justify-between"
      @submit="onSubmit"
    >
      <div class="flex flex-col gap-10 max-w-[500px] w-[100%] pt-10">
        <RadioInput
          name="had_covid"
          heading="გაქვს გადატანილი Covid-19?*"
          rules="required"
          :options="hadCovidOptions"
          v-model="questionaire.covid['had_covid']"
          @click="(element) => resetCovidSicknessInfo(element, questionaire)"
        />
        <div v-if="showAdditionalQuestions" class="flex flex-col gap-10 w-full">
          <RadioInput
            name="had_antibody_test"
            heading="ანტისხეულების ტესტი*"
            rules="required"
            :options="hadAntibodyTestOptions"
            v-model="questionaire.covid['had_antibody_test']"
            @click="(element) => resetCovidSicknessInfo(element, questionaire)"
          />
          <div class="flex flex-col gap-4" v-if="hadAntibodyTest">
            <TextInput
              name="test_date"
              label="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა"
              placeholder="რიცხვი"
              rules="test_date_format"
              v-model="questionaire.covid.antibodies['test_date']"
            />
            <TextInput
              name="number"
              placeholder="ანტისხეულების რაოდენობა"
              rules="numeric"
              v-model="questionaire.covid.antibodies['number']"
            />
          </div>

          <div v-if="hadnotAntibodyTest">
            <TextInput
              name="covid_sickness_date"
              label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
              Covid-19*"
              placeholder="დდ/თთ/წწ"
              rules="required|date_format"
              v-model="questionaire.covid['covid_sickness_date']"
            />
          </div>
        </div>
      </div>
      <div
        class="relative transform -translate-y-14 w-full h-full max-w-[900px] max-h-[800px]"
      >
        <icon-covid class="block w-full object-contain" />
        <transition
          appear
          enter-from-class="-translate-y-full translate-x-[30%] opacity-50"
          enter-active-class="transition-[all] duration-[500ms]"
        >
          <icon-circle
            class="absolute top-[45%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 -z-50"
          />
        </transition>
      </div>
      <div class="absolute flex bottom-[30px] left-1/2 -translate-x-1/2 gap-28">
        <button type="button" @click="goBack">
          <icon-arrow-left />
        </button>
        <button type="submit" v-if="meta.valid">
          <icon-arrow-right-dark />
        </button>
        <button v-else>
          <icon-arrow-right-light />
        </button>
      </div>
    </Form>
  </div>
</template>
