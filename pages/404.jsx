/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Cards from '../components/cards';
import Notification from '../components/notifications';
import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header home />
      <Notification />
      <div className={styles.notfound}>
        <Image src="/images/notfound.svg" alt="notfound" width={430} height={580} />
      </div>
      <Footer />
    </div>
  );
}
