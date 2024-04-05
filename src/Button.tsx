import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
