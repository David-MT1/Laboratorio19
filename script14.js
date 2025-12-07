const contenedor = document.getElementById("contenedor");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let listaPokemon = [];
let indiceActual = 0;

const cargarPokemon = async () => {
  for (let i = 1; i <= 12; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();

    listaPokemon.push({
      id: data.id,
      name: data.name,
      img: data.sprites.front_default
    });
  }
  mostrarPokemon();
};

const mostrarPokemon = () => {
  contenedor.innerHTML = "";

  const grupo = listaPokemon.slice(indiceActual, indiceActual + 3);

  grupo.forEach(pokemon => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pokemon.img}">
      <h3>${pokemon.name}</h3>
      <p>ID: ${pokemon.id}</p>
    `;
    contenedor.appendChild(card);
  });
};

btnSiguiente.addEventListener("click", () => {
  if (indiceActual < listaPokemon.length - 3) {
    indiceActual += 3;
    mostrarPokemon();
  }
});

btnAnterior.addEventListener("click", () => {
  if (indiceActual > 0) {
    indiceActual -= 3;
    mostrarPokemon();
  }
});

cargarPokemon();
