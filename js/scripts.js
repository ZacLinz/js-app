
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
    var $entry = document.createElement('li');
      $entry.classList.add('entry');
      $entry.classList.add('button');
      $entry.appendChild('ul');
      return {
        addListItem: addListItem,
      };
      return pokemon.name;
      };

})();

pokemonRepository.getAll().forEach(function(){
  addListItem();
})
