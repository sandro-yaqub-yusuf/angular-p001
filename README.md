# Angular 13 - PROJETO 001

* Versão do NODEJS utilizado: 16.15.1 LTS
* Versão do ANGULAR e ANGULAR CLI utilizado: 13.3.8
* Linguagem principal utilizada: Typescript
* Outras linguagens utilizadas: HTML5, CSS3 e Javascript
* Frameworks utilizadas: TYPESCRIPT, RXJS, TSLIB e ZONE.JS
* Banco de Dados utilizado: nenhum. Será usado um arquivo JSON para simular os dados de Produtos
* Editor utilizado: Visual Studio Code
* Informações extras: Necessita conhecimentos médios de Javascript e Typescript

----

## Descrição:

Projeto em ANGULAR 13 (site em HTML5, CSS3, Javascript e Typescript) para listar Produtos e formulários SOBRE e CONTATOS.

----

## Instalação Global dos pacotes para o NODEJS:

1. Instalar a biblioteca NCU com o seguinte comando => npm install -g npm-check-updates (saia do terminal e entre novamente após a instalação)
2. Instalar o NODEJS versão 16.15.1 LTS do site oficial (https://nodejs.org) com o seguinte comando => nvm install 16.15.1
3. Ativar o NODEJS com o seguinte comando => nvm use 16.15.1
4. Atualizar o NPM para a versão 8.12.2 com o seguinte comando => npm install -g npm@8.12.2
5. Instalar o ANGULAR CLI com o seguinte comando => npm install -g @angular/cli@13.3.8
6. Instalar o JSON-SERVER (para simular um back-end) com o seguinte comando => npm install -g json-server

----

## Instalação na pasta do projeto:

1. Para instalar todos os pacotes do arquivo "package.json" utilize o comando => npm install

----

## Banco de Dados:

1. Não será usado Banco de Dados neste projeto
2. No lugar do mesmo foi criado um arquivo "produtos.json" para ser usado com o JSON-SERVER

----

## Para rodar o projeto:

1. Após a instalação do JSON-SERVER, rode o simulador de servidor com o seguinte comando => json-server --watch produtos.json
2. Para rodar o projeto em ANGULAR, utilize o seguinte comando: ng serve
3. Após a compilação do ANGULAR, abra um browser e digite na URL => http://localhost:4200

----

## Sobre o Autor:

SANDRO YAQUB YUSUF - Analista & Programador Sênior FULL-STACK - Trabalha com desenvolvimento de softwares desde 1990, passando pelas linguagens COBOL, CLIPPER, VISUAL BASIC 6, ASP Clássico, ASP.NET Framework, ASP.NET Core, PHP (Laravel) e NodeJS. Possui conhecimentos em banco de dados como SQL-SERVER, ORACLE, MySQL, MariaDB, MongoDB e SQLite. Também possui conhecimentos em HTML5, CSS3, TYPESCRIPT e JAVASCRIPT. Para as frameworks de desenvolvimento de FRONT-END, possui conhecimentos em ANGULAR, VUEJS e REACT JS. Pratica o modelo CLEAN ARCHITECTURE usando os conhecimentos em DDD, SOLID, TDD e LGPD.
