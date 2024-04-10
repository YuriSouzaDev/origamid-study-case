// Para evitar erros deve se passar o retorno
// O valor de um useState, pode ser uma função anonima retornando um valor a ser definido na funcao

import React from 'react';

const useLocalStorage = (
  key: string,
  inicial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
