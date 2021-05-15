import React from "react";
import { useLocation } from "react-router-dom";

import completPeople from "../data/completPeople";
import { getMessage } from "../data/people";
import { Empty } from "../components/Empty";
import './BingoPage.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BingoPage() {
  const [selecteds, setSelecteds] = React.useState([]);
  const code = useQuery().get('code');
  const person = completPeople[code]
  const message = getMessage();
  const BINGO = 'B I N G O'.split(" ");

  const toggleSelected = (col) => {
    if (!selecteds.includes(col)) {
      setSelecteds((selecteds) => [...selecteds, col])
    } else {
      setSelecteds((selecteds) => selecteds.filter((selected) => selected !== col))
    }
  }

  if (!code || !person) {
    return <Empty />
  }

  return (
    <div className="bingo-page">
      <header className="bingo-page__header">
        <h1 className="bingo-page__title">Olá, <strong>{person.name}</strong>{' ' + person.familyType}</h1>
        <p>{message}</p>
      </header>
      <section className="bingo-page__container">
        <article className="bingo-page__container-body">
          {person.bingo.map((row, index) => {
            return (
            <p key={index}>
              <strong>{BINGO[index]}</strong>
              {row.map((col, index) => (
                <span 
                  className={selecteds.includes(col) ? 'selected': 'item'} 
                  key={index}
                  onClick={() => toggleSelected(col)}
                >
                  {col}
                </span>)
              )}
            </p>)
          })}
        </article>
      </section>
      <strong className="bingo-page__footer">Feito com 💕 por: João & Mica</strong>
    </div>
  );
}

export default BingoPage;
