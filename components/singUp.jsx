/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { postSignupService } from '../services/loginServices';
import AuthContext from '../context/authContext';
import NotificationsContext from '../context/notificationsContext';
import PreLoadContext from '../context/preLoadContext';
import styles from '../styles/Home.module.scss';

export default function SingUp() {
  const router = useRouter();
  const { setAuthData } = useContext(AuthContext);
  const { addNotification, setNotifications } = useContext(NotificationsContext);
  const { setPreLoad } = useContext(PreLoadContext);

  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const years = [];
  const year = new Date().getFullYear();
  for (let i = year - 18, j = 0; i > year - 80; i -= 1, j += 1) { years[j] = i; }
  const days = [];
  for (let i = 1; i < 32; i += 1) { days[i] = i; }
  const [user, setUser] = useState({
    username: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
  });

  const createCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/; SameSite=None; Secure`;
  };

  const changeInput = (event, field) => {
    const prevState = user;
    prevState[field] = event.target.value;
    setUser(prevState);
  };

  const validateForm = (e) => {
    e.preventDefault();
    setNotifications([]);
    if (user.email === '' || user.password === '' || user.username === '' || user.passwordConfirmation === '') {
      addNotification('information', '', 'Recuerde que todos los campos son obligatorios.', '7');
    } else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(user.email))) {
      addNotification('warning', '', 'Ingrese un correo válido.', '7');
    } else if (user.password !== user.passwordConfirmation) {
      addNotification('warning', '', 'La contraseña y su confirmación no coinciden.', '7');
    } else {
      setPreLoad(true);

      postSignupService(user)
        .then((response) => {
          if (response.status === 200 || response.status === 400) {
            return response;
          }
          throw new Error(response);
        })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === 'The user already exists') {
            addNotification('warning', '', 'Usuario ya existe', '5');
            setPreLoad(false);
          } else if (result.message === 'The email already exists') {
            addNotification('warning', '', 'Email ya existe', '5');
            setPreLoad(false);
          } else {
            sessionStorage.setItem('auth', JSON.stringify(result));
            setAuthData(result);
            createCookie('token', result.token);
            addNotification('confirmation', '', '¡Bienvenido!', '5');
            router.push('./panel');
            setPreLoad(false);
          }
        })
        .catch(() => {
          setNotifications([{ type: 'error', title: '', text: 'Hubo un error al crear sesión.' }]);
          setPreLoad(false);
        });
    }
  };
  return (
    <form className={styles.form} onSubmit={validateForm}>
      <p className={styles.form__title}>Crear Cuenta</p>
      <div className={styles.form__input50}>
        <label htmlFor="name">Nombre(s)</label>
        <input name="name" id="name" type="text" onChange={(ev) => changeInput(ev, 'name')} defaultValue={user.name} autoComplete="off" />
      </div>
      <div className={styles.form__input50}>
        <label htmlFor="lastName">Apellido(s)</label>
        <input id="lastName" type="text" onChange={(ev) => changeInput(ev, 'lastName')} defaultValue={user.lastName} autoComplete="off" />
      </div>
      <div className={styles.form__input50}>
        <label htmlFor="username">Usuario</label>
        <input name="username" id="username" type="text" onChange={(ev) => changeInput(ev, 'username')} defaultValue={user.name} autoComplete="off" />
      </div>
      <label htmlFor="email">Correo</label>
      <input id="email" type="mail" onChange={(ev) => changeInput(ev, 'email')} defaultValue={user.email} autoComplete="off" />
      <p className={styles.form__date}>Fecha de nacimiento</p>
      <div className={styles.form__date_day}>
        <label htmlFor="day">Día</label>
        <select id="day" type="number" list="day" onChange={(ev) => changeInput(ev, 'birthDay')} defaultValue={user.birthDay}>
          <option value="" disabled> </option>
          {days.map((day, index) => {
            const keyIndex = index + 1;
            return (<option key={keyIndex} value={(`0${day}`).slice(-2)}>{day}</option>);
          })}
        </select>
      </div>
      <div className={styles.form__date_month}>
        <label htmlFor="month">Mes</label>
        <select id="month" list="month" onChange={(ev) => changeInput(ev, 'birthMonth')} defaultValue={user.birthMonth}>
          <option value="" disabled> </option>
          {months.map((month, index) => {
            const keyIndex = index + 1;
            return (<option key={keyIndex} value={(`0${keyIndex}`).slice(-2)}>{month}</option>);
          })}
        </select>
      </div>
      <div className={styles.form__date_year}>
        <label htmlFor="year">Año</label>
        <select id="year" list="year" onChange={(ev) => changeInput(ev, 'birthYear')} defaultValue={user.birthYear}>
          <option value="" disabled> </option>
          {years.map((y, index) => {
            const keyIndex = index + 1;
            return (<option key={keyIndex} value={`${y}`}>{y}</option>);
          })}
        </select>
      </div>
      <div className={styles.form__input50}>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" onChange={(ev) => changeInput(ev, 'password')} defaultValue={user.password} />
      </div>
      <div className={styles.form__input50}>
        <label htmlFor="passwordConfirmation">Confirmar Contraseña</label>
        <input id="passwordConfirmation" type="password" onChange={(ev) => changeInput(ev, 'passwordConfirmation')} defaultValue={user.passwordConfirmation} />
      </div>
      <div className={styles.form__submit}>
        <button type="submit">Crear Cuenta</button>
      </div>
    </form>

  );
}
