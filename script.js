/*00000000EJERCICIO30000000*/

const boton = document.getElementById("boton");
const inputPokemon = document.getElementById("inputPokemon");

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    ejer3(inputPokemon.value.trim());
});
const ejer3 = async (idPokemon) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

    if (!res.ok) {
      throw new Error(`Pokémon "${idPokemon}" no encontrado (Código: ${res.status})`);
    }

    const data = await res.json();

    console.log("nombre es " + data.name);

  } catch (error) {
    console.error("Error:", error.message);
  }

};


/*00000000EJERCICIO40000000*/

const ejer4 = () =>{

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(data => alert("Altura:"+ data.height+"dm"+"\nPeso: " + data.weight+""))

    .catch(err => console.error("Error:", err));
}


/*00000000EJERCICIO50000000*/
const ejer5 = async () =>{
  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

    if(!res.ok){
      throw new Error ('error al buscar peso y talla de pikachu');
    }

    const data = await res.json();
    alert("Altura:"+ data.height+"decimeto"+"\nPeso: " + data.weight+"")
  } catch {
    console.error("Error:", error.message);
  }
    
}
/*00000000EJERCICIO60000000*/

const ejer6 = async() =>{
  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
    if(!res.ok){
      throw new Error ('error de carga');
    }
    const data = await res.json();
    console.log(data.sprites.front_default);
  } catch (error) {
    console.error("error:", error.message)
  }
}

/*00000000EJERCICIO70000000*/

const ejer7 = async ()=> {
const lista = document.createElement("ul");
document.body.appendChild(lista);

  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    if(!res.ok){
      throw new Error ('error de carga');
    }

    const data = await res.json();

    data.results.forEach(pokemon => {
      const elementLi= document.createElement("li")
      elementLi.textContent = pokemon.name;
      lista.appendChild(elementLi)
    });

  } catch (error){
    console.error("error:", error.message)
  }

}




/*00000000EJERCICIO8000000*/
const ejer8 = async () => {
  let aleatorio = Math.floor(Math.random() * 898) + 1;
  try{ 
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`)
    if(!res.ok){
      console.log("error de carga");
    }
    const pokemon = await res.json();
    alert("el pokemon que te toco es "+pokemon.name)

  } catch(error){
    console.error("error", error.message);
  }
}

/*00000000EJERCICIO9000000*/
const form = document.getElementById("formPokemon");
const inputPokemon2 = document.getElementById("inputPokemon2");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultado.innerHTML = "";

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputPokemon2.value.toLowerCase()}`
    );

    if (!res.ok) {
      throw new Error("Pokémon no encontrado");
    }

    const pokemon = await res.json();

    resultado.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}">
      <p><b>ID:</b> ${pokemon.id}</p>
      <p><b>Peso:</b> ${pokemon.weight}</p>
      <p><b>Altura:</b> ${pokemon.height}</p>
      <p><b>Habilidades:</b>
        ${pokemon.abilities.map(h => h.ability.name).join(", ")}
      </p>
    `;

  } catch (error) {
    resultado.textContent = "Error: Pokémon no encontrado";
    console.error(error.message);
  }
});


/*00000000EJERCICIO10  000000*/
const contenedor = document.getElementById("contenedor");

const ejer10 = async () => {
  try {
    for (let i = 1; i <= 10; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (!res.ok) {
        throw new Error("Error al cargar Pokémon " + i);
      }

      const data = await res.json();

      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "150px";
      card.style.display = "inline-block";
      card.style.textAlign = "center";

      card.innerHTML = `
        <img src="${data.sprites.front_default}">
        <h3>${data.name}</h3>
        <p>ID: ${data.id}</p>
      `;

      contenedor.appendChild(card);
    }

  } catch (error) {
    console.error("Error:", error.message);
  }
};
/*00000000EJERCICIO11  000000*/

const formulario = document.getElementById("formularioBusqueda");
const entrada = document.getElementById("entradaPokemon");
const contenedor1 = document.getElementById("contenedorResultado");
const btnStats = document.getElementById("btnStats");

let statsGuardadas = null;

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  contenedor1.innerHTML = "";
  statsGuardadas = null;

  const busqueda = entrada.value.trim().toLowerCase();
  if (!busqueda) return;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
    if (!res.ok) throw new Error();

    const data = await res.json();

    const tipos = [];
    for (let i = 0; i < data.types.length; i++) {
      tipos.push(data.types[i].type.name);
    }

    statsGuardadas = data.stats;

    contenedor1.innerHTML = `
      <div class="card" id="cardPokemon">
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <p><b>ID:</b> ${data.id}</p>
        <p><b>Tipos:</b> ${tipos.join(", ")}</p>
      </div>
    `;
  } catch {
    contenedor1.innerHTML = "Pokémon no encontrado";
  }
});
/*00000000EJERCICIO12  000000*/

btnStats.addEventListener("click", () => {
  if (!statsGuardadas) return;

  const card = document.getElementById("cardPokemon");
  if (!card) return;

  const ul = document.createElement("ul");

  for (let i = 0; i < statsGuardadas.length; i++) {
    const li = document.createElement("li");
    li.textContent =
      `${statsGuardadas[i].stat.name}: ${statsGuardadas[i].base_stat}`;
    ul.appendChild(li);
  }

  card.appendChild(ul); 
});


/*00000000EJERCICIO13  000000*/
document.addEventListener("DOMContentLoaded", () => {

  const form13 = document.getElementById("formBusqueda13");
  const input13 = document.getElementById("inputPokemon13");
  const resultado13 = document.getElementById("resultado13");

  form13.addEventListener("submit", async (e) => {
    e.preventDefault();

    resultado13.innerHTML = "";

    const pokemon = input13.value.trim().toLowerCase();
    if (!pokemon) return;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      if (!res.ok) {
        throw new Error("No encontrado");
      }

      const data = await res.json();

      const tabla = document.createElement("table");

      tabla.innerHTML = `
        <tr>
        <h3>${data.name}</>
          <th>Stat</th>
          <th>Valor</th>
        </tr>
      `;

      for (let i = 0; i < data.stats.length; i++) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${data.stats[i].stat.name}</td>
          <td>${data.stats[i].base_stat}</td>
        `;
        tabla.appendChild(fila);
      }

      resultado13.appendChild(tabla);

    } catch (error) {
      resultado13.innerHTML = "<p>Pokémon no encontrado</p>";
    }
  });

});

