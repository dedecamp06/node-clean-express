
## Pré-requisitos
- Node(v20)
- Mongo
- Docker (Engine / Desktop)

## Instalação com Docker

- No terminal, navegue até o diretório do projeto e execute: 
```bash
  docker compose build
```

- Depois de buildar o projeto, execute o docker do Node App:

```bash
  docker compose build nodeapp
  ```

## Testes com JEST
- Após buildar o projeto e executa-lo, use esse comando para executar os testes:

```bash
  docker compose build test
  ```
  - Esse comando vai executar todos os testes dentro de um container do docker já conectado com o banco buildado.

  ## Informações

  - Acesse o projeto através da URL http://localhost:3333/api
- A Documentação de rotas está em http://localhost:3333/api-docs
## Instalação Local
- No terminal, navegue até o diretório do projeto e execute: 
```bash
  npm install
```

- Após isso, crie um banco local no Mongo e substitua o config.ts que está dentro de infra/mongodb/config com as configurações do seu banco
```bash
  npm install
```

- Execute o projeto com: 
```bash
npm run dev
```

- Execute os testes com o comando:
```bash
npm run test
```

## Authors

- [@pedroHenrique](https://github.com/dedecamp06)




