import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: "ველი {field} სავალდებულოა",
        alpha_georgian: "{field}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
        min: "{field}ს  ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან",
        max: "{field}ს  ველი უნდა შედგებოდეს მაქსიმუმ 0:{max} სიმბოლოსგან",
        email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
        redberry_email:
          "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
        test_date_format:
          "{field}ს ფორმატი არასწორია,შეიყვანეთ მონაცემი (დდ/თთ/წწ) ფორმატით",
        date_format:
          "{field}ს ფორმატი არასწორია,შეიყვანეთ მონაცემი (დდ/თთ/წწ) ფორმატით",
        numeric: "გთხოვთ {field}ს მნიშვნელობა წარმოადგინოთ ციფრებით",
      },
      names: {
        first_name: "სახელი",
        last_name: "გვარი",
        email: "იმეილი",
        had_covid: "გადატანილი გაქვთ კოვიდი",
        had_antibody_test: "ანტისხეულების ტესტი",
        test_date: "ტესტირების თარიღი",
        covid_sickness_date: "დაავადების თარიღი",
        number: "ანტისხეულების რიცხვი",
      },
    },
  }),
});
