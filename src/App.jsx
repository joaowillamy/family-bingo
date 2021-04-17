import React from "react";
import { useReactPath } from "./useReactPath";
import completPeople from "./data/completPeople";
import { getMessage } from "./data/people";

function App() {
  const path = useReactPath()
  const cleanPath = path.replace(/\//g, '')
  const person = completPeople[cleanPath]
  const BINGO = 'B I N G O'.split(" ")
  
  if (!cleanPath || !person) {
    return (
      <div>
        Não encontramos seu codigo, sinto muito
      </div>
    )
  }
  const message = getMessage(person);

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

export default App;
