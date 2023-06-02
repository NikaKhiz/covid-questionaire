<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import FormMain from "@/components/ui/FormMain.vue";
import RadioInput from "@/components/ui/inputs/RadioInput.vue";
import TextInput from "@/components/ui/inputs/TextInput.vue";
import IconSuggestions from "@/components/icons/IconSuggestions.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import TransitionDefault from "@/components/shared/TransitionDefault.vue";
import { reactive, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const questionaire = reactive(store.getters.questionaire);

watch(questionaire, () => {
  store.dispatch("setQuestionaire", questionaire);
});
const nonFormalMeetingsOptions = [
  { label: "კვირაში ორჯერ", value: "twice_a_week" },
  { label: "კვირაში ერთხელ", value: "once_a_week" },
  { label: "ორ კვირაში ერთხელ", value: "once_in_a_two_weeks" },
  { label: "თვეში ერთხელ", value: "once_in_a_month" },
];
const meetingsNumberOptions = [
  { label: 0, value: 0 },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
];
</script>
<template>
  <div class="container mx-auto pt-20 font-bpg">
    <TheHeader :page="4" />
    <TransitionDefault>
      <FormMain>
        <template v-slot:form-content>
          <div
            class="text-neutralBlack max-w-[600px] flex flex-col gap-6 font-normal text-[22px]"
          >
            <p>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <RadioInput
            name="non_formal_meetings"
            heading="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            rules="required"
            :options="nonFormalMeetingsOptions"
          />
          <RadioInput
            name="number_of_days_from_office"
            heading="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
            rules="required"
            :options="meetingsNumberOptions"
          />
          <TextInput
            type="textarea"
            name="what_about_meetings_in_live"
            label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            v-model="questionaire['what_about_meetings_in_live']"
          />
          <TextInput
            type="textarea"
            name="tell_us_your_opinion_about_us"
            label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            v-model="questionaire['tell_us_your_opinion_about_us']"
          />
          <button
            type="submit"
            class="bg-neutralBlue px-8 py-4 max-w-max rounded-[40px] text-white self-end font-bold hover:opacity-90"
          >
            დასრულება
          </button>
        </template>
        <template v-slot:icon-view>
          <icon-suggestions class="block w-full object-contain" />
          <transition
            appear
            enter-from-class="scale-[2] opacity-50"
            enter-active-class="transition-[all] duration-[500ms]"
          >
            <icon-heart
              class="absolute top-[20%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 -z-50"
            />
          </transition>
        </template>
      </FormMain>
    </TransitionDefault>
  </div>
</template>
