<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import FormMain from "@/components/ui/FormMain.vue";
import InputText from "@/components/ui/InputText.vue";
import IconIdentification from "@/components/icons/IconIdentification.vue";
import IconRect from "@/components/icons/IconRect.vue";
import TransitionDefault from "@/components/shared/TransitionDefault.vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();
const questionaire = reactive(store.getters.questionaire);
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader :page="1" />
    <TransitionDefault>
      <FormMain>
        <template v-slot:form-content>
          <InputText
            name="first_name"
            placeholder="იოსებ"
            rules="required|alpha_georgian|min:3|max:255"
            label="სახელი*"
            v-model="questionaire['first_name']"
          />
          <InputText
            name="last_name"
            placeholder="ჯუღაშვილი"
            rules="required|alpha_georgian|min:3|max:255"
            label="გვარი*"
            v-model="questionaire['last_name']"
          />
          <InputText
            name="email"
            type="email"
            placeholder="fbi@redberry.ge"
            rules="required|min:3|max:255|email|redberry_email"
            label="მეილი*"
            v-model="questionaire['email']"
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
          <transition
            appear
            enter-from-class="w-[500px] translate-y-1 -translate-x-2 opacity-10"
            enter-active-class="transition-[all] duration-[500ms]"
          >
            <icon-rect
              class="absolute top-[38%] left-[10%] origin-top-left -translate-y-1/2 -z-50"
            />
          </transition>
        </template>
      </FormMain>
    </TransitionDefault>
  </div>
</template>
