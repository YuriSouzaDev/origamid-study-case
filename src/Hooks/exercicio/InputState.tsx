import React from 'react';

type InputStateProps = React.ComponentProps<'input'> & {
  label: string;
};

const InputState = ({ label, ...props }: InputStateProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>{label}</label>
      <input name={label} id={label} type="text" {...props} />
    </div>
  );
};

export default InputState;
