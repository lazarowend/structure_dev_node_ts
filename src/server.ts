import express from 'express';

const app = express();

app.get('/', (_, response) => {
  return response.json({ message: 'ola' });
});

app.listen(8000);
