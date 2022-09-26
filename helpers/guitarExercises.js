export default function GuitarExercises(typeGame, id) {
  const major = [
    {
      name: 'Do',
      answers: [1, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
  ];
  const minor = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const fifth = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const seventh = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const majSeven = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const mSeven = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const susFour = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const addNine = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const susTwo = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const sevenSusFour = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const sevenNnine = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const nine = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  if (typeGame === 'major') return major[id];
  else if (typeGame === 'minor') return minor[id];
  else if (typeGame === 'fifth') return fifth[id];
  else if (typeGame === 'seventh') return seventh[id];
  else if (typeGame === 'majSeven') return majSeven[id];
  else if (typeGame === 'mSeven') return mSeven[id];
  else if (typeGame === 'susFour') return susFour[id];
  else if (typeGame === 'addNine') return addNine[id];
  else if (typeGame === 'susTwo') return susTwo[id];
  else if (typeGame === 'sevenSusFour') return sevenSusFour[id];
  else if (typeGame === 'sevenNnine') return sevenNnine[id];
  else if (typeGame === 'nine') return nine[id];
  else
    return [
      ...major,
      ...minor,
      ...fifth,
      ...seventh,
      ...majSeven,
      ...mSeven,
      ...susFour,
      ...addNine,
      ...susTwo,
      ...sevenSusFour,
      ...sevenNnine,
      ...nine,
    ][id];
}
export const chords = [
  { name: 'major', value: 'major' },
  { name: 'minor', value: 'minor' },
  { name: '5', value: 'fifth' },
  { name: '7', value: 'seventh' },
  { name: 'maj7', value: 'majSeven' },
  { name: 'm7', value: 'mSeven' },
  { name: 'sus4', value: 'susFour' },
  { name: 'add9', value: 'addNine' },
  { name: 'sus2', value: 'susTwo' },
  { name: '7sus4', value: 'sevenSusFour' },
  { name: '7#9', value: 'sevenNnine' },
  { name: '9', value: 'nine' },
  { name: 'Todo', value: 'all' },
];
