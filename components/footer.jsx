/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <Link href="/" passHref>
          <p className={styles.footer__main_logo}>AtusDedos</p>
        </Link>
        <div>
          <div className={styles.footer__main_links}>
            <Link href="/aviso_de_privacidad" passHref>Aviso de privacidad</Link>
            <Link href="/terminos_y_condiciones" passHref>Términos y Condiciones</Link>
          </div>
          <div className={styles.footer__main_linksSocial}>
            <Link href="https://www.facebook.com/" passHref>
              <a target="_blank">
                <Image src="/images/facebook.svg" alt="facebook" width={27} height={27} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/" passHref>
              <a target="_blank">
                <Image src="/images/instagram.svg" alt="instagram" width={27} height={27} />
              </a>
            </Link>
            <Link href="https://twitter.com/" passHref>
              <a target="_blank">
                <Image src="/images/twitter.svg" alt="twitter" width={27} height={27} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
