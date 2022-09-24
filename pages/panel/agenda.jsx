/* eslint-disable linebreak-style */
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Calendar.module.scss';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';
import 'moment/locale/es-mx';
import ReactModal from 'react-modal';


export default function Calendar() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [event, setEvent] = useState();
  const [seeEvent, setSeeEvent] = useState(false);
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    setEvents([{ title: "hola", start: new Date() }])
  };
  /*   useEffect(() => {
      getEvents();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); */

  // update events----------------------------------------------------------------------------------
  const updateEvent = (e) => {
    e.preventDefault();
  };
  // create events----------------------------------------------------------------------------------
  const createEvent = (e) => {
    e.preventDefault();
  };
  // reset values----------------------------------------------------------------------------------
  const reset = () => {
    setModal(false);
    setDateEnd(null);
    setDateStart(null);
    setTitle('');
    getEvents();
    setEvent();
    setSeeEvent(false);
  };
  const onEvent = (info) => {
    setEvent(info.event);
    setModal(true);
    setSeeEvent(true);
    setDateEnd(info.event.end);
    setDateStart(info.event.start);
    setTitle(info.event.title);
  };

  return (
    <div className={styles.container}>
      <Notification />
      <Header />
      <button type="button" className={styles.add} onClick={() => setModal(true)}>
        <Image src="/images/add.svg" alt="add" width={24} height={24} />
      </button>
      <Menu calendar />
      <div className={styles.main}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locale="es"
            dayMaxEventRows
            editable
            eventClick={(info) => onEvent(info)}
            events={events}
          />
        </div>
      </div>
      <ReactModal
        isOpen={modal}
        onRequestClose={() => reset()}
        className={styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <button onClick={() => reset()} className={styles.modal__close} type="button">
          &times;
        </button>
        {
          seeEvent ? (
            <div>
              <p>{`Titulo: ${event.title}`}</p>
              <p>{`Inicio: ${moment(event.start).tz(moment.tz.guess()).format('LLLL')}`}</p>
              <p>{`Fin: ${moment(event.end).tz(moment.tz.guess()).format('LLLL')}`}</p>
              <div className={styles.modal__controls}>
                <button className={styles.modal__controls_edit} type="button" onClick={() => setSeeEvent(false)}>
                  <Image src="/images/edit.svg" alt="edit" width={24} height={24} />
                </button>
                <button className={styles.modal__controls_delete} type="button" onClick={() => deleteEvents()}>
                  <Image src="/images/delete.svg" alt="delete" width={24} height={24} />
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={event !== undefined ? updateEvent : createEvent}>
              <p>Datos del evento</p>
              <label htmlFor="title">Titulo</label>
              <input type="text" name="title" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
              <div className={styles.modal__dates}>
                <div className={styles.modal__dates_date}>
                  <label htmlFor="startDate">Inicio</label>
                  <DateTimePicker onChange={setDateStart} value={dateStart} />
                </div>
                <div className={styles.modal__dates_date}>
                  <label htmlFor="endDate">Fin</label>
                  <DateTimePicker onChange={setDateEnd} value={dateEnd} />
                </div>
              </div>
              <button className={styles.modal__submit} type="submit">Guardar</button>
            </form>
          )
        }
      </ReactModal>
    </div>
  );

}