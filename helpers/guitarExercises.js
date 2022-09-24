export default function GuitarExercises(typeGame, id) {
  const notes = [
    {
      name: 'Do',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
    },
    {
      name: 'Fa',
      answers: [1, 1, 1, 1, 1, 1],
      img: '/images/g_a2.png',
    },
    {
      name: 'La',
      answers: [2, 2, 2, 2, 2, 2],
      img: '/images/g_a3.png',
    },
  ];
  const chords = [
    {
      name: 'Do2',
      answers: [0, 0, 0, 0, 0, 0],
      img: '/images/g_a1.png',
    },
    {
      name: 'Fa2',
      answers: [1, 1, 1, 1, 1, 1],
      img: '/images/g_a2.png',
    },
    {
      name: 'La2',
      answers: [2, 2, 2, 2, 2, 2],
      img: '/images/g_a3.png',
    },
  ];
  if (typeGame === 'notes') return notes[id];
  else if (typeGame === 'chords') return chords[id];
  else return [...notes, ...chords][id];
}
