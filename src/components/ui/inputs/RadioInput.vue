<script setup>
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "radio",
  },
  name: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="flex flex-col gap-2 text-neutralBlack">
    <p class="text-xl font-bold py-2">{{ props.heading }}</p>
    <label
      class="cursor-pointer flex gap-4 items-center max-w-max text-xl"
      v-for="option in props.options"
      :key="option.label"
    >
      <Field
        type="radio"
        class="peer sr-only"
        :name="props.name"
        :value="option.value"
        @change="$emit('update:modelValue', option.value)"
      />
      <div
        class="peer-checked:bg-neutralBlack peer-checked:ring-neutralBlack peer-checked:ring-offset-2 w-4 h-4 rounded-full bg-white ring-1 ring-neutralBlack transition-all hover:shadow"
        :class="{
          'bg-neutralBlack ring-offset-2 ring-neutralBlack':
            props.modelValue === option.value,
        }"
      ></div>
      <span>{{ option.label }}</span>
    </label>
    <ErrorMessage
      as="p"
      class="text-neutralRed font-normal pl-5"
      :name="props.name"
    />
  </div>
</template>
