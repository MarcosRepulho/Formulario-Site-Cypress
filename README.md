📘 README.md – Projeto Formulário com Cypress
Formulário com Cypress
Um mini site com formulário HTML e testes automatizados com Cypress. 

Este projeto foi desenvolvido para demonstrar como criar um formulário web funcional e escrever testes end-to-end (E2E) usando Cypress . É ideal para iniciantes que querem aprender automação de testes ou praticar integração entre front-end e ferramentas de teste.

📋 Funcionalidades
✅ Formulário de cadastro com validações
🖼️ Upload de foto de perfil
🔐 Confirmação de senha
📅 Campo de data de nascimento
👁️ Mostrar/esconder senha
🧪 Testes automatizados com Cypress
🧩 Tecnologias Utilizadas
💻 HTML / CSS / JavaScript
🧪 Cypress
📦 Node.js / npm


🚀 Como Executar o Projeto
1. Clone o repositório:

git clone https://github.com/seu-usuario/formulario-com-cypress.git 
cd formulario-com-cypress

2. Instale as dependências:
npm install

3. Inicie um servidor local:
Você pode usar serve ou http-server:
python -m http.server 8000

O site ficará disponível em: http://localhost:8000

🧪 Como Rodar os Testes com Cypress
1. Abra o Cypress:
npx cypress open

2. Clique no arquivo de teste exibido (formulario.spec.cy.js) para executar os testes no modo interativo.

3. Ou rode diretamente no terminal:
npx cypress run

📁 Estrutura do Projeto

formulario-com-cypress/
├── index.html              # Página do formulário
├── style.css               # Estilos do formulário
├── cypress/                # Pasta dos testes E2E
│   └── e2e/
│       └── formulario.spec.cy.js
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo

🛠️ Scripts Disponíveis

npm start : Inicia o servidor local para visualizar o formulário

npm test ou npx cypress open : Abre a interface do Cypress para rodar os testes

npm run test:headless : Rode os testes no modo headless (sem interface gráfica)



🤝 Contribuição
Contribuições são sempre bem-vindas! Se você quiser melhorar esse projeto adicionando mais campos ao formulário, novos testes ou até integrando com backend, fique à vontade!

1.Faça um fork do projeto
2.Crie sua branch (git checkout -b feature/nova-feature)
3.Commit suas mudanças (git commit -m 'feat: nova feature')
4.Push na branch (git push origin feature/nova-feature)
5.Abra um Pull Request