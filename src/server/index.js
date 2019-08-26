const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().homedir }));

app.get('/api/getBandas', (req, res) => {
  const arreglo = ['la banda', 'foo'];

  const objeto = { cantante: 'Rocky', otrasbandas: arreglo };

  const cantante = objeto.cantante;

  res.send(objeto);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
