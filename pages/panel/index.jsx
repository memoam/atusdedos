/* eslint-disable linebreak-style */
import React, {
  useEffect, useContext, useState,
} from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import Cards from '../../components/cards';
import styles from '../../styles/Dashboard.module.scss';

export default function Dashboard() {
  const [orders] = useState();
  const { preLoad, setPreLoad } = useContext(PreLoadContext);

  useEffect(() => {
    // stop the preload
    if (preLoad) setPreLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const music = [
    {
      name: 'Teoria musical',
      link: '/panel/teoria_musical',
      icon: '/images/saxo.png',
    }
  ];
  const cards = [
    {
      name: 'violin',
      link: '/panel/violin',
      icon: '/images/saxo.png',
    },
    {
      name: 'guitarra',
      link: '/panel/guitarra',
      icon: '/images/saxo.png',
    },
    {
      name: 'flauta',
      link: '/panel/flauta',
      icon: '/images/saxo.png',
    },
    {
      name: 'ukelele',
      link: '/panel/ukulele',
      icon: '/images/saxo.png',
    },
    {
      name: 'saxofon alto',
      link: '/panel/saxofon_alto',
      icon: '/images/saxo.png',
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu courses />
      {orders !== undefined
        ? (
          <div className={styles.skeleton}>
            <div className={styles.component50Skeleton} />
            <div className={styles.component100Skeleton} />
            <div className={styles.component100Skeleton} />
            <div className={styles.component100Skeleton} />
            <div className={styles.component100Skeleton} />
            <div className={styles.component100Skeleton} />
            <div className={styles.component100Skeleton} />
          </div>
        ) : (
          <div className={styles.main}>
            <div className={styles.index}>
              <div  className={styles.index__courses}>
                <p className={styles.index__courses_title}>Para aprender</p>
                <Cards data={music} />
              </div>
              <div  className={styles.index__courses}>
                <p className={styles.index__courses_subtitle}>Instrumentos</p>
                <Cards data={cards} />
              </div>
            </div>

          </div>
        )}
    </div>
  );
}