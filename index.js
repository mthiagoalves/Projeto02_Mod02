const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const pokedex = [
  {
    id: 001,
    nome: "Bulbasaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Tipo: Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 004,
    nome: "Charmander ",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Tipo: Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 004,
    nome: "Squirtle  ",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Tipo: Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(5045, () =>
  console.log(`Servidor rodando em http://localhost:5045`)
);
