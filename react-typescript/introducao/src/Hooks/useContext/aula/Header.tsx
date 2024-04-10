import React from 'react';
import { useUi } from './UiContext';

const Header = () => {
  const ui = useUi();

  return <h1>Header</h1>;
};

export default Header;
