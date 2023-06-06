<script setup>
import IconStarGreatings from "@/components/icons/IconStarGreatings.vue";
import { ref, onMounted } from "vue";

const StarsAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    StarsAnimation.value = true;
  }, 1500);
});
</script>
<template>
  <div
    class="min-w-screen min-h-screen bg-neutralBlack text-white flex items-center justify-center font-bpg"
  >
    <transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-1000 delay-500"
    >
      <div class="relative text-6xl font-bold tracking-wide">
        <h2>მადლობა</h2>
        <transition
          appear
          enter-from-class="translate-y-20 translate-x-2.5"
          enter-active-class="transition-[all] duration-200"
        >
          <icon-star-greatings
            v-if="StarsAnimation"
            class="absolute -top-20 left-5 w-12"
          />
        </transition>
        <transition
          appear
          enter-from-class="-translate-y-12 -translate-x-10"
          enter-active-class="transition-[all] duration-200"
        >
          <icon-star-greatings
            v-if="StarsAnimation"
            class="absolute -bottom-12 right-2 w-8"
          />
        </transition>
      </div>
    </transition>
  </div>
</template>
