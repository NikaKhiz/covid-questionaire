<script setup>
import { Form } from "vee-validate";
import IconArrowRightDark from "@/components/icons/IconArrowRightDark.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconArrowRightLight from "@/components/icons/IconArrowRightLight.vue";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const questionaire = reactive(store.getters.questionaire);
const page = ref(store.getters.getPage);
const identificationPage = ref(page.value == 1);
const covidPage = ref(page.value == 2);
const vaccinationPage = ref(page.value == 3);
const suggestionsPage = ref(page.value == 4);
const nextPage = () => {
  if (identificationPage.value) {
    router.push({ name: "covid" });
    store.dispatch("setPage", 2);
  }
  if (covidPage.value) {
    router.push({ name: "vaccinate" });
    store.dispatch("setPage", 3);
  }
  if (vaccinationPage.value) {
    router.push({ name: "suggestions" });
    store.dispatch("setPage", 4);
  }
  if (suggestionsPage.value) {
    router.push({ name: "greatings" });
    store.dispatch("setPage", 0);
  }
};
const goBack = () => {
  if (covidPage.value) {
    router.push({ name: "identification" });
    store.dispatch("setPage", 1);
  }
  if (vaccinationPage.value) {
    router.push({ name: "covid" });
    store.dispatch("setPage", 2);
  }
  if (suggestionsPage.value) {
    router.push({ name: "vaccinate" });
    store.dispatch("setPage", 3);
  }
};
const sendData = () => {
  store.dispatch("modifieDataToSend", questionaire);
};
const onSubmit = () => {
  if (suggestionsPage.value) {
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
    class="relative flex justify-between min-h-[800px]"
    :class="{
      'pb-[120px]': suggestionsPage,
    }"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-10 max-w-[500px] w-[100%] pt-10">
      <slot name="form-content"></slot>
    </div>
    <div
      class="relative transform"
      :class="{
        '-translate-y-14 max-w-[800px] max-h-[750px]':
          identificationPage || covidPage,
        'translate-y-10 max-w-[700px] max-h-[700px]':
          vaccinationPage || suggestionsPage,
      }"
    >
      <slot name="icon-view"></slot>
    </div>
    <div
      class="absolute flex bottom-[30px] left-1/2 -translate-x-1/2 gap-28"
      :class="{
        'translate-x-[65px]': identificationPage,
        '-translate-x-[65px] ': suggestionsPage,
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
