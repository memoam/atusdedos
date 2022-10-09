export default function GuitarExercises(typeGame, id) {
  const major = [
    {
      name: 'Do (major)',
      answers: [0, 1, 0, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/do_major_uaksti.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (major)',
      answers: [0, 2, 0, 3, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/do__major_y8mzer.png',
      guitarCapo: 1,
    },
    {
      name: 'Re (major)',
      answers: [2, 3, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/re_major_reyias.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (major)',
      answers: [3, 4, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/re__major_hxko6k.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (major)',
      answers: [0, 0, 1, 2, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/mi_major_tlset6.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (major)',
      answers: [0, 0, 2, 3, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/fa_major_okqx6q.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (major)',
      answers: [0, 0, 3, 4, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/fa__major_njpeyk.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (major)',
      answers: [3, 0, 0, 0, 2, 3],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/sol_major_clycbk.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (major)',
      answers: [0, 0, 5, 6, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/sol__major_ifhzoi.png',
      guitarCapo: 4,
    },
    {
      name: 'La (major)',
      answers: [0, 2, 2, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/la_major_e3c2mm.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (major)',
      answers: [0, 3, 3, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/la__major_oxskdw.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (major)',
      answers: [0, 4, 4, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/si_major_qrcao5.png',
      guitarCapo: 2,
    },
  ];
  const minor = [
    {
      name: 'Do (minor)',
      answers: [0, 4, 5, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/do_minor_ch7ntk.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (minor)',
      answers: [0, 5, 6, 6, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/do__minor_on2mwm.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (minor)',
      answers: [1, 3, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/re_minor_t3i513.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (minor)',
      answers: [2, 4, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/re__minor_gs2zzt.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (minor)',
      answers: [0, 0, 0, 2, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/mi_minor_j5a31q.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (minor)',
      answers: [0, 0, 0, 3, 3, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/fa_minor_vnlryz.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (minor)',
      answers: [0, 0, 0, 4, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/fa__minor_wysoqi.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (minor)',
      answers: [0, 0, 0, 5, 5, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/sol_minor_yvqn7t.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (minor)',
      answers: [0, 0, 0, 6, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/sol__minor_zpqyso.png',
      guitarCapo: 4,
    },
    {
      name: 'La (minor)',
      answers: [0, 1, 2, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/minor/la_minor_vrtfau.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (minor)',
      answers: [0, 2, 3, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/la__minor_gu0al3.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (minor)',
      answers: [0, 3, 4, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/minor/si_minor_irobon.png',
      guitarCapo: 2,
    },
  ];
  const fifth = [
    {
      name: 'Do (5°)',
      answers: [-1, -1, 5, 5, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/do_5_okdr5n.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (5°)',
      answers: [-1, -1, 6, 6, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/do__5_ahdeew.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (5°)',
      answers: [-1, 3, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/re_5_l55us8.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (5°)',
      answers: [-1, 4, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/re__5_vxtjf0.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (5°)',
      answers: [-1, -1, -1, 2, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/mi_5_pekhzt.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (5°)',
      answers: [-1, -1, -1, 3, 3, 1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/fa_5_revilf.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (5°)',
      answers: [-1, -1, -1, 4, 4, 2],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/fa__5_kathdm.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (5°)',
      answers: [-1, -1, -1, 5, 5, 3],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/sol_5_oe93hf.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (5°)',
      answers: [-1, -1, -1, 6, 6, 4],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/sol__5_k4wozc.png',
      guitarCapo: 0,
    },
    {
      name: 'La (5°)',
      answers: [-1, -1, 2, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/la_5_cm4xfj.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (5°)',
      answers: [-1, -1, 3, 3, 1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/la__5_sxmmt1.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (5°)',
      answers: [-1, -1, 4, 4, 2, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284473/guitarExercises/5/si_5_hers0y.png',
      guitarCapo: 0,
    },
  ];
  const seventh = [
    {
      name: 'Do (7°)',
      answers: [-1, 1, 3, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/do_7_vxkygp.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (7°)',
      answers: [-1, 1, 4, 3, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/do__7_zmled6.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (7°)',
      answers: [2, 1, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/re_7_jramde.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7°)',
      answers: [3, 2, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/re__7_ucwx8h.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7°)',
      answers: [0, 0, 1, 0, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/mi_7_d71otm.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7°)',
      answers: [0, 0, 2, 0, 3, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/fa_7_zokqv3.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (7°)',
      answers: [0, 0, 3, 0, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/fa__7_pvahx9.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (7°)',
      answers: [0, 0, 4, 0, 5, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/sol_7_cmhcur.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (7°)',
      answers: [0, 0, 5, 0, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/sol__7_w7ihkk.png',
      guitarCapo: 4,
    },
    {
      name: 'La (7°)',
      answers: [0, 2, 0, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/la_7_q3zfof.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7°)',
      answers: [0, 3, 0, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/la__7_nx1wpe.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (7°)',
      answers: [-1, 0, 2, 1, 2, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284474/guitarExercises/7/si_7_rjyb22.png',
      guitarCapo: 0,
    },
  ];
  const majSeven = [
    {
      name: 'Do (maj 7°)',
      answers: [0, 0, 0, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/do_maj7_tu25rx.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (maj 7°)',
      answers: [0, 0, 0, 3, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/do__maj7_zc6k3m.png',
      guitarCapo: 1,
    },
    {
      name: 'Re (maj 7°)',
      answers: [2, 2, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/re_maj7_khx15g.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (maj 7°)',
      answers: [3, 3, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/re__maj7_lc8jw9.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (maj 7°)',
      answers: [-1, 0, 1, 1, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/mi_maj7_bvymk0.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (maj 7°)',
      answers: [0, 1, 2, 3, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/fa_maj7_fghlvk.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (maj 7°)',
      answers: [1, 2, 3, 4, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/fa__maj7_wlul1b.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (maj 7°)',
      answers: [2, 3, 4, 5, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/sol_maj7_tfnfkw.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (maj 7°)',
      answers: [3, 4, 5, 6, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/maj7/sol__maj7_pwoxgv.png',
      guitarCapo: 0,
    },
    {
      name: 'La (maj 7°)',
      answers: [0, 2, 1, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/la_maj7_mrzyfa.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (maj 7°)',
      answers: [0, 3, 2, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/maj7/la__maj7_e2h7y3.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (maj 7°)',
      answers: [0, 4, 3, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/maj7/si_maj7_m6haat.png',
      guitarCapo: 2,
    },
  ];
  const mSeven = [
    {
      name: 'Do (m7°)',
      answers: [0, 4, 0, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/do_m7_vl7xk5.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (m7°)',
      answers: [0, 5, 0, 6, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/do__m7_i2lwsq.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (m7°)',
      answers: [1, 1, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/re_m7_lninzc.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (m7°)',
      answers: [2, 2, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/re__m7_jdqr3s.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (m7°)',
      answers: [0, 0, 0, 0, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/mi_m7_u5yqaf.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (m7°)',
      answers: [0, 0, 0, 0, 3, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/fa_m7_ofvchw.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (m7°)',
      answers: [0, 0, 0, 0, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/fa__m7_npiltm.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (m7°)',
      answers: [0, 0, 0, 0, 5, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/sol_m7_adqwii.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (m7°)',
      answers: [0, 0, 0, 0, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/sol__m7_orx6fb.png',
      guitarCapo: 4,
    },
    {
      name: 'La (m7°)',
      answers: [0, 1, 0, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/la_m7_stodzk.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (m7°)',
      answers: [0, 2, 0, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284478/guitarExercises/m7/la__m7_ahqwzh.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (m7°)',
      answers: [0, 3, 0, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/m7/si_m7_bopm2n.png',
      guitarCapo: 2,
    },
  ];
  const susFour = [
    {
      name: 'Do (sus4)',
      answers: [0, 6, 5, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/do__sus4_afoeei.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (sus4)',
      answers: [0, 6, 5, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/do_sus4_fxlzlu.png',
      guitarCapo: 3,
    },
    {
      name: 'Re (sus4)',
      answers: [3, 3, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/re_sus4_kbkq7v.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (sus4)',
      answers: [4, 4, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/re__sus4_xbigvj.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (sus4)',
      answers: [0, 0, 2, 2, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/mi_sus4_ql81yc.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (sus4)',
      answers: [0, 0, 3, 3, 3, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/fa_sus4_vmxrgu.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (sus4)',
      answers: [0, 0, 4, 4, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/fa__sus4_yzxua3.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (sus4)',
      answers: [0, 0, 5, 5, 5, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/sol_sus4_vxfipi.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (sus4)',
      answers: [0, 0, 6, 6, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/sol__sus4_a7vmld.png',
      guitarCapo: 4,
    },
    {
      name: 'La (sus4)',
      answers: [0, 3, 2, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/la_sus4_xmutjq.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (sus4)',
      answers: [0, 4, 3, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284482/guitarExercises/sus4/la__sus4_mjbzid.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (sus4)',
      answers: [0, 5, 4, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus4/si_sus4_jigr07.png',
      guitarCapo: 2,
    },
  ];
  const addNine = [
    {
      name: 'Do (add9)',
      answers: [0, 3, 0, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/add9/do_add9_c0wvlh.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (add9)',
      answers: [11, 9, 10, 11, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/add9/do__add9_imfslz.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (add9)',
      answers: [12, 10, 11, 12, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/re_add9_wy0rce.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (add9)',
      answers: [13, 11, 12, 13, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/add9/re__add9_zjiixb.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (add9)',
      answers: [2, 0, 1, 2, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/mi_add9_wu1ajk.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (add9)',
      answers: [3, 1, 2, 3, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/add9/fa_add9_xxn0j5.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (add9)',
      answers: [4, 2, 3, 4, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/fa__add9_jlmpq3.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (add9)',
      answers: [5, 3, 4, 5, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/sol_add9_ggo5te.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (add9)',
      answers: [6, 4, 5, 6, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/sol__add9_uqdmap.png',
      guitarCapo: 0,
    },
    {
      name: 'La (add9)',
      answers: [7, 5, 6, 7, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/add9/la_add9_wcmwfq.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (add9)',
      answers: [8, 6, 7, 8, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/la__add9_co6rmf.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (add9)',
      answers: [9, 7, 8, 9, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284477/guitarExercises/add9/si_add9_lmpjij.png',
      guitarCapo: 0,
    },
  ];
  const susTwo = [
    {
      name: 'Do (sus2)',
      answers: [0, 0, 5, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/do_sus2_rw7men.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (sus2)',
      answers: [0, 0, 6, 6, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/do__sus2_fbcbdn.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (sus2)',
      answers: [0, 3, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284480/guitarExercises/sus2/re_sus2_swcyeq.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (sus2)',
      answers: [0, 4, 3, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/re__sus2_fc9sdy.png',
      guitarCapo: 1,
    },
    {
      name: 'Mi (sus2)',
      answers: [0, 5, 4, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/mi_sus2_geqmkk.png',
      guitarCapo: 2,
    },
    {
      name: 'Fa (sus2)',
      answers: [0, 6, 5, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/fa_sus2_q3z6jd.png',
      guitarCapo: 3,
    },
    {
      name: 'Fa# (sus2)',
      answers: [0, 6, 5, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/fa__sus2_jmnuei.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol (sus2)',
      answers: [5, 8, 7, 5, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/sol_sus2_uyoggh.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (sus2)',
      answers: [6, 9, 8, 6, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/sol__sus2_z4hgoa.png',
      guitarCapo: 0,
    },
    {
      name: 'La (sus2)',
      answers: [0, 0, 2, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/la_sus2_bcmpmg.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (sus2)',
      answers: [0, 0, 3, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/la__sus2_lagxhr.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (sus2)',
      answers: [0, 0, 4, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284481/guitarExercises/sus2/si_sus2_ah2eqr.png',
      guitarCapo: 2,
    },
  ];
  const sevenSusFour = [
    {
      name: 'Do (7sus4)',
      answers: [0, 6, 0, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/do__7sus4_jmg03i.png',
      guitarCapo: 3,
    },
    {
      name: 'Do# (7sus4)',
      answers: [0, 6, 0, 5, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/do_7sus4_hkbrct.png',
      guitarCapo: 4,
    },
    {
      name: 'Re (7sus4)',
      answers: [3, 1, 2, 0, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/re_7sus4_jxwhld.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7sus4)',
      answers: [4, 2, 3, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/re__7sus4_vrnwmc.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7sus4)',
      answers: [0, 0, 2, 0, 2, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/mi_7sus4_apb3i8.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7sus4)',
      answers: [0, 0, 3, 0, 3, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/fa_7sus4_gobuog.png',
      guitarCapo: 1,
    },
    {
      name: 'Fa# (7sus4)',
      answers: [0, 0, 4, 0, 4, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/fa__7sus4_huip5g.png',
      guitarCapo: 2,
    },
    {
      name: 'Sol (7sus4)',
      answers: [0, 0, 5, 0, 5, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/sol_7sus4_x4onb8.png',
      guitarCapo: 3,
    },
    {
      name: 'Sol# (7sus4)',
      answers: [0, 0, 6, 0, 6, 0],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/sol__7sus4_mkwcyl.png',
      guitarCapo: 4,
    },
    {
      name: 'La (7sus4)',
      answers: [0, 3, 0, 2, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/la_7sus4_cknde0.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7sus4)',
      answers: [0, 4, 0, 3, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/la__7sus4_ce9sbl.png',
      guitarCapo: 1,
    },
    {
      name: 'Si (7sus4)',
      answers: [0, 5, 0, 4, 0, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284475/guitarExercises/7sus4/si_7sus4_jag8g7.png',
      guitarCapo: 2,
    },
  ];
  const sevenNnine = [
    {
      name: 'Do (7#9)',
      answers: [-1, 4, 3, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/do_7_9_mc5jcc.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (7#9)',
      answers: [-1, 5, 4, 3, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/do__7_9_wmeuti.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (7#9)',
      answers: [-1, 6, 5, 4, 5, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351369/guitarExercises/7_9/re_7_9_y67fwd.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (7#9)',
      answers: [2, 2, 0, 4, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351369/guitarExercises/7_9/re__7_9_dw667t.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (7#9)',
      answers: [3, 3, 1, 2, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351369/guitarExercises/7_9/mi_7_9_a10zbx.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (7#9)',
      answers: [4, 4, 2, 3, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/fa_7_9_h5aymv.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (7#9)',
      answers: [5, 5, 3, 4, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/fa__7_9_xnedsc.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (7#9)',
      answers: [6, 6, 4, 5, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351369/guitarExercises/7_9/sol__7_9_frihvh.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (7#9)',
      answers: [7, 7, 5, 6, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351370/guitarExercises/7_9/sol_7_9_lr2fuy.png',
      guitarCapo: 0,
    },
    {
      name: 'La (7#9)',
      answers: [8, 8, 6, 7, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/la_7_9_ma4srr.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (7#9)',
      answers: [-1, 2, 1, 0, 1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351368/guitarExercises/7_9/la__7_9_gydygj.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (7#9)',
      answers: [-1, 3, 2, 1, 2, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665351369/guitarExercises/7_9/si_7_9_f9yivp.png',
      guitarCapo: 0,
    },
  ];
  const nine = [
    {
      name: 'Do (9)',
      answers: [-1, 3, 3, 2, 3, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/do_9_lzjto1.png',
      guitarCapo: 0,
    },
    {
      name: 'Do# (9)',
      answers: [-1, 4, 4, 3, 4, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/do__9_nt7kug.png',
      guitarCapo: 0,
    },
    {
      name: 'Re (9)',
      answers: [-1, 5, 5, 4, 5, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/re_9_pvcvpu.png',
      guitarCapo: 0,
    },
    {
      name: 'Re# (9)',
      answers: [1, 2, 0, 1, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/re__9_vzzjst.png',
      guitarCapo: 0,
    },
    {
      name: 'Mi (9)',
      answers: [2, 3, 1, 2, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/mi_9_ufqavc.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa (9)',
      answers: [3, 4, 2, 3, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/fa_9_rm9ybw.png',
      guitarCapo: 0,
    },
    {
      name: 'Fa# (9)',
      answers: [4, 5, 3, 4, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/fa__9_dcctp8.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol (9)',
      answers: [5, 6, 4, 5, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/sol_9_drlahm.png',
      guitarCapo: 0,
    },
    {
      name: 'Sol# (9)',
      answers: [6, 7, 5, 6, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/sol__9_ozxrea.png',
      guitarCapo: 0,
    },
    {
      name: 'La (9)',
      answers: [7, 8, 6, 7, -1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/la_9_fexvdr.png',
      guitarCapo: 0,
    },
    {
      name: 'La# (9)',
      answers: [-1, 1, 1, 0, 1, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/la__9_lftaus.png',
      guitarCapo: 0,
    },
    {
      name: 'Si (9)',
      answers: [-1, 2, 2, 1, 2, -1],
      img: 'https://res.cloudinary.com/atusdedos/image/upload/v1665284476/guitarExercises/9/si_9_pvmc95.png',
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
