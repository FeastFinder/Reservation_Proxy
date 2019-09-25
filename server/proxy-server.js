require('newrelic');

const express = require('express');
const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use('/:id/', express.static('public'));

app.get('/api/reservations/:id' , (req, res) => {
  const { id } = req.params;
  axios.get(`http://localhost:3002/api/reservations/${id}`)
  .then( (data) => res.send(data.data) )
  .catch(function (error) {
    console.log(error);
  })
})


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
