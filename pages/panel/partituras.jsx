/* eslint-disable linebreak-style */
import React, { useState, useContext, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Notification from '../../components/notifications';
import PreLoadContext from '../../context/preLoadContext';
import { sheetMusic } from '../../helpers/toLearn';
import styles from '../../styles/Dashboard.module.scss';

export default function SheetMusic() {
  const { preLoad, setPreLoad } = useContext(PreLoadContext);
  const filterRef = useRef();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('')
  return (
    <div className={styles.container}>
      <Header />
      <Notification />
      <Menu />
      <div className={styles.people}>
        <Image src="/images/sheetMusicPeople.svg" alt="play" width={250} height={204} />
      </div>
      <div className={styles.main}>
        <p className={styles.main__title}>Partituras</p>
        <div className={styles.dashboard__search}>
          <div>
            <label htmlFor="search">
              <Image alt="Buscar" src="/images/search.svg" width={20} height={20} />
            </label>
            <input type="text" name="search" id="search" placeholder="Buscar" onChange={(e) => { setSearch(e.target.value) }} defaultValue={search} />
          </div>
          <div>
            <label htmlFor="filter">
              <Image alt="Filtrar" src="/images/filter.svg" width={20} height={20} />
            </label>
            <select name="filter" id="filter" placeholder="Filtrar" defaultValue={filter} onChange={(e) => { setFilter(e.target.value) }} ref={filterRef}>
              <option value="" disabled> </option>
              <option value="Guitarra">Guitarra</option>
              <option value="Violin">Violin</option>

            </select>
          </div>
          <button type="button" onClick={() => { setFilter(''); filterRef.current.value = ''; }}>
            <Image alt="apagar filtro " src="/images/filterOff.svg" width={20} height={20} />
          </button>
        </div>
        <div className={styles.sheetMusic}>
          {/* <object data="files/husky.pdf" height="100%" width="100%" /> */}
          {sheetMusic.map((card, index) => {
            const keyIndex = index + 1;
            const sheetMusic = () => {
              return (
                <button type="button" key={keyIndex} className={styles.sheetMusic__card} >
                  <Image src="/images/pdfIcon.svg" alt={card.name} width={38} height={38} />
                  <span>{card.name}</span>
                  <span>{card.instruments}</span>
                </button>
              )
            };
            // beginning filtering and searching of cards____________
            if (filter !== '' && search !== '') {
              if ((
                search.toUpperCase() === (`${card.name}`.slice(0, search.length)).toUpperCase()
              ) && filter === card.instruments) {
                return sheetMusic();
              }
            } else if (search === '' && filter !== '') {
              if (filter === card.instruments) {
                return sheetMusic();
              }
            } else if (search !== '' && filter === '') {
              if (
                search.toUpperCase() === (`${card.name}`.slice(0, search.length)).toUpperCase()
              ) {
                return sheetMusic();
              }
            } else if (search === '' && filter === '') {
              return sheetMusic(); // all cards
            }
            return null;
            // finish filtering and searching of cards_____________
          })}
        </div>
      </div>
    </div>
  );
}
