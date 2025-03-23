import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PedidoForm from './pages/PedidoForm';
import NotasFiscais from './pages/NotasFiscais';
import Contratos from './pages/Contratos';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pedido" element={<PedidoForm />} />
              <Route path="/notas" element={<NotasFiscais />} />
              <Route path="/contratos" element={<Contratos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;