import React from "react";
import { useLocation } from "react-router-dom";

import completPeople from "../data/completPeople";
import { getMessage } from "../data/people";
import { Empty } from "../components/Empty";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BingoPage() {
  const code = useQuery().get('code');
  const person = completPeople[code]
  const message = person && getMessage(person);
  const BINGO = 'B I N G O'.split(" ")

  if (!code || !person) {
    return <Empty />
  }

  return (
    <div>
      <p>{person.name}</p>
      <p>{message}</p>
      <table>
        <thead>
          <tr>
            {BINGO.map(char => (<th key={char}>{char}</th>))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {person.bingo.map((col, index) => {
              return (
              <td key={index}>
                {col.map((row, index) => (<p key={index}>{row}</p>))}
              </td>)
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BingoPage;
