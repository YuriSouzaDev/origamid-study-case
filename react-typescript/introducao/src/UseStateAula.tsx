import React from 'react';
import ButtonState from './Hooks/useState/ButtonState';

function user() {
  return {
    nome: 'Yuri',
    profissao: 'Desenvolvedor',
  };
}

type User = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <ButtonState incrementar={setTotal} />
      </div>
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
}

export default App;
