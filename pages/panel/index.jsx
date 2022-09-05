/* eslint-disable linebreak-style */
import React, {
  useEffect, useContext, useState,
} from 'react';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
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
      {orders === undefined
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
            main
          </div>
        )}
    </div>
  );
}