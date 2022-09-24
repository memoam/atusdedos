/* eslint-disable linebreak-style */
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Guitar, { getRenderFingerSpn } from 'react-guitar'
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import styles from '../styles/Dashboard.module.scss';
// helpers
import GuitarExercises from '../helpers/guitarExercises';

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
  const [typeGame, setTypeGame] = useState('notes');

  useEffect(() => {
    // answers

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const start = () => {
    const max = typeGame === 'notes' ? 3
      : typeGame === 'chords' ? 3
        : 6;
    const randomId = Math.floor(Math.random() * max);
    console.log(typeGame, randomId);
    setExercise(GuitarExercises(typeGame, randomId));
    setModal(true);
    onClickReset();
  }
  const isItOk = () => {
    setAnswersModal(true);
    setIsRight(JSON.stringify(exercise.answers) === JSON.stringify(strings));
  }
  const nextExercise = () => {
    setAnswersModal(false);
    setStrings([0, 0, 0, 0, 0, 0]);
    start();
  }
  return (
    <>
      {
        !playing ? (
          <div className={styles.courseGuitar__exercise}>
            <div className={styles.courseGuitar__difficulty}>
              <p>Tipo de juego</p>
              <button type="button" className={typeGame === 'notes' ? styles.courseGuitar__difficulty_active : null} onClick={() => setTypeGame('notes')}>Notas</button>
              <button type="button" className={typeGame === 'chords' ? styles.courseGuitar__difficulty_active : null} onClick={() => setTypeGame('chords')}>Acordes</button>
              <button type="button" className={typeGame === 'all' ? styles.courseGuitar__difficulty_active : null} onClick={() => setTypeGame('all')}>Todo</button>
            </div>
            <div className={styles.courseGuitar__actFalse}>
              <div>
                <p>Las actividades te ayudaran mejorar tus Habilidades</p>
                <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
                <div className={styles.courseGuitar__actFalse_atc}>
                  <p>Visualisa la imagen y trata de compreneder la nota que representa</p>
                  <Image src="/images/g_a1.png" alt="play" width={550} height={250} />
                  <span className={styles.courseGuitar__actFalse_note}>Do</span>
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
                renderFinger={getRenderFingerSpn(standard)}
                frets={{ from: 0, amount: 22 }}
                playOnHover
                strings={strings}
                onChange={setStrings}
                onPlay={play}
              />
            </div>
            <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => isItOk()}>Responder</button>
          </div>
        )
      }
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
          <Image src={exercise.img} alt="play" width={550} height={250} />
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
          <button className={styles.modal__controls_cancel} type="button" onClick={() => { setAnswersModal(false), setPlaying(false) }}>Terminar</button>
          {isRight ? (
            <button type="button" onClick={() => nextExercise()}>Siguiente</button>
          ) : (
            <button type="button" onClick={() => { setAnswersModal(false), setModal(true); onClickReset(); }}>Repetir</button>
          )}
        </div>
      </ReactModal>
    </>
  );
}

