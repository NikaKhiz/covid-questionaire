<script setup>
import IconRedberryLogo from '@/components/icons/IconRedberryLogo.vue'
import { computed } from 'vue'

const identificationLink = computed(() => ({ name: 'identification' }))
</script>
<template>
  <div class="flex flex-col gap-[100px] items-center justify-center min-w-screen min-h-screen">
    <icon-redberry-logo class="w-24 h-24 rounded-full" />
    <router-link
      :to="identificationLink"
      class="relative group flex flex-col items-center text-neutralBlack font-bold text-3xl"
    >
      <span>კითხვარის </span> <span>დაწყება</span>
      <div
        class="absolute -z-50 top-0 left-[1px] transition-all flex text-white drop-shadow-smart flex-col items-center opacity-0 group-hover:opacity-100"
      >
        <span>კითხვარის </span> <span>დაწყება</span>
      </div>
    </router-link>
  </div>
</template>
