import React from 'react';
import InputState from './Hooks/useState/exercicio/InputState';
import Table from './Hooks/useState/exercicio/Table';

type Venda = {
  nome: string;
  status: string;
  id: number;
};

function App() {
  const [data, setData] = React.useState<null | Venda[]>(null);
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!inicio) {
          const today = new Date().toISOString().substr(0, 10);
          setInicio(today);
          setFinal(today);
        }
        const response = await fetch(
          `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [inicio, final]);

  const hadleInicio: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInicio(event.currentTarget.value);
  };

  const hadleFinal: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFinal(event.currentTarget.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <div>
          <InputState
            type="date"
            id="inputInicio"
            label="Data Inicial"
            onChange={hadleInicio}
            value={inicio}
          />
        </div>
        <div>
          <InputState
            type="date"
            id="inputFinal"
            label="Data Final"
            onChange={hadleFinal}
            value={final}
          />
        </div>
      </div>
      {data ? <Table data={data} /> : <p></p>}
    </div>
  );
}

export default App;
