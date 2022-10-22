/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { removeCookies } from '../pages/_app';
import AuthContext from '../context/authContext';
import styles from '../styles/Header.module.scss';

export default function Menu({
  courses, profile, calendar, music, fiddle, flute, guitar, ukelele, saxo, notes, memory, sheetMusic, metronome
}) {
  const router = useRouter();
  const [menuMovil, setMenuMovil] = useState(false);
  const { resetAuthData, authData } = useContext(AuthContext);

  const logout = () => {
    resetAuthData();
    removeCookies('token');
    router.push('/');
  };
  // useEffect(() => {
  //   // Fetch all the details element.
  //   const details = document.querySelectorAll('details');
  //   // Add the onclick listeners.
  //   details.forEach((targetDetail) => {
  //     targetDetail.addEventListener('click', () => {
  //       // Close all the details that are not targetDetail.
  //       details.forEach((detail) => {
  //         if (detail !== targetDetail) {
  //           detail.removeAttribute('open');
  //         }
  //       });
  //     });
  //   });
  // }, []);

  function links() {
    return (
      <div className={styles.menu__links}>
        <Link href="/panel">
          <a className={courses ? styles.menu__links_active : null}>Inicio</a>
        </Link>
        <Link href="/panel/teoria_musical">
          <a className={music ? styles.menu__links_active : null}>Teoría musical</a>
        </Link>
        <details className={styles.menu__subLinks}>
          <summary>Instrumentos</summary>
          <div className={styles.menu__subLinkData}>
            <Link href="/panel/violin">
              <a className={fiddle ? styles.menu__links_active : null}>Violín</a>
            </Link>
            <Link href="/panel/flauta_transversal">
              <a className={flute ? styles.menu__links_active : null}>Flauta transversal</a>
            </Link>
            <Link href="/panel/guitarra">
              <a className={guitar ? styles.menu__links_active : null}>Guitarra</a>
            </Link>
            <Link href="/panel/ukelele">
              <a className={ukelele ? styles.menu__links_active : null}>Ukelele</a>
            </Link>
            <Link href="/panel/saxofon_alto">
              <a className={saxo ? styles.menu__links_active : null}>Saxofón alto</a>
            </Link>
          </div>
        </details>
        <details className={styles.menu__subLinks}>
          <summary>Oído perfecto</summary>
          <div className={styles.menu__subLinkData}>
            <Link href="/panel/identificar_notas">
              <a className={notes ? styles.menu__links_active : null}>Identificar notas</a>
            </Link>
            <Link href="/panel/memorama">
              <a className={memory ? styles.menu__links_active : null}>Memorama</a>
            </Link>
          </div>
        </details>
        <details className={styles.menu__subLinks}>
          <summary>Recursos</summary>
          <div className={styles.menu__subLinkData}>
            <Link href="/panel/partituras">
              <a className={sheetMusic ? styles.menu__links_active : null}>Partituras</a>
            </Link>
            <Link href="/panel/metronomo">
              <a className={metronome ? styles.menu__links_active : null}>Metrónomo</a>
            </Link>
          </div>
        </details>
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
            <p>{`${authData.user.name} ${authData.user.lastName}`}</p>
            <p><span>{authData.user.email}</span></p>
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
  music: PropTypes.bool,
  fiddle: PropTypes.bool,
  flute: PropTypes.bool,
  guitar: PropTypes.bool,
  ukelele: PropTypes.bool,
  saxo: PropTypes.bool,
  notes: PropTypes.bool,
  memory: PropTypes.bool,
  sheetMusic: PropTypes.bool,
  metronome: PropTypes.bool,
};
Menu.defaultProps = {
  courses: false,
  profile: false,
  calendar: false,
  music: false,
  fiddle: false,
  flute: false,
  guitar: false,
  ukelele: false,
  saxo: false,
  notes: false,
  memory: false,
  sheetMusic: false,
  metronome: false,
};
