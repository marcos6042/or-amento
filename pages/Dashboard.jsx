import React from 'react';
export default function Dashboard() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Resumo</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">Total de Pedidos</div>
        <div className="bg-white p-4 rounded-xl shadow">Notas Recebidas</div>
      </div>
    </div>
  );
}