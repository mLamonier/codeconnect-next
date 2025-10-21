# CodeConnect Next

Um projeto desenvolvido com **Next.js** para explorar integração de APIs e renderização no lado do servidor (SSR). Este repositório foi criado com o comando `create-next-app`, servindo como base para aplicações modernas com **React** e **Next.js**.

## 🚀 Tecnologias

- Next.js
- React
- JavaScript (ES6+)
- CSS Modules
- json-server (para mock de API local)

## 💻 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/mLamonier/codeconnect-next.git
   cd codeconnect-next
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Execute o json-server para servir os dados mockados:
   ```bash
   json-server posts.json -p 3042
   ```

5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura do projeto

```
codeconnect-next/
├── app/              # Páginas e componentes de interface
├── public/           # Arquivos estáticos
├── posts.json        # Base de dados fake usada pelo json-server
├── package.json      # Dependências e scripts
└── README.md         # Documentação do projeto
```

## 🧠 Aprendizados

Este projeto demonstra como:
- Criar uma aplicação Next.js do zero.
- Utilizar o `json-server` para APIs locais.
- Renderizar componentes dinamicamente.
- Gerenciar rotas e estados em React.

## 🌐 Deploy

O deploy pode ser feito facilmente na **Vercel**, plataforma oficial do Next.js. Basta conectar o repositório e seguir as etapas automáticas de build e deploy.

## 📄 Licença

Este projeto é open-source e está sob a licença MIT.

---

Desenvolvido por [Miguel Lamonier](https://github.com/mLamonier) 💻