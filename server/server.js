require('./config/config');
require('./db/mongoose');

const express = require('express');
const { Theme } = require('./models');
const { initMiddleware } = require('./middleware/init');

const app = express();
initMiddleware(app);

app.get('/', async (request, response, next) => {
  response.status(200).send();
});

app.get('/getTheme', async (request, response, next) => {
  const [theme] = await Theme.find();
  if (theme === undefined) {
    const { query } = request;
    await Theme.create({
      value: query.currentValue,
      lastModified: Date.now()
    });
    response.status(200).send(query.currentValue);
  } else {
    const [{ value }] = await Theme.find();
    response.status(200).send(value);
  }
});

app.post('/toggleTheme', async (request, response, next) => {
  const { value } = await Theme.findOneAndUpdate(
    {},
    {
      $set: {
        value: request.body.value,
        lastModified: Date.now()
      }
    },
    { new: true }
  );
  response.status(200).send(value);
});

app.listen(3000, function() {
  console.log(`Server is listening on port 3000`);
});
