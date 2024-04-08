import React from 'react';
import { UiContextProvider } from './UiContext';
import Header from './Header';

function App() {
  return (
    <UiContextProvider>
      <Header />
    </UiContextProvider>
  );
}

export default App;
