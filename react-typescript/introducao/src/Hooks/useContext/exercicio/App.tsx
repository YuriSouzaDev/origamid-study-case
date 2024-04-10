import React from 'react';
import { UserContextProvider } from './UserContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
}

export default App;
