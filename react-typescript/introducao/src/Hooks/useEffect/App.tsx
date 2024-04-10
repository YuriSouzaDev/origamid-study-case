// UseEffect só pode retornar void, ou seja outra função seja anonima ou uma função externa.

import React from 'react';

const App = () => {
  React.useEffect(() => {
    console.log('montou');
    return () => {
      console.log('desmontou');
    };
  });
  return <div>App</div>;
};

export default App;
