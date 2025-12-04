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
/*00000000EJERCICIO50000000*/







