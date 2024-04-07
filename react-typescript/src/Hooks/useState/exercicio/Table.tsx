import React from 'react';

type DataItem = {
  data?: string;
  id: number;
  pagamento?: string;
  parcelas?: number;
  preco?: number;
  nome: string;
  status: string;
};

type TableProps = {
  data: DataItem[];
};

const Table = ({ data, ...props }: TableProps) => {
  return (
    <table {...props}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
