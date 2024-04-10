import React from 'react';
import { useUser } from './UserContext';

const Content = () => {
  const { data } = useUser();

  if (!data) return null;
  return (
    <div>
      <h3>Preferências:</h3>
      <ul>
        <li>Playback: {data?.preferencias.playback}</li>
        <li>Volume: {data?.preferencias.volume}</li>
        <li>Qualidade de video: {data?.preferencias.qualidade}</li>
      </ul>
    </div>
  );
};

export default Content;
