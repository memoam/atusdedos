/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '../styles/Dashboard.module.scss';

export default function Cards({ data }) {
  return (
    data.map((card, index) => {
      const keyIndex = index + 1;
      return (
        <Link href={card.link || '/'} passHref key={keyIndex} >
          <a className={styles.card}>
            <Image src={card.icon} alt={card.name} width={70} height={70} />
            {card.name}
          </a>
        </Link>
      );
    })
  );
}
Cards.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};
