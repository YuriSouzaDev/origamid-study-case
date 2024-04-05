import React from 'react';
import InputState from './Hooks/exercicio/InputState';

function App() {
  const [data, setData] = React.useState(null);
  const [inicio, setInicio] = React.useState<string | null>('');
  const [final, setFinal] = React.useState<string | null>('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(data);
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
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        {inicio}
        <InputState
          type="date"
          id="inputInicio"
          label="Data Inicial"
          onChange={hadleInicio}
        />
      </div>
      <div>
        {final}
        <InputState
          type="date"
          id="inputFinal"
          label="Data Final"
          onChange={hadleFinal}
        />
      </div>
    </div>
  );
}

export default App;
