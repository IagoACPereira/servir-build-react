import express from 'express';

const porta = 3000;
const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  )
  .use('/', express.static('./src/public/dist'))
  .listen(porta, () => console.log(`Servidor rodando ok em http://localhost:${porta}/`))
