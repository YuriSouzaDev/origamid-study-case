import React from 'react';
import { useData } from '../Context/DataContext';

const Resumo = () => {
  const { data, loading } = useData();
  console.log(data);

  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          {loading ? (
            <span>Carregando</span>
          ) : (
            <span>
              {data
                .filter((i) => i.status !== 'falha')
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </span>
          )}
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box mb">Gráficos</div>
    </section>
  );
};

export default Resumo;