const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let pokemon = undefined;
const pokedex = [
  {
    id: 001,
    nome: "Bulbasaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 002,
    nome: "Charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 003,
    nome: "Squirtle",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 004,
    nome: "Eevee",
    descricao:
      "It has the ability to alter the composition of its body to suit its surrounding environment.",
    tipo: "Normal",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  }
];

app.get("/", (req, res) => {
  
  res.render("index", {pokedex, pokemon});
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");

});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
    pokemon = pokedex.find(item => item.id === id);

    res.redirect("/");
});

app.post("/update/:id", (req,res) => {
  const id = +req.params.id - 1;

  const newPokemon = req.body;

  newPokemon.id = id + 1;

  pokedex[id] = newPokemon;

  pokemon = undefined;

  res.redirect("/");

});

app.listen(5045, () =>
  console.log(`Servidor rodando em http://localhost:5045`)
);

