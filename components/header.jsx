/* eslint-disable linebreak-style */
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" passHref>
          <p className={styles.header__container_logo}>
            AtusDedos
          </p>
        </Link>
        {/* <p className={styles.header__container_title}>Termy Panel</p> */}
        {home ?
          <>
            {
              authData.token === null ? (
                <div className={styles.header__container_log}>
                  <button type="button" onClick={() => setModal({ open: true, type: 'SingIn' })}>Iniciar secion</button>
                  <button type="button" onClick={() => setModal({ open: true, type: 'SingUp' })}>Crear cuenta</button>
                </div>
              ) : (
                <div className={styles.header__container_log}>
                  <button type="button" onClick={() => router.push('./panel')}>Panel</button>
                </div>
              )
            }
          </>
          : (
            <div className={styles.header__container_user}>
              <p className={styles.header__container_name}>{`${authData.user.name} ${authData.user.lastName}`}</p>
              <p><span>{authData.user.email}</span></p>
            </div>
          )}
      </div>
      <PreLoad />
      <ReactModal
        isOpen={modal.open}
        onRequestClose={() => setModal({ open: false, type: '' })}
        className={modal.type === 'SingIn' ? styles.modal2 : styles.modal}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.removeAttribute('style'); }}
        ariaHideApp={false}
        style={{ overlay: { backgroundColor: 'rgba(34,34,34, 0.9)', zIndex: '3' } }}
      >
        <button onClick={() => setModal({ open: false, type: '' })} className={styles.modal__close} type="button">
          &times;
        </button>
        {modal.type === 'SingIn' ? (<SingIn />) : (<SingUp />)}
      </ReactModal>
    </div>
  );
}
Header.propTypes = {
  home: PropTypes.bool,
};
Header.defaultProps = {
  home: false,
};
