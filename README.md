<p align="center">
  <img src="./assets/logo-bankme.png" alt="Logo Bankme" width="91" height="108">
</p>
<h1 align="center">
  <code>API Bankme</code>
</h1>

## Sumário

- [Sumário](#sumário)
- [👉 O que é?](#-o-que-é)
- [💻 Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação](#-instalação)
  - [Executando testes](#executando-testes)
  - [Executando lint](#executando-lint)
  - [Buildando o projeto](#buildando-o-projeto)
- [🤝 Colaboradores](#-colaboradores)

## 👉 O que é?

API utilizada para gestão e controle de operações de crédito realizadas pelos Minibancos operantes da Bankme. 

Além disso, expõe informações para todo o ecossistema Bankme, como por exemplo: informações de autenticação, operações, minibancos
e recebíveis.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:


* Instalação e configuração do NodeJS;
* Instalação e configuração do Docker;
* VSCode e os plugins necessários para rodar o projeto;
* Conhecimento prévio de NestJS;
* Conhecimento de CI/CD com GitHub Actions;
* Testes automatizados de software;

## 🚀 Instalação

Este projeto utiliza o `yarn` como gerenciador de pacotes.

Primeiro, deve-se instalar os depêndencias, para isso iremos rodar no terminal, dentro da pasta do nosso projeto, um dos seguintes comandos:

```
$ yarn install
```

ou

```
$ yarn
```

O próximo passo é criar nosso banco de dados local, esse processo é facilitado pelo nosso arquivo
[docker-compose.local](./docker-compose.local.yml) que gera nosso container dentro do docker completamente pronto para nossa
API se conectar com a mesma.

Mas antes precisaremos criar uma nova rede de conexão, para isso, basta rodar o seguinte comando:

```
$ docker network create bankme-dev
```

Logo após, devemos criar um arquivo com o nome ".env" na root do nosso projeto e adicionar as chaves necessárias para a criação do nosso
banco de dados. Solicite as chaves para alguém do time.

> IMPORTANTE: Lembre-se de verificar se sua DATABASE_URL está apontando para o seu banco local, para evitar acidentes no nosso banco de DEV,
> ou até mesmo no nosso banco de PROD!

Depois de criada nossa nova conexão, iremos rodar o comando responsável pela execução do nosso arquivo docker-compose, cujo o qual ira
criar nosso container com nosso banco de dados PostgreSQL:

```
$ yarn db:start-local
```

Caso queira saber mais sobre o comando, acesse o arquivo em que o mesmo está descrito [package.json](./package.json).

Com nosso container criado, vamos aplicar as nossas migrations já criadas em nosso banco local:

```
$ yarn migrate:dev
```

Se após o comando terminar o nosso banco de dados continuar vazio (sem dados em nossas tabelas), basta rodar nosso
*seed*, script utilizado para popular o banco de dados:

```
yarn db:reset
```

Vamos agora gerar a modelagem dos nossos dados utilizando o Prisma:

```
$ yarn prisma generate
```

Após isso nosso banco de dados estará criado, modelado e populado!

Após todos estes passos concluídos podemos rodar nosso projeto utilizando o seguinte comando:

```
$ yarn dev
```

### Executando testes

A melhor maneira de se familiarizar com um projeto é através dos seus testes!

Para executar os testes do projeto, use o comando:

```bash
$ yarn test
```

### Executando lint

```bash
$ yarn lint
```

### Buildando o projeto

```bash
$ yarn build
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/lumiano.png" width="100px;"/><br>
        <sub>
          <b>Keven Lucas</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/Jott4.png" width="100px;"/><br>
        <sub>
          <b>João Vitor Cunha</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/GabrielRuivo.png" width="100px;"/><br>
        <sub>
          <b>Gabriel Ruivo</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/immarcolagroot.png" width="100px;"/><br>
        <sub>
          <b>João Marcolino</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/luiseduardoluz.png" width="100px;"/><br>
        <sub>
          <b>Luis Eduardo Luz</b>
        </sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/Joao208.png" width="100px;"/><br>
        <sub>
          <b>João Augusto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/DiogoZdev.png" width="100px;"/><br>
        <sub>
          <b>Diogo Lara</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/diogocezar.png" width="100px;"/><br>
        <sub>
          <b>Diogo Cezar</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#sumário)<br>
