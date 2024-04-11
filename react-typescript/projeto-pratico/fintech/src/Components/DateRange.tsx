import React from 'react';
import Dateinput from './Dateinput';
import { useData } from '../Context/DataContext';

const DateRnge = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form
      className="box flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Dateinput
        label="Início"
        id="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <Dateinput
        label="Final"
        id="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRnge;
