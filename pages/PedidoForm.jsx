import React from 'react';
export default function PedidoForm() {
  return (
    <form className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-xl font-bold mb-4">Novo Pedido</h2>
      <input className="w-full mb-4 p-2 border rounded" placeholder="Produto ou Serviço" />
      <input className="w-full mb-4 p-2 border rounded" placeholder="Centro de Custo" />
      <input className="w-full mb-4 p-2 border rounded" placeholder="Conta Contábil" />
      <input className="w-full mb-4 p-2 border rounded" placeholder="Conta Financeira" />
      <textarea className="w-full mb-4 p-2 border rounded" placeholder="Justificativa" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar para Aprovação</button>
    </form>
  );
}