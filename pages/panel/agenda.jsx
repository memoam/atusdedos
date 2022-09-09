/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
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

export default function Calendar() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);

  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu calendar />
      <div className={styles.main}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locale="es"
            dayMaxEventRows
            editable
            eventClick={
              (info) => {
                console.log(info.event.title);
              }
            }
            events={[{ title: "hola", start: new Date() }]}
          />
        </div>
      </div>
    </div>
  );
}