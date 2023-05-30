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
      enter-active-class="transition-[opacity] duration-[1000ms] delay-[500ms]"
    >
      <div class="relative text-6xl font-bold tracking-wide">
        <h2>მადლობა</h2>
        <transition
          appear
          enter-from-class="translate-y-[80px] translate-x-[10px]"
          enter-active-class="transition-[all] duration-[200ms]"
        >
          <icon-star-greatings
            v-if="StarsAnimation"
            class="absolute -top-20 left-5 w-12"
          />
        </transition>
        <transition
          appear
          enter-from-class="-translate-y-[50px] -translate-x-[40px]"
          enter-active-class="transition-[all] duration-[200ms]"
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
