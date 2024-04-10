import React from 'react';

type InputStateProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
};

const InputState = ({ label, id, ...props }: InputStateProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} type="text" {...props} />
    </div>
  );
};

export default InputState;
