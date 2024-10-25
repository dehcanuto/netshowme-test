![Netshow.me](.github/netshowme-logo.svg)

# Área de membros com React

![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![Netshow.me](https://img.shields.io/badge/powered_by-Netshow.me-EF3B66)
![NextJS version](https://img.shields.io/badge/NextJS-15.0.1-black?style=flat-square&logo=next.js&logoColor=white)

## 📖 Descrição do Projeto

Você irá desenvolver uma aplicação que consiste em duas telas, uma página inicial que lista os vídeos organizados por categoria e uma página de reprodução de vídeos utilizando React.

A aplicação deve permitir que os usuários naveguem entre as diferentes telas, reproduzam vídeos usando HLS, realizem chamadas de API que retornam conteúdo dinamicamente utilizando um servidor JSON simulado com json-server. Devem incluir skeletons e pequenas animações para melhorar a experiência do usuário.

## 🛠️ Desenvolvido com

*  [NodeJS](https://nodejs.org/en/docs/) - Ambiente de execução JavaScript
*  [NextJS](https://nextjs.org/docs) - Framework web
*  [Tailwind CSS](https://tailwindcss.com/docs) - Framework para estilização

## 🚀 Instalação

### 1. Clone o repositório

```bash
$ git clone git@github.com:dehcanuto/netshowme-test.git
```

### 2. Instale as dependências

```bash
$ yarn install
```

### 3. Rodar projeto

```bash
$ yarn dev
```

O projeto será apresentado através do link [http://localhost:3000](http://localhost:3000).

## Telas

Segue o Figma das telas a serem reproduzidas: https://www.figma.com/design/Nih4u1dC6oiL93OzNNQguN/Teste-Netshow.me-Hub?node-id=0-1&t=i64MHGHZpQCZfxx6-1

## Requisitos Funcionais

### Home Screen:

Exibir uma lista de vídeos obtidos de uma API simulada utilizando json-server.
Cada item da lista deve mostrar uma imagem em miniatura (thumbnail) do vídeo e seu título e estar organizado na sua categoria.
Ao clicar em um item da lista, o usuário deve ser direcionado para a tela de detalhes do vídeo.

### Video Detail Screen:

Reproduzir o vídeo selecionado utilizando HLS.
Exibir informações adicionais sobre o vídeo (título, descrição, views e likes).
Permitir que o usuário incremente a quantidade de likes do vídeo.
A cada acesso a página de detalhe é necessário incrementar o número de views.

### Skeleton Loading:

Mostrar skeletons enquanto os dados da API estão sendo carregados.

### Animações:

Implementar uma pequena animação de transição entre as telas.
Adicione uma animação ao exibir a lista de vídeos na Home Screen.

## Requisitos Técnicos
- Utilizar React.
- Utilizar json-server para simular a API com os endpoints especificados (o db.json pode ser baixado aqui).
- Utilizar HLS para reprodução dos vídeos. Sugestão: jwplayer, bitmovin ou qualquer biblioteca de sua escolha para reprodução de vídeos HLS.
- Implementar skeletons usando biblioteca como react-content-loader ou similar.
- Criar testes funcionais da aplicação.
- Criar versão SSR das páginas.

## API

Utilize o json-server e inicie utilizando a db.json:

```bash
$ npx json-server db.json
```

O json-server iniciará o servidor na porta 3000 e ficará disponível através de http://localhost:3000/ 
expondo os seguintes endpoints:

|  Method | Endpoint    | Description |
| ------- | ----------- | ----------- |
|   GET   | /videos     | Retorna a lista de todos os vídeos. |
|   GET   | /videos/:id | Retorna os detalhes de um vídeo específico. |
|  PATCH  | /videos/:id | Ao passar um JSON com os valores ao serem alterados, faz a mudança diretamente no db.json. |

Use sempre as listagens com paginação:

http://localhost:3000/videos?_page=1&_per_page=10

A lista completa de endpoints aparece no momento da execução do json-server.

## Objetivos do Teste

- Avaliar a capacidade de configuração e uso de React em uma aplicação.
- Verificar o conhecimento em roteamento e navegação da aplicação.
- Analisar a habilidade de integrar e consumir dados de uma API.
- Avaliar a implementação de skeletons para melhorar a experiência do usuário durante o carregamento de dados.
- Verificar a criação e implementação de pequenas animações para uma experiência de usuário mais fluida e agradável.
- Analisar a capacidade de criação de testes das funcionalidades propostas.
- Analisar a habilidade de reprodução do layout proposto.
Instruções

## Setup do Projeto:

- Crie um novo projeto React.
- Configure o projeto com as dependências necessárias para navegação, reprodução de vídeo, skeletons e animações.

## Configuração do json-server:

Siga as instruções acima para configurar e rodar o json-server.

## Implementação das Funcionalidades:

- Desenvolva as telas e funcionalidades conforme descrito nos requisitos funcionais.
- Certifique-se de que a navegação entre as telas e a interação com a API estejam funcionando corretamente.
- Implemente skeletons para o carregamento de dados e adicione animações conforme necessário.
- Implemente os testes necessários para que a aplicação esteja coberta contra alterações indevidas que mudam o comportamento da aplicação de forma não desejada.
- Revise todo o layout, organização e detalhes.

## Entrega do Projeto:

- Faça o upload do código-fonte do projeto em um repositório público no GitHub.
- Inclua um README com instruções claras sobre como rodar o projeto e qualquer detalhe relevante sobre a implementação.

## Recursos Adicionais
- Documentação do json-server
- Biblioteca jwplayer e bitmovin para reprodução de vídeos

**Bom trabalho e boa sorte!**

Se precisar de qualquer assistência adicional ou esclarecimento, por favor, entre em contato.