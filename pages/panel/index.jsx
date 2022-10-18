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

export default function Dashboard() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const courses = [
    { name: 'Instrumentos', value: instruments },
    { name: 'Oído perfecto', value: perfectEar },
    { name: 'Recursos', value: means },
  ]
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
        <Image src="/images/saxoPeople.png" alt="Logo" width={248} height={482} />
      </div>
      <div className={styles.main}>
        <div className={styles.index}>
          <div className={styles.index__courses}>
            <p className={styles.index__courses_title}>Para aprender</p>
            <Cards data={music} />
          </div>
          {courses.map((course, index) => {
            const keyIndex = index + 1;
            return (
              <div className={styles.index__courses} key={keyIndex}>
                <p className={styles.index__courses_subtitle}>{course.name}</p>
                <Cards data={course.value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}