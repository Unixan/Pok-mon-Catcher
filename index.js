// Model

let currentPokemon = '';
const capturedPokemons = [];
const Pokemons = ['Bulbasaur', 'Charmander', 'Diglett', 'Ekans', 'Gastly', 'Igglybuff', 'Meowth', 'Pichu', 'Pidgey', 'Squirtle'];
const runAways = ['like a pro!', 'with your tail between your legs', 'crying', 'screaming', 'as fast as you can']
let ranAway = false;
let bagOpen = false;
let pokemonList = '';

// View

function view() {
    html = '';
    html = /*HTML*/`
        <h1>Pokémon Catcher</h1>
        `
    if (ranAway == false) {
        if (Pokemons.length != 0) {
            html += /*HTML*/`        
                    <div class="gameWindow">
                    <div> You stumble across:</div> 
                    <img src="IMG/${currentPokemon}.png" height="300px">
                    <div style="color: red">${currentPokemon}!</div><br>
                    <div>What do you do?</div>
                    <div class="buttons">
                    <button class="button" onclick="capture(selectedPokemon)">Capture it!</button>
                    <button class="button" onclick="checkBag()">Inventory</button>
                    <button class="button" onclick="runAway()">Run for it!</button>
                    </div>
                </div>
                `
            if (bagOpen === true){
                makePokemonList();
                html += /*HTML*/ `<div class="runAway">You have captured:</div><div>${pokemonList}</div>` 
            }

        }
        if (Pokemons.length == 0) {
            html += /*HTML*/`
                <div class="runAway">Game over!</div><div class="runAway">You caught them all!</div>
             `
            makePokemonList();
            html += `<div>` + pokemonList + `</div>`

        }
    }
    if (ranAway == true) {
        html += /*HTML*/`
                <div class="runAway">You run away ${runForIt}</div>
        <button class="button" onclick="keepWalking()">Keep walking!</button>
                `}
    app.innerHTML = html;
}

// Controller
function randomPokemon() {
    selectedPokemon = Math.floor(Math.random() * Pokemons.length)
    currentPokemon = Pokemons[selectedPokemon]
    view()


}
function runAway() {
    runForIt = runAways[Math.floor(Math.random() * 5)]
    ranAway = true
    view()
}
function keepWalking() {
    ranAway = false;
    randomPokemon();
    view()
}
function capture(pokemonToGo) {
    capturedPokemons.push(Pokemons[pokemonToGo])
    Pokemons.splice(selectedPokemon, 1)
    randomPokemon();
    view()

}
function makePokemonList() {
    pokemonList = '';
    for (i = 0; i < capturedPokemons.length; i++) {
        pokemonList += /*HTML*/`
                    <img src="IMG/${capturedPokemons[i]}.png" height="100 px">
                                `
    }
    return pokemonList
}
function checkBag() {
    bagOpen = !bagOpen;
    view();
}
