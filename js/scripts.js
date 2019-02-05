
var pokemonRepository = (function () {
  var pokemonArray =[];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon){
    pokemonArray.push(pokemon);
  }

  function getAll(){
    return pokemonArray
  }

  function loadList(item) {
       return fetch(apiUrl).then(function (response) {
           return response.json();
       }).then(function (json) {
           json.results.forEach(function (item) {
               var pokemon = {
                   name: item.name,
                   detailsUrl: item.url
               };
               add(pokemon);
           });
       }).catch(function (e) {
           console.error(e);
       })
   }

  function loadDetails(item) {
      var url = item.detailsUrl;
      return fetch(apiUrl).then(function (response) {
          return response.json();
      }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = Object.keys(details.types);
      }).catch(function (e) {
          console.error(e);
      });
  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
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

function showDetails(item){
  pokemonRepository.loadDetails(item).then(function (){
  console.log(item);  });
}

pokemonRepository.loadList().then(function() {

pokemonRepository.getAll().forEach(function(pokemon){
  addListItem(pokemon);
});});
