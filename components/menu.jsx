/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from '../styles/Menu.module.scss';

export default function Menu({
  courses, profile, calendar, metronome
}) {
  const router = useRouter();
  const [menuMovil, setMenuMovil] = useState(false);
  const logout = () => {
    router.push('/');
  };

  function links() {
    return (
      <div className={styles.menu__links}>
        <Link href="/panel">
          <a className={courses ? styles.menu__links_active : null}>Para aprender</a>
        </Link>
        <Link href="/panel/metronomo">
          <a className={metronome ? styles.menu__links_active : null}>Metronomo</a>
        </Link>
        <Link href="/panel/agenda">
          <a className={calendar ? styles.menu__links_active : null}>Agenda</a>
        </Link>
        <Link href="/panel/mi_perfil">
          <a className={profile ? styles.menu__links_active : null}>Mi perfil</a>
        </Link>
      </div>
    );
  }

  function logoutR() {
    return (
      <div className={styles.menu__logout}>
        <button type="button" onClick={logout}>Cerrar sesión</button>
      </div>
    );
  }
  return (
    <>
      <div className={styles.menu}>
        {links()}
        {logoutR()}
      </div>
      {menuMovil ? (
        <button type="button" className={styles.menuMovil__close} onClick={() => setMenuMovil(false)}>
          <Image src="/images/x.svg" alt="x" width={12} height={12} />
        </button>
      ) : (
        <button className={styles.menuMovil__burger} type="button" onClick={() => setMenuMovil(true)}>
          <Image src="/images/burger.svg" alt="burger" width={14} height={14} />
        </button>
      )}
      <ReactModal
        isOpen={menuMovil}
        ariaHideApp={false}
        onRequestClose={() => setMenuMovil(false)}
        className={styles.menuMovil}
        style={{ overlay: { backgroundColor: 'rgba(0,0,0, 0.50)', zIndex: '4' } }}
      >
        <div className={styles.menuMovil__container}>
          <div>
            <p>Hector Guillermo Angeles Macias</p>
            <p><span>memoangeles180@gmail.com</span></p>
          </div>
          {links()}
          {logoutR()}
        </div>
      </ReactModal>
    </>
  );
}
Menu.propTypes = {
  profile: PropTypes.bool,
  calendar: PropTypes.bool,
  courses: PropTypes.bool,
  metronome: PropTypes.bool,

};
Menu.defaultProps = {
  courses: false,
  profile: false,
  calendar: false,
  metronome: false,
};
