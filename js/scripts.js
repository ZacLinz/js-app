
var pokemonRepository = (function () {
  var pokemon =[
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
    return pokemon
  }

  return {
    add: add,
    getAll: getAll
  };

})();

pokemonRepository.getAll().forEach(function(pokemon){
    if ( pokemon.height > 5){
    document.write(pokemon.name + ' is height ' + pokemon.height + ' (THAT IS HUGE) and has type(s) ' + pokemon.type + '. ' )
  }else{
    document.write(pokemon.name + ' is height ' + pokemon.height + ' and has type(s) ' + pokemon.type + '. ' )
  }
})
