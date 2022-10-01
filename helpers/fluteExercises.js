const fluterExercises = [
  {
    name: 'ejemplo',
    answer1: true,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false,
    answer7: false,
    answer8: false,
    answer9: false,
    answer10: false,
    answer11: false,
    answer12: false,
    answer13: false,
    answer14: false,
    answer15: false,
    img: '/images/fluteact1.png',
  },
];
export default function FluterExercises(value) {
  return fluterExercises[value];
}
export const Validate = (
  { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15 },
  value
) => {
  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
    answer11,
    answer12,
    answer13,
    answer14,
    answer15,
  } = fluterExercises[value];
  console.log(    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
    answer11,
    answer12,
    answer13,
    answer14,
    answer15);
  return (
    answer1 === a1 &&
    answer2 === a2 &&
    answer3 === a3 &&
    answer4 === a4 &&
    answer5 === a5 &&
    answer6 === a6 &&
    answer7 === a7 &&
    answer8 === a8 &&
    answer9 === a9 &&
    answer10 === a10 &&
    answer11 === a11 &&
    answer12 === a12 &&
    answer13 === a13 &&
    answer14 === a14 &&
    answer15 === a15
  );
};
