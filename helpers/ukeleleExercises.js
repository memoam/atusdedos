const major = [
  {
    name: 'Do (major)',
    answers: [3, 0, 0, 0],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/do_z9r2og.png',
    guitarCapo: 0,
  },
  {
    name: 'Do# (major)',
    answers: [4, 0, 0, 0],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/do_cxdryq.png',
    guitarCapo: 1,
  },
  {
    name: 'Re (major)',
    answers: [0, 2, 2, 2],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/re_btnu2r.png',
    guitarCapo: 0,
  },
  {
    name: 'Re# (major)',
    answers: [1, 3, 3, 3],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/re_dwm94n.png',
    guitarCapo: 0,
  },
  {
    name: 'Mi (major)',
    answers: [2, 4, 4, 4],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/mi_tpzilq.png',
    guitarCapo: 0,
  },
  {
    name: 'Fa (major)',
    answers: [0, 1, 0, 2],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/fa_sviseu.png',
    guitarCapo: 0,
  },
  {
    name: 'Fa# (major)',
    answers: [0, 2, 0, 3],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/fa_royscm.png',
    guitarCapo: 1,
  },
  {
    name: 'Sol (major)',
    answers: [2, 3, 2, 0],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/sol_p1ldir.png',
    guitarCapo: 0,
  },
  {
    name: 'Sol# (major)',
    answers: [3, 4, 3, 1],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/sol_ez1j0s.png',
    guitarCapo: 0,
  },
  {
    name: 'La (major)',
    answers: [0, 0, 1, 2],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/la_yrfoib.png',
    guitarCapo: 0,
  },
  {
    name: 'La# (major)',
    answers: [1, 1, 2, 3],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/la_bltm8q.png',
    guitarCapo: 0,
  },
  {
    name: 'Si (major)',
    answers: [2, 2, 3, 4],
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1667272597/ukeleleExercises/major/si_hhffra.png',
    guitarCapo: 0,
  },
];
const minor = [
  {
    name: 'Do (minor)',
    answers: [3, 3, 3, 0],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/do-m_nzjiil.png',
  },
  {
    name: 'Re (minor)',
    answers: [0, 1, 2, 2],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/re-m_tcjtag.png',
  },
  {
    name: 'Mi (minor)',
    answers: [2, 3, 4, 0],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/mi-m_uz0yvh.png',
  },
  {
    name: 'Fa (minor)',
    answers: [3, 1, 0, 1],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/fa-m_htseuo.png',
  },
  {
    name: 'Sol (minor)',
    answers: [1, 3, 2, 0],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/sol-m_wqxoac.png',
  },
  {
    name: 'La (minor)',
    answers: [0, 0, 0, 2],
    guitarCapo: 0,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/la-m_wt5ral.png',
  },
  {
    name: 'Si (minor)',
    answers: [0, 0, 0, 4],
    guitarCapo: 1,
    img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665863334/ukeleleExercises/minor/si-m_rap5oz.png',
  },
];

export default function UkeleleExercises(typeGame, id) {
  if (typeGame === 'major') return major[id];
  else if (typeGame === 'minor') return minor[id];
  else return [...major, ...minor][id];
}
export const chords = [
  { name: 'major', value: 'major' },
  { name: 'minor', value: 'minor' },
];
