# Stant-test
![license badge](https://img.shields.io/github/license/jailsonsf/Stant-test?style=for-the-badge)
## Organizador de Palestras
Este projeto é um organizador de palestras, nele recebemos um arquivo com uma lista de diversas propostas de palestras e retorna as palestras organizadas de acordo com as restrições de tempo do evento.
## Projeto
O projeto está dividido em duas partes. A parte da API onde temos toda a lógica de como organizar as palestras e de como tratar as lista de propostas de palestras recebidas; E a parte do frontend responsável por enviar o arquivo contendo as propostas de palestras.
### Features
- [x] API
  - [x] Endpoint para receber arquivo com a listagem de palestras
  - [x] Transformar o conteudo do arquivo recebido em um array de objetos
  - [x] Criar Tracks
  - [x] Retornar Palestras organizadas
- [x] Frontend
  - [x] Enviar arquivo para a api
## Executar o projeto
### Requisitos
Para executar este projeto precisamos ter instalado o Node.js e um gerenciador de pacotes como npm ou yarn. Neste projeto usei o yarn.
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Com o node e o gerenciador de pacotes instalados, vamos agora instalar as dependências do projeto.

#### Executando a API
Em um terminal vamos executar o seguinte comando:
```bash
    cd api
```
E agora vamos instalar os pacotes:
```bash
    yarn
    # or npm install
```
Feito isso vamos executar nossa api usando o comando:
```bash
    yarn dev
    # or npm run dev
```
Com isso nossa api já está executando e aceitando as requisições para o nosso endpoint.
#### Executando o frontend
Em um terminal vamos executar o seguinte comando:
```bash
    cd frontend-app
```
E agora vamos instalar os pacotes:
```bash
    yarn
    # or npm install
```
Feito isso vamos executar nossa aplicação frontend usando o comando:
```bash
    yarn dev
    # or npm run dev
```
Com isso nossa aplicação frontend já está executando e aceitando as requisições para o nosso endpoint. Para fazer essas requisicões basta adicionarmos um arquivo com as propostas de palestras igual ao arquivo de exemplo (arquivo proposals.txt na raiz do projeto).
## Tecnologias usadas
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?logo=nodemon&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)
![ReactJs](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)

| API        | Frontend   |
|------------|------------|
| JavaScript | JavaScript |
| Node.js    | React      |
| Express    | Axios      |
| Nodemon    | Vite       |
| Multer     |            |
| Cors       |            |
## Autor
**Jailson Soares de Farias**

**LinkedIn**: https://linkedin.com/in/jailsonsoares/

**GitHub**: https://github.com/jailsonsf
