import React from 'react';

const styleLoading: React.CSSProperties = {
  border: 'var(--gap-s) solid var(--color-1)',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  borderRightColor: 'var(--color-4)',
  animation: 'spin 1s infinite',
};

// É possível adicionar o keyframe diretamente no elemento, basta colocar uma nova propriedade style e adicionar o keyframe dentro da mesma
const Loading = () => {
  return <div style={styleLoading}></div>;
};

export default Loading;
