<script setup>
import TheHeader from '@/components/shared/TheHeader.vue'
import IconIdentification from '@/components/icons/IconIdentification.vue'
import IconRect from '@/components/icons/IconRect.vue'
import IconArrowRightDark from '@/components/icons/IconArrowRightDark.vue'

import { Form, Field, ErrorMessage } from 'vee-validate'

const onSubmit = () => {
  console.log('submitted')
}
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader />
    <Form class="relative flex justify-between" @submit="onSubmit">
      <div class="flex flex-col gap-10 max-w-[500px] w-[100%] pt-10">
        <div class="flex flex-col gap-2 text-neutralBlack">
          <label for="first_name" class="text-xl font-bold py-2">სახელი*</label>
          <Field
            type="text"
            name="first_name"
            id="first_name"
            placeholder="იოსებ"
            class="py-2 px-5 border-[1px] outline-none border-neutralBlack placeholder:text-neutralBlack"
            rules="required|alpha_georgian|min:3|max:255"
          />
          <ErrorMessage as="p" class="text-neutralRed font-normal pl-5" name="first_name" />
        </div>
        <div class="flex flex-col gap-2 text-neutralBlack">
          <label for="lastName" class="text-xl font-bold py-2">გვარი*</label>
          <Field
            type="text"
            name="last_name"
            id="last_name"
            placeholder="ჯუღაშვილი"
            class="py-2 px-5 border-[1px] outline-none border-neutralBlack placeholder:text-neutralBlack"
            rules="required|alpha_georgian|min:3|max:255"
          />
          <ErrorMessage as="p" class="text-neutralRed font-normal pl-5" name="last_name" />
        </div>
        <div class="flex flex-col gap-2 text-neutralBlack">
          <label for="email" class="text-xl font-bold py-2">მეილი*</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="fbi@redberry.ge"
            class="py-2 px-5 border-[1px] outline-none border-neutralBlack placeholder:text-neutralBlack"
            rules="required|min:3|max:255|email|redberry_email"
          />
          <ErrorMessage as="p" class="text-neutralRed font-normal pl-5" name="email" />
        </div>
        <div class="flex flex-col gap-5 mt-24 text-neutralGray text-lg">
          <div class="w-60 h-[1px] bg-lightGray"></div>
          <p class="max-w-[300px]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </div>
      <div class="relative transform -translate-y-14 max-w-[900px] max-h-800px">
        <icon-identification class="block w-full object-contain" />
        <icon-rect
          class="absolute top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
        />
        <button type="submit" class="absolute left-[20%] -translate-x-1/2">
          <icon-arrow-right-dark />
        </button>
      </div>
    </Form>
  </div>
</template>
