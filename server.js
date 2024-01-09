const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const heroiRoutes_2 = require('./routes/herois_2')

const app = express();
app.use(bodyParser.json());

app.use("/heroi_2", heroiRoutes_2);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});