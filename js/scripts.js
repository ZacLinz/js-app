
var pokemonRepository = (function () {
  var pokemonArray =[
  {
    name: 'Bulbasaur',
    height: 2,
    type: ['Grass', ' Poison']
  },
  {
    name: 'Ivysaur',
    height: 3,
    type: ['Grass', ' Poison']
  },
  {
    name: 'Venusaur',
    height: 6,
    type: ['Grass', ' Poison']
  },
  {
    name: 'Charmander',
    height: 2,
    type: ['Fire']
  },
  {
    name: 'Charmeleon',
    height: 3,
    type: ['Fire']
  },
  {
    name: 'Charizard',
    height: 5,
    type: ['Fire', ' Flying']
  }
  ];

  function add(pokemon){
    pokemon.push(pokemon);
  }

  function getAll(){
    return pokemonArray
  }

  return {
    add: add,
    getAll: getAll
  };
})();

function addListItem(pokemon){
  var $entry = document.createElement('li');
  var pokeName = document.createElement('button');
  pokeName.innerHTML = pokemon.name;
  $entry.appendChild(pokeName);
  document.querySelector('.pokedex-list').append($entry);
  pokeName.addEventListener('click', function (event){
    showDetails(pokemon.name);
  });
};

function showDetails(pokemon){
  console.log(pokemon)
}



pokemonRepository.getAll().forEach(function(pokemon){
  addListItem(pokemon);
});
