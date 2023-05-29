<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { watch, reactive, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  type: {
    required: false,
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    required: true,
  },
});
defineEmits(["update:modelValue"]);

const store = useStore();
const questionaire = reactive(store.getters.questionaire);
const typeEqualsTextarea = computed(() => {
  return props.type === "textarea";
});

watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});
</script>
<template>
  <div class="flex flex-col gap-2 text-neutralBlack">
    <label
      :for="props.name"
      class="text-xl font-bold py-2"
      v-if="props.label"
      >{{ props.label }}</label
    >
    <Field
      :as="typeEqualsTextarea && 'textarea'"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      class="py-2 px-5 border-[1px] outline-none border-neutralBlack placeholder:text-neutralBlack"
      :class="{ 'resize-none': typeEqualsTextarea }"
      :rules="props.rules"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :rows="typeEqualsTextarea && 5"
    />
    <ErrorMessage
      as="p"
      class="text-neutralRed font-normal pl-5"
      :name="props.name"
    />
  </div>
</template>
