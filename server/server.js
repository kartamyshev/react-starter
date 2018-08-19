require('./config/config');
const express = require('express');
const { mongoose } = require('./db/mongoose');
const { User, Theme } = require('./models');
const { initMiddleware } = require('./middleware/init');

const app = express();
initMiddleware(app);

app.get('/', async (request, response, next) => {
  response.status(200).send();
});

app.post('/toggleTheme', async (request, response, next) => {
  const { name } = await Theme.findOneAndUpdate(
    { identify: 'theme' },
    { $set: { name: request.body.theme } },
    { new: true }
  );
  response.status(200).send(name);
});

app.listen(3000, function() {
  console.log(`Server is listening on port 3000`);
});
