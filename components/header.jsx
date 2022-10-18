/* eslint-disable linebreak-style */
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Link from 'next/link';
import PreLoad from './preLoad';
import SingIn from './singIn';
import SingUp from './singUp';
import AuthContext from '../context/authContext';
import NotificationsContext from '../context/notificationsContext';
import styles from '../styles/Header.module.scss';

export default function Header({ home }) {
  const router = useRouter();
  const [menuMovil, setMenuMovil] = useState(false);
  const { authData } = useContext(AuthContext);
  const { notifications, setNotifications } = useContext(NotificationsContext);
  const [modal, setModal] = useState({ open: false, type: '' });
  useEffect(() => {
    // remove temporary notifications when header is rendered
    if (notifications.length > 0) {
      for (let i = 0; i < notifications.length; i += 1) {
        if (notifications[i].expires === 'render') {
          const removeNotifications = [
            ...notifications.slice(0, i),
            ...notifications.slice(i + 1, notifications.length)];
          setNotifications(removeNotifications);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = () => {
    if (authData.token === null) {
      return (
        <>
          <button type="button" onClick={() => { setModal({ open: true, type: 'SingIn' }); setMenuMovil(false) }}>Iniciar sesión</button>
          <button type="button" onClick={() => { setModal({ open: true, type: 'SingUp' }); setMenuMovil(false) }}>Crear cuenta</button>
        </>
      )
    }
    return (<button type="button" onClick={() => router.push('./panel')}>Seguir aprendiendo</button>)

  }
  const movil = () => {
    if (home) {
      if (menuMovil) {
        return (
          <button type="button" className={styles.menuMovil__close} onClick={() => setMenuMovil(false)}>
            <Image src="/images/x.svg" alt="x" width={12} height={12} />
          </button>
        )
      }
      return (
        (
          <button className={styles.menuMovil__burger} type="button" onClick={() => setMenuMovil(true)}>
            <Image src="/images/burger.svg" alt="burger" width={14} height={14} />
          </button>
        )
      )
    }
    return null
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/" passHref>
            <p className={styles.header__container_logo}>AtusDedos</p>
          </Link>
          {home ?
            (
              <div className={styles.header__container_log}>{data()}</div>
            ) : (
              <div className={styles.header__container_user}>
                <p className={styles.header__container_name}>{`${authData.user.name} ${authData.user.lastName}`}</p>
                <p><span>{authData.user.email}</span></p>
              </div>
            )}
        </div>
        <PreLoad />
      </div>

      {movil()}

      <ReactModal
        isOpen={menuMovil}
        ariaHideApp={false}
        onRequestClose={() => setMenuMovil(false)}
        className={styles.menuMovil}
        style={{ overlay: { backgroundColor: 'rgba(0,0,0, 0.50)', zIndex: '4' } }}
      >
        <div className={styles.menuMovil__container}>
          <Link href="/" passHref>
            <p className={styles.header__container_logo}>AtusDedos</p>
          </Link>
          <div className={styles.header__container_movil}>{data()}</div>
          <div className={styles.header__container_movil}>
            <Link href="/aviso_de_privacidad" passHref>Aviso de privacidad</Link>
            <Link href="/terminos_y_condiciones" passHref>Términos y Condiciones</Link>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={modal.open}
        onRequestClose={() => setModal({ open: false, type: '' })}
        className={modal.type === 'SingIn' ? styles.modal2 : styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '5' } }}
      >
        <button onClick={() => setModal({ open: false, type: '' })} className={styles.modal__close} type="button">
          &times;
        </button>
        {modal.type === 'SingIn' ? (<SingIn />) : (<SingUp />)}
      </ReactModal>
    </>
  );
}
Header.propTypes = {
  home: PropTypes.bool,
};
Header.defaultProps = {
  home: false,
};
