import React from 'react';

type ButtonStateProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonState = ({ incrementar }: ButtonStateProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}>Incrementar</button>;
};

export default ButtonState;
