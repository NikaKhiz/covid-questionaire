<template>
  <transition
    appear
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity duration-500"
  >
    <slot></slot>
  </transition>
</template>
