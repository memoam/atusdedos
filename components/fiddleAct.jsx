/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';
import ReactModal from 'react-modal';
import styles from '../styles/Dashboard.module.scss';
import { fiddleNotes } from '../helpers/fiddleNotes';

export default function FiddleAtc() {
  const [playing, setPlaying] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [notes, setNotes] = useState('');
  const [note, setNote] = useState({});
  const [answersModal, setAnswersModal] = useState(false);
  const [details, setDetails] = useState(false)
  
  const updateNote = (value) => {
    setNotes(value);
  }
  const start = () => {
    const randomId = Math.floor(Math.random() * 16);
    setNote(fiddleNotes[randomId]);
    setPlaying(true);
  }
  const isItOk = () => {
    console.log(note.value, notes);
    setAnswersModal(true);
    setIsRight(note.value === notes);
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setNote({});
    setNotes('');
  }
  const nextExercise = () => {
    setAnswersModal(false);
    setNotes('');
    start();
  }
  return (
    <div className={styles.dashboard}>
      {
        !playing ? (
          <div className={styles.courseGuitar__actFalse}>
            <div>
              <p>Las actividades te ayudarán a mejorar tus habilidades.</p>
              <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
              <div className={styles.courseGuitar__actFalse_atc}>
                <p>Visualiza la imagen y trata de comprender la nota que representa.</p>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666411946/Violin/violinAct_dvbjkz.png" alt="play" width={550} height={250} />
              </div>
            </div>
            <button className={styles.courseGuitar__exercise_play} type="button" onClick={() => start()}>
              <Image src="/images/play.svg" alt="play" width={150} height={150} />
              Iniciar
            </button>
          </div>
        ) : (
          <>

            <div className={styles.notes__details}>
              {!details ? (<button type="button" onClick={() => setDetails(true)}>¿Como jugar?</button>)
                : (<button type="button" onClick={() => setDetails(false)}>Ocultar</button>)}
              {details && (
                <p className={styles.notes__details_description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas ex quasi, consequatur voluptate officiis. Impedit sequi porro delectus id non quidem saepe dolore sint atque, dignissimos, expedita voluptatem libero.
                </p>
              )}
            </div>
            <div className={styles.fiddleNoteAct}>
              <div className={styles.fiddleNote__imgAct}>
                <Image  unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666412816/Violin/violinFondo_xhy7y9.png" alt="violinNotes" width={334} height={480} />
                {fiddleNotes.map((value, index) => {
                  const keyIndex = index + 1;
                  return (
                    <button type="button" className={notes === value.value ? styles.fiddleNote__notes_active : styles.fiddleNote__notes_inActive} onClick={() => updateNote(value.value)} key={keyIndex} />
                  );
                })}
              </div>
              <div className={styles.fiddleNote__notesAct}>
                <p className={styles.fiddleNote__notes_title}>Analiza la nota dada y selecciónala en el diagrama.</p>
                <div className={styles.fiddleNote__notes_name}>
                  {/* <ReactAudioPlayer src={note.audio} controls /> */}
                  <p>Identifique: <span>{note.name}</span></p>
                </div>
                <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => isItOk()}>Responder</button>
              </div>
            </div>
          </>
        )
      }

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

