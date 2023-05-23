<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { watch, reactive } from "vue";

const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "radio",
  },
  heading: {
    type: String,
    required: true,
  },
  name: {
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
</script>
<template>
  <div class="flex flex-col gap-2 text-neutralBlack">
    <p class="text-xl font-bold py-2">{{ props.heading }}</p>
    <label
      class="cursor-pointer flex gap-4 items-center max-w-max text-xl"
      v-for="item in props.values"
      :key="item.label"
    >
      <Field
        :type="props.type"
        class="peer sr-only"
        :name="props.name"
        :value="item.value"
        :rules="props.rules"
        v-model="questionaire.covid[props.name]"
      />
      <div
        class="w-4 h-4 rounded-full bg-white ring-1 ring-neutralBlack transition-all hover:shadow peer-checked:bg-neutralBlack peer-checked:ring-neutralBlack peer-checked:ring-offset-2"
      ></div>
      <span>{{ item.label }}</span>
    </label>
    <ErrorMessage
      as="p"
      class="text-neutralRed font-normal pl-5"
      :name="props.name"
    />
  </div>
</template>
