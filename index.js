const express = require('express');
const app = express();
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render("index");
})


app.listen(5045, () => console.log(`Servidor rodando em http://localhost:5045`))