/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import ReactModal from 'react-modal';
import styles from '../styles/Dashboard.module.scss';
import { guitarNotes } from '../helpers/guitarExercises';


export default function GuitarNotesAct() {
  const [playing, setPlaying] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [note, setNote] = useState({});
  const [option, setOption] = useState([])
  const [answers, setAnswer] = useState({});
  const [answersModal, setAnswersModal] = useState(false);

  const start = () => {
    const randomId = Math.floor(Math.random() * 7);
    let randomIdAsw = Math.floor(Math.random() * 7);
    let randomIdAswt = Math.floor(Math.random() * 7);

    if (randomId === randomIdAsw) {
      if (randomId === 7) randomIdAsw -= 1
      else randomIdAsw += 1
    }
    if (randomId === randomIdAswt) {
      if (randomId === 7) randomIdAswt -= 1
      else randomIdAswt += 1
    }
    if (randomIdAswt === randomIdAsw) {
      if (randomIdAsw === 7) randomIdAswt -= 1
      else randomIdAswt += 1
    }
    setNote(guitarNotes[randomId]);
    setOption([guitarNotes[randomIdAsw], guitarNotes[randomId], guitarNotes[randomIdAswt]].sort(function () { return Math.random() - 0.5 }));
    setPlaying(true);
  }
  const isItOk = () => {
    setAnswersModal(true);
    console.log(answers.name, note.name);
    setIsRight(answers === note.name);
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setNote({});
    setAnswer({});
  }
  const nextExercise = () => {
    setAnswersModal(false);
    setAnswer({});
    start();
  }
  return (
    <div className={styles.dashboard}>
      {!playing ? (
        <div className={styles.courseGuitar__actFalse}>
          <div>
            <p>Las actividades te ayudarán a mejorar tus habilidades.</p>
            <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
            <div className={styles.courseGuitar__actFalse_atc}>
              <p>Visualiza la imagen y trata de comprender la nota que representa.</p>
              <Image unoptimized loader={({ src }) => src} src="/images/guitarNoteActE.png" alt="play" width={550} height={250} />
            </div>
          </div>
          <button className={styles.courseGuitar__exercise_play} type="button" onClick={() => start()}>
            <Image src="/images/play.svg" alt="play" width={150} height={150} />
            Iniciar
          </button>
        </div>
      ) : (
        <div className={styles.noteAct}>
          <div className={styles.noteAct__opc2}>
            {option.map((value, index) => {
              const keyIndex = index + 1;
              return (
                <button type="button" onClick={() => setAnswer(value.name)} className={value.name === answers ? styles.noteAct__options_active : null} key={keyIndex}>
                  <Image unoptimized loader={({ src }) => src} src={value.img} alt="play" width={298} height={131} />
                  <p className={styles.noteAct__options_asw}>{value.name}</p>
                  <p className={styles.noteAct__options_opc}>{`${keyIndex})`}</p>
                </button>
              );
            })}
          </div>
          <div className={styles.noteAct__notesAct}>
            <div className={styles.noteAct__data}>
              <p className={styles.noteAct__notes_title}>Escucha, analiza y selecciona la nota que corresponde al audio.</p>
              <div className={styles.noteAct__notes_note}>
                <ReactAudioPlayer src={note.audio} controls />
              </div>
            </div>
            <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => isItOk()}>Responder</button>
          </div>
        </div>
      )}
      <ReactModal
        isOpen={answersModal}
        className={styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <p>{`Respuesta ${isRight ? 'correcta' : 'incorrecta'}`}</p>
        <Image src={isRight ? '/images/nice.svg' : '/images/fail.svg'} alt="play" width={150} height={150} />
        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_cancel} type="button" onClick={() => finalize()}>Terminar</button>
          {isRight ? (<button type="button" onClick={() => nextExercise()}>Siguiente</button>)
            : (<button type="button" onClick={() => setAnswersModal(false)}>Repetir</button>)}
        </div>
      </ReactModal>
    </div >
  );
}