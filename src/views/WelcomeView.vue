<script setup>
import IconRedberryLogo from "@/components/icons/IconRedberryLogo.vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const identificationLink = computed(() => ({ name: "identification" }));
const textAnimation = ref(false);
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    textAnimation.value = true;
  }, 1000);
});
const nextPage = () => {
  router.push({ name: "identification" });
};
</script>
<template>
  <div
    class="container mx-auto min-w-screen min-h-screen flex items-center justify-center font-bpg"
  >
    <transition
      appear
      enter-from-class="w-screen h-screen translate-y-0 rounded-none"
      enter-active-class="transition-[all] duration-200 delay-500"
    >
      <div
        class="transform overflow-hidden -translate-y-24 rounded-full w-24 h-24 fixed"
      >
        <IconRedberryLogo class="block w-full h-full object-contain" />
      </div>
    </transition>

    <div class="overflow-hidden fixed transform translate-y-24">
      <transition
        enter-from-class="-translate-y-full opacity-0"
        enter-active-class="transition-[all] duration-1000"
      >
        <router-link
          v-if="textAnimation"
          :to="identificationLink"
          class="group flex flex-col items-center text-neutralBlack font-bold text-3xl"
          @click="nextPage"
        >
          <span>კითხვარის </span> <span>დაწყება</span>
          <div
            class="absolute -z-50 top-0 left-shadow transition-all flex text-white drop-shadow-smart flex-col items-center opacity-0 group-hover:opacity-100"
          >
            <span>კითხვარის </span> <span>დაწყება</span>
          </div>
        </router-link>
      </transition>
    </div>
  </div>
</template>
