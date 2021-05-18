# EJS

[TOC]

## Instalação

Instalação dos packages.

```bash
yarn add cors ejs express express-ejs-layouts
# Opcional
yarn add -D nodemon
```

Arquivo de entrada do servidor express.

```javascript
const express = require('express');
const cors = require('cors');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(expressLayout);
// o parâmetro do path é o nome da pasta onde estão as views, pode ser qualquer nome
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render recebe 3 parâmetro,
// nome do arquivo ou view, um objeto tipo any e um callback
app.get('/', (request, response) =>
	response.render('index', { nome: 'Amauri' })
);

app.get('/about', (request, response) => response.render('about'));

app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
```

> opcional, com a config abaixo ele fica utilizando a view com extensão **Html**

```javascript
app.set('views', path.join(__dirname, 'views'));
// caso for usar .html em vez de .ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
```

## Dicas

Sempre feche um comando javascript com ';', senão o snippets não funciona.
Sempre que for utilizar string com valor de tag html, utilize de '`'.

## EJS language support

> Recomendo utilizar no vs code

[Link da extensão](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)

## Snippets

| Snippet→   | Alternativa | Saida                          |
| ---------- | ----------- | ------------------------------ |
| `ejs→`     | `<%`        | `<% %>` - Sem tag de saída     |
| `ejsout→`  | `<%=`       | `<%= %>` - Valor de saída HTML |
| `ejsesc→`  | `<%-`       | `<%- %>` - Saídas sem escape   |
| `ejscom→`  | `<%#`       | `<%# %>` - Tag de comentário   |
| `ejslit→`  | `<%%`       | `<%% %>` - Saída literal <'%   |
| `ejsinc→`  | `<%`        | `include` - statement          |
| `ejsfor→`  | `<%`        | `for` - Loop Javascript        |
| `ejseach→` | `<%`        | `forEach` - Loop Javascript    |
| `ejsif→`   | `<%`        | `if` - IF Javascript           |
| `ejselif→` | `<%`        | `else if` - Else IF Javascript |
| `ejselse→` | `<%`        | `else` - Else Javascript       |

## ejs

Para declarar trechos de código em javascript, sem saída visível, se colocar um console.log o resultado sai no servidor e não no navegador do cliente.

> Código gerado pelo Snippets.

```ejs
<% %>
```

```ejs
<% const lastName = 'Oliveira'; console.log('no servidor'); %>
```

## ejsout

Para imprimir valores de variáveis no html interpolado, se a variável for um **string** com tags HTML ela vai sair **errada**..

> Código gerado pelo Snippets.

```ejs
<%= %>
```

> Exemplo

```ejs
<% const name="Amauri" const lastName="Oliveira"; const html="<p> aqui é um paragrafo </p>";%>

<h1>Hello <%= name%> <%=lastName%></h1>
<%= html %>
```

> Saída

Hello Amauri Oliveira

<p>aqui é um paragrafo</p>

## ejsesc

Para imprimir valores de variáveis no html interpolado, se a variável for um **string** com tags HTML ala vai sair **certa**. Recomendo utilizar crase como no exemplo.

> Código gerado pelo Snippets.

```ejs
<%- %>
```

> Exemplo

```ejs
<% const html=`<p>aqui é um paragrafo</p>`;%>
<%= html %>
```

> Saída

aqui é um paragrafo

## ejscom

Utilizado para fazer comentários no código.

> Código gerado pelo Snippets.

```ejs
<%# %>
```

> Exemplo

```ejs
<%# Apenas um comentário %>
```

## ejslit

> Código gerado pelo Snippets.

```ejs
<%% %>
```

## ejsinc

Utilizado para incluir pedaços de códigos a outra página.

> Código gerado pelo Snippets.

```ejs
<% include  %>
```

> Exemplo

```ejs
<%- include('partials/header')%>
```

## ejsfor

Simples **For** feito com interpolação.

> Código gerado pelo Snippets.

```ejs
<% for( let index = 0; index < array.length; index++ ) { %>

<% } %>
```

> Exemplo

```ejs
<% const people =[ {name:'Fernanda', age: 25}, {name:'José',
age:40}, {name:'Raquel',age:15}, ]; %>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <% for( let index = 0; index < people.length; index++ ) { %>
  <tr>
    <td><%= people[index].name %> </td>
    <td><%= people[index].age %> </td>
  </tr>
</table>
<% } %>
```

</table>

## ejseach

Lembra muito o esquema do PHP, na hora de interpolar HTML e Javascript.
pode ser utilizado, qualquer estrutura que trabalha sobre array.

> Código gerado pelo Snippets.

```ejs
<% array.forEach(element => { %>

<% }) %>
```

> Exemplo

```ejs
<% const people =[ {name:'Fernanda', age: 25}, {name:'José',
age:40}, {name:'Raquel',age:15}, ]; %>

<table>
  <tr>
  tr>
  <% people.forEach(person => {  %>
    <tr>
      <td><%= person.name %> </td>
      <td><%= person.age %> </td>
    </tr>
  <% }); %>

  </table> <th>Name</th>
    <th>Age</th>
  </
</table>
```

## ejsif, ejselif e ejselse

Estrutura básica If, Else If e Else.

> Exemplo no final

### ejsif

> Código gerado pelo Snippets.

```ejs
<% if (condition) { %>
<% } %>
```

### ejselif

> Código gerado pelo Snippets.

```ejs
<% } else if ({:condition}) { %>
```

### ejselse

> Código gerado pelo Snippets.

```ejs
<% } else { %>
```

### Exemplo

```ejs
<% let number = Math.floor(Math.random()*50);%>
<br />
<% if (number < 25) { %>
<p> <%= number %> é maior que 25</p>
<% } else if (number > 25) { %>
<p><%= number %> é menor que 25</p>
<% } else { %>
<p>É o 25</p>
<% } %>
```