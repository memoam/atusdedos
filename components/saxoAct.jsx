/* eslint-disable linebreak-style */
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import SaxoExercises, { Validate } from '../helpers/saxoNotes';
import styles from '../styles/Dashboard.module.scss';

export default function SaxoAtc() {
  // status
  const [modal, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  const initAsw = {
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false,
    a10: false, a11: false, a12: false, a13: false, a14: false, a15: false, a16: false, a17: false,
    a18: false, a19: false, a20: false, a21: false, a22: false, a23: false, a24: false,
  }
  const saxoInit = [...Array(23).keys()].map((data, i) => ({ name: `a${i + 2}`, click: false }))
  const [saxoData, setSaxoData] = useState(saxoInit);
  const [details, setDetails] = useState(false)
  const [asw, setAsw] = useState(initAsw);
  //
  const changeInput = (value, field, info, i) => {
    const prevState = asw;
    prevState[field] = value;
    const prevData = { ...info, click: value };
    const prevStateEdit = [
      ...saxoData.slice(0, i - 1),
      prevData,
      ...saxoData.slice(i, 23)
    ];
    setAsw(prevState);
    setSaxoData(prevStateEdit);
  };
  const [aux, setAux] = useState(false);
  const changeInputOne = (value) => {
    const prevState = asw;
    prevState.a1 = value;
    setAsw(prevState);
    setAux(value);
  };

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
    deadline.setSeconds(deadline.getSeconds() + 1); // seconds
    return deadline;
  }
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }
  // exercise
  const [answersModal, setAnswersModal] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const [exercise, setExercise] = useState({});
  let initRan = Math.floor(Math.random() * 7);
  const [numRan, setNumRan] = useState(initRan);

  const start = () => {
    setExercise(SaxoExercises(numRan));
    setModal(true);
    onClickReset();
  }
  // answers
  const isItOk = () => {
    setAnswersModal(true);
    console.log(asw, numRan);
    setIsRight(Validate(asw, numRan));// aqui responde 
  }
  const nextExercise = () => {
    const prevData = Math.floor(Math.random() * 7);
    setAsw(initAsw);
    setSaxoData(saxoInit)
    setAux(false)
    setAnswersModal(false);
    setNumRan(prevData);
    setExercise(SaxoExercises(prevData));
    setModal(true);
    onClickReset();
    // start();
  }
  const finalize = () => {
    setAnswersModal(false);
    setPlaying(false);
    setAsw(initAsw);
    setSaxoData(saxoInit)
    setAux(false)
  }
  return (
    <div className={styles.courseFlute}>
      {!playing ? (
        <div className={styles.courseGuitar__actFalse}>
          <div>
            <p>Las actividades te ayudarán a mejorar tus habilidades.</p>
            <p className={styles.courseGuitar__actFalse_example}>Ejemplo:</p>
            <div className={styles.courseGuitar__actFalse_atc}>
              <p>Visualiza la imagen y trata de comprender la nota que representa.</p>
              <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1666411589/saxofon/saxoNotes_ola8q0.png" alt="play" width={550} height={250} />
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
            <div className={styles.fiddleNote__imgSaxo}>
              <Image unoptimized loader={({ src }) => src} src="https://res.cloudinary.com/atusdedos/image/upload/v1665985278/saxofon/saxofon_pznin2.png" alt="saxo" width={210} height={500} />
              <button type="button" onClick={() => changeInputOne(!aux)}>
                <Image src={aux ? '/images/saxobtn1A.png' : '/images/saxobtn1.png'} alt="play" width={81} height={121} />
              </button>
              {saxoData.map((value, index) => {
                const keyIndex = index + 1;
                return (
                  <button type="button" key={keyIndex} className={value.click ? styles.fiddleNote__imgSaxo_act : null} onClick={() => changeInput(!value.click, value.name, value, keyIndex)} />
                );
              })}
            </div>
            {/*   */}
            <div className={styles.fiddleNote__notesAct}>
              <p className={styles.fiddleNote__notes_title}>Analiza la nota dada y selecciónala en el diagrama.</p>
              <div className={styles.fiddleNote__notes_name}>
                {/* <ReactAudioPlayer src={note.audio} controls /> */}
                <p>Identifique: <span>{exercise.name}</span></p>
              </div>
              <button type="button" className={styles.courseGuitar__exercise_answer} onClick={() => isItOk()}>Responder</button>
            </div>
          </div>
        </>
      )}
      <ReactModal
        isOpen={modal}
        className={styles.modal2}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <div className={styles.modal2__atc2}>
          <p className={styles.modal2__time2}>{timer}</p>
          <Image unoptimized loader={({ src }) => src} src={exercise.img} alt="play" width={187} height={304} />
          <span className={styles.modal2__note}>{exercise.name}</span>
          <p className={styles.modal2__time}>Visualiza la representación de la nota.</p>
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
    </div>
  );
}
