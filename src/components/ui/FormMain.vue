<script setup>
import { Form } from "vee-validate";
import { sendQuestionaire } from "@/services/api/sendData";
import IconArrowRightDark from "@/components/icons/IconArrowRightDark.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconArrowRightLight from "@/components/icons/IconArrowRightLight.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();
const identificationPage = ref(route.name === "identification");
const covidPage = ref(route.name === "covid");
const vaccinationPage = ref(route.name === "vaccinate");
const suggestionsPage = ref(route.name === "suggestions");
const questionaire = reactive(store.getters.questionaire);
const nextPage = () => {
  if (identificationPage.value) {
    router.push({ name: "covid" });
  }
  if (covidPage.value) {
    router.push({ name: "vaccinate" });
  }
  if (vaccinationPage.value) {
    router.push({ name: "suggestions" });
  }
  if (suggestionsPage.value) {
    router.push({ name: "greatings" });
  }
};
const goBack = () => {
  if (covidPage.value) {
    router.push({ name: "identification" });
  }
  if (vaccinationPage.value) {
    router.push({ name: "covid" });
  }
  if (suggestionsPage.value) {
    router.push({ name: "vaccinate" });
  }
};
const sendData = () => {
  store.dispatch("modifieDataToSend", questionaire);
  sendQuestionaire(questionaire).then((result) => {
    console.log(result);
  });
};
const onSubmit = () => {
  if (route.name === "suggestions") {
    sendData();
    nextPage();
  } else {
    nextPage();
  }
};
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="relative flex justify-between min-h-80"
    :class="{
      'pb-32': suggestionsPage,
    }"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-10 max-w-50 w-full pt-10">
      <slot name="form-content"></slot>
    </div>
    <div
      class="relative transform"
      :class="{
        '-translate-y-14 max-w-80 max-h-75': identificationPage || covidPage,
        'translate-y-10 max-w-70 max-h-70': vaccinationPage || suggestionsPage,
      }"
    >
      <slot name="icon-view"></slot>
    </div>
    <div
      class="absolute flex bottom-8 left-1/2 -translate-x-1/2 gap-28"
      :class="{
        ' translate-x-16': identificationPage,
        '-translate-x-16': suggestionsPage,
      }"
    >
      <button type="button" @click="goBack" v-if="!identificationPage">
        <icon-arrow-left />
      </button>
      <button v-if="meta.valid && !suggestionsPage">
        <icon-arrow-right-dark />
      </button>
      <button v-if="!meta.valid && !suggestionsPage">
        <icon-arrow-right-light />
      </button>
    </div>
  </Form>
</template>
