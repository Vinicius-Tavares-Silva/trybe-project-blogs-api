const express = require('express');
const error = require('./middlewares/error');
const users = require('./controllers/users/router');
const categories = require('./controllers/categories/router');
const posts = require('./controllers/posts/router');
const { login } = require('./controllers/login/login');

const app = express();
app.use(express.json());

app.post('/login', login);
app.use('/user', users);
app.use('/categories', categories);
app.use('/post', posts);
app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
