import React from 'react';
import Button from './Button';
import Input from './exericiosComponents/Input';
import ButtonTipo from './exericiosComponents/ButtonTipo';
import Button2 from './Button2';
import CheckBox from './CheckBox';

function App() {
  const [total, setTotal] = React.useState(0);
  const [date, setDate] = React.useState('');

  const [total1, setTotal1] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button className="btn" onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button>

      <Button2 children="Incrementar" />

      <p>Inicio da viagem: {date}</p>

      <Input label="Nome" />
      <Input label="Email" type="email" />
      <Input
        value={date}
        onChange={(event) => setDate(event.currentTarget.value)}
        type="date"
        label="Data da viagem"
      />
      <Input type="password" label="Senha" />

      <div>
        <p>Total: {total1}</p>
        <ButtonTipo total={total1} setTotal={setTotal1} />
      </div>

      <CheckBox label="Termos e Condições" id="Termos" />
    </div>
  );
}

export default App;
