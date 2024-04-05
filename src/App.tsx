import React from 'react';
import InputState from './Hooks/exercicio/InputState';

function App() {
  const [data, setData] = React.useState(null);
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

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
  }, []);

  return (
    <div>
      <InputState type="date" label="Data de Inicio" />
    </div>
  );
}

export default App;
