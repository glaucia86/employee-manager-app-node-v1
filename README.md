# Luizalabs Employee Manager Application (Versão Node.Js)

Desenvolvimento de uma web app 'fictícia' em Node.Js, Express.js, MongoDb e com TDD (Mocha & Chai) 
que simulará uma aplicação que gerenciará as informações do funcionários através de uma API 
que permite integrá-la a outros sistemas. A aplicação precisa ter:

* A Api precisará gerenciar os dados de todos os empregados e que consequentemente necessite integrar essa api a outros sistemas da empresa;
* E uma API que permita: listar, adicionar e remover os empregados (somente o Admin);

Essa versão é a v.1 do projeto. Sendo assim, uma app básica que irá receber os verbos do HTTP. (Back-End)

## Exemplo das URI's de Requisição (Request):

```
curl -H "Content-Type: application/javascript" http://localhost:8000/employee/

```

E o resultado do JSon (Response) deverá ser (exemplo):

```
[
  {
    "name": "Arnaldo Pereira",
    "email": "arnaldo@luizalabs.com",
    "department": "Architecture"
    },
    {
      "name": "Renato Pedigoni",
      "email": "renato@luizalabs.com",
      "department": "E-commerce"
    },
    {
      "name": "Thiago Catoto",
      "email": "catoto@luizalabs.com",
      "department": "Mobile"
    }
]

```

## Recursos Utilizados no Desenvolvimento da Aplicação:

- Node.Js;
- Express.Js ~ v.4.0;
- Conceito RestFul;
- MongoDb;
- Mongoose ~4.x;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);
- Mocha;
- Chai;
- Navicat Premium;

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!


## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar 
a base de dados do MongoDb em Cloud:

* [Modulus](https://modulus.io/)
* [MLab](https://mlab.com/)

### Instalando as Dependências (via Windows): 

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."

```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install

```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.


## Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)
- MongoDb: [AQUI](https://docs.mongodb.com/v3.0/administration/install-on-linux/)



## Padrão das Rotas Criadas: 

Procurando seguir o padrão e design das API's, segue abaixo as URI's das rotas a serem desenvolvidas:

 ROTA                      |     HTTP(Verbo)   |      Descrição        | 
-------------------------  | ----------------- | --------------------- | 
/employee                  |       GET         | Selecionar Todos      | 
/employee                  |       POST        | Criar                 | 
/employee/:employee_id     |       GET         | Selecionar Por Id     | 
/employee/:employee_id/    |       PUT         | Atualizar Por Id      |    
/employee/:employee_id/    |       DELETE      | Excluir Por Id        |

#
## Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
> node server.js

```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
> mongod

```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:8000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        


p.s.: no projeto, disponibilizei 2 maneiras de realizar a conexão de dados com o MongoDb através do Mongoose:

* **De maneira local**: utilizando o MongoDb;
* **De maneira em cloud**: utilizando o Modulus;

## Executando os Testes:

Basta executar o comando:

```
> npm test

```


## Observações Finais:
Eu sei que vocês não me pediram para desenvolver essa aplicação através da linguagem Node.Js e MongoDb.
Porém, como na descrição da vaga fala que é um plus saber: Node.Js e Bancos NoSql (nesse caso eu usei o 
MongoDb), então eu decidi fazer esse app também para análise de vocês!

