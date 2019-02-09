
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
      return fetch(url).then(function (response) {
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
  showDetails(pokemon);
  });
};


function showDetails(pokemon){
  pokemonRepository.loadDetails(pokemon).then(function (){
      showModal(pokemon);
  });
};

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon){
  addListItem(pokemon);
});
});

var $modalContainer = document.querySelector('.modal-container');
var modalControl = (function(){

    function hideModal(){
      $modalContainer.classList.remove('is-visible');
    }

    document.querySelector('button').addEventListener('click', () => {
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });

      $modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === $modalContainer) {
          hideModal();
        }
      });
    });

    function showModal(name, height, image) {
      modalControl.$modalContainer.innerHTML = '';

      var modal = document.createElement('div');
      modal.classList.add('modal');

      var closeButton = document.createElement('closeButton');
      closeButton.classList.add('modal-close');
      closeButton.innerText = 'Close';
      closeButton.addEventListener('click', hideModal);

      var nameElement = document.createElement('h1');
      nameElement.innerText = name;

      var heightElement = document.createElement('p');
      heightElement.innerText = height;

      var imageElement = document.createElement('imageUrl')
      imageElement.setAttribute('src', image);

      modal.appendChild(closeButton);
      modal.appendChild(nameElement);
      modal.appendChild(heightElement);
      modal.appendChild(imageElement);
      $modalContainer.appendChild(modal);

      $modalContainer.classList.add('is-visible');
    }
