/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '../styles/Dashboard.module.scss';

export default function Cards({ data }) {
  return (
    data.map((card, index) => {
      const keyIndex = index + 1;
      return (
        <button className={styles.card} key={keyIndex} type="button">
          <Image src={card.icon} alt="saxo" width={85} height={77.2} />
          {card.name}
        </button>
      );
    })
  );
}
Cards.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};
