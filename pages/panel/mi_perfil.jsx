/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Menu from '../../components/menu';
import Header from '../../components/header';
import PreLoadContext from '../../context/preLoadContext';
import AuthContext from '../../context/authContext';
import NotificationsContext from '../../context/notificationsContext';
import Notification from '../../components/notifications';
import styles from '../../styles/Profile.module.scss';

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || null;
  if (token === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: { token } };
}

export default function Profile() {
  const { authData } = useContext(AuthContext);
  const { setPreLoad } = useContext(PreLoadContext);
  const { addNotification } = useContext(NotificationsContext);
  const [profile, setProfile] = useState(true);
  const router = useRouter();
  const [password, setPassword] = useState({
    oldpassword: '',
    newpassword: '',
    newpasswordconfirmation: '',
  });
  const changeInput = (event, field) => {
    const prevState = password;
    prevState[field] = event.target.value;
    setPassword(prevState);
  };

  const validateData = (e) => {
    e.preventDefault();
    if (password.oldpassword === '' || password.newpassword === '' || password.newpasswordconfirmation === '') {
      addNotification('information', '', 'Recuerde que los campos son obligatorios.', '5');
    } else if (password.newpassword !== password.newpasswordconfirmation) {
      addNotification('information', '', 'La confirmación de tu nueva contraseña no coincide con la nueva contraseña.', '5');
      setPreLoad(false);
    } else if (password.newpassword.length < 6 || password.newpasswordconfirmation.length < 6) {
      addNotification('information', '', 'La contraseña debe tener seis caracteres como mínimo.', '5');
      setPreLoad(false);
    } else {
      addNotification('information', '', 'bien.', '5');
    }
  };
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu profile />
      <div className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.profile__header}>
            <p>Mi perfil</p>
          </div>
          <div className={styles.profile__profile}>
            <div className={styles.profile__profile_avatar}>
              <Image alt="Usuario" src="/images/person.svg" width={140} height={140} />
              <div>
                <p className={styles.profile__profile_name}>{`${authData.user.name} ${authData.user.lastName}`}</p>
                <p><span>{authData.user.email}</span></p>
              </div>
            </div>
            <form className={styles.profile__profile_form} onSubmit={validateData}>
              <div className={styles.profile__controlsTop}>
                <button type="button" className={profile ? styles.profile__controlsTop_active : null} onClick={() => setProfile(true)}>Mi información</button>
                <button type="button" className={!profile ? styles.profile__controlsTop_active : null} onClick={() => setProfile(false)}>Mi contraseña</button>
              </div>
              {
                profile ? (
                  <>
                    <label htmlFor="name">Nombre(s)</label>
                    <input type="text" name="name" id="name" onChange={(ev) => changeInput(ev, 'name')} defaultValue={password.name} />
                    <label htmlFor="lastName">Apellido(s)</label>
                    <input type="text" name="lastName" id="lastName" onChange={(ev) => changeInput(ev, 'lastName')} defaultValue={password.lastName} />
                    {/* <label htmlFor="gender">Genero</label> */}
                    {/* <div className={styles.profile__profile_gender}>
                      <button type="button">Hombre</button>
                      <button type="button">Mujer</button>
                      <button type="button">Prefiero no decir</button>
                    </div> */}
                    <div className={styles.profile__controls}>
                      <button type="button" className={styles.profile__controls_cancel} onClick={() => router.push('/panel')}>
                        Cancelar
                      </button>
                      <button type="submit">Aceptar</button>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="oldpassword">Contraseña anterior</label>
                    <input type="password" name="oldpassword" id="oldpassword" onChange={(ev) => changeInput(ev, 'oldpassword')} defaultValue={password.oldpassword} />
                    <label htmlFor="newpassword">Nueva contraseña</label>
                    <input type="password" name="newpassword" id="newpassword" onChange={(ev) => changeInput(ev, 'newpassword')} defaultValue={password.newpassword} />
                    <label htmlFor="newpasswordconfirmation">Confirmar contraseña</label>
                    <input type="password" name="newpasswordconfirmation" id="newpasswordconfirmation" onChange={(ev) => changeInput(ev, 'newpasswordconfirmation')} defaultValue={password.newpasswordconfirmation} />
                    <div className={styles.profile__controls}>
                      <button type="button" className={styles.profile__controls_cancel} onClick={() => router.push('/panel')}>
                        Cancelar
                      </button>
                      <button type="submit">Aceptar</button>
                    </div>
                  </>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}