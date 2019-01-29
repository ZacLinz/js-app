var repository =[
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
]
for (var i = 0; i < repository.length; i++){
  if (repository[i].height > 5){
  document.write((repository[i].name) + ' is height ' + (repository[i].height) + ' (THAT IS HUGE) and has type(s) ' + (repository[i].type) + '. ' )
}else{
  document.write((repository[i].name) + ' is height ' + (repository[i].height) + ' and has type(s) ' + (repository[i].type) + '. ' )
}
}
