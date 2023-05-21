import { defineRule } from "vee-validate";
import { required, email, min, max, numeric } from "@vee-validate/rules";
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("numeric", numeric);
defineRule("redberry_email", (value) => {
  const redberryMail = /^[a-zA-Z0-9.]+@redberry.ge$/.test(value);
  if (redberryMail) {
    return true;
  }
});
defineRule("alpha_georgian", (value) => {
  const georgianAlpha = /^([ა-ჰ]+)$/.test(value);
  if (georgianAlpha) {
    return true;
  }
});

defineRule("date_format", (value) => {
  checkValidDate(value);
});

defineRule("test_date_format", (value) => {
  if (value === "") {
    return true;
  } else {
    checkValidDate(value);
  }
});

function checkValidDate(value) {
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  if (dateRegex.test(value)) {
    let dateParts = value.split("/");
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let year = parseInt(dateParts[2]);

    let date = new Date(year, month, day);
    let newDate = new Date();
    if (
      date.getDate() === day &&
      date.getMonth() === month &&
      date.getFullYear() === year &&
      year <= newDate.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
