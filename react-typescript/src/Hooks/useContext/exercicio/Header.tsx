import React from 'react';
import { useUser } from './UserContext';

const Header = () => {
  const { data, loading } = useUser();
  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
  return (
    <div>
      <h2>Nome: {data?.nome}</h2>
    </div>
  );
};

export default Header;
