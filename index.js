let currentPokemonName = "";

async function fetchRandomPokemon() {
    try {
        // There are 898 Pokémon as of my last update. Adjust this if more Pokémon are added in the future.
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();

        const pokemonImage = document.getElementById("pokemonImage");
        pokemonImage.src = data.sprites.front_default;
        currentPokemonName = data.name;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
    }
}

function checkAnswer() {
    const userGuess = document.getElementById("userGuess").value.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (userGuess === currentPokemonName) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "green";
        // Fetch a new Pokémon for the next round
        fetchRandomPokemon();
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
}

// Load a random Pokémon as soon as the page is loaded
fetchRandomPokemon();