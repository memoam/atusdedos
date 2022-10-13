/* eslint-disable linebreak-style */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Guitar, { getRenderFingerRelative } from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import styles from '../styles/Dashboard.module.scss';
// helpers
import GuitarExercises, { chords } from '../helpers/guitarExercises';

export default function GuitarAct() {
  // status
  const [modal, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  // guitar
  const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0]);
  const { play } = useSound({ fretting: strings, tuning: standard });
  // timer
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }
  const startTimer = (e) => {
    let { total, hours, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      setModal(false)
      setPlaying(true)
      clearInterval(Ref.current);
    }
  }
  const clearTimer = (e) => {
    setTimer('00:00:05'); // seconds representation
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => { // counter
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5); // seconds
    return deadline;
  }
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }
  // exercise
  const [answersModal, setAnswersModal] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [exercise, setExercise] = useState({});
  const [typeGame, setTypeGame] = useState('major');
  const [guitarCapo, setGuitarCapo] = useState(0);

  const start = () => {
    const max = typeGame === 'major' ? 12
      : typeGame === 'minor' ? 12
        : typeGame === 'fifth' ? 12
          : typeGame === 'seventh' ? 12
            : typeGame === 'majSeven' ? 12
              : typeGame === 'mSeven' ? 12
                : typeGame === 'susFour' ? 12
                  : typeGame === 'addNine' ? 12
                    : typeGame === 'susTwo' ? 12
                      : typeGame === 'sevenSusFour' ? 12
                        : typeGame === 'sevenNnine' ? 12
                          : typeGame === 'nine' ? 12
                            : 144;
    const randomId = Math.floor(Math.random() * max);
    setExercise(GuitarExercises(typeGame, randomId));
    setModal(true);
    onClickReset();
  }
  // answers
  const isItOk = () => {
    setAnswersModal(true);
    console.log(JSON.stringify(strings));
    setIsRight((JSON.stringify(exercise.answers) === JSON.stringify(strings)) && guitarCapo === exercise.guitarCapo);
  }
  const nextExercise = () => {
    setAnswersModal(false);
    setStrings([0, 0, 0, 0, 0, 0]);
    setGuitarCapo(0);
    start();
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setStrings([0, 0, 0, 0, 0, 0]);
    setGuitarCapo(0);
  }
  return (
    <>
      {!playing ? (
        <div className={styles.courseGuitar__exercise}>
          <div className={styles.courseGuitar__difficulty}>
            <p>Elije el acorde que deses practicar</p>
            {chords.map((chord, index) => {
              const keyIndex = index + 1;
              return (<button key={keyIndex} type="button" className={typeGame === chord.value ? styles.courseGuitar__difficulty_active : null} onClick={() => setTypeGame(chord.value)}>{chord.name}</button>);
            })}
          </div>
          <div className={styles.courseGuitar__actFalse}>
            <div>
              <p>Las actividades te ayudaran mejorar tus Habilidades</p>
              <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
              <div className={styles.courseGuitar__actFalse_atc}>
                <p>Visualisa la imagen y trata de compreneder la nota que representa</p>
                <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665284479/guitarExercises/major/do__major_y8mzer.png" alt="play" width={550} height={250} />
                <span className={styles.courseGuitar__actFalse_note}>Do# (major)</span>
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
          <p className={styles.courseGuitar__exercise_exercise}>Identifica:<span>{exercise.name}</span></p>
          <div className={styles.courseGuitar__exercise}>
            <Guitar
              renderFinger={getRenderFingerRelative(standard)}
              frets={{ from: 0, amount: 22 }}
              playOnHover
              strings={strings}
              onChange={setStrings}
              onPlay={play}
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
      )}
      <ReactModal
        isOpen={modal}
        className={styles.modal2}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <div className={styles.modal2__atc}>
          <p className={styles.modal2__time}>{timer}</p>
          <Image unoptimized loader={({ src }) => src} src={exercise.img} alt="play" width={550} height={250} />
          <span className={styles.modal2__note}>{exercise.name}</span>
          <p className={styles.modal2__time}>Visualiza la reprecentacion de la nota</p>
        </div>
      </ReactModal>
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
            : (<button type="button" onClick={() => { setAnswersModal(false), setModal(true); onClickReset(); }}>Repetir</button>)}
        </div>
      </ReactModal>
    </>
  );
}
