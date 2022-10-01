/* eslint-disable linebreak-style */
import React, {
  useEffect, useContext, useState,
} from 'react';
import Image from 'next/image';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import Cards from '../../components/cards';
import { music, instruments, perfectEar, means } from '../../helpers/toLearn';
import styles from '../../styles/Dashboard.module.scss';

export default function Dashboard() {
  const [orders] = useState();
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  useEffect(() => {
    // stop the preload
    if (preLoad) setPreLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu courses />
      <div className={styles.people}>
        <Image src="/images/saxoPeople.jpg" alt="Logo" width={248} height={482} />
      </div>
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
              <div className={styles.index__courses}>
                <p className={styles.index__courses_title}>Para aprender</p>
                <Cards data={music} />
              </div>
              <div className={styles.index__courses}>
                <p className={styles.index__courses_subtitle}>Instrumentos</p>
                <Cards data={instruments} />
              </div>
              <div className={styles.index__courses}>
                <p className={styles.index__courses_subtitle}>Oido perfecto</p>
                <Cards data={perfectEar} />
              </div>
              <div className={styles.index__courses}>
                <p className={styles.index__courses_subtitle}>Recursos</p>
                <Cards data={means} />
              </div>
            </div>

          </div>
        )}
    </div>
  );
}