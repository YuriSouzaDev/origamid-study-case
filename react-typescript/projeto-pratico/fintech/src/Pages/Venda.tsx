import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';

type IVendaSemData = Omit<IVenda, 'data'>;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<IVendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">
        <strong>ID:</strong> {data.id}
      </div>
      <div className="box mb">
        <strong>Nome:</strong> {data.nome}
      </div>
      <div className="box mb">
        <strong>Preço:</strong>
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">
        <strong>Status:</strong> {data.status}
      </div>
      <div className="box mb">
        <strong>Pagamento:</strong> {data.pagamento}
      </div>
    </div>
  );
};

export default Venda;
