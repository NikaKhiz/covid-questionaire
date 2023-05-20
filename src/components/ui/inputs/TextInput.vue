<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { useStore } from 'vuex'
import { watch, reactive } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  },
  type: {
    required: false,
    type: String,
    default: 'text'
  }
})

const store = useStore()
const questionaire = reactive(store.getters.questionaire)

watch(questionaire, () => {
  store.dispatch('setQuestionaire', questionaire)
})
</script>
<template>
  <div class="flex flex-col gap-2 text-neutralBlack">
    <label :for="props.name" class="text-xl font-bold py-2">{{ props.label }}*</label>
    <Field
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      class="py-2 px-5 border-[1px] outline-none border-neutralBlack placeholder:text-neutralBlack"
      :rules="props.rules"
      v-model="questionaire.identification[props.name]"
    />
    <ErrorMessage as="p" class="text-neutralRed font-normal pl-5" :name="props.name" />
  </div>
</template>
