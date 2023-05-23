<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import TextInput from "@/components/ui/inputs/TextInput.vue";
import IconIdentification from "@/components/icons/IconIdentification.vue";
import IconRect from "@/components/icons/IconRect.vue";
import IconArrowRightDark from "@/components/icons/IconArrowRightDark.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const store = useStore();
const router = useRouter();
const questionaire = reactive(store.getters.questionaire);

const nextPage = () => {
  store.dispatch("setPage", 2);
  router.push({ name: "covid" });
};
const onSubmit = () => {
  nextPage();
};
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader />
    <BaseForm :onSubmit="onSubmit">
      <template v-slot:form-content>
        <TextInput
          name="first_name"
          placeholder="იოსებ"
          rules="required|alpha_georgian|min:3|max:255"
          label="სახელი"
          v-model="questionaire.identification['first_name']"
        />
        <TextInput
          name="last_name"
          placeholder="ჯუღაშვილი"
          rules="required|alpha_georgian|min:3|max:255"
          label="გვარი"
          v-model="questionaire.identification['last_name']"
        />
        <TextInput
          name="email"
          type="email"
          placeholder="fbi@redberry.ge"
          rules="required|min:3|max:255|email|redberry_email"
          label="მეილი"
          v-model="questionaire.identification['email']"
        />
        <div class="flex flex-col gap-5 mt-24 text-neutralGray text-lg">
          <div class="w-60 h-[1px] bg-lightGray"></div>
          <p class="max-w-[300px]">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </template>
      <template v-slot:icon-view>
        <icon-identification class="block w-full object-contain" />
        <icon-rect
          class="absolute top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
        />
        <button type="submit" class="absolute left-[20%] -translate-x-1/2">
          <icon-arrow-right-dark />
        </button>
      </template>
    </BaseForm>
  </div>
</template>
