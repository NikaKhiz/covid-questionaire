import axios from "@/plugins/axios";

export async function sendQuestionaire(
  firstName,
  lastName,
  email,
  hadCovid,
  hadAntibodyTest,
  covidSicknessDate,
  antibodiesTestDate,
  antibodiesNumber,
  hadVaccine,
  vaccinationStage,
  iAmWaiting,
  nonFormalMeetings,
  numberOfDaysFromOffice,
  meetingsInLive,
  opinionAboutUs
) {
  const response = await axios.post(`/create`, {
    first_name: firstName,
    last_name: lastName,
    email,
    had_covid: hadCovid,
    ...(hadCovid && { had_antibody_test: Boolean(hadAntibodyTest) }),
    ...(covidSicknessDate && { covid_sickness_date: covidSicknessDate }),
    antibodies: {
      ...(antibodiesTestDate && { test_date: antibodiesTestDate }),
      ...(antibodiesNumber && { number: antibodiesNumber }),
    },
    had_vaccine: Boolean(hadVaccine),
    ...(vaccinationStage && { vaccination_stage: vaccinationStage }),
    ...(iAmWaiting && { i_am_waiting: iAmWaiting }),
    non_formal_meetings: nonFormalMeetings,
    number_of_days_from_office: numberOfDaysFromOffice,
    ...(meetingsInLive && { what_about_meetings_in_live: meetingsInLive }),
    ...(opinionAboutUs && { tell_us_your_opinion_about_us: opinionAboutUs }),
  });
  return response;
}
