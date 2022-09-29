export default function GuitarExercises(typeGame, id) {
  const major = [
    {
      name: 'Do (major)',
      answers: [0, 1, 0, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (major)',
      answers: [1, 2, 1, 3, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Re (major)',
      answers: [2, 3, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (major)',
      answers: [3, 4, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (major)',
      answers: [0, 0, 1, 2, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (major)',
      answers: [0, 0, 2, 3, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (major)',
      answers: [0, 0, 3, 4, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (major)',
      answers: [3, 0, 0, 0, 2, 3],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (major)',
      answers: [0, 0, 5, 6, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (major)',
      answers: [0, 2, 2, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (major)',
      answers: [0, 3, 3, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (major)',
      answers: [0, 4, 4, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const minor = [
    {
      name: 'Do (minor)',
      answers: [0, 4, 5, 5, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (minor)',
      answers: [0, 5, 6, 6, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (minor)',
      answers: [1, 3, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (minor)',
      answers: [2, 4, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (minor)',
      answers: [0, 0, 0, 2, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (minor)',
      answers: [0, 0, 0, 3, 3, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (minor)',
      answers: [0, 0, 0, 4, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (minor)',
      answers: [0, 0, 0, 5, 5, 0],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (minor)',
      answers: [0, 0, 0, 6, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (minor)',
      answers: [0, 1, 2, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (minor)',
      answers: [0, 2, 3, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (minor)',
      answers: [0, 3, 4, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const fifth = [
    {
      name: 'Do (5°)',
      answers: [-1, -1, 5, 5, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (5°)',
      answers: [-1, -1, 6, 6, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (5°)',
      answers: [-1, 3, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (5°)',
      answers: [-1, 4, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (5°)',
      answers: [-1, -1, -1, 2, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (5°)',
      answers: [-1, -1, -1, 3, 3, 1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (5°)',
      answers: [-1, -1, -1, 4, 4, 2],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (5°)',
      answers: [-1, -1, -1, 5, 5, 3],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (5°)',
      answers: [-1, -1, -1, 6, 6, 4],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La (5°)',
      answers: [-1, -1, 2, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (5°)',
      answers: [-1, -1, 3, 3, 1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (5°)',
      answers: [-1, -1, 4, 4, 2, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const seventh = [
    {
      name: 'Do (7°)',
      answers: [-1, 1, 3, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (7°)',
      answers: [-1, 1, 4, 3, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (7°)',
      answers: [2, 1, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7°)',
      answers: [3, 2, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7°)',
      answers: [0, 0, 1, 0, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7°)',
      answers: [0, 0, 2, 0, 3, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (7°)',
      answers: [0, 0, 3, 0, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (7°)',
      answers: [0, 0, 4, 0, 5, 0],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (7°)',
      answers: [0, 0, 5, 0, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (7°)',
      answers: [0, 2, 0, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7°)',
      answers: [0, 3, 0, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (7°)',
      answers: [-1, 0, 2, 1, 2, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const majSeven = [
    {
      name: 'Do (maj 7°)',
      answers: [0, 0, 0, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (maj 7°)',
      answers: [0, 0, 0, 3, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Re (maj 7°)',
      answers: [2, 2, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (maj 7°)',
      answers: [3, 3, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (maj 7°)',
      answers: [-1, 0, 1, 1, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (maj 7°)',
      answers: [0, 1, 2, 3, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (maj 7°)',
      answers: [1, 2, 3, 4, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (maj 7°)',
      answers: [2, 3, 4, 5, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (maj 7°)',
      answers: [3, 4, 5, 6, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La (maj 7°)',
      answers: [0, 2, 1, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (maj 7°)',
      answers: [0, 3, 2, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (maj 7°)',
      answers: [0, 4, 3, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const mSeven = [
    {
      name: 'Do (m7°)',
      answers: [0, 4, 0, 5, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (m7°)',
      answers: [0, 5, 0, 6, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (m7°)',
      answers: [1, 1, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (m7°)',
      answers: [2, 2, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (m7°)',
      answers: [0, 0, 0, 0, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (m7°)',
      answers: [0, 0, 0, 0, 3, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (m7°)',
      answers: [0, 0, 0, 0, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (m7°)',
      answers: [0, 0, 0, 0, 5, 0],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (m7°)',
      answers: [0, 0, 0, 0, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (m7°)',
      answers: [0, 1, 0, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (m7°)',
      answers: [0, 2, 0, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (m7°)',
      answers: [0, 3, 0, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const susFour = [
    {
      name: 'Do (sus4)',
      answers: [0, 6, 5, 5, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (sus4)',
      answers: [0, 7, 6, 6, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (sus4)',
      answers: [3, 3, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (sus4)',
      answers: [4, 4, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (sus4)',
      answers: [0, 0, 2, 2, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (sus4)',
      answers: [0, 0, 3, 3, 3, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (sus4)',
      answers: [0, 0, 4, 4, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (sus4)',
      answers: [0, 0, 5, 5, 5, 0],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (sus4)',
      answers: [0, 0, 6, 6, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (sus4)',
      answers: [0, 3, 2, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (sus4)',
      answers: [0, 4, 3, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (sus4)',
      answers: [0, 5, 4, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const addNine = [
    {
      name: 'Do (add9)',
      answers: [0, 3, 0, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (add9)',
      answers: [11, 9, 10, 11, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (add9)',
      answers: [12, 10, 11, 12, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (add9)',
      answers: [13, 11, 12, 13, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (add9)',
      answers: [2, 0, 1, 2, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (add9)',
      answers: [3, 1, 2, 3, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (add9)',
      answers: [4, 2, 3, 4, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (add9)',
      answers: [5, 3, 4, 5, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (add9)',
      answers: [6, 4, 5, 6, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La (add9)',
      answers: [7, 5, 6, 7, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (add9)',
      answers: [8, 6, 7, 8, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (add9)',
      answers: [9, 7, 8, 9, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const susTwo = [
    {
      name: 'Do (sus2)',
      answers: [0, 0, 5, 5, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (sus2)',
      answers: [0, 0, 6, 6, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (sus2)',
      answers: [0, 3, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (sus2)',
      answers: [0, 4, 3, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Mi (sus2)',
      answers: [0, 5, 4, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Fa (sus2)',
      answers: [0, 6, 5, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Fa# (sus2)',
      answers: [0, 7, 6, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Sol (sus2)',
      answers: [0, 8, 7, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 5,
    },
    {
      name: 'Sol# (sus2)',
      answers: [0, 9, 8, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 6,
    },
    {
      name: 'La (sus2)',
      answers: [0, 0, 2, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (sus2)',
      answers: [0, 0, 3, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (sus2)',
      answers: [0, 0, 4, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const sevenSusFour = [
    {
      name: 'Do (7sus4)',
      answers: [0, 6, 0, 5, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (7sus4)',
      answers: [0, 7, 0, 6, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (7sus4)',
      answers: [3, 1, 2, 0, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7sus4)',
      answers: [4, 2, 3, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7sus4)',
      answers: [0, 0, 2, 0, 2, 0],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7sus4)',
      answers: [0, 0, 3, 0, 3, 0],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (7sus4)',
      answers: [0, 0, 4, 0, 4, 0],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (7sus4)',
      answers: [0, 0, 5, 0, 5, 0],
      img: '/images/g_a1.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (7sus4)',
      answers: [0, 0, 6, 0, 6, 0],
      img: '/images/g_a1.png',
      guitarCapo: 4,
    },
    {
      name: 'La (7sus4)',
      answers: [0, 3, 0, 2, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7sus4)',
      answers: [0, 4, 0, 3, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (7sus4)',
      answers: [0, 5, 0, 4, 0, -1],
      img: '/images/g_a1.png',
      guitarCapo: 2,
    },
  ];
  const sevenNnine = [
    {
      name: 'Do (7#9)',
      answers: [-1, 4, 3, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (7#9)',
      answers: [-1, 5, 4, 3, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (7#9)',
      answers: [-1, 6, 5, 4, 5, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7#9)',
      answers: [2, 2, 0, 4, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7#9)',
      answers: [3, 3, 1, 2, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7#9)',
      answers: [4, 4, 2, 3, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (7#9)',
      answers: [5, 5, 3, 4, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (7#9)',
      answers: [6, 6, 4, 5, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (7#9)',
      answers: [7, 7, 5, 6, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La (7#9)',
      answers: [8, 8, 6, 7, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7#9)',
      answers: [-1, 2, 1, 0, 1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (7#9)',
      answers: [-1, 3, 2, 1, 2, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
  ];
  const nine = [
    {
      name: 'Do (9)',
      answers: [-1, 3, 3, 2, 3, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (9)',
      answers: [-1, 4, 4, 3, 4, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (9)',
      answers: [-1, 5, 5, 4, 5, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (9)',
      answers: [1, 2, 0, 1, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (9)',
      answers: [2, 3, 1, 2, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (9)',
      answers: [3, 4, 2, 3, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (9)',
      answers: [4, 5, 3, 4, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (9)',
      answers: [5, 6, 4, 5, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (9)',
      answers: [6, 7, 5, 6, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La (9)',
      answers: [7, 8, 6, 7, -1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (9)',
      answers: [-1, 1, 1, 0, 1, -1],
      img: '/images/g_a1.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (9)',
      answers: [-1, 2, 2, 1, 2, -1],
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
