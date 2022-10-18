/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Notification from '../../components/notifications';
import NotificationsContext from '../../context/notificationsContext';
import PreLoadContext from '../../context/preLoadContext';
import styles from '../../styles/Home.module.scss';

export default function RecoverAccountPass() {
  const router = useRouter();
  const { token } = router.query;
  console.log(token);
  const { addNotification } = useContext(NotificationsContext);
  const { setPreLoad } = useContext(PreLoadContext);
  const [password, setPassword] = useState({
    password: '',
    passwordConfirmation: '',
  });
  const changeInput = (event, field) => {
    const prevState = password;
    prevState[field] = event.target.value;
    setPassword(prevState);
  };
  const validateData = (e) => {
    e.preventDefault();
    if (password.password === '' || password.passwordConfirmation === '') {
      addNotification('information', '', 'Recuerde que los campos son obligatorios.', '5');
    } else if (password.password !== password.passwordConfirmation) {
      addNotification('information', '', 'La confirmación de tu nueva contraseña no coincide con la nueva contraseña.', '5');
      setPreLoad(false);
    } else if (password.password.length < 6 || password.passwordConfirmation.length < 6) {
      addNotification('information', '', 'La contraseña debe tener seis caracteres como mínimo.', '5');
      setPreLoad(false);
    } else {
      addNotification('confirmation', '', '¡Bienvenido!', '5');
    }
  };
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.main}>
        <div className={styles.login}>
          <form onSubmit={validateData}>
            <p className={styles.login__title}>Restablecer contraseña</p>
            <label htmlFor="password">Nueva contraseña</label>
            <input type="password" name="password" id="password" onChange={(ev) => changeInput(ev, 'password')} defaultValue={password.password} />
            <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
            <input type="password" name="passwordConfirmation" id="passwordConfirmation" onChange={(ev) => changeInput(ev, 'passwordConfirmation')} defaultValue={password.newpasswordConfirmation} />
            <button type="submit">Restablecer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
