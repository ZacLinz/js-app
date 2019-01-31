
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

  function addListItem(pokemon){
    var $entry = document.createElement('div');
      $entry.classList.add('entry');
      $entry.classList.add('button')
  }

})();

pokemonRepository.getAll().forEach(function(pokemonArray){
    if ( pokemonArray.height > 5){
    //document.write(pokemonArray.name + ' is height ' + pokemonArray.height + ' (THAT IS HUGE) and has type(s) ' + pokemonArray.type + '. ' )
  }else{
    //document.write(pokemonArray.name + ' is height ' + pokemonArray.height + ' and has type(s) ' + pokemonArray.type + '. ' )
  }
})
