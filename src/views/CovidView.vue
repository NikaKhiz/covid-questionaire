<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import FormMain from "@/components/ui/FormMain.vue";
import RadioInput from "@/components/ui/inputs/RadioInput.vue";
import TextInput from "@/components/ui/inputs/TextInput.vue";
import IconCovid from "@/components/icons/IconCovid.vue";
import IconCircle from "@/components/icons/IconCircle.vue";
import TransitionDefault from "@/components/shared/TransitionDefault.vue";
import { resetCovidSicknessInfo } from "@/utils/resetCovidSicknessInfo.js";
import { reactive, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
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
  { label: "კი", value: 1 },
  { label: "არა", value: 0 },
];

watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader :page="2" />
    <TransitionDefault>
      <FormMain>
        <template v-slot:form-content>
          <RadioInput
            name="had_covid"
            heading="გაქვს გადატანილი Covid-19?*"
            rules="required"
            :options="hadCovidOptions"
            @click="(element) => resetCovidSicknessInfo(element, questionaire)"
          />
          <div
            v-if="showAdditionalQuestions"
            class="flex flex-col gap-10 w-full"
          >
            <RadioInput
              name="had_antibody_test"
              heading="ანტისხეულების ტესტი*"
              rules="required"
              :options="hadAntibodyTestOptions"
              @click="
                (element) => resetCovidSicknessInfo(element, questionaire)
              "
            />
            <div class="flex flex-col gap-4" v-if="hadAntibodyTest">
              <TextInput
                name="test_date"
                label="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა"
                placeholder="რიცხვი"
                rules="test_date_format"
                v-model="questionaire.antibodies['test_date']"
              />
              <TextInput
                name="number"
                placeholder="ანტისხეულების რაოდენობა"
                rules="numeric"
                v-model="questionaire.antibodies['number']"
              />
            </div>
            <div v-if="hadnotAntibodyTest">
              <TextInput
                name="covid_sickness_date"
                label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
              Covid-19*"
                placeholder="დდ/თთ/წწ"
                rules="required|date_format"
                v-model="questionaire['covid_sickness_date']"
              />
            </div>
          </div>
        </template>
        <template v-slot:icon-view>
          <icon-covid class="block w-full object-contain" />
          <transition
            appear
            enter-from-class="-translate-y-full translate-x-[30%] opacity-10"
            enter-active-class="transition-[all] duration-[500ms]"
          >
            <icon-circle
              class="absolute top-[45%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 -z-50"
            />
          </transition>
        </template>
      </FormMain>
    </TransitionDefault>
  </div>
</template>
