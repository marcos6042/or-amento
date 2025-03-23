import React, { useState } from 'react';
export default function NotasFiscais() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert('Selecione um arquivo PDF');
    const formData = new FormData();
    formData.append('pdf', file);
    const res = await fetch('http://localhost:8000/ocr', { method: 'POST', body: formData });
    const data = await res.json();
    alert(`Dados capturados: ${JSON.stringify(data)}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-xl font-bold mb-4">Importar NFS-e (PDF)</h2>
      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Enviar e Capturar Dados
      </button>
    </div>
  );
}