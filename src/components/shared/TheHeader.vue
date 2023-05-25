<script setup>
import IconRedberry from "@/components/icons/IconRedberry.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const page = ref(store.getters.getPage);
</script>
<template>
  <header
    class="flex items-center text-4xl justify-between font-bold text-neutralBlack border-b-2 border-neutralBlack pb-5"
  >
    <icon-redberry class="w-36 h-auto" />
    <p>
      <span>{{ page }}</span> / <span>4</span>
    </p>
  </header>
</template>
