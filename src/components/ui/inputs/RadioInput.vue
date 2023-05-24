<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { watch, reactive, onBeforeUpdate } from "vue";

const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "radio",
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
});

const store = useStore();
const questionaire = reactive(store.getters.questionaire);
watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});

onBeforeUpdate(() => {
  if (
    questionaire.covid["had_covid"] === "have_right_now" ||
    questionaire.covid["had_covid"] === "no"
  ) {
    questionaire.covid["had_antibody_test"] = null;
    questionaire.covid["covid_sickness_date"] = "";
    questionaire.covid["antibodies"] = {
      number: null,
      test_date: "",
    };

    sessionStorage.setItem(
      "questionaire",
      JSON.stringify({
        ...questionaire,
        covid: {
          ...questionaire.covid,
          had_antibody_test: questionaire.covid["had_antibody_test"],
          covid_sickness_date: questionaire.covid["covid_sickness_date"],
          antibodies: questionaire.covid["antibodies"],
        },
      })
    );
    return;
  }
  if (
    Boolean(questionaire.covid["had_antibody_test"]) === true &&
    questionaire.covid["had_antibody_test"] !== null
  ) {
    questionaire.covid["covid_sickness_date"] = "";

    sessionStorage.setItem(
      "questionaire",
      JSON.stringify({
        ...questionaire,
        covid: {
          ...questionaire.covid,
          covid_sickness_date: questionaire.covid["covid_sickness_date"],
        },
      })
    );
    return;
  }
  if (
    Boolean(questionaire.covid["had_antibody_test"]) === false &&
    questionaire.covid["had_antibody_test"] !== null
  ) {
    questionaire.covid["antibodies"] = {
      number: null,
      test_date: "",
    };
    sessionStorage.setItem(
      "questionaire",
      JSON.stringify({
        ...questionaire,
        covid: {
          ...questionaire.covid,
          antibodies: questionaire.covid["antibodies"],
        },
      })
    );
    return;
  }
});
</script>
<template>
  <div class="flex flex-col gap-2 text-neutralBlack">
    <p class="text-xl font-bold py-2">{{ props.label }}</p>
    <label
      class="cursor-pointer flex gap-4 items-center max-w-max text-xl"
      v-for="item in props.values"
      :key="item.answer"
    >
      <Field
        :type="props.type"
        class="peer sr-only"
        :name="props.name"
        :value="item.value"
        :rules="props.rules"
        v-model="questionaire[props.section][props.name]"
      />
      <div
        class="peer-checked:bg-black peer-checked:ring-black peer-checked:ring-offset-2 w-4 h-4 rounded-full bg-white ring-1 ring-neutralBlack transition-all hover:shadow"
      ></div>
      <span>{{ item.answer }}</span>
    </label>
    <ErrorMessage
      as="p"
      class="text-neutralRed font-normal pl-5"
      :name="props.name"
    />
  </div>
</template>
