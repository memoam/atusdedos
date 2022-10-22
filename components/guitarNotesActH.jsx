/* eslint-disable linebreak-style */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import ReactAudioPlayer from 'react-audio-player';
import Guitar, { getRenderFingerRelative } from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import styles from '../styles/Dashboard.module.scss';
// helpers
import { guitarNotes } from '../helpers/guitarExercises';

export default function GuitarNotesActH() {
  // status
  const [playing, setPlaying] = useState(false);
  // guitar
  const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0]);
  const { play } = useSound({ fretting: strings, tuning: standard });
  // exercise
  const [answersModal, setAnswersModal] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [exercise, setExercise] = useState({});
  const [typeGame, setTypeGame] = useState('major');
  const [guitarCapo, setGuitarCapo] = useState(0);
  const [cont, setCont] = useState(0);
  const [help, setHelp] = useState(false);
  const [details, setDetails] = useState(false)
  const start = () => {
    const randomId = Math.floor(Math.random() * 14);
    setExercise(guitarNotes[randomId]);
    setPlaying(true)
  }
  // answers
  const isItOk = () => {
    if ((JSON.stringify(exercise.answers) === JSON.stringify(strings)) && guitarCapo === exercise.guitarCapo)
      setCont(0);
    else
      setCont(cont + 1)
    setIsRight((JSON.stringify(exercise.answers) === JSON.stringify(strings)) && guitarCapo === exercise.guitarCapo);
    setAnswersModal(true);
  }
  const nextExercise = () => {
    setAnswersModal(false);
    setStrings([0, 0, 0, 0, 0, 0]);
    setGuitarCapo(0);
    setCont(0);
    setHelp(false)
    start();
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setStrings([0, 0, 0, 0, 0, 0]);
    setGuitarCapo(0);
    setCont(0);
    setHelp(false);
  }
  return (
    <>
      {!playing ? (
        <div className={styles.courseGuitar__exercise}>
          <div className={styles.courseGuitar__actFalse}>
            <div>
              <p>Las actividades te ayudarán a mejorar tus habilidades.</p>
              <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
              <div className={styles.courseGuitar__actFalse_atc}>
                <p>Visualiza la imagen y trata de comprender la nota que representa.</p>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666375403/guitarExercises/gNotesH_onuykl.png" alt="play" width={550} height={250} />
              </div>
            </div>
            <button className={styles.courseGuitar__exercise_play} type="button" onClick={() => start()}>
              <Image src="/images/play.svg" alt="play" width={150} height={150} />
              Iniciar
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.courseGuitar__exercise}>
          <div className={styles.notes__details}>
            {!details ? (<button type="button" onClick={() => setDetails(true)}>¿Como jugar?</button>)
              : (<button type="button" onClick={() => setDetails(false)}>Ocultar</button>)}
            {details && (
              <p className={styles.notes__details_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas ex quasi, consequatur voluptate officiis. Impedit sequi porro delectus id non quidem saepe dolore sint atque, dignissimos, expedita voluptatem libero.
              </p>
            )}
          </div>

          {(cont >= 3 && !help) && (
            <button className={styles.courseGuitar__exercise_help} type="button" onClick={() => setHelp(true)}>
              <Image src="/images/help.svg" alt="play" width={20} height={20} />
              <span>Ayuda</span>
            </button>
          )}
          {help && (<p className={styles.courseGuitar__exercise_exercise}>Identifica: <span>{exercise.name}</span></p>)}
          <div className={styles.courseGuitar__exercise_note}>
            <ReactAudioPlayer src={exercise.audio} controls />
          </div>
          <div className={styles.courseGuitar__exercise}>
            <Guitar
              renderFinger={getRenderFingerRelative(standard)}
              frets={{ from: 0, amount: 22 }}
              playOnHover
              strings={strings}
              onChange={setStrings}
            // onPlay={play}
            />
            {guitarCapo !== 0 && (<div className={styles.courseGuitar__exercise_guitarCapo} style={{ left: `${guitarCapo * 10.1}em` }} />)}
          </div>
          <div className={styles.courseGuitar__capo}>
            <button type="button" className={guitarCapo === 0 ? styles.courseGuitar__capo_active : null} onClick={() => setGuitarCapo(0)}>Sin cejilla</button>
            {[1, 2, 3, 4].map((capo, index) => {
              const keyIndex = index + 1;
              return (<button type="button" key={keyIndex} className={guitarCapo === capo ? styles.courseGuitar__capo_active : null} onClick={() => setGuitarCapo(capo)}>{`Cejilla ${capo}`}</button>);
            })}
          </div>
          <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => isItOk()}>Responder</button>
        </div>
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
    </>
  );
}