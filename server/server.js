require('./config/config');
require('./db/mongoose');

const express = require('express');
const { head } = require('ramda');
const { Theme } = require('./models');
const { initMiddleware } = require('./middleware/init');

const app = express();
initMiddleware(app);

app.get('/', async (request, response, next) => {
  response.status(200).send();
});

app.get('/getTheme', async (request, response, next) => {
  const data = await Theme.find({});
  response.status(200).send(head(data).value);
});

app.post('/toggleTheme', async (request, response, next) => {
  const { value } = request.body;
  const fromDB = await Theme.findOne({ identify: 'theme' });

  if (fromDB === null) {
    await Theme.create({ identify: 'theme', value });
    response.status(200).send(value);
  } else {
    const result = await Theme.findOneAndUpdate(
      { identify: 'theme' },
      { $set: { value } },
      { new: true }
    );
    response.status(200).send(result.value);
  }
});

app.listen(3000, function() {
  console.log(`Server is listening on port 3000`);
});
