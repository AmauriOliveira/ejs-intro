const express = require('express');
const cors = require('cors');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(expressLayout);

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile); // caso for usar .html em vez de .ejs
//app.set('view engine', 'html');
app.set('view engine', 'ejs');

// render recebe 3 parâmetro,
// nome do arquivo ou view, um objeto tipo any e um callback
app.get('/', (request, response) =>
	response.render('index', { nome: 'Amauri' })
);

app.get('/sell', (request, response) =>
	response.render(path.join(__dirname, 'views', 'sell', 'sell/index.ejs'))
);

app.get('/about', (request, response) => response.render('about'));
app.get('/bootstrap', (request, response) => response.render('bootstrap'));

app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
