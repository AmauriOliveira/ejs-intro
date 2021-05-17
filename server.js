const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
// render recebe 3 parâmetro,
// nome do arquivo ou view, um objeto tipo any e um callback
app.get('/', (request, response) =>
	response.render('index', { nome: 'Amauri' })
);

app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile); // caso for usar .html em vez de .ejs
//app.set('view engine', 'html');
app.set('view engine', 'ejs');

app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));


