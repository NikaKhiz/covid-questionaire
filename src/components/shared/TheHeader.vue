<script setup>
import IconRedberry from "@/components/icons/IconRedberry.vue";
import TransitionDefault from "@/components/shared/TransitionDefault.vue";

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <header
    class="flex items-center text-4xl justify-between font-bold text-neutralBlack border-b-2 border-neutralBlack pb-5"
  >
    <icon-redberry class="w-36 h-auto" />
    <p>
      <TransitionDefault>
        <span>{{ props.page }}</span>
      </TransitionDefault>
      /
      <span>4</span>
    </p>
  </header>
</template>
