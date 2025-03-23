
# Sistema de Orçamento, Compras e Serviços com OCR (Frontend React)

Este é o frontend de um sistema completo de gestão de orçamento, compras e contratação de serviços, com suporte a leitura de notas fiscais de serviço (NFS-e) em PDF utilizando OCR.

## 🚀 Funcionalidades

- Cadastro e aprovação de pedidos
- Upload de NFS-e (PDF) com leitura por OCR
- Painel de controle com resumo de pedidos e notas
- Controle de contratos vinculados a pedidos
- Interface moderna com layout responsivo
- Multiempresa com centro de custo, plano de contas contábil e financeiro

## 🧑‍💻 Tecnologias utilizadas

- React
- React Router
- CSS moderno com layout arredondado
- Integração com backend OCR via `fetch` (`/ocr`)

## 📦 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/orcamento-compras-app.git
cd orcamento-compras-app

# Instale as dependências
npm install

# Rode a aplicação
npm start
```

> O app estará disponível em `http://localhost:3000`

## 🧠 Backend (OCR)

Este frontend espera uma API de OCR rodando localmente em `http://localhost:8000/ocr` que aceite arquivos PDF via POST. O backend pode ser feito com FastAPI + Tesseract ou outra tecnologia OCR.

## 🌐 Deploy

Este projeto pode ser facilmente publicado no [Vercel](https://vercel.com):

1. Suba o projeto no GitHub
2. Acesse Vercel e crie um novo projeto com esse repositório
3. O Vercel detectará automaticamente que é um app React
4. Clique em **Deploy**

---

Desenvolvido com ❤️ para automação de processos de compras e serviços.
