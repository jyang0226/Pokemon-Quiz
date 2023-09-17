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

let score = 0;
document.getElementById("submitGuess").addEventListener("click", function() {
    const userGuess = document.getElementById("userGuess").value.toLowerCase();
    const result = document.getElementById("result");
    
    if (userGuess === currentPokemonName) {
        result.textContent = "Pokemon Caught!";
        score++;
        updateScoreboard();
        fetchRandomPokemon();
    } else {
        result.textContent = "Pokemon Fled...";
        fetchRandomPokemon();
    }
});

fetchRandomPokemon();

function updateScoreboard() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        toggleDarkMode();
    }
});

function toggleDarkMode() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}

document.addEventListener('scroll', function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    console.log("hello world");

    setTimeout(() => {
        message.style.display = 'none'
    }, 3000);
});