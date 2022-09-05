/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import Header from '../components/header';
import Notification from '../components/notifications';
import NotificationsContext from '../context/notificationsContext';
import PreLoadContext from '../context/preLoadContext';
import styles from '../styles/Home.module.scss';

export default function RecoverAccount() {
  const [email, setEmail] = useState('');
  const { addNotification } = useContext(NotificationsContext);
  const { setPreLoad } = useContext(PreLoadContext);
  const recoverAccount = (e) => {
    e.preventDefault();
    if (email === '') {
      addNotification('information', '', 'Recuerde que todos los campos son obligatorios.', '7');
    } else if (!(/^(([^<>()[\]/.,;:\s@/"]+(\.[^<>()[\]/.,;:\s@/"]+)*)|('.+'))@(([^<>()[\]/.,;:\s@/"]+\.)+[^<>()[\]/.,;:\s/"]{2,})$/i.test(email))) {
      addNotification('warning', '', 'Ingrese un correo válido.', '7');
    } else {
      setPreLoad(true);
      addNotification('confirmation', '', ' Te hemos enviado un correo electronico para la recuperacion de tu contraseña.', '10');
      setPreLoad(false);
    }
  };
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.main}>
        <div className={styles.login}>
          <form onSubmit={recoverAccount}>
            <p className={styles.login__title}>Restablecer contraseña</p>
            <label htmlFor="email">Correo electrónico</label>
            <input id="mail" type="email" name="email" onChange={(ev) => setEmail(ev.target.value)} defaultValue={email} />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
