let currentPokemonName = "";

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        
        const pokemonImage = document.getElementById("pokemonImage");
        currentPokemonName = data.name;
        
        pokemonImage.src = data.sprites.front_default;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
    }
}

document.getElementById("submitGuess").addEventListener("click", function() {
    const userGuess = document.getElementById("userGuess").value.toLowerCase();
    const result = document.getElementById("result");
    
    if (userGuess === currentPokemonName) {
        result.textContent = "Pokemon Caught!";
        fetchRandomPokemon();
    } else {
        result.textContent = "Pokemon Fled...";
        fetchRandomPokemon();
    }
});

fetchRandomPokemon();