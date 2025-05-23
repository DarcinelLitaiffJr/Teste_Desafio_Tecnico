# Projeto de Automação Web com Cypress

<p align="center">
    <a href="https://www.cypress.io">
        <picture>
            <img alt="Cypress Logo" src="https://asset.brandfetch.io/idIq_kF0rb/idZxkJkFIi.svg" width="450px">
        </picture>
    </a>
</p>
<p align="center">
    <a href="https://on.cypress.io">Documentation</a> |
    <a href="https://on.cypress.io/changelog">Changelog</a>
</p>

## Pré-requisitos
### 🤖 Ferramentas/Tecnologias:

- Instale [NPM](https://www.npmjs.com/package/cypress)
- Instale [NodeJs](https://nodejs.org/en/download/current)
- Instale [Cypress](https://on.cypress.io/install) para Mac, Linux, ou Windows:

```bash
npm install cypress --save-dev
```
ou
```bash
npx cypress -v
```
```bash
npm install -D cypress-xpath
```


## 🚀 Clonar repositório

Clone with SSH
```bash
git clone https://github.com/DarcinelLitaiffJr/Teste_Desafio_Tecnico.git
```
ou clone with HTTPS
```bash
git clone git@github.com:DarcinelLitaiffJr/Teste_Desafio_Tecnico.git
```
## 👨🏻‍💻 Execução dos testes
```bash
npx cypress open
```
ou
```bash
yarn run cypress open
```

## 🔖 Arquitetura do projeto

```
├── cypress
│   ├── e2e
│   ├── fixtures
│   │   ├── example.json
│   ├── plugins
│   │   ├── index.js
│   ├── suport
│   │   ├── commands.js
│   │   ├── e2e.js
├── node_modules
├── .env
├── .gitignore
├── .gitlab-ci.yml
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
```
