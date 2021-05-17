# EJS

[TOC]

## Dicas

sempre feche um comando javascript com ';', senão o snippets não funciona.
sempre que for utilizar string com valor de tag html, utilize de '`'.

## EJS language support

> Recomendo utilizar no vs code

[LINK](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)

## Snippets

| Snippet→   | Alternativa | Saida                                                                                                   |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `ejs→`     | `<%`        | `<% %>` - No output tag                                                                                 |
| `ejsout→`  | `<%=`       | `<%= %>` - Outputs HTML value                                                                           |
| `ejsesc→`  | `<%-`       | `<%- %>` - Outputs unescaped                                                                            |
| `ejscom→`  | `<%#`       | `<%# %>` - Comment tag                                                                                  |
| `ejslit→`  | `<%%`       | `<%% %>` - Outputs Literal <%                                                                           |
| `ejsinc→`  | `<%`        | `include` statement                                                                                     |
| `ejsfor→`  | `<%`        | `for` Javascript Loop                                                                                   |
| `ejseach→` | `<%`        | `forEach` Javascript Loop                                                                               |
| `ejsif→`   | `<%`        | `if` Statement with condition                                                                           |
| `ejselif→` | `<%`        | `else if` Statement - _Middle section only._ Assumes you have already written the first `if` statement. |
| `ejselse→` | `<%`        | `else` Statement - _Middle section only._ Assumes you have already written the first `if` statement.    |

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

> Código gerado pelo Snippets.

```ejs
<% include  %>
```

## ejsfor

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

> Código gerado pelo Snippets.

```ejs
<% array.forEach(element => { %>

<% }) %>
```

Lembra muito o esquema do PHP, na hora de interpolar HTML e Javascript.
pode ser utilizado, qualquer estrutura que trabalha sobre array.

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

## ejsif

> Código gerado pelo Snippets.

```ejs
<% if (condition) { %>
<% } %>
```

## ejselif

> Código gerado pelo Snippets.

```ejs
<% } else if ({:condition}) { %>
```

## ejselse

> Código gerado pelo Snippets.

```ejs
<% } else { %>
```

> Exemplo

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
