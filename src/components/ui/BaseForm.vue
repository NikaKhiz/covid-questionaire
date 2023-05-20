<script setup>
import { Form } from 'vee-validate'
</script>

<template>
  <Form class="relative flex justify-between" @submit="onSubmit">
    <div class="flex flex-col gap-10 max-w-[500px] w-[100%] pt-10">
      <slot name="form-content"></slot>
    </div>
    <div class="relative transform -translate-y-14 max-w-[900px] max-h-800px">
      <slot name="icon-view"></slot>
    </div>
  </Form>
</template>
