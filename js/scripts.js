var repository = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard'];
var height = [2, 3, 6, 2, 3, 5];
var type = [['Grass', ' Poison'],
  ['Grass', ' Poison'],
  ['Grass', ' Poison'],
  ['Fire'],
  ['Fire'],
  ['Fire', ' Flying'],
]
for (var i = 0; i < repository.length; i++){
  if (height[i] > 5){
  document.write((repository[i]) + ' is height ' + (height[i]) + ' (that is pretty big) and has type(s) ' + (type[i]) + '. ' )
}else{
  document.write((repository[i]) + ' is height ' + (height[i]) + ' and has type(s) ' + (type[i]) + '. ')
}
}
