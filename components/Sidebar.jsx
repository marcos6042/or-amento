import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 rounded-r-xl">
      <nav className="flex flex-col gap-4">
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/pedido">📋 Novo Pedido</Link>
        <Link to="/notas">🧾 Notas Fiscais</Link>
        <Link to="/contratos">📑 Contratos</Link>
      </nav>
    </aside>
  );
}