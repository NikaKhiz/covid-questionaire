import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: '{field} სავალდებულოა',
        alpha_georgian: '{field}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
        min: '{field}ს  ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან',
        max: '{field}ს  ველი უნდა შედგებოდეს მაქსიმუმ 0:{max} სიმბოლოსგან',
        email: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
        redberry_email: 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
      },
      names: {
        first_name: 'სახელი',
        last_name: 'გვარი',
        email: 'იმეილი',
        had_covid: 'ეს ველი ',
        had_antibody_test: 'ეს ველი '
      }
    }
  })
})
