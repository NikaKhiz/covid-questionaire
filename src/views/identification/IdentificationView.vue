<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import TextInput from "@/components/ui/inputs/TextInput.vue";
import IconIdentification from "@/components/icons/IconIdentification.vue";
import IconRect from "@/components/icons/IconRect.vue";
import IconArrowRightDark from "@/components/icons/IconArrowRightDark.vue";

const nextPage = () => {
  console.log("redirect to next page");
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
        />
        <TextInput
          name="last_name"
          placeholder="ჯუღაშვილი"
          rules="required|alpha_georgian|min:3|max:255"
          label="გვარი"
        />
        <TextInput
          name="email"
          type="email"
          placeholder="fbi@redberry.ge"
          rules="required|min:3|max:255|email|redberry_email"
          label="მეილი"
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
